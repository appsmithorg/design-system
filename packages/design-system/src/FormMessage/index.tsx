import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getTypographyByKey } from "Constants/typography";

const formMessage: { [char: string]: { [char: string]: string } } = {
  text: {
    primary: "var(--ads-form-message-primary-text-color)",
    danger: "var(--ads-form-message-danger-text-color)",
    success: "var(--ads-form-message-success-text-color)",
    warning: "var(--ads-form-message-warning-text-color)",
    lightSuccess: "var(--ads-form-message-light-success-text-color)",
  },
  background: {
    primary: "var(--ads-form-message-primary-background-color)",
    danger: "var(--ads-form-message-danger-background-color)",
    success: "var(--ads-form-message-success-background-color)",
    warning: "var(--ads-form-message-warning-background-color)",
    lightSuccess: "var(--ads-form-message-light-success-background-color)",
  },
};

type Intent = "primary" | "danger" | "success" | "warning" | "lightSuccess";

export type MessageAction = {
  url?: string;
  onClick?: () => void;
  text: string;
  intent: Intent;
};

const StyledMessage = styled.div<{ intent: Intent }>`
  --ads-form-message-danger-text-color: var(--ads-old-color-danger-red);
  --ads-form-message-primary-text-color: var(--ads-color-white);
  --ads-form-message-success-text-color: var(--ads-old-color-jade);
  --ads-form-message-warning-text-color: var(--ads-old-color-warning);
  --ads-form-message-light-success-text-color: var(--ads-old-color-fun-green-2);

  --ads-form-message-danger-background-color: var(
    --ads-old-color-danger-red-opacity-80
  );
  --ads-form-message-primary-background-color: var(--ads-old-color-jade);
  --ads-form-message-success-background-color: #172320;
  --ads-form-message-warning-background-color: var(
    --ads-old-color-warning-opacity-80
  );
  --ads-form-message-light-success-background-color: #effff4;

  & {
    ${getTypographyByKey("p1")}
    width: 100%;
    padding: var(--ads-spaces-4);
    color: ${(props) => formMessage.text[props.intent]};
    border-radius: var(--ads-border-radius);
    background-color: ${(props) => formMessage.background[props.intent]};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAction = styled.div<{ intent: Intent }>`
  margin-top: var(--ads-spaces-5);
  ${getTypographyByKey("h5")}
  font-weight: 600;
  & a {
    text-decoration: none;
    color: ${(props) => formMessage.text[props.intent]};
  }
`;

export function ActionButton(props: MessageAction) {
  if (props.url) {
    const isExternal = props.url.indexOf("//") !== -1;
    return (
      <StyledAction intent={props.intent}>
        {isExternal ? (
          <a href={props.url} rel="noreferrer" target="_blank">
            {props.text}
          </a>
        ) : (
          <Link to={props.url}>{props.text}</Link>
        )}
      </StyledAction>
    );
  } else if (props.onClick) {
    return (
      <StyledAction intent={props.intent} onClick={props.onClick}>
        {props.text}
      </StyledAction>
    );
  }
  return null;
}

export type FormMessageProps = {
  intent: Intent;
  message: string;
  actions?: MessageAction[];
};

export function FormMessage(props: FormMessageProps) {
  const actions =
    props.actions &&
    props.actions.map((action) => (
      <ActionButton key={action.text} {...action} intent={props.intent} />
    ));
  return (
    <StyledMessage className="form-message-container" intent={props.intent}>
      {props.message}
      {actions && <ActionsContainer>{actions}</ActionsContainer>}
    </StyledMessage>
  );
}

export default FormMessage;
