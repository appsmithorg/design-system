import React, { useEffect, useState } from "react";
import clsx from "classnames";

import { ListItemProps, ListProps } from "./List.types";
import {
  ContentTextWrapper,
  DescriptionWrapper,
  EndIconWrapper,
  InlineDescriptionWrapper,
  StartIconWrapper,
  StyledList,
  StyledListItem,
  TooltipTextWrapper,
  Wrapper,
} from "./List.styles";
import { Icon } from "Icon";
import { Text, TextProps } from "Text";
import { Button } from "Button";
import { Tooltip } from "Tooltip";
import {
  ListItemBDescClassName,
  ListItemIDescClassName,
  ListItemTitleClassName,
} from "./List.constants";

function List({ items }: ListProps) {
  return (
    <StyledList>
      {items.map((item) => {
        return <ListItem key={item.title} {...item} />;
      })}
    </StyledList>
  );
}

function TextWithTooltip(props: TextProps & { isMultiline?: boolean }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [disableTooltip, setDisableTooltip] = useState(true);

  const isEllipsisActive = () => {
    let active = false;
    if (ref.current) {
      const text_node = ref.current.children[0];
      if (props.isMultiline) {
        active = text_node && text_node.clientHeight < text_node.scrollHeight;
      } else {
        active = text_node && text_node.clientWidth < text_node.scrollWidth;
      }
    }

    setDisableTooltip(!active);
  };

  useEffect(() => {
    if (ref.current) {
      isEllipsisActive();
      ref.current.addEventListener("mouseover", isEllipsisActive);

      return () => {
        ref.current?.removeEventListener("mouseover", isEllipsisActive);
      };
    }
  }, []);

  return (
    <Tooltip content={props.children} isDisabled={disableTooltip}>
      <TooltipTextWrapper ref={ref}>
        <Text {...props} className={clsx("text-overflow", props.className)}>
          {props.children}
        </Text>
      </TooltipTextWrapper>
    </Tooltip>
  );
}

function ListItem(props: ListItemProps) {
  const {
    description,
    descriptionType = "block",
    endIcon,
    hasError,
    size = "md",
    startIcon,
    title,
  } = props;
  const isBlockDescription = descriptionType === "block";

  const listItemhandleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ":
        props.onClick();
        break;
    }
  };

  const endIconhandleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();

    if (props.onEndIconClick) {
      switch (e.key) {
        case "Enter":
        case " ":
          props.onEndIconClick();
          break;
      }
    }
  };

  return (
    <Wrapper>
      <StyledListItem
        data-disabled={props.isDisabled || false}
        data-selected={props.selected}
        endIcon={props.endIcon}
        isBlockDescription={isBlockDescription}
        onClick={props.onClick}
        onKeyDown={listItemhandleKeyDown}
        size={size}
        tabIndex={props.isDisabled ? -1 : 0}
      >
        <ContentTextWrapper className="content-text-wrapper">
          <StartIconWrapper>
            {startIcon && (
              <Icon
                color={hasError ? "var(--ads-v2-color-fg-error)" : undefined}
                name={startIcon}
                size={size}
              />
            )}
          </StartIconWrapper>
          <InlineDescriptionWrapper>
            <DescriptionWrapper>
              <TextWithTooltip
                className={ListItemTitleClassName}
                color={hasError ? "var(--ads-v2-color-fg-error)" : undefined}
              >
                {title}
              </TextWithTooltip>
              {isBlockDescription && description && (
                <TextWithTooltip
                  className={ListItemBDescClassName}
                  color="var(--ads-v2-color-fg-muted)"
                  isMultiline
                  kind="body-s"
                >
                  {description}
                </TextWithTooltip>
              )}
            </DescriptionWrapper>
            {!isBlockDescription && description && (
              <TextWithTooltip
                className={ListItemIDescClassName}
                color="var(--ads-v2-color-fg-muted)"
                kind="body-s"
              >
                {description}
              </TextWithTooltip>
            )}
          </InlineDescriptionWrapper>
        </ContentTextWrapper>
      </StyledListItem>
      {endIcon && (
        <EndIconWrapper>
          <Button
            isDisabled={props.isDisabled}
            isIconButton
            kind="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              if (props.onEndIconClick) {
                props.onEndIconClick();
              }
            }}
            onKeyDown={endIconhandleKeyDown}
            size={"sm"}
            startIcon={endIcon}
          />
        </EndIconWrapper>
      )}
    </Wrapper>
  );
}

List.displayName = "List";

export { List, ListItem };
