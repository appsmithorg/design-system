import React from "react";
import styled from "styled-components";
import { createMessage, SNIPPET_TOOLTIP } from "Constants/messages";
import {
  Button,
  Category,
  Icon as AdsIcon,
  IconSize,
  Size,
  TooltipComponent,
} from "../index";

export enum ENTITY_TYPE {
  ACTION = "ACTION",
  WIDGET = "WIDGET",
  APPSMITH = "APPSMITH",
  JSACTION = "JSACTION",
}

type Props = {
  className?: string;
  entityId?: string;
  entityType: ENTITY_TYPE;
  // TODO: be more precise with the function type
  onClick: any;
  showIconOnly?: boolean;
};

const StyledButton = styled(Button)`
  padding: 0 10px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function SearchSnippets(props: Props) {
  const className = props.className || "";
  const handleClick = props.onClick;

  return props.showIconOnly ? (
    <AdsIcon name="snippet" onClick={handleClick} size={IconSize.XL} />
  ) : (
    <TooltipComponent
      content={createMessage(SNIPPET_TOOLTIP)}
      hoverOpenDelay={50}
      position="bottom-right"
    >
      <StyledButton
        category={Category.tertiary}
        className={`t--search-snippets ${className}`}
        icon="snippet"
        onClick={handleClick}
        size={Size.medium}
        tag="button"
        text="Snippets"
        type="button"
      />
    </TooltipComponent>
  );
}
