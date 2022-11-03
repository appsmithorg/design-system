import React, { ReactNode } from "react";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";
import { Variant } from "Constants/variants";
import styled from "styled-components";
import Icon, { IconSize } from "Icon";
import Text, { TextType } from "Text";

export type CalloutProps = CommonComponentProps & {
  variant?: Variant;
  fill?: boolean;
  closeButton?: boolean;
  text?: string;
  label?: ReactNode;
  addMarginTop?: boolean;
  onClose?: () => void;
};

const CalloutContainer = styled.div<{
  variant: Variant;
  fillUp?: boolean;
  addMarginTop?: boolean;
}>`
  --ads-callout-info-text-color: #d44100;
  --ads-callout-info-background-color: #f8f3f0;
  --ads-callout-success-text-color: var(--ads-old-color-jade);
  --ads-callout-success-background-color: #e4f4ed;
  --ads-callout-danger-text-color: var(--ads-old-color-pomegranate);
  --ads-callout-danger-background-color: #f9e9e9;
  --ads-callout-warning-text-color: var(--ads-old-color-sun);
  --ads-callout-warning-background-color: #faf3e3;

  position: relative;
  padding: var(--ads-spaces-4) var(--ads-spaces-12);
  background: ${(props) =>
    `var(--ads-callout-${props.variant}-background-color)`};
  border-radius: var(--ads-border-radius);

  ${(props) =>
    props.addMarginTop &&
    `
    margin-top: var(--ads-spaces-6);
  `}

  ${(props) =>
    props.fillUp
      ? `
  display: flex;
  align-items: center;
  justify-content: center;
  `
      : null};

  .${Classes.ICON} {
    cursor: default;
    margin-right: var(--ads-spaces-4);
    svg path {
      fill: ${(props) =>
        props.variant === Variant.danger
          ? "var(--ads-color-black-0)"
          : `var(--ads-callout-${props.variant}-text-color)`};
    }
  }
  a {
    color: ${(props) => `var(--ads-callout-${props.variant}-text-color)`};
    &:hover {
      text-decoration-color: ${(props) =>
        `var(--ads-callout-${props.variant}-text-color)`};
    }
    span {
      color: ${(props) => `var(--ads-callout-${props.variant}-text-color)`};
    }
  }
`;
const Label = styled.div<{ variant: Variant }>`
  position: absolute;
  right: var(--ads-spaces-12);
  .${Classes.ICON} {
    margin-right: 0px !important;
    cursor: pointer;
    svg path {
      fill: ${(props) => `var(--ads-callout-${props.variant}-text-color)`};
    }
  }
`;

Callout.defaultProps = {
  fill: false,
  variant: Variant.info,
};

function Callout(props: CalloutProps) {
  const { onClose } = props;
  return (
    <CalloutContainer
      addMarginTop={props.addMarginTop}
      className={[props.className, "ads--callout"].join(" ")}
      fillUp={props.fill}
      variant={props.variant || Variant.info}
    >
      {props.text && props.variant !== Variant.info ? (
        <Icon name={props.variant} size={IconSize.XL} />
      ) : null}
      <Text type={TextType.P2}>{props.text}</Text>
      {props.label ? props.label : null}
      {props.closeButton ? (
        <Label onClick={onClose} variant={props.variant || Variant.info}>
          <Icon name="close-modal" size={IconSize.XXL} />
        </Label>
      ) : null}
    </CalloutContainer>
  );
}

export default Callout;
