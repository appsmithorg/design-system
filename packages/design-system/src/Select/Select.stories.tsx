import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select, Option } from "./Select";
import { Icon } from "../Icon";

export default {
  title: "Design System/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `Select component is used for forms and input fields where users are required to choose from a limited set of options.<br /><br />
        **Known Issues** <br />
        <ul>
          <li>When **virtual** flag is true (default is true), last item in the list is not shown completely.</li>
        </ul>
        `,
      },
    },
  },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Select {...args}>
      <Option value="Test">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="home-5-line" size="md" />
          Option 1
        </div>
      </Option>
      <Option disabled value="option 2">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-line" size="md" />
          Option 2
        </div>
      </Option>
      <Option value="option 3">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-2-line" size="md" />
          Option 3
        </div>
      </Option>
      <Option value="option 4">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-3-line" size="md" />
          Option 4
        </div>
      </Option>
      <Option value="option 5">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-4-line" size="md" />
          Option 5
        </div>
      </Option>
      <Option value="option 6">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="bank-line" size="md" />
          Option 6
        </div>
      </Option>
      <Option value="option 7">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="store-line" size="md" />
          Option 7
        </div>
      </Option>
      <Option value="option 8">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="store-2-line" size="md" />
          Option 8
        </div>
      </Option>
      <Option value="option 9">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="store-3-line" size="md" />
          Option 9
        </div>
      </Option>
      <Option value="option 10">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="hospital-line" size="md" />
          Option 10
        </div>
      </Option>
      <Option value="option 11">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="ancient-gate-line" size="md" />
          Option 11
        </div>
      </Option>
      <Option value="option 12">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="ancient-pavilion-line" size="md" />
          Option 12
        </div>
      </Option>
      <Option value="option 13">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-2-line" size="md" />
          Option 13
        </div>
      </Option>
      <Option value="option 14">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-3-line" size="md" />
          Option 14
        </div>
      </Option>
      <Option value="option 15">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon name="building-4-line" size="md" />
          Option 15
        </div>
      </Option>
    </Select>
  );
};

export const SelectStory = Template.bind({});
SelectStory.storyName = "Select";
SelectStory.args = {
  size: "md",
  open: true,
};
SelectStory.argTypes = {
  id: {
    control: {
      type: "text",
    },
    description: "html id to set on the component wrapper",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  className: {
    control: {
      type: "text",
    },
    description: "className to set on the component wrapper",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  size: {
    control: {
      type: "select",
      options: ["sm", "md"],
    },
    description: "Size of the select",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "md",
      },
    },
  },
  dropdownMatchSelectWidth: {
    control: {
      type: "boolean",
    },
    description: "Whether dropdown's width matches select's or not",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
  dropdownClassName: {
    control: {
      type: "text",
    },
    description: "className to set on the dropdown wrapper",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  dropdownAlign: {
    control: {
      type: "object",
    },
    description: "Dropdown menu position align config",
    table: {
      type: {
        summary: "object",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  notFoundContent: {
    control: {
      type: "text",
    },
    description: "Content to show when no result matches.",
    table: {
      type: {
        summary: "ReactNode",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Control dropdown open state",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  defaultOpen: {
    control: {
      type: "boolean",
    },
    description: "Initial dropdown open state",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  placeholder: {
    control: {
      type: "text",
    },
    description: "Placeholder of select",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "Please select",
      },
    },
  },
  showSearch: {
    control: {
      type: "boolean",
    },
    description: "Whether show search input in single mode.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  allowClear: {
    control: {
      type: "boolean",
    },
    description: "Show clear button",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  maxTagTextLength: {
    control: {
      type: "number",
    },
    description: "Max tag text length to show. Only works if content is text.",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "5",
      },
    },
  },
  maxTagCount: {
    control: {
      type: "number",
    },
    description: "Max tag count to show",
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "2",
      },
    },
  },
  maxTagPlaceholder: {
    control: {
      type: "text",
    },
    description: "Max tag placeholder",
    table: {
      type: {
        summary: "ReactNode/function(omittedValues)",
      },
      defaultValue: {
        summary:
          "(omittedValues: any[]) => { return `+${omittedValues.length}`;};",
      },
    },
  },
  multiple: {
    control: {
      type: "boolean",
    },
    description: "Support multiple or not",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether select is disabled",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  filterOption: {
    control: {
      type: "boolean",
    },
    description:
      "whether filter options by input value. default filter by option's optionFilterProp prop's value",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true/Function(inputValue:string, option:Option)",
      },
    },
  },
  optionFilterProp: {
    control: {
      type: "text",
    },
    description:
      "which prop value of option will be used for filter if filterOption is true",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "value",
      },
    },
  },
  filterSort: {
    control: {
      type: "text",
    },
    description:
      "Sort function for search options sorting, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort compareFunction.",
    table: {
      type: {
        summary: "Function(optionA:Option, optionB: Option)",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  optionLabelProp: {
    control: {
      type: "text",
    },
    description: "which prop value of option will render as content of select",
    table: {
      type: {
        summary: "String: 'value'/'children'",
      },
      defaultValue: {
        summary: "children",
      },
    },
  },
  defaultValue: {
    control: {
      type: "text",
    },
    description: "Initial selected option",
    table: {
      type: {
        summary: "string | string[]",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  value: {
    control: {
      type: "text",
    },
    description: "Current selected option",
    table: {
      type: {
        summary:
          "String | String[] | {key:String, label:React.Node} | {key:String, label:React.Node}[]",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onSearch: {
    control: {
      type: "text",
    },
    description: "Called when input changed.",
    table: {
      type: {
        summary: "function",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onBlur: {
    control: {
      type: "text",
    },
    description: "Called when blur",
    table: {
      type: {
        summary: "function",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onFocus: {
    control: {
      type: "text",
    },
    description: "Called when focus",
    table: {
      type: {
        summary: "function",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onPopupScroll: {
    control: {
      type: "text",
    },
    description: "Called when popup scroll",
    table: {
      type: {
        summary: "function",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onSelect: {
    control: {
      type: "text",
    },
    description:
      "Called when a option is selected. Param is option's value and option instance",
    table: {
      type: {
        summary: "Function(value, option:Option)",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onDeselect: {
    control: {
      type: "text",
    },
    description:
      "Called when a option is deselected. Param is option's value. Only called for multiple or tags",
    table: {
      type: {
        summary: "Function(value, option:Option)",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onInputKeyDown: {
    control: {
      type: "text",
    },
    description: "Called when input key down",
    table: {
      type: {
        summary: "Function(e)",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  defaultActiveFirstOption: {
    control: {
      type: "boolean",
    },
    description: "whether active first option by default",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "Focus the select input element when component mounted",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  autoClearSearchValue: {
    control: {
      type: "boolean",
    },
    description:
      "Auto clear search input value when multiple select is selected/deselected",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
  virtual: {
    control: {
      type: "boolean",
    },
    description: "Use virtual scroll to render options",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
};

// eslint-disable-next-line react/function-component-definition
const OptionTemplate: ComponentStory<typeof Option> = ({
  children,
  ...args
}) => {
  return (
    <Select
      defaultValue="option 2"
      onChange={(value) => console.log(value)}
      open
      size="md"
    >
      <Option {...args} value="Test">
        {children || (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon name="home-5-line" size="md" />
            Option 1
          </div>
        )}
      </Option>
    </Select>
  );
};

export const OptionStory = OptionTemplate.bind({});
OptionStory.storyName = "Option";
OptionStory.argTypes = {
  className: {
    control: {
      type: "string",
    },
    description: "Custom class name",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disable the option",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  value: {
    control: {
      type: "text",
    },
    description: "Value of the option",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
  key: {
    control: {
      type: "text",
    },
    description: "Key of the option",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  children: {
    control: {
      type: "text",
    },
    description: "Content of the option",
    table: {
      type: {
        summary: "React.Node",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  multiple: {
    table: {
      disable: true,
    },
  },
};
