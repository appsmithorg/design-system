import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  MenuSeparator,
} from "./Menu";
import { Button } from "../Button";
import { Text } from "../Text";

export default {
  title: "Design System/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Menu> = () => {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuContent width="200px">
        <MenuItem startIcon="hospital-line">
          <Text>Item 1</Text>
        </MenuItem>
        <MenuItem startIcon="hospital-line">
          <Text>Item 2</Text>
        </MenuItem>
        <MenuSeparator />
        <MenuItem startIcon="hospital-line">
          <Text>Item 3</Text>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger startIcon="hospital-line">
            <Text>Sub Menu</Text>
          </MenuSubTrigger>
          <MenuSubContent width="200px">
            <MenuItem>
              <Text>Sub Item 1</Text>
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <Text>Sub Menu 2</Text>
              </MenuSubTrigger>
              <MenuSubContent width="200px">
                <MenuItem>
                  <Text>Sub Item 2.1</Text>
                </MenuItem>
                <MenuItem>
                  <Text>Sub Item 2.2</Text>
                </MenuItem>
                <MenuItem>
                  <Text>Sub Item 2.3</Text>
                </MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
  );
};

export const MenuFullStory = Template.bind({});
MenuFullStory.storyName = "Complete Menu";
MenuFullStory.args = {};

export function MenuStory({ children, ...args }) {
  return (
    <Menu defaultOpen {...args}>
      {children}
    </Menu>
  );
}
MenuStory.storyName = "Menu";
MenuStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    description: "Menu Trigger and Menu Content is passed here.",
    table: {
      type: {
        summary: "text",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  dir: {
    control: {
      type: "select",
      options: ["ltr", "rtl"],
    },
    description: "Direction of the menu.",
    table: {
      type: {
        summary: "ltr | rtl",
      },
      defaultValue: {
        summary: "ltr",
      },
    },
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Whether the menu is open or not.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  defaultOpen: {
    control: {
      type: "boolean",
    },
    description: "Whether the menu is open or not by default.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  onOpenChange: {
    control: {
      type: "function",
    },
    description: "Callback when the menu is opened or closed.",
    table: {
      type: {
        summary: "(open: boolean) => void",
      },
      defaultValue: {
        summary: "() => {}",
      },
    },
  },
  modal: {
    control: {
      type: "boolean",
    },
    description: "Whether the menu is modal or not.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
};
MenuStory.args = {
  children: "This doesn't work alone. This is just to showcase props of Menu.",
};

export function MenuTriggerStory({ children, ...args }) {
  return (
    <Menu defaultOpen>
      <MenuTrigger {...args}>{children}</MenuTrigger>
    </Menu>
  );
}
MenuTriggerStory.storyName = "Menu Trigger";
MenuTriggerStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    description: "Menu Trigger is passed here.",
    table: {
      type: {
        summary: "text",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
};
MenuTriggerStory.args = {
  children: <Button>Open Menu</Button>,
};

export function MenuContentStory({ children, ...args }) {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuContent {...args}>{children}</MenuContent>
    </Menu>
  );
}
MenuContentStory.storyName = "Menu Content";
MenuContentStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    description: "Menu Content is passed here.",
    table: {
      type: {
        summary: "text",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  height: {
    control: {
      type: "text",
    },
    description: "Height of the menu content.",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "fit-content",
      },
    },
  },
  width: {
    control: {
      type: "text",
    },
    description: "Width of the menu content. Max-width: 280px.",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "fit-content",
      },
    },
  },
};
MenuContentStory.args = {
  children: <Text>Menu Content</Text>,
  width: "150px",
};

export function MenuItemStory({ children, ...args }) {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuContent width="150px">
        <MenuItem {...args}>{children}</MenuItem>
      </MenuContent>
    </Menu>
  );
}
MenuItemStory.storyName = "Menu Item";
MenuItemStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    description: "Menu Item is passed here.",
    table: {
      type: {
        summary: "text",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether the menu item is disabled or not.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  startIcon: {
    control: {
      type: "text",
    },
    description: "Start icon of the menu item.",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  endIcon: {
    control: {
      type: "text",
    },
    description: "End icon of the menu item.",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  size: {
    control: {
      type: "select",
      options: ["sm", "md"],
    },
    description: "Size of the menu item.",
    table: {
      type: {
        summary: "sm | md",
      },
      defaultValue: {
        summary: "md",
      },
    },
  },
};
MenuItemStory.args = {
  children: <Text>Item</Text>,
};

export function MenuSeparatorStory({ ...args }) {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuContent width="150px">
        <MenuItem>Item</MenuItem>
        <MenuSeparator {...args} />
        <MenuItem>Item</MenuItem>
        <MenuItem>Item</MenuItem>
      </MenuContent>
    </Menu>
  );
}
MenuSeparatorStory.storyName = "Menu Separator";

export function MenuSubmenuStory({ ...args }) {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuContent width="150px">
        <MenuItem>
          <Text>Item</Text>
        </MenuItem>
        <MenuSub {...args}>
          <MenuSubTrigger>
            <Text>Item Sub</Text>
          </MenuSubTrigger>
          <MenuSubContent width="200px">
            <MenuItem>
              <Text>Sub Item</Text>
            </MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuItem>
          <Text>Item</Text>
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
MenuSubmenuStory.storyName = "Menu Submenu";
MenuSubmenuStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    description: "Menu Trigger and Menu Content is passed here.",
    table: {
      type: {
        summary: "text",
      },
      defaultValue: {
        summary: "",
      },
    },
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Whether the menu is open or not.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  onOpenChange: {
    control: {
      type: "function",
    },
    description: "Callback when the menu is opened or closed.",
    table: {
      type: {
        summary: "(open: boolean) => void",
      },
      defaultValue: {
        summary: "() => {}",
      },
    },
  },
};
