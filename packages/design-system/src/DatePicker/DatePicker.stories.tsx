import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DatePicker, DateRangePicker } from "./DatePicker";

export default {
  title: "Design System/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DatePicker>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker {...args} />;
};

export const DatePickerStory = Template.bind({});
DatePickerStory.storyName = "DatePicker";
DatePickerStory.args = {
  //add arguments here
  excludeDates: [new Date()],
};

export function DateRangePickerStory() {
  return (
    <DateRangePicker
      excludeDates={[new Date()]}
      onChange={(date) => console.log(date)}
    />
  );
}
DateRangePickerStory.storyName = "DateRangePicker";
