import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleHeader,
} from "./Collapsible";
import { Text } from "../Text";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Collapsible",
  decorators: [
    (Story) => <div style={{ width: "95%", maxWidth: "500px" }}>{Story()}</div>,
  ],
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "Collapsibles can expand when clicked on. They allow you to hide content that is not immediately relevant to the user.",
      },
    },
  },
  subcomponents: {
    CollapsibleContent,
    CollapsibleHeader,
  },
} as ComponentMeta<typeof Collapsible>;

// eslint-disable-next-line react/function-component-definition
const CollapsibleTemplate: ComponentStory<typeof Collapsible> = (args) => {
  const [{ isCollapsibleArrowVisible, open }, updateArgs] = useArgs();
  const changeOpenState = (state: boolean) => updateArgs({ open: state });

  return (
    <Collapsible onOpenChange={changeOpenState} open={open}>
      <CollapsibleHeader isCollapsibleArrowVisible={isCollapsibleArrowVisible}>
        <Text kind="heading-s">Collapsible Header</Text>
      </CollapsibleHeader>
      <CollapsibleContent>
        <Text kind="body-m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et
          aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
          tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl sit amet nisl.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et
          aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
          tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl sit amet nisl.
        </Text>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const CollapsibleStory = CollapsibleTemplate.bind({});
CollapsibleStory.storyName = "Collapsible";
CollapsibleStory.args = {
  isCollapsibleArrowVisible: true,
  open: false,
};
CollapsibleStory.argTypes = {
  children: {
    description: "Both header and content of the collapsible will go here.",
    table: {
      type: {
        summary: "React.ReactNode",
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
    description: "The open state of the collapsible.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
  onOpenChange: {
    action: "onOpenChange",
    description: "Callback for when the collapsible is opened or closed.",
    table: {
      type: {
        summary: "(open: boolean) => void",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  className: {
    description: "(try not to) pass addition classes here.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  isCollapsibleArrowVisible: {
    description: `Whether to show the arrow-down-s-line and arrow-up-s-line icons or not.
    Please turn this off if you're using a custom icon.`,
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
};

// eslint-disable-next-line react/function-component-definition
const CollapsibleHeaderTemplate: ComponentStory<typeof CollapsibleHeader> = (
  args,
) => {
  const [{ isCollapsibleArrowVisible, open }, updateArgs] = useArgs();
  const changeOpenState = (state: boolean) => updateArgs({ open: state });

  return (
    <Collapsible onOpenChange={changeOpenState} open={open}>
      <CollapsibleHeader isCollapsibleArrowVisible={isCollapsibleArrowVisible}>
        {args.children}
      </CollapsibleHeader>
    </Collapsible>
  );
};

export const CollapsibleHeaderStory = CollapsibleHeaderTemplate.bind({});
CollapsibleHeaderStory.storyName = "Header";
CollapsibleHeaderStory.args = {
  children: <Text kind="heading-s">Collapsible Header</Text>,
  isCollapsibleArrowVisible: true,
  open: false,
};
CollapsibleHeaderStory.argTypes = {
  children: {
    description: `Any React Node that will go in the header. 
    Clicking on this will toggle the collapsible.`,
    table: {
      type: {
        summary: "React.ReactNode",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  isCollapsibleArrowVisible: {
    description: `Whether to show the arrow-down-s-line and arrow-up-s-line icons or not.
    Please turn this off if you're using a custom icon.`,
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
};

// eslint-disable-next-line react/function-component-definition
const CollapsibleContentTemplate: ComponentStory<typeof CollapsibleContent> = (
  args,
) => {
  const [{ open }, updateArgs] = useArgs();
  const changeOpenState = (state: boolean) => updateArgs({ open: state });

  return (
    <Collapsible onOpenChange={changeOpenState} open={open}>
      <CollapsibleContent>{args.children}</CollapsibleContent>
    </Collapsible>
  );
};

export const CollapsibleContentStory = CollapsibleContentTemplate.bind({});
CollapsibleContentStory.storyName = "Content";
CollapsibleContentStory.args = {
  open: true,
  children: (
    <Text kind="body-m">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
      nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl
      sit amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nunc nisl
      aliquam nisl, et aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam
      tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed
      tincidunt, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et aliquam
      nisl nisl sit amet nisl.
    </Text>
  ),
};
CollapsibleContentStory.argTypes = {
  children: {
    description: "Content to be displayed when the component is expanded.",
    table: {
      type: {
        summary: "React.ReactNode",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
};
