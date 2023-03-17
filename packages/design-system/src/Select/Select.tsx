import React from "react";
import { Option } from "rc-select";
import clsx from "classnames";
import "./rc-styles.css";
import "./styles.css";

import { StyledSelect } from "./Select.styles";
import { Icon } from "Icon";
import { SelectClassName, SelectDropdownClassName } from "./Select.constants";

function Select() {
  return (
    <StyledSelect
      // allowClear
      className={SelectClassName}
      clearIcon={<Icon name="close-circle-line" size="md" />}
      dropdownClassName={clsx(
        SelectDropdownClassName,
        SelectDropdownClassName + "--md",
      )}
      inputIcon={<Icon name="arrow-down-s-line" size="md" />}
      open
      placeholder="select something"
      showSearch
      size="md"
    >
      <Option value="option 1">Option 1</Option>
      <Option value="option 2">Option 2</Option>
    </StyledSelect>
  );
}

Select.displayName = "Select";

Select.defaultProps = {};

export { Select };
