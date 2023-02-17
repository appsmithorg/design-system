import React, { useState } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  autoUpdate,
  offset,
  flip,
  size,
  useListNavigation,
  useId,
  Placement,
} from "@floating-ui/react";

interface DialogOptions {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useSelect({
  initialOpen = false,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
}: DialogOptions = {}) {
  const [search, setSearch] = useState("");
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  // floating
  const { placement: resultantPlacement, ...data } = useFloating({
    placement: placement ?? "bottom",
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            width: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const context = data.context;

  const listRef = React.useRef<Array<HTMLElement | null>>([]);

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context),
  ]);

  const {
    getFloatingProps: getListFloatingProps,
    getItemProps,
    getReferenceProps: getInputProps,
  } = useInteractions([
    useListNavigation(context, {
      listRef,
      onNavigate: open ? setActiveIndex : undefined,
      activeIndex,
      loop: true,
      virtual: true,
      allowEscape: false,
    }),
  ]);

  React.useEffect(() => {
    if (open) {
      setPlacement(resultantPlacement);
    } else {
      setSearch("");
      setActiveIndex(null);
      setPlacement(null);
    }
  }, [open, resultantPlacement]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && activeIndex !== null) {
      event.preventDefault();
      handleItemClick(activeIndex);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveIndex(null);
    setSearch(event.target.value);
  };

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...data,
      selectedIndex,
      activeIndex,
      handleInputChange,
      handleKeyDown,
      handleItemClick,
      search,
      getListFloatingProps,
      getItemProps,
      getInputProps,
      getFloatingProps,
      getReferenceProps,
      listRef,
    }),
    [
      open,
      setOpen,
      data,
      open,
      setOpen,
      handleInputChange,
      handleKeyDown,
      handleItemClick,
      search,
      getListFloatingProps,
      getItemProps,
      getInputProps,
      getFloatingProps,
      getReferenceProps,
      listRef,
    ],
  );
}
