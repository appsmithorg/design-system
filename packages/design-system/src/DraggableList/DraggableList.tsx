import React, { useRef, useEffect } from "react";
import { useFocusRing } from "@react-aria/focus";

import { DraggableListProps, SpringStyleProps } from "./DraggableList.types";
import { StyledDraggableList } from "./DraggableList.styles";

import _ from "lodash";
import { useDrag } from "react-use-gesture";
import { useSprings, animated, to } from "@react-spring/web";

/*
  TODO: This component is a wrapper around the actual item being rendered that gives it the ability to be dragged.
    Can we extract this functionality into a hook? Alternatively, we can use the `useDrag` hook directly in the items to be rendered,
    and define those items as separate components in the design system.
 */
function DraggableList(props: DraggableListProps) {
  const {
    className,
    fixedHeight,
    focusedIndex,
    itemHeight,
    ItemRenderer,
    items,
    keyAccessor,
    onUpdate,
    updateDragging,
  } = props;

  // Styles when new items are added/removed/updated coz of parent component update.
  const updateSpringStyles =
    (order: Array<number>, itemHeight: number, immediate = true) =>
    (index: number) => {
      return {
        y: order.indexOf(index) * itemHeight,
        scale: 1,
        zIndex: "0",
        immediate,
      };
    };

  // Styles when items are dragged/idle
  const dragIdleSpringStyles =
    (
      order: Array<number>,
      { curIndex, down, itemHeight, originalIndex, y }: SpringStyleProps,
    ) =>
    (index: number) => {
      // picked/dragged item style
      if (down && index === originalIndex) {
        return {
          y: curIndex * itemHeight + y,
          scale: 1,
          zIndex: "1",
          immediate: true,
        };
      } else {
        return updateSpringStyles(order, itemHeight, false)(index);
      }
    };

  const listContainerHeight =
    fixedHeight && fixedHeight < items.length * itemHeight
      ? fixedHeight
      : items.length * itemHeight;
  const shouldReRender = _.get(props, "shouldReRender", true);
  // order of items in the list
  const order = useRef<any>(items.map((_: any, index: any) => index));
  const displacement = useRef<number>(0);
  const dragging = useRef<boolean>(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  const onDrop = (originalIndex: number, newIndex: number) => {
    onUpdate(order.current, originalIndex, newIndex);

    if (shouldReRender) {
      order.current = items.map((_: any, index: any) => index);
      setSprings(updateSpringStyles(order.current, itemHeight));
    }
  };

  useEffect(() => {
    // when items are updated(added/removed/updated) reassign order and animate springs.
    if (items.length !== order.current.length || shouldReRender === false) {
      order.current = items.map((_: any, index: any) => index);
      setSprings(updateSpringStyles(order.current, itemHeight));
    }
  }, [items]);

  useEffect(() => {
    if (focusedIndex && listRef && listRef.current) {
      const container = listRef.current;

      if (focusedIndex * itemHeight < container.scrollTop) {
        listRef.current.scrollTo({
          top: (focusedIndex - 1) * itemHeight,
          left: 0,
          behavior: "smooth",
        });
      } else if (
        (focusedIndex + 1) * itemHeight >
        listRef.current.scrollTop + listRef.current.clientHeight
      ) {
        listRef.current.scrollTo({
          top: (focusedIndex + 1) * itemHeight - listRef.current.clientHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [focusedIndex]);

  const [springs, setSprings] = useSprings<any>(
    items.length,
    updateSpringStyles(order.current, itemHeight),
  );

  const bind: any = useDrag<any>((props: any) => {
    const originalIndex = props.args[0];
    const isDragDisabled = props.args[1];
    const curIndex = order.current.indexOf(originalIndex);
    const pointerFromTop = props.xy[1];

    if (isDragDisabled) {
      props.cancel();
    } else {
      /**
       *  Checking for props.distance > 0 because:
       *  this container is the first recipient of all mouse events
       *  for self and children. Consequently, it treats a click as a drag request
       *  and updates the position of the list item.
       *  Checking for drag distance prevents this behavior.
       */
      if (listRef && listRef.current && props?.distance > 0) {
        const containerCoordinates = listRef?.current.getBoundingClientRect();
        const container = listRef.current;
        if (containerCoordinates) {
          const containerDistanceFromTop = containerCoordinates.top;
          if (props.dragging) {
            if (pointerFromTop < containerDistanceFromTop + itemHeight / 2) {
              // Scroll inside container till first element in list is completely visible
              if (container.scrollTop > 0) {
                container.scrollTop -= itemHeight / 10;
              }
            } else if (
              pointerFromTop >=
              containerDistanceFromTop + container.clientHeight - itemHeight / 2
            ) {
              // Scroll inside container till container cannnot be scrolled more towards bottom
              if (
                container.scrollTop <=
                springs.length * itemHeight -
                  container.clientHeight -
                  itemHeight / 2
              ) {
                container.scrollTop += itemHeight / 10;
              }
            }
            // finding distance of current pointer from the top of the container to find the final position
            // currIndex *  itemHeight for the initial position
            // subtraction formar with latter for displacement
            displacement.current =
              pointerFromTop -
              containerDistanceFromTop +
              container.scrollTop -
              curIndex * itemHeight -
              itemHeight / 2;

            if (!dragging.current && Math.abs(displacement.current) > 10) {
              dragging.current = props.dragging;
              updateDragging && updateDragging(dragging.current);
            }
          } else {
            if (dragging.current) {
              dragging.current = props.dragging;
              updateDragging && updateDragging(dragging.current);
            }
          }

          const curRow = _.clamp(
            Math.round(
              (curIndex * itemHeight + displacement.current) / itemHeight,
            ),
            0,
            items.length - 1,
          );

          /**
           * We check if the final position's item's dragging is enabled.
           */
          if (
            !items[curRow].hasOwnProperty("isDragDisabled") ||
            (items[curRow].hasOwnProperty("isDragDisabled") &&
              !items[curRow].isDragDisabled)
          ) {
            const newOrder = [...order.current];
            newOrder.splice(curRow, 0, newOrder.splice(curIndex, 1)[0]);
            setSprings(
              dragIdleSpringStyles(newOrder, {
                down: props.down,
                originalIndex,
                curIndex,
                y:
                  Math.abs(displacement.current) > 10
                    ? displacement.current
                    : 0,
                itemHeight,
              }),
            );
            if (curRow !== curIndex) {
              // Feed springs new style data, they'll animate the view without causing a single render
              if (!props.down) {
                order.current = newOrder;
                setSprings(updateSpringStyles(order.current, itemHeight));
                _.debounce(onDrop, 400)(curIndex, curRow);
              }
            }
          } else {
            // retain the order if an item's drag is disabled.
            setSprings(
              dragIdleSpringStyles(order.current, {
                down: props.down,
                originalIndex,
                curIndex,
                y:
                  Math.abs(displacement.current) > 10
                    ? displacement.current
                    : 0,
                itemHeight,
              }),
            );
          }
        }
      }
    }
  });
  return (
    <div
      className={className}
      ref={listRef}
      style={{
        height: listContainerHeight,
        overflowY: "auto",
        zIndex: 1,
      }}
    >
      <StyledDraggableList
        className="content"
        onMouseDown={() => {
          // set events to null to stop other parent draggable elements execution(ex: Property pane)
          document.onmouseup = null;
          document.onmousemove = null;
        }}
        style={{
          height: "100%",
        }}
      >
        {springs.map(({ scale, y, zIndex }, i) => (
          /**
           * Passing 2nd arg to bind is a boolean value that represents if the item's drag is disabled or not.
           */
          <animated.div
            {...bind(
              i,
              items[i].hasOwnProperty("isDragDisabled") &&
                items[i].isDragDisabled,
            )}
            data-rbd-draggable-id={items[i].id}
            //having a key of items[i].id will break in few places,
            //eg, primary columns in propertyPane of Table widget
            key={items[i][keyAccessor] || i}
            style={{
              zIndex,
              width: "100%",
              transform: to(
                [y, scale],
                (y, s) => `translate3d(0,${y}px,0) scale(${s})`,
              ),
            }}
          >
            <div>
              <ItemRenderer index={i} item={items[i]} />
            </div>
          </animated.div>
        ))}
      </StyledDraggableList>
    </div>
  );
}

DraggableList.displayName = "DraggableList";

DraggableList.defaultProps = {};

export { DraggableList };
