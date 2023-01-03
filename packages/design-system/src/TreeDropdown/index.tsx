import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { find, findIndex } from "lodash";
import {
  PopoverInteractionKind,
  PopoverPosition,
  IPopoverSharedProps,
  MenuItem,
  Popover,
  Menu,
  Button,
  Classes,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import styled, { StyledComponent } from "styled-components";
import Icon, { IconSize } from "Icon";
import { replayHighlightClass } from "Constants/classes";
import useDSEvent from "hooks/useDSEvent";
import { DSEventTypes } from "Types/common";
import { typography } from "Constants/typography";
import { Intent as BlueprintIntent } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";
import maxSize from "popper-max-size-modifier";
import { applyMaxSize, sameWidth } from "Utils/popper-modifiers";

export type TreeDropdownOption = {
  label: string;
  value: string;
  subText?: string;
  id?: string;
  intent?: BlueprintIntent;
  onSelect?: (value: TreeDropdownOption, setter?: Setter) => void;
  children?: TreeDropdownOption[];
  className?: string;
  type?: string;
  icon?: IconName;
  isChildrenOpen?: boolean;
  selfIndex?: number[];
  args?: Array<any>;
};

export type Setter = (
  value: TreeDropdownOption,
  defaultVal?: string,
  isUpdatedViaKeyboard?: boolean,
) => void;

export type TreeDropdownProps = {
  optionTree: TreeDropdownOption[];
  selectedValue: string;
  getDefaults?: (value: any) => any;
  defaultText: string;
  onSelect: Setter;
  selectedLabelModifier?: (
    option: TreeDropdownOption,
    displayValue?: string,
  ) => React.ReactNode;
  displayValue?: string;
  toggle?: React.ReactNode;
  className?: string;
  modifiers?: IPopoverSharedProps["modifiers"];
  onMenuToggle?: (isOpen: boolean) => void;
  position?: PopoverPosition;
  menuWidth?: number;
};

export type StyledMenuProps = {
  width?: number;
};

export const StyledMenu = styled(Menu)`
  max-height: calc(
    100vh - var(--ads-small-header-height) - var(--ads-bottom-bar-height)
  );
  overflow: auto;
  min-width: 220px;
  width: ${(props: StyledMenuProps) => `${props.width}px`};
  padding: 0px;
  border-radius: 0px;
  background-color: var(--ads-tree-dropdown-menu-default-background-color);
  .${Classes.MENU} {
    min-width: 220px;
    width: ${(props: StyledMenuProps) => `${props.width}px`};
    padding: 0px;
    border-radius: 0px;
    background-color: var(--ads-tree-dropdown-menu-default-background-color);
    max-height: 90vh;
    overflow-y: scroll;
  }
  .${Classes.MENU_ITEM} {
    border-radius: 0px;
    font-size: 14px;
    line-height: ${typography.p1.lineHeight}px;
    display: flex;
    align-items: center;
    height: 30px;
    color: var(--ads-tree-dropdown-menu-default-text-color);
    .${Classes.ICON} > svg:not([fill]) {
      margin-top: 0px;
      fill: #9f9f9f;
    }

    &.t--apiFormDeleteBtn {
      color: var(--ads-old-color-pomegranate);
      .${Classes.ICON} svg {
        fill: var(--ads-old-color-pomegranate);
      }
    }

    &.t--apiFormDeleteBtn:hover {
      background-color: var(--ads-old-color-gallery-2);
      color: var(--ads-old-color-pomegranate);
      .${Classes.ICON} svg {
        fill: var(--ads-old-color-pomegranate);
      }
    }

    &:hover:not(.t--apiFormDeleteBtn) {
      background-color: var(--ads-old-color-gallery-2);
      color: var(--ads-old-color-gray-10);
      .${Classes.ICON} > svg:not([fill]) {
        fill: var(--ads-old-color-gray-10);
      }
    }

    &.${Classes.ACTIVE} {
      background-color: var(--ads-old-color-gallery-2);
      color: var(--ads-tree-dropdown-menu-selected-text-color);
      .${Classes.ICON} > svg:not([fill]) {
        fill: var(--ads-tree-dropdown-menu-selected-text-color);
      }
    }
  }
  .${Classes.MENU_SUBMENU}
    .${Classes.POPOVER_TARGET}.${Classes.POPOVER_OPEN}
    > .${Classes.MENU_ITEM} {
    background-color: var(--ads-old-color-gallery-2);
  }
`;

const DropdownTarget = styled.div`
  &&&& .${Classes.BUTTON} {
    width: 100%;
    box-shadow: none;
    border-radius: 0px;
    border: 1px solid var(--ads-color-black-250);
    min-height: 36px;
    background-color: var(--ads-tree-dropdown-target-background-color);
    color: var(--ads-tree-dropdown-menu-default-text-color);
    background-image: none;
    display: flex;
    justify-content: space-between;
    padding: 5px 12px;

    &:active,
    &:focus {
      border-color: var(--appsmith-input-focus-border-color);
    }
  }
  &&&& .${Classes.ICON} {
    color: var(--ads-tree-dropdown-menu-default-text-color);
  }
`;

export function calculateNext(arr: number[], max: number) {
  return [
    ...arr.slice(0, arr.length - 1),
    (arr[arr.length - 1] + 1) % (max + 1),
  ];
}

export function calculatePrev(arr: number[], max: number) {
  let lastNum = arr[arr.length - 1];
  if (lastNum <= 0) lastNum = max;
  else lastNum--;
  return [...arr.slice(0, arr.length - 1), lastNum];
}

export function getItem(
  arr: TreeDropdownOption[],
  index: number[],
): TreeDropdownOption | undefined {
  if (index.length === 0) return undefined;
  const firstIndex = index[0] ?? 0;
  if (index.length === 1) return arr[firstIndex];
  return getItem(arr[firstIndex]?.children ?? [], index.slice(1));
}

export function setItem(
  arr: TreeDropdownOption[],
  index: number[],
  item: TreeDropdownOption,
): TreeDropdownOption[] | undefined {
  if (index.length === 0) return undefined;
  const firstIndex = index[0] ?? 0;

  let subItem = { ...arr[firstIndex] };
  if (subItem.children && index.length > 1)
    subItem.children = setItem(subItem.children, index.slice(1), item);
  else subItem = item;

  return [...arr.slice(0, firstIndex), subItem, ...arr.slice(firstIndex + 1)];
}

export function closeAllChildren(tree: TreeDropdownOption[]) {
  return tree.map((x) => {
    let data = x;
    if (x.isChildrenOpen)
      data = {
        ...x,
        isChildrenOpen: false,
      };
    if (x.children) data["children"] = closeAllChildren(x.children);
    return data;
  });
}

export function deepOpenChildren(tree: TreeDropdownOption[], index: number[]) {
  return tree.map((x, i) => {
    if (i !== index[0]) return x;
    const data = x;
    data["isChildrenOpen"] = true;
    if (x?.children)
      data["children"] = deepOpenChildren(data?.children ?? [], index.slice(1));
    return x;
  });
}

export function setSelfIndex(
  tree: TreeDropdownOption[],
  prevIndex = [],
): TreeDropdownOption[] {
  return tree.map((x, i) => {
    const ob: any = { ...x };
    ob.selfIndex = [...prevIndex, i];
    if (ob.children) ob.children = setSelfIndex(ob.children, ob.selfIndex);
    return ob;
  });
}

function getSelectedOption(
  selectedValue: string,
  defaultText: string,
  options: TreeDropdownOption[],
) {
  let selectedOption: TreeDropdownOption = {
    label: defaultText,
    value: "",
  };
  options.length > 0 &&
    options.forEach((option) => {
      // Find the selected option in the OptionsTree
      if (option.value === selectedValue) {
        selectedOption = option;
      } else {
        const childOption = find(option.children, {
          value: selectedValue,
        });
        if (childOption) {
          selectedOption = childOption;
        }
      }
    });
  return selectedOption;
}

function TreeDropdown(props: TreeDropdownProps) {
  const {
    defaultText,
    displayValue,
    getDefaults,
    menuWidth,
    onMenuToggle,
    onSelect,
    selectedLabelModifier,
    selectedValue,
    toggle,
  } = props;
  const [optionTree, setOptionTree] = useState<TreeDropdownOption[]>(
    setSelfIndex(props.optionTree),
  );
  const selectedOptionFromProps = getSelectedOption(
    selectedValue,
    defaultText,
    optionTree,
  );
  const [selectedOption, setSelectedOption] = useState<TreeDropdownOption>(
    getSelectedOption(selectedValue, defaultText, optionTree),
  );
  const selectedOptionIndex = useRef([findIndex(optionTree, selectedOption)]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { emitDSEvent } = useDSEvent<HTMLButtonElement>(false, buttonRef);

  const emitKeyPressEvent = useCallback(
    (key: string) => {
      emitDSEvent({
        component: "TreeDropdown",
        event: DSEventTypes.KEYPRESS,
        meta: {
          key,
        },
      });
    },
    [emitDSEvent],
  );

  useEffect(() => {
    if (!isOpen) {
      setOptionTree(closeAllChildren);
      // reset selected option
      const defaultSelectedOption = getSelectedOption(
        selectedValue,
        defaultText,
        optionTree,
      );
      setSelectedOption((prev) => {
        if (prev.value === defaultSelectedOption.value) return prev;
        return defaultSelectedOption;
      });
    }
  }, [isOpen]);

  const handleSelect = (
    option: TreeDropdownOption,
    isUpdatedViaKeyboard: boolean,
  ) => {
    if (option.onSelect) {
      option.onSelect(option, onSelect);
    } else {
      const defaultVal = getDefaults ? getDefaults(option.value) : undefined;
      onSelect(option, defaultVal, isUpdatedViaKeyboard);
    }
    setSelectedOption(option);
  };

  const handleOptionClick = (option: TreeDropdownOption) => {
    if (option.children)
      return (e: any) => {
        const itemIndex = option.selfIndex || [];
        if (option?.children) {
          setOptionTree((prev) => {
            if (option.isChildrenOpen)
              return (
                setItem(
                  deepOpenChildren(closeAllChildren(prev), itemIndex),
                  itemIndex,
                  {
                    ...option,
                    isChildrenOpen: false,
                  },
                ) ?? prev
              );
            return deepOpenChildren(closeAllChildren(prev), itemIndex);
          });
          buttonRef.current?.focus();
          setSelectedOption(option.children[0]);
          if (option?.children[0]?.selfIndex)
            selectedOptionIndex.current = option.children[0].selfIndex;
        }
        e?.stopPropagation && e.stopPropagation();
      };
    return (e: any, isUpdatedViaKeyboard = false) => {
      handleSelect(option, isUpdatedViaKeyboard);
      setIsOpen(false);
      props.onMenuToggle && props.onMenuToggle(false);
      e?.stopPropagation && e.stopPropagation();
    };
  };

  function RenderTreeOption(option: TreeDropdownOption) {
    const isSelected =
      selectedOption.value === option.value ||
      selectedOption.type === option.value;

    const popoverProps = useMemo(
      () => ({
        minimal: true,
        isOpen: option.isChildrenOpen,
        interactionKind: PopoverInteractionKind.CLICK,
        position: PopoverPosition.RIGHT_TOP,
        targetProps: { onClick: (e: any) => e.stopPropagation() },
      }),
      [option.isChildrenOpen],
    );

    const optionClickHandler = useCallback(handleOptionClick(option), [
      optionTree,
      handleSelect,
    ]);

    return (
      <MenuItem
        active={isSelected}
        className={option.className || "single-select"}
        icon={option.icon}
        intent={option.intent}
        key={option.value}
        onClick={optionClickHandler}
        popoverProps={popoverProps}
        text={option.label}
      >
        {option.children && option.children.map(RenderTreeOption)}
      </MenuItem>
    );
  }

  /**
   * shouldOpen flag is used to differentiate between a Keyboard
   * induced (Enter or space key) 'click' event vs a mouse 'click' event
   * for the button
   */
  const shouldOpen = useRef(true);

  const handleKeydown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        if (isOpen) {
          emitKeyPressEvent(e.key);
          if (selectedOptionIndex.current.length > 1) {
            setOptionTree((prev) => {
              const prevIndex = selectedOptionIndex.current.slice(0, -1);
              const prevItem = getItem(prev, prevIndex);
              if (prevItem) {
                selectedOptionIndex.current = prevIndex;
                setSelectedOption(prevItem);
                return (
                  setItem(prev, prevIndex, {
                    ...prevItem,
                    isChildrenOpen: false,
                  }) ?? prev
                );
              }
              return prev;
            });
          } else {
            setIsOpen(false);
          }
          e.nativeEvent.stopImmediatePropagation();
        }
        break;
      case " ":
      case "Enter":
      case "ArrowRight":
        if (isOpen) {
          emitKeyPressEvent(e.key);
          const selectedOpt = getItem(optionTree, selectedOptionIndex.current);
          if (selectedOpt?.children) {
            handleOptionClick(selectedOpt)(e, true);
          } else if (selectedOpt && e.key !== "ArrowRight") {
            handleOptionClick(selectedOpt)(e, true);
            shouldOpen.current = false;
          }
        } else if (e.key !== "ArrowRight") {
          emitKeyPressEvent(e.key);
          setIsOpen(true);
          selectedOptionIndex.current = [findIndex(optionTree, selectedOption)];
          shouldOpen.current = true;
        }
        break;
      case "ArrowUp":
        emitKeyPressEvent(e.key);
        e.preventDefault();
        if (isOpen) {
          let currentLength = optionTree.length;
          if (selectedOptionIndex.current.length > 1) {
            currentLength =
              getItem(optionTree, selectedOptionIndex.current.slice(0, -1))
                ?.children?.length ?? 0;
          }
          selectedOptionIndex.current = calculatePrev(
            selectedOptionIndex.current,
            currentLength - 1,
          );
          const nextItem =
            getItem(optionTree, selectedOptionIndex.current) ??
            getSelectedOption(selectedValue, defaultText, optionTree);
          setSelectedOption(nextItem);
        } else {
          setIsOpen(true);
        }
        break;
      case "ArrowDown":
        emitKeyPressEvent(e.key);
        e.preventDefault();
        if (isOpen) {
          let currentLength = optionTree.length;
          if (selectedOptionIndex.current.length > 1) {
            currentLength =
              getItem(optionTree, selectedOptionIndex.current.slice(0, -1))
                ?.children?.length ?? 0;
          }
          selectedOptionIndex.current = calculateNext(
            selectedOptionIndex.current,
            currentLength - 1,
          );
          const nextItem =
            getItem(optionTree, selectedOptionIndex.current) ??
            getSelectedOption(selectedValue, defaultText, optionTree);
          setSelectedOption(nextItem);
        } else {
          setIsOpen(true);
        }
        break;
      case "Tab":
        emitKeyPressEvent(`${e.shiftKey ? "Shift+" : ""}${e.key}`);
        if (isOpen) {
          setIsOpen(false);
          // reset selected option
          setSelectedOption(
            getSelectedOption(selectedValue, defaultText, optionTree),
          );
        }
        break;
      case "ArrowLeft":
        emitKeyPressEvent(e.key);
        if (selectedOptionIndex.current.length > 1) {
          setOptionTree((prev) => {
            const prevIndex = selectedOptionIndex.current.slice(0, -1);
            const prevItem = getItem(prev, prevIndex);
            if (prevItem) {
              selectedOptionIndex.current = prevIndex;
              setSelectedOption(prevItem);
              return (
                setItem(prev, prevIndex, {
                  ...prevItem,
                  isChildrenOpen: false,
                }) ?? prev
              );
            }
            return prev;
          });
        }
        break;
    }
  };

  const list = optionTree.map(RenderTreeOption);
  const menuItems = <StyledMenu width={menuWidth || 220}>{list}</StyledMenu>;
  const defaultToggle: React.ReactNode = React.forwardRef<HTMLDivElement>(
    function render(props: any, ref) {
      return (
        <DropdownTarget ref={ref}>
          <Button
            {...props}
            className={`t--open-dropdown-${defaultText.split(" ").join("-")} ${
              selectedLabelModifier
                ? "code-highlight " + replayHighlightClass
                : replayHighlightClass
            }`}
            elementRef={buttonRef}
            onKeyDown={handleKeydown}
            rightIcon={<Icon name="downArrow" size={IconSize.XXL} />}
            text={
              selectedLabelModifier
                ? selectedLabelModifier(selectedOptionFromProps, displayValue)
                : selectedOptionFromProps.label
            }
          />
        </DropdownTarget>
      );
    },
  );

  const ToggleElement = toggle
    ? React.forwardRef(function render(props: any, ref) {
        return (
          <span ref={ref} {...props}>
            {toggle}
          </span>
        );
      })
    : defaultToggle;

  return (
    <Popover2
      className="wrapper-popover"
      content={menuItems}
      isOpen={isOpen}
      minimal
      // modifiers={props.modifiers}
      modifiers={[maxSize, applyMaxSize, sameWidth]}
      onClose={() => {
        setIsOpen(false);
        props.onMenuToggle && props.onMenuToggle(false);
      }}
      position={props.position || PopoverPosition.LEFT}
      renderTarget={(props) => {
        return (
          <ToggleElement
            {...props}
            onClick={(e: any) => {
              // e.detail will be 1 if the event is a mouse click
              if (e.detail === 1) shouldOpen.current = true;
              if (shouldOpen.current) setIsOpen(true);
              onMenuToggle && onMenuToggle(true);
              e.stopPropagation();
            }}
          />
        );
      }}
    />
  );
}

export default memo(TreeDropdown);
