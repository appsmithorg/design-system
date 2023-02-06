import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    as: {
      control: {
        type: "radio",
        options: ["button", "a"],
      },
      description: "The HTML element to render the button as.",
      table: {
        type: { summary: "button | a" },
        defaultValue: { summary: "button" },
      },
    },
    className: {
      control: {
        type: "text",
      },
      description: "The class name to apply to the button component.",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: {
        type: "object",
      },
      description: "The content to display within the button.",
      table: {
        type: { summary: "React.ReactNode | string" },
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
      description: "Whether the button should display a loading spinner.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    kind: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary", "error"],
      },
      description: "The visual style to apply to the button.",
      table: {
        type: { summary: "primary | secondary | tertiary | error" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
      description: "The size of the button.",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "sm" },
      },
    },
    startIcon: {
      control: {
        type: "text",
      },
      description:
        "The icon to display before the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon.",
      table: {
        type: { summary: "React.ReactNode | string" },
      },
    },
    endIcon: {
      control: {
        type: "text",
      },
      description:
        "The icon to display after the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon.",
      table: {
        type: { summary: "React.ReactNode | string" },
      },
    },
    UNSAFE_height: {
      control: {
        type: "text",
      },
      description: "The height of the button. Accepts all css units.",
      table: {
        type: { summary: "string" },
      },
    },
    UNSAFE_width: {
      control: {
        type: "text",
      },
      description: "The width of the button. Accepts all css units.",
      table: {
        type: { summary: "string" },
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
      description: "Whether the button is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    href: {
      control: {
        type: "text",
      },
      description:
        "The href attribute to apply to the button if it renders as an anchor.",
      table: {
        type: { summary: "string" },
      },
    },
    onPress: {
      control: {
        type: "function",
      },
      description: "The callback to invoke when the button is pressed.",
      table: {
        type: { summary: "function" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with different variants and sizes. It can be used as a button or an anchor. Other than the defined props button component accepts all the props of the button and a elements. ",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>BUTTON</Button>;
};

export const ButtonStory = Template.bind({});
ButtonStory.storyName = "Button";
ButtonStory.args = {
  onPress: () => alert("Button clicked!"),
  startIcon: "arrow-left-line",
  endIcon: "arrow-right-line",
  size: "md",
  kind: "primary",
};
