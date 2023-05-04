import React from "react";
import RCSelect, { Option as RCOption } from "rc-select";
import clsx from "classnames";
import "./rc-styles.css";
import "./styles.css";

import { Icon } from "Icon";
import { SelectClassName, SelectDropdownClassName } from "./Select.constants";
import { Tag } from "Tag";
import { SelectProps } from "./Select.types";
import { Spinner } from "Spinner";

/*
  TODO:
  - Lots of warnings are generated from this component. Fix them.
  - Handle the case when the option selected is longer than the width of the select trigger.
 */
function Select(props: SelectProps) {
  const {
    children,
    className,
    dropdownClassName,
    isDisabled = false,
    isLoading = false,
    isMultiSelect,
    isValid,
    maxTagCount = 2,
    maxTagPlaceholder,
    maxTagTextLength = 5,
    placeholder = "Please select an option",
    showSearch = false,
    size = "md",
    ...rest
  } = props;

  const getMaxTagPlaceholder = (omittedValues: any[]) => {
    return `+${omittedValues.length}`;
  };

  function InpuIcon() {
    if (isLoading) {
      return <Spinner size="md" />;
    }
    return <Icon name="arrow-down-s-line" size="md" />;
  }

  return (
    <RCSelect
      {...rest}
      className={clsx(SelectClassName, className)}
      clearIcon={<Icon name="close-circle-line" size="md" />}
      data-is-valid={isValid}
      data-size={size}
      disabled={isDisabled || isLoading}
      dropdownClassName={clsx(
        SelectDropdownClassName,
        SelectDropdownClassName + `--${size}`,
        dropdownClassName,
      )}
      inputIcon={<InpuIcon />}
      maxTagCount={maxTagCount}
      maxTagPlaceholder={maxTagPlaceholder || getMaxTagPlaceholder}
      maxTagTextLength={maxTagTextLength}
      menuItemSelectedIcon=""
      mode={isMultiSelect ? "multiple" : undefined}
      placeholder={placeholder}
      showArrow
      showSearch={showSearch}
      tagRender={(props) => {
        const { closable, label, onClose } = props;
        return (
          <Tag isClosable={closable} onClose={onClose}>
            {label}
          </Tag>
        );
      }}
    >
      {children}
    </RCSelect>
  );
}

Select.displayName = "Select";

Select.defaultProps = {};

const Option = RCOption;

export { Select, Option };
