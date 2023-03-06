import React from "react";
import SelectComponent, { Option } from "rc-select";

import { SelectProps } from "./Select.types";
import { StyledSelect } from "./Select.styles";
import { Icon } from "Icon";

function Select() {
  return (
    <SelectComponent>
      <Option value="1">
        <Icon name="account-box-line" />
        Option 1
      </Option>
      <Option value="2">Option 2</Option>
    </SelectComponent>
  );
}

Select.displayName = "Select";

Select.defaultProps = {};

export { Select };
