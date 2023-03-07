import React, { useState } from "react";

import { SearchInputProps } from "./SearchInput.types";
import { StyledSearchInput } from "./SearchInput.styles";
import { SearchInputClassName } from "./SearchInput.constants";

function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState<string>(props.value || "");

  const handleChange = (val: string) => {
    setValue(val);
    props.onChange?.(val);
  };

  return (
    <StyledSearchInput
      className={SearchInputClassName}
      endIcon="close-circle-line"
      endIconProps={{ onClick: () => handleChange("") }}
      onChange={handleChange}
      placeholder="Search"
      renderAs="input"
      size="md"
      startIcon="search-line"
      value={value}
    />
  );
}

SearchInput.displayName = "SearchInput";

export { SearchInput };
