import React, { useState } from "react";
import clsx from "classnames";

import { SegmentedControlProps } from "./SegmentedControl.types";
import {
  StyledSegmentedControl,
  StyledSegment,
  StyledControlContainer,
} from "./SegmentedControl.styles";
import { Icon } from "Icon";
import { Text } from "Text";
import {
  SegmentedControlClassName,
  SegmentedControlSegmentClassName,
  SegmentedControlSegmentsContainerClassName,
} from "./SegmentedControl.constants";

const SegmentedControl = React.forwardRef(
  (props: SegmentedControlProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      defaultValue,
      isFullWidth = true,
      onChange,
      options,
      ...rest
    } = props;
    const segmentRefs: Array<HTMLSpanElement | null> = [];
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (!segmentRefs.length) return;

      switch (e.key) {
        case "ArrowRight":
        case "Right":
          const rightIndex = index === options.length - 1 ? 0 : index + 1;
          segmentRefs[rightIndex]?.focus();
          setFocusedIndex(rightIndex);
          break;

        case "ArrowLeft":
        case "Left":
          const leftIndex = index === 0 ? options.length - 1 : index - 1;
          segmentRefs[leftIndex]?.focus();
          setFocusedIndex(leftIndex);
          break;

        case "Enter":
        case " ":
          handleOnChange(options[index].value);
          break;
      }
    };

    const handleOnChange = (value: string) => {
      setSelectedValue(value);
      onChange && onChange(value);
    };

    return (
      <StyledSegmentedControl
        className={clsx(SegmentedControlClassName, className)}
        isFullWidth={isFullWidth}
        onBlur={() => setFocusedIndex(0)}
        ref={ref}
        {...rest}
      >
        {options.map((option, index) => {
          const {
            endIcon,
            isDisabled: isSegmentDisabled,
            label,
            startIcon,
            value,
          } = option;

          return (
            <StyledControlContainer
              className={SegmentedControlSegmentsContainerClassName}
              data-disabled={isSegmentDisabled}
              data-selected={selectedValue === value}
              key={value}
              onClick={() => !isSegmentDisabled && handleOnChange(value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(input) => segmentRefs.push(input)}
              tabIndex={index === focusedIndex ? 0 : -1}
            >
              <StyledSegment
                className={SegmentedControlSegmentClassName}
                data-selected={selectedValue === value}
              >
                {/* if icon name is passed */}
                {startIcon && typeof startIcon === "string" && (
                  <Icon name={startIcon} size="md" />
                )}
                {/* if icon component is passed */}
                {startIcon && typeof startIcon !== "string" && (
                  <Icon size="md">{startIcon}</Icon>
                )}

                {/* Label */}
                {label && <Text kind="body-m">{label}</Text>}

                {/* if icon name is passed */}
                {endIcon && typeof endIcon === "string" && (
                  <Icon name={endIcon} size="md" />
                )}
                {/* if icon component is passed */}
                {endIcon && typeof endIcon !== "string" && (
                  <Icon size="md">{endIcon}</Icon>
                )}
              </StyledSegment>
            </StyledControlContainer>
          );
        })}
      </StyledSegmentedControl>
    );
  },
);

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

export { SegmentedControl };
