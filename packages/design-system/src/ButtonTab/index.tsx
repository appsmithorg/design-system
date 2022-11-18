import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ControlIcons } from "ControlIcons";
import _ from "lodash";
import { DSEventTypes } from "Types/common";
import { useDSEvent } from "hooks";

const ItemWrapper = styled.div<{ selected: boolean }>`
  min-width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 10px;
  color: var(--ads-color-black-450);
  border: 1px solid transparent;

        
 
  // &.focused {
  //   background: var(--ads-button-tab-focus-background-color);
  // }
  &.selected, &.focused, &:hover{
    border: 1px solid var(--ads-color-black-250);
    background-color: var(--ads-color-black-0);
    color: var(--ads-color-black-550);
  }

  cursor: pointer;
  // &:not(:last-child) {
  //   margin-right: 4px;
  // }
  & > div {
    cursor: pointer;
  }
  // &:hover {
  //   background: var(--ads-button-tab-hover-background-color);
  // }
  &&& svg {
    path {
      //fill: var(--ads-button-tab-svg-path-fill-color);
      fill: var(--ads-color-black-450);
    }
  }
`;

const FlexWrapper = styled.div<{ fullWidth: boolean }>`
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  background: var(--ads-color-black-75);
  border: 1px solid var(--ads-color-black-75);
  padding: 1px;
  font-size: 13px;
  flex: ${({ fullWidth }) => (fullWidth ? 1 : "none")};
  ${ItemWrapper} {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "none")};
  }
`;

export interface ButtonTabOption {
  icon?: string | JSX.Element;
  label?: string;
  value: string;
  width?: number;
}

interface ButtonTabComponentProps {
  fullWidth?: boolean;
  options: ButtonTabOption[];
  values: Array<string>;
  selectButton: (value: string, isUpdatedViaKeyboard: boolean) => void;
}

// eslint-disable-next-line react/display-name
const ButtonTabComponent = React.forwardRef(
  (props: ButtonTabComponentProps, ref: any) => {
    const { options, selectButton, values } = props;
    const valueSet = new Set(values);
    let firstValueIndex = 0;
    for (const [i, x] of options.entries()) {
      if (valueSet.has(x.value)) {
        firstValueIndex = i;
        break;
      }
    }

    const { emitDSEvent, eventEmitterRef } = useDSEvent<HTMLDivElement>(
      false,
      ref,
    );

    const emitKeyPressEvent = useCallback(
      (key: string) => {
        emitDSEvent({
          component: "ButtonTab",
          event: DSEventTypes.KEYPRESS,
          meta: {
            key,
          },
        });
      },
      [emitDSEvent],
    );

    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "Right":
          emitKeyPressEvent(e.key);
          setFocusedIndex((prev) =>
            prev === options.length - 1 ? 0 : prev + 1,
          );
          break;
        case "ArrowLeft":
        case "Left":
          emitKeyPressEvent(e.key);
          setFocusedIndex((prev) =>
            prev === 0 ? options.length - 1 : prev - 1,
          );
          break;
        case "Enter":
        case " ":
          emitKeyPressEvent(e.key);
          selectButton(options[focusedIndex].value, true);
          e.preventDefault();
          break;
        case "Tab":
          emitKeyPressEvent(`${e.shiftKey ? "Shift+" : ""}${e.key}`);
          break;
      }
    };

    return (
      <FlexWrapper
        fullWidth={props.fullWidth ?? false}
        onBlur={() => setFocusedIndex(-1)}
        onFocus={() => setFocusedIndex(firstValueIndex)}
        onKeyDown={handleKeyDown}
        ref={eventEmitterRef}
        role="tablist"
        tabIndex={0}
      >
        {options.map(
          (
            { icon, label, value, width = 24 }: ButtonTabOption,
            index: number,
          ) => {
            let ControlIcon;
            if (_.isString(icon)) {
              const Icon = ControlIcons[icon];
              ControlIcon = <Icon height={14} width={width} />;
            } else {
              ControlIcon = icon;
            }
            const isSelected = valueSet.has(value);
            return (
              <ItemWrapper
                aria-selected={isSelected}
                className={`t--button-tab-${value} 
                ${
                  index === focusedIndex ? "focused" : ""
                } 
                ${isSelected ? "selected" : ""}`}
                key={index}
                onClick={() => {
                  selectButton(value, false);
                  setFocusedIndex(index);
                }}
                role="tab"
                selected={isSelected}
              >
                {ControlIcon} {label}
              </ItemWrapper>
            );
          },
        )}
      </FlexWrapper>
    );
  },
);

export default ButtonTabComponent;
