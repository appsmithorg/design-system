import React, { useState } from "react";
import { CollapsibleProps } from "./Collapsible.types";
import {
  StyledCollapsibleBody,
  StyledCollapsibleContainer,
  StyledCollapsibleHeader,
} from "./Collapsible.styles";
import {
  CollapsibleBodyClassName,
  CollapsibleClassName,
  CollapsibleHeaderClassName,
} from "./Collapsible.constants";
import { Icon } from "Icon";
import { Text } from "Text";

function Collapsible(props: CollapsibleProps) {
  const {
    children,
    className,
    headerProps,
    isOpen,
    leftIcon,
    onHeaderClick,
    rightIcon,
    showIcon = true,
    title,
  } = props;
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(
    isOpen ? true : false,
  );

  return (
    <StyledCollapsibleContainer
      className={`${CollapsibleClassName} ${className}`}
    >
      <StyledCollapsibleHeader
        className={CollapsibleHeaderClassName}
        onClick={() => {
          setIsCollapsibleOpen(!isCollapsibleOpen);

          if (onHeaderClick) {
            onHeaderClick(!isCollapsibleOpen);
          }
        }}
      >
        {showIcon && (
          <Icon
            name={
              leftIcon
                ? leftIcon
                : isCollapsibleOpen
                ? "arrow-down-s-line"
                : "arrow-up-s-line"
            }
            size="md"
          />
        )}

        <Text renderAs="p" {...headerProps}>
          {title}
        </Text>

        {rightIcon && <Icon name={rightIcon} size="md" />}
      </StyledCollapsibleHeader>

      <StyledCollapsibleBody
        className={CollapsibleBodyClassName}
        isCollapsibleOpen={isCollapsibleOpen}
      >
        {children}
      </StyledCollapsibleBody>
    </StyledCollapsibleContainer>
  );
}

Collapsible.displayName = "Collapsible";
Collapsible.Header = StyledCollapsibleHeader;
Collapsible.Body = StyledCollapsibleBody;

export { Collapsible };
