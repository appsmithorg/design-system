import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Radio as RadioComponent,
  RadioGroup as RadioGroupElement,
} from "./Radio";

export default {
  title: "Design System V2/Radio/Radio",
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioComponent> = (args) => {
  return (
    <RadioGroupElement>
      <RadioComponent {...args} value={"Value1"}>
        Radio1
      </RadioComponent>
      <RadioComponent {...args} value={"Value2"}>
        Radio2
      </RadioComponent>
      <RadioComponent {...args} value={"Value3"}>
        Radio3
      </RadioComponent>
      <RadioComponent {...args} value={"Value4"}>
        Radio4
      </RadioComponent>
    </RadioGroupElement>
  );
};

export const Radio = Template.bind({});

Radio.args = {};
