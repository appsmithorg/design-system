import React, { useState } from "react";
import { ToggleButton } from "ToggleButton";

import { Group } from "./ToggleButtonGroup.styles";
import { ToggleGroupOption, ToggleGroupProps } from "./ToggleButtonGroup.types";

// eslint-disable-next-line react/display-name
export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  (props) => {
    const toggleRefs: Array<HTMLButtonElement | null> = [];

    const { onSelect, options, values } = props;

    const valueSet = new Set(values);
    let firstValueIndex = 0;

    for (const [i, x] of options.entries()) {
      if (valueSet.has(x.value)) {
        firstValueIndex = i;
        break;
      }
    }

    const [focusedIndex, setFocusedIndex] = useState<number>(firstValueIndex);

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (!toggleRefs.length) return;

      switch (e.key) {
        case "ArrowRight":
        case "Right":
          const rightIndex = index === options.length - 1 ? 0 : index + 1;
          toggleRefs[rightIndex]?.focus();
          setFocusedIndex(rightIndex);
          break;

        case "ArrowLeft":
        case "Left":
          const leftIndex = index === 0 ? options.length - 1 : index - 1;
          toggleRefs[leftIndex]?.focus();
          setFocusedIndex(leftIndex);
          break;

        case "Enter":
        case " ":
          // emit keyborad event
          e.preventDefault();
          break;

        case "Tab":
          break;
      }
    };

    return (
      <Group onBlur={() => setFocusedIndex(firstValueIndex)} role="tablist">
        {options.map(({ icon, value }: ToggleGroupOption, index: number) => {
          const isSelected = valueSet.has(value);
          return (
            <div
              aria-selected={isSelected}
              className={`t--button-group-${value} ${
                index === focusedIndex ? "focused" : ""
              }`}
              key={index}
              role="tab"
              tabIndex={-1}
            >
              <ToggleButton
                autoFocus={index === focusedIndex}
                icon={icon}
                isDisabled={false}
                isSelected={isSelected}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onPress={() => {
                  onSelect(value, false);
                  setFocusedIndex(index);
                }}
                ref={(input) => toggleRefs.push(input)}
                size="md"
                tabIndex={index === focusedIndex ? 0 : -1}
              />
            </div>
          );
        })}
      </Group>
    );
  },
);
