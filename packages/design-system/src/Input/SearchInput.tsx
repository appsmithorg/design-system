import React, { useState } from "react";

import { SearchInputProps } from "./Input.types";
import { StyledSearchInput } from "./SearchInput.styles";

function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState<string>(props.value || "");

  const handleChange = (val: string) => {
    setValue(val);
    props.onChange?.(val);
  };

  return (
    <StyledSearchInput
      as="input"
      endIcon="close-circle-line"
      endIconProps={{ onClick: () => handleChange("") }}
      onChange={handleChange}
      placeholder="Search"
      size="md"
      startIcon="search-line"
      value={value}
    />
  );
}

SearchInput.displayName = "SearchInput";

export { SearchInput };
