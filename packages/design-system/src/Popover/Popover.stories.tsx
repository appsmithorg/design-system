import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "./Popover";
import { Button } from "../Button";
import { Input } from "../Input";

export default {
  title: "Design System/Popover",
  component: Popover,
  subcomponents: {
    PopoverBody,
    PopoverContent,
    PopoverHeader,
  },
} as ComponentMeta<typeof Popover>;

// eslint-disable-next-line react/function-component-definition
const PopoverHeaderTemplate: ComponentStory<typeof PopoverHeader> = (args) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent size="sm">
        <PopoverHeader {...args} />
      </PopoverContent>
    </Popover>
  );
};

export const PopoverHeaderStory = PopoverHeaderTemplate.bind({});
PopoverHeaderStory.storyName = "Header";
PopoverHeaderStory.args = {
  children: "JS Libraries",
  isClosable: true,
};

const PopoverContentTemplate: ComponentStory<typeof PopoverHeader> = (args) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args} />
    </Popover>
  );
};

export const PopoverContentStory = PopoverContentTemplate.bind({});
PopoverContentStory.storyName = "Content";
PopoverContentStory.args = {
  size: "sm",
  children: (
    <>
      <PopoverHeader isClosable>Sign in</PopoverHeader>
      <PopoverBody>
        <Input label="Old password" renderAs="input" size="md" />
        <Input label="New Password" renderAs="input" size="md" />
        <Input label="Third input" renderAs="input" size="md" />
        <Input label="Fourth input" renderAs="input" size="md" />
        <Button UNSAFE_width="150px" kind="primary" size="md">
          Change
        </Button>
      </PopoverBody>
    </>
  ),
};

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader isClosable>Sign in</PopoverHeader>
        <PopoverBody>
          <Input label="Old password" renderAs="input" size="md" />
          <Input label="New Password" renderAs="input" size="md" />
          <Button UNSAFE_width="150px" kind="primary" size="md">
            Change
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const PopoverStory = Template.bind({});
PopoverStory.storyName = "Popover";
PopoverStory.args = {
  //add arguments here
};
