import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./Modal";
import { Button } from "../Button";

export default {
  title: "Design System/Modal",
  component: Modal,
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
      description:
        "Open state of the modal. Make sure onClose is passed in ModalHeader.",
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
      action: "onOpenChange",
      description: "Callback for when the modal is opened or closed",
      table: {
        type: {
          summary: "(open: boolean) => void",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    children: {
      description: "Content of the modal",
      table: {
        type: {
          summary: "React.ReactNode",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
  },
  subcomponents: {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Modal> = (args) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ open: !open });

  return (
    <>
      <Button onClick={handleClose}>Open Modal</Button>
      <Modal {...args}>
        <ModalContent>
          <ModalHeader onClose={handleClose}>Modal Header</ModalHeader>
          <ModalBody>Test body</ModalBody>
          <ModalFooter>
            <Button kind="secondary" size="md">
              Cancel
            </Button>
            <Button kind="primary" size="md">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalStory = Template.bind({});
ModalStory.storyName = "Modal";
ModalStory.args = {
  open: false,
};
