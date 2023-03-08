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

function SegmentedControl(props: SegmentedControlProps) {
  const { className, defaultValue, onChange, options, ...rest } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOnChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <StyledSegmentedControl
      className={clsx(SegmentedControlClassName, className)}
      {...rest}
    >
      {options.map((option) => {
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
                <Icon size="md">startIcon</Icon>
              )}

              {/* Label */}
              <Text kind="body-m">{label}</Text>

              {/* if icon name is passed */}
              {endIcon && typeof endIcon === "string" && (
                <Icon name={endIcon} size="md" />
              )}
              {/* if icon component is passed */}
              {endIcon && typeof endIcon !== "string" && (
                <Icon size="md">endIcon</Icon>
              )}
            </StyledSegment>
          </StyledControlContainer>
        );
      })}
    </StyledSegmentedControl>
  );
}

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

export { SegmentedControl };
