export interface CommonComponentProps {
  isLoading?: boolean; //default false
  cypressSelector?: string;
  className?: string;
  name?: string;
  disabled?: boolean; //default false
}

export const DS_EVENT = "DS_EVENT";

export enum DSEventTypes {
  KEYPRESS = "KEYPRESS",
}
