import React, { useEffect } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogOverlay,
} from "./index";
import { Resizable } from "re-resizable";
import { ButtonGroup } from "../ButtonGroup";
import { Button } from "../Button";

const HIDDEN_ARGS = [
  "theme",
  "forwardedAs",
  "as",
  "boxShadow",
  "borderRadius",
  "ref",
  "tooltip",
];

export default {
  title: "Design System/Dialog",
  component: Dialog,
  argTypes: {
    ...HIDDEN_ARGS.reduce((acc, arg) => {
      acc[arg] = { table: { disable: true } };
      return acc;
    }, {}),
  },
  parameters: {
    height: "32px",
    width: "120px",
  },
} as ComponentMeta<typeof Dialog>;

// eslint-disable-next-line react/function-component-definition
const TemplateDefault = (args) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogOverlay>
        <DialogContent className="Dialog">
          <input placeholder="input 1" type="text" />
          <input autoFocus placeholder="input 2" ref={inputRef} type="text" />
          <input placeholder="input 3" type="text" />
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export const DefaultStory = TemplateDefault.bind({});
DefaultStory.storyName = "Dialog";

// Story: Dialg with Button Group
function TemplateWithButtonGroup(args) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <ButtonGroup>
      <Button>Option 1</Button>
      <Button>Option 2</Button>
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogOverlay>
          <DialogContent className="Dialog">
            <input placeholder="input 1" type="text" />
            <input autoFocus placeholder="input 2" ref={inputRef} type="text" />
            <input placeholder="input 3" type="text" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </ButtonGroup>
  );
}

export const DialogWithButtonGroupStory = TemplateWithButtonGroup.bind({});
DialogWithButtonGroupStory.storyName = "with Button Group";
DialogWithButtonGroupStory.args = {};

DialogWithButtonGroupStory.parameters = {
  height: "32px",
  width: "300px",
};
