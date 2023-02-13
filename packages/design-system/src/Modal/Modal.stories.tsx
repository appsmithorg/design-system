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
import { Text } from "../Text";

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
      <Button onPress={handleClose}>Open Modal</Button>
      <Modal {...args}>
        <ModalContent>
          <ModalHeader onClose={handleClose}>Modal Header</ModalHeader>
          <ModalBody>
            <Text kind="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
              tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl sit amet
              nisl.
            </Text>
          </ModalBody>
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
ModalStory.storyName = "With Footer";
ModalStory.args = {
  open: false,
};

// eslint-disable-next-line react/function-component-definition
const TemplateTwo: ComponentStory<typeof Modal> = (args) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ open: !open });

  return (
    <>
      <Button onPress={handleClose}>Open Modal</Button>
      <Modal {...args}>
        <ModalContent>
          <ModalHeader onClose={handleClose}>Modal Header</ModalHeader>
          <ModalBody>
            <Text kind="body-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, et
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
              tincidunt, nunc nisl aliquam nisl, et aliquam nisl nisl sit amet
              nisl.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalStoryTwo = TemplateTwo.bind({});
ModalStoryTwo.storyName = "Without Footer";
ModalStoryTwo.args = {
  open: false,
};
