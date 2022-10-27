import React from "react";
import styled from "styled-components";
import { TabProp } from "Tabs";
import { getTypographyByKey } from "Common/index";

type WrapperProps = {
  selected: boolean;
  vertical: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  border-radius: var(--ads-border-radius);
  ${getTypographyByKey("p1")}

  ${(props) =>
    props.selected
      ? `
      background-color: var(--ads-tab-item-focus-background-color);
      color: var(--ads-tab-item-focus-text-color);
      font-weight: 500;
      `
      : `
      color: var(--ads-tab-item-text-color);
    `};

  &:hover,
  &:focus {
    color: var(--ads-tab-item-focus-text-color);
  }

  padding: calc(var(--ads-spaces-5) - 1px) var(--ads-spaces-11);
  width: 100%;
`;

function TabItemBackgroundFill(props: {
  tab: TabProp;
  selected: boolean;
  vertical: boolean;
}) {
  const { selected, tab, vertical } = props;
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <Wrapper selected={selected} vertical={vertical}>
      {tab.title}
    </Wrapper>
  );
}

export default TabItemBackgroundFill;
