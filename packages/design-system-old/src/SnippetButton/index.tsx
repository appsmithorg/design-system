import React from "react";
import styled from "styled-components";
import { createMessage, SNIPPET_TOOLTIP } from "Constants/messages";
import { Button, Tooltip } from "@appsmithorg/design-system";

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
  // border-radius: var(--ads-v2-border-radius);
  // border: 1px solid var(--ads-v2-color-border);
  // color: var(--ads-v2-color-fg);
  // background-color: var(--ads-v2-color-bg);
  // height: 36px;
  // svg {
  //  width: 16px;
  //  height: 16px;
  //  //color: var(--ads-v2-color-fg);
  //}
  //:hover {
  //  background-color: var(--ads-v2-color-bg-muted);
  //}
`;

export default function SearchSnippets(props: Props) {
  const className = props.className || "";
  const handleClick = props.onClick;

  return props.showIconOnly ? (
    <Button
      kind="tertiary"
      isIconButton
      startIcon="snippet"
      onClick={handleClick}
      size="sm"
    />
  ) : (
    <Tooltip content={createMessage(SNIPPET_TOOLTIP)} placement="bottomRight">
      <StyledButton
        kind="secondary"
        className={`t--search-snippets ${className}`}
        startIcon="snippet"
        onClick={handleClick}
        size="md"
      >
        Snippets
      </StyledButton>
    </Tooltip>
  );
}
