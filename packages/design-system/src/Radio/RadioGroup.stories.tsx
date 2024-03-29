import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio, RadioGroup } from "./Radio";
import { Text } from "../Text";
import styled from "styled-components";

export default {
  title: "Design System/Radio/Radio Group",
  component: RadioGroup,
  parameters: { controls: { sort: "requiredFirst" } },
} as ComponentMeta<typeof RadioGroup>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup {...args}>
      <Radio value={"Value1"}>Radio1</Radio>
      <Radio value={"Value2"}>Radio2</Radio>
      <Radio value={"Value3"}>Radio3</Radio>
      <Radio value={"Value4"}>Radio4</Radio>
    </RadioGroup>
  );
};

export const RadioGroupStory = Template.bind({});
RadioGroupStory.storyName = "Radio Group";
RadioGroupStory.args = {
  defaultValue: "Value1",
  isDisabled: false,
};

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

// this sort of panel is used in the pagination tab of our api pages
export function RadioTabStory() {
  const possibleValues = ["v1", "v2", "v3"];
  const possibleTabPanels = [
    null,
    {
      name: "Janice",
      fruit: "Apple",
    },
    {
      name: "Pamela",
      fruit: "Pomelo",
    },
  ];
  const [selectedValue, setSelectedValue] = useState(possibleValues[0]);
  return (
    <RadioGroup
      defaultValue={selectedValue}
      onChange={setSelectedValue}
      value={selectedValue}
    >
      {possibleValues.map((value, index) => {
        return (
          <RadioContainer key={value}>
            <Radio value={value}>Value 1</Radio>
            {selectedValue == value && possibleTabPanels[index] && (
              <RadioPanel>
                <Text>{possibleTabPanels[index].name}</Text>
                <Text>{possibleTabPanels[index].fruit}</Text>
              </RadioPanel>
            )}
          </RadioContainer>
        );
      })}
    </RadioGroup>
  );
}
