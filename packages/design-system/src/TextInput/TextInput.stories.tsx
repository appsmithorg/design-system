import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "Design System/TextInput",
  component: TextInput,
  argTypes: {
    as: {
      control: {
        type: "radio",
        options: ["input", "textarea"],
      },
      description: "Attribute to change the rendering component",
      table: {
        type: {
          summary: "input | textarea",
        },
        defaultValue: {
          summary: "input",
        },
      },
    },
    className: {
      control: {
        type: "text",
      },
      description: "(try not to) pass addition classes here",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    labelPosition: {
      control: {
        type: "radio",
        options: ["top", "left"],
      },
      description: "Position of the label",
      table: {
        type: {
          summary: "top | left",
        },
        defaultValue: {
          summary: "top",
        },
      },
    },
    startIcon: {
      control: {
        type: "text",
      },
      description: "Start icon",
    },
    endIcon: {
      control: {
        type: "text",
      },
      description: "End icon",
    },
    UNSAFE_width: {
      control: {
        type: "text",
      },
      description:
        "UNSAFE width of the input. Try not to use this and use size instead.",
    },
    UNSAFE_height: {
      control: {
        type: "text",
      },
      description:
        "UNSAFE height of the input. Try not to use this and use size instead.",
    },
    size: {
      control: {
        type: "radio",
        options: ["md", "lg"],
      },
      description: "Size of the input",
      table: {
        type: {
          summary: "md | lg",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    label: {
      control: {
        type: "text",
      },
      description: "Label of the input.",
    },
    placeholder: {
      control: {
        type: "text",
      },
      description: "Placeholder of the input.",
    },
    errorMessage: {
      control: {
        type: "text",
      },
      description:
        "Error message of the input. Based on this, the input will show error state.",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Description of the input.",
    },
    isRequired: {
      control: {
        type: "boolean",
      },
      description: "Whether the input is required or not.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
      description: "Whether the input is disabled or not.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
  parameters: { controls: { sort: "requiredFirst" } },
} as ComponentMeta<typeof TextInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};

export const TextInputExample = Template.bind({});
TextInputExample.storyName = "TextInput";
TextInputExample.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "Description",
  startIcon: "home-5-fill",
  endIcon: "building-line",
  size: "md",
};
