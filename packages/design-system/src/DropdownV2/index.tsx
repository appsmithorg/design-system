import React, { useState } from "react";
import styled from "styled-components";
import {
  Popover,
  Menu,
  MenuItem,
  IMenuProps,
  IMenuItemProps,
  IPopoverProps,
} from "@blueprintjs/core";
import SearchComponent from "../SearchComponent";
import { HighlightText } from "../HighlightText";
import _ from "lodash";

/**
 * ----------------------------------------------------------------------------
 * TYPES
 *-----------------------------------------------------------------------------
 */

type Props = {
  enableSearch: boolean;
  searchPlaceholder?: string;
  children: React.ReactElement[] | React.ReactElement;
};

/**
 * ----------------------------------------------------------------------------
 * STYLED
 *-----------------------------------------------------------------------------
 */

const StyledMenuItem = styled(MenuItem)`
  margin: 0;
  padding: 8px;
`;

const StyledMenu = styled(Menu)`
  margin: 0;
  padding: 0;
`;

/**
 * ----------------------------------------------------------------------------
 * COMPONENTS
 *-----------------------------------------------------------------------------
 */
function Dropdown(props: IPopoverProps & Props) {
  const { children, enableSearch, searchPlaceholder, ...rest } = props;
  const [menuItems, setMenuItems] = useState(
    (Array.isArray(children) &&
      children.find(
        (child: any) => child.type.displayName === "DropdownList",
      )) ||
      undefined,
  );
  const [searchValue, setSearchValue] = useState("");

  const onOptionSearch = (searchStr: string) => {
    setSearchValue(searchStr);
    const search = searchStr.toLocaleUpperCase();
    const filteredOptions: Array<MenuItem> = menuItems?.props.children?.filter(
      (menuItem: MenuItem) => {
        return menuItem.props.text
          ?.toLocaleString()
          .toLocaleUpperCase()
          .includes(search);
      },
    );
    setMenuItems(
      <DropdownList {...menuItems?.props}>
        {filteredOptions.map((option, key) => {
          const propsWithoutText = _.omit(option.props, ["text"]);
          return (
            <DropdownItem
              {...propsWithoutText}
              key={key}
              text={
                <HighlightText
                  highlight={search}
                  text={option.props.text?.toString() || ""}
                />
              }
            />
          );
        })}
      </DropdownList>,
    );
  };
  const trigger = enableSearch ? (
    <SearchComponent
      onSearch={onOptionSearch}
      placeholder={searchPlaceholder || "Type here"}
      value={searchValue}
    />
  ) : (
    Array.isArray(children) &&
    children.find((child: any) => child.type.displayName === "DropdownTrigger")
  );

  return (
    <Popover
      {...rest}
      canEscapeKeyClose
      content={menuItems}
      popoverClassName="dropdown-v2"
      transitionDuration={-1}
    >
      {trigger}
    </Popover>
  );
}

function DropdownList(props: IMenuProps) {
  return <StyledMenu {...props} />;
}

DropdownList.displayName = "DropdownList";

function DropdownTrigger(props: any) {
  return <div {...props} />;
}

DropdownTrigger.displayName = "DropdownTrigger";

function DropdownItem(props: IMenuItemProps) {
  return <StyledMenuItem {...props} />;
}

DropdownItem.displayName = "DropdownItem";

export { Props, Dropdown, DropdownList, DropdownItem, DropdownTrigger };
