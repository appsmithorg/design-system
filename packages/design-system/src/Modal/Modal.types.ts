import { DialogContentProps } from "@radix-ui/react-dialog";

// Modal content props
export type ModalContentProps = DialogContentProps & {
  /** Modal content */
  children: React.ReactNode;
};

export type ModalHeaderProps = {
  /** Modal header */
  children: React.ReactNode;
  /** Close modal handler */
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type ModalBodyProps = {
  /** Modal header */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
