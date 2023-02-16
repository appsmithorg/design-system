export type DraggableListProps = {
  /** this prop is used when... */
  prop1: undefined;

  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
  fixedHeight: string | number | undefined;
  focusedIndex: number | null | undefined;
  itemHeight: number;
  // A function
  ItemRenderer: any;
  // TItems[];
  items: any;
  keyAccessor: any;
  // a function
  onUpdate: any;
  updateDragging: (arg0: boolean) => void;
};

export interface SpringStyleProps {
  down: boolean;
  originalIndex: number;
  curIndex: number;
  y: number;
  itemHeight: number;
}
