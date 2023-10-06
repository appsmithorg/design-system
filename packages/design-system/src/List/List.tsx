import React, { useEffect, useState } from "react";
import { ListItemProps, ListProps } from "./List.types";
import {
  ContentTextWrapper,
  DescriptionWrapper,
  InlineDescriptionWrapper,
  StartIconWrapper,
  StyledList,
  StyledListItem,
  TooltipTextWrapper,
} from "./List.styles";
import { Icon } from "Icon";
import { Text, TextProps } from "Text";
import { Button } from "Button";
import { Tooltip } from "Tooltip";
import {
  ListItemBDescClassName,
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

function TextWithTooltip(props: TextProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [disableTooltip, setDisableTooltip] = useState(true);

  const isEllipsisActive = () => {
    let active = false;
    if (ref.current) {
      const text_node = ref.current.children[0];
      active = text_node && text_node.clientWidth < text_node.scrollWidth;
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
      <TooltipTextWrapper className={props.className} ref={ref}>
        <Text {...props} className="text-overflow">
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
    <StyledListItem
      data-disabled={props.isDisabled || false}
      data-selected={props.selected}
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
                kind="body-s"
              >
                {description}
              </TextWithTooltip>
            )}
          </DescriptionWrapper>
          {!isBlockDescription && description && (
            <TextWithTooltip
              className={ListItemBDescClassName}
              color="var(--ads-v2-color-fg-muted)"
              kind="body-s"
            >
              {description}
            </TextWithTooltip>
          )}
        </InlineDescriptionWrapper>
      </ContentTextWrapper>
      {endIcon && (
        <div>
          <Button
            isDisabled={props.isDisabled}
            isIconButton
            kind="tertiary"
            onClick={(e) => {
              if (props.onEndIconClick) {
                e.stopPropagation();
                props.onEndIconClick();
              }
            }}
            onKeyDown={endIconhandleKeyDown}
            size={"sm"}
            startIcon={endIcon}
          />
        </div>
      )}
    </StyledListItem>
  );
}

List.displayName = "List";

export { List };
