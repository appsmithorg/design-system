import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DateRangePicker as DateRangePickerComponent } from "./index";

export default {
  title: "Design System/DateRangePicker",
  component: DateRangePickerComponent,
} as ComponentMeta<typeof DateRangePickerComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DateRangePickerComponent> = (args) => {
  return <DateRangePickerComponent />;
};

export const DateRangePicker = Template.bind({});
