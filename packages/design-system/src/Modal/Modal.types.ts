// Modal content props
export type ModalContentProps = {
  /** Modal content */
  children: React.ReactNode;
  overlayClassName?: string;
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
