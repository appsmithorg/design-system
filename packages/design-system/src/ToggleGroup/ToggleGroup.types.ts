export interface ToggleGroupOption {
  icon: string;
  value: string;
}

export interface ToggleGroupProps {
  options: ToggleGroupOption[];
  values: Array<string>;
  onSelect: (value: string, isUpdatedViaKeyboard: boolean) => void;
}
