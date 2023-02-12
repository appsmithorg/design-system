import React, { useState } from "react";
import clsx from "classnames";

import { SegmentedControlProps } from "./SegmentedControl.types";
import {
  StyledSegmentedControl,
  ControlOption,
  ControlContainer,
} from "./SegmentedControl.styles";
import { Icon } from "Icon";
import { Text } from "Text";
import {
  SegmentedControlClassName,
  SegmentedControlOptionClassName,
  SegmentedControlOptionContainerClassName,
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
          isDisabled: disableControl,
          label,
          startIcon,
          value,
        } = option;

        return (
          <ControlContainer
            className={SegmentedControlOptionContainerClassName}
            data-disabled={disableControl}
            data-selected={selectedValue === value}
            key={value}
            onClick={() => !disableControl && handleOnChange(value)}
          >
            <ControlOption
              className={SegmentedControlOptionClassName}
              data-selected={selectedValue === value}
            >
              {/* if icon name is passed */}
              {startIcon && typeof startIcon === "string" && (
                <Icon name={startIcon} size="lg" />
              )}
              {/* if icon component is passed */}
              {startIcon && typeof startIcon !== "string" && (
                <Icon size="lg">startIcon</Icon>
              )}

              {/* Label */}
              <Text kind="body-m">{label}</Text>

              {/* if icon name is passed */}
              {endIcon && typeof endIcon === "string" && (
                <Icon name={endIcon} size="lg" />
              )}
              {/* if icon component is passed */}
              {endIcon && typeof endIcon !== "string" && (
                <Icon size="lg">endIcon</Icon>
              )}
            </ControlOption>
          </ControlContainer>
        );
      })}
    </StyledSegmentedControl>
  );
}

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

export { SegmentedControl };
