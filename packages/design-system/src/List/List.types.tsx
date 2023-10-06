import { Sizes } from "__config__/types";

export type ListSizes = Extract<Sizes, "md" | "lg">;

export type ListItemProps = {
  startIcon?: string;
  endIcon?: string;
  onEndIconClick?: () => void;
  onClick: () => void;
  isDisabled?: boolean;
  selected?: boolean;
  size?: ListSizes;
  hasError?: boolean;
  title: string;
  description: string;
  descriptionType: "inline" | "block";
};

export type ListProps = {
  items: ListItemProps[];
};
