import { DialogContentProps } from "@radix-ui/react-dialog";

//  TODO:  Need to change `open` prop on Modal to `isOpen`

// Modal content props
export type ModalContentProps = DialogContentProps & {
  /** Modal content */
  children: React.ReactNode;
};

export type ModalHeaderProps = {
  /** Modal header */
  children: React.ReactNode;
  /** whether to show close button or not */
  isCloseButtonVisible?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type ModalBodyProps = {
  /** Modal header */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
