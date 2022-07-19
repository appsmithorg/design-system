import React, { ReactNode } from "react";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";
import { Variant } from "Constants/variants";
import styled from "styled-components";
import Icon, { IconSize } from "../Icon";
import Text, { TextType } from "../Text";

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
  fill?: boolean;
  addMarginTop?: boolean;
}>`
  position: relative;
  padding: var(--ads-spaces-4) var(--ads-spaces-12);
  background: ${(props) =>
    `var(--ads-callout-${props.variant}-background-color)`};

  ${(props) =>
    props.addMarginTop &&
    `
    margin-top: var(--ads-spaces-6);
  `}

  ${(props) =>
    props.fill
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
  return (
    <CalloutContainer
      addMarginTop={props.addMarginTop}
      className={props.className}
      fill={props.fill}
      variant={props.variant || Variant.info}
    >
      {props.text && props.variant !== Variant.info ? (
        <Icon name={props.variant} size={IconSize.XL} />
      ) : null}
      <Text type={TextType.P2}>{props.text}</Text>
      {props.label ? props.label : null}
      {props.closeButton ? (
        <Label onClick={props.onClose} variant={props.variant || Variant.info}>
          <Icon name="close-modal" size={IconSize.XXL} />
        </Label>
      ) : null}
    </CalloutContainer>
  );
}

export default Callout;
