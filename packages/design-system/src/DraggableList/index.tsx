import React, { useEffect, useMemo, useRef } from "react";
import { clamp, head, last, some } from "lodash-es";
import { useDrag } from "react-use-gesture";
import { useSprings, animated, to } from "react-spring";
import styled from "styled-components";
import debounce from "lodash/debounce";
import get from "lodash/get";

interface SpringStyleProps {
  down: boolean;
  originalIndex: number;
  curIndex: number;
  y: number;
  itemHeight: number;
}

// Styles when new items are added/removed/updated coz of parent component update.
const updateSpringStyles = (
  order: Array<number>,
  itemHeight: number,
  immediate = true,
) => (index: number) => {
  return {
    y: order.indexOf(index) * itemHeight,
    scale: 1,
    zIndex: "0",
    shadow: 1,
    immediate,
  };
};

// Styles when items are dragged/idle
const dragIdleSpringStyles = (
  order: Array<number>,
  { curIndex, down, itemHeight, originalIndex, y }: SpringStyleProps,
) => (index: number) => {
  // picked/dragged item style
  if (down && index === originalIndex) {
    return {
      y: curIndex * itemHeight + y,
      scale: 1,
      zIndex: "1",
      shadow: 15,
      immediate: true,
    };
  } else {
    return updateSpringStyles(order, itemHeight, false)(index);
  }
};

const DraggableListWrapper = styled.div`
  user-select: none;
  position: relative;
  & > div {
    position: absolute;
    user-select: none;
    overflow: visible;
    pointer-events: auto;
  }
`;

const FrozenListWrapper = styled.div<{
  height?: number;
}>`
  position: relative;
  height: ${(props) => props.height}px;
`;

const FrozenItemWrapper = styled.div<{
  index: number;
  itemHeight: number;
}>`
  position: absolute;
  width: 100%;
  top: ${(props) => props.index * props.itemHeight}px;
`;

export function DraggableList(props: any) {
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

  const hasFrozenItems = useMemo(() => {
    return some(items, (value: any) => value.hasOwnProperty("sticky"));
  }, [items]);

  const topFrozenItems = items.filter((item: any) => item?.sticky === "left");
  const bottomFrozenItems = items.filter(
    (item: any) => item?.sticky === "right",
  );
  const unfrozenItems = hasFrozenItems
    ? items.filter(
        (item: any) => item.sticky === undefined || item.sticky === "",
      )
    : items;

  const topFrozenContainerHeight = topFrozenItems.length * itemHeight;
  const bottomFrozenContainerHeight = bottomFrozenItems.length * itemHeight;
  const listContainerHeight =
    fixedHeight && fixedHeight < items.length * itemHeight
      ? fixedHeight
      : items.length * itemHeight;

  const shouldReRender = get(props, "shouldReRender", true);
  // order of items in the list
  const order = useRef<any>(
    unfrozenItems.map((_: any, index: number) => index),
  );
  const displacement = useRef<number>(0);
  const dragging = useRef<boolean>(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  const onDrop = (
    itemOrder: number[],
    originalIndex: number,
    newIndex: number,
  ) => {
    if (hasFrozenItems) {
      /**
       * On drop we have the itemOrder of the unfrozen items.
       * We need to map this order with respect to the indices present in the actual column order.
       * For example,
       * itemOrder = [2, 0, 1];
       * orderMapping = [unfrozenItems[2].index, unfrozenItems[0].index, unfrozenItems[1].index] // The actual column order.
       */
      const orderMapping = itemOrder.map(
        (rowIdx: any) => unfrozenItems[rowIdx].index,
      );

      const updatedOrder = [
        ...topFrozenItems.map((item: any) => item.index),
        ...orderMapping,
        ...bottomFrozenItems.map((item: any) => item.index),
      ];

      const columnOrderOrigIndex = orderMapping[originalIndex];
      const columnOrderNewIndex = orderMapping[newIndex];
      onUpdate(
        updatedOrder,
        updatedOrder.indexOf(columnOrderOrigIndex) !== 0
          ? updatedOrder.indexOf(columnOrderOrigIndex)
          : originalIndex,
        updatedOrder.indexOf(columnOrderNewIndex) !== 0
          ? updatedOrder.indexOf(columnOrderNewIndex)
          : newIndex,
      );
    } else {
      onUpdate(itemOrder, originalIndex, newIndex);
    }
    order.current = itemOrder;

    if (shouldReRender) {
      order.current = unfrozenItems.map((_: any, index: any) => index);
      setSprings(updateSpringStyles(order.current, itemHeight));
    }
  };

  useEffect(() => {
    // when items are updated(added/removed/updated) reassign order and animate springs.
    if (
      unfrozenItems.length !== order.current.length ||
      shouldReRender === false
    ) {
      order.current = unfrozenItems.map((_: any, index: any) => index);
      setSprings(updateSpringStyles(order.current, itemHeight));
    }
  }, [unfrozenItems]);

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
    unfrozenItems.length,
    updateSpringStyles(order.current, itemHeight),
  );

  const bind: any = useDrag<any>((props: any) => {
    const originalIndex = props.args[0];
    const curIndex = order.current.indexOf(originalIndex);
    const pointerFromTop = props.xy[1];
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

        const curRow = clamp(
          Math.round(
            (curIndex * itemHeight + displacement.current) / itemHeight,
          ),
          0,
          unfrozenItems.length - 1,
        );

        const newOrder = [...order.current];
        newOrder.splice(curRow, 0, newOrder.splice(curIndex, 1)[0]);
        setSprings(
          dragIdleSpringStyles(newOrder, {
            down: props.down,
            originalIndex,
            curIndex,
            y: Math.abs(displacement.current) > 10 ? displacement.current : 0,
            itemHeight,
          }),
        );
        if (curRow !== curIndex) {
          // Feed springs new style data, they'll animate the view without causing a single render
          if (!props.down) {
            order.current = newOrder;
            setSprings(updateSpringStyles(order.current, itemHeight));
            debounce(onDrop, 400)(newOrder, curIndex, curRow);
          }
        }
      }
    }
  });
  return (
    <div
      className={className}
      style={{
        height: listContainerHeight,
        overflowY: "auto",
        zIndex: 1,
      }}
    >
      {topFrozenItems.length > 0 && (
        <FrozenListWrapper height={topFrozenContainerHeight}>
          {topFrozenItems.map((item: any, wrapperIndex: number) => (
            <FrozenItemWrapper index={wrapperIndex} itemHeight={itemHeight}>
              <ItemRenderer index={item.index} item={item} />
            </FrozenItemWrapper>
          ))}
        </FrozenListWrapper>
      )}
      <DraggableListWrapper
        className="content"
        ref={listRef}
        onMouseDown={() => {
          // set events to null to stop other parent draggable elements execution(ex: Property pane)
          document.onmouseup = null;
          document.onmousemove = null;
        }}
        style={{
          height: `${listContainerHeight -
            (topFrozenContainerHeight + bottomFrozenContainerHeight)}px`,
        }}
      >
        {springs.map(({ scale, y, zIndex }, i) => (
          <animated.div
            {...bind(i)}
            data-rbd-draggable-id={unfrozenItems[i].id}
            //having a key of items[i].id will break in few places,
            //eg, primary columns in propertyPane of Table widget
            key={unfrozenItems[i][keyAccessor] || i}
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
              <ItemRenderer
                index={unfrozenItems[i]?.index || i}
                item={unfrozenItems[i]}
              />
            </div>
          </animated.div>
        ))}
      </DraggableListWrapper>
      {bottomFrozenItems.length > 0 && (
        <FrozenListWrapper height={bottomFrozenContainerHeight}>
          {bottomFrozenItems.map((item: any, wrapperIndex: number) => (
            <FrozenItemWrapper index={wrapperIndex} itemHeight={itemHeight}>
              <ItemRenderer index={item.index} item={item} />
            </FrozenItemWrapper>
          ))}
        </FrozenListWrapper>
      )}
    </div>
  );
}
DraggableList.displayName = "DraggableList";

export default DraggableList;
