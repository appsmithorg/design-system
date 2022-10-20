import React, { forwardRef, ReactNode, Ref } from "react";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";
import styled from "styled-components";
import Icon, { IconName, IconSize } from "Icon";
import TooltipComponent from "Tooltip";
import Text, { TextType, FontWeight } from "Text";
import { PopoverPosition } from "@blueprintjs/core/lib/esnext/components/popover/popoverSharedProps";

export type MenuItemProps = CommonComponentProps & {
  icon?: IconName;
  text: string;
  label?: ReactNode;
  href?: string;
  type?: "warning";
  ellipsize?: number;
  selected?: boolean;
  containerClassName?: string;
  onSelect?: (e: React.MouseEvent, ...rest: any) => void;
  tooltipPos?: PopoverPosition; // tooltip position of menu item
};

const ItemRow = styled.a<{ disabled?: boolean; selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 0px var(--ads-spaces-6);
  background-color: ${(props) =>
    props.selected ? "var(--ads-color-black-75)" : "transparent"};
  .${Classes.TEXT} {
    color: ${(props) =>
      props.selected
        ? "var( --ads-old-color-gray-10)"
        : "var(--ads-color-black-750)"};
  }
  .${Classes.ICON} {
    svg {
      path {
        fill: ${(props) =>
          props.selected
            ? "var(--ads-color-black-750)"
            : "var(--ads-color-black-470)"};
      }
    }
  }
  height: 38px;

  ${(props) =>
    !props.disabled
      ? `
    &:hover {
      text-decoration: none;
      cursor: pointer;
      background-color: ${
        props.type === "warning"
          ? "var(--ads-old-color-linen)"
          : "var(--ads-color-black-75)"
      };
      .${Classes.TEXT} {
        color: ${
          props.type === "warning"
            ? "var(--ads-old-color-buddha-gold)"
            : "var(--ads-old-color-gray-10)"
        };
      }
      .${Classes.ICON} {
        path {
          fill: ${
            props.type === "warning"
              ? "var(--ads-old-color-buddha-gold)"
              : "var(--ads-color-black-750)"
          };
        }
      }
    }`
      : `
    &:hover {
      text-decoration: none;
      cursor: default;
    }
    `}
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;

  .${Classes.ICON} {
    margin-right: var(--ads-spaces-5);
  }
`;
const MenuItem = forwardRef(
  (props: MenuItemProps, ref: Ref<HTMLAnchorElement>) => {
    return props.ellipsize && props.text.length > props.ellipsize ? (
      <TooltipComponent
        content={props.text}
        position={props.tooltipPos || "bottom"}
      >
        <MenuItemContent ref={ref} {...props} />
      </TooltipComponent>
    ) : (
      <MenuItemContent ref={ref} {...props} />
    );
  },
);
const MenuItemContent = forwardRef(
  (props: MenuItemProps, ref: Ref<HTMLAnchorElement>) => {
    const { onSelect } = props;
    return (
      <ItemRow
        className={props.className}
        data-cy={props.cypressSelector}
        disabled={props.disabled}
        href={props.href}
        onClick={onSelect}
        ref={ref}
        selected={props.selected}
        type={props.type}
      >
        <IconContainer className={props.containerClassName}>
          {props.icon ? (
            <Icon
              isLoading={props.isLoading}
              loaderWithIconWrapper
              name={props.icon}
              size={IconSize.LARGE}
            />
          ) : null}
          {props.text && (
            <Text type={TextType.H5} weight={FontWeight.NORMAL}>
              {props.ellipsize
                ? ellipsize(props.ellipsize, props.text)
                : props.text}
            </Text>
          )}
        </IconContainer>
        {props.label ? props.label : null}
      </ItemRow>
    );
  },
);
MenuItemContent.displayName = "MenuItemContent";
MenuItem.displayName = "MenuItem";

function ellipsize(length: number, text: string) {
  return text.length > length ? text.slice(0, length).concat(" ...") : text;
}

export default MenuItem;
