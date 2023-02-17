import React, { forwardRef } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
  useId,
} from "@floating-ui/react";
import { useSelect } from "./useSelect";
import { Button } from "../Button";

type OptionProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  active: boolean;
  selected: boolean;
  children: React.ReactNode;
};

const Option = forwardRef<HTMLDivElement, OptionProps>(function Option(
  { active, children, name, selected, ...props },
  ref,
) {
  const id = useId();
  return (
    <div
      {...props}
      aria-selected={selected}
      id={id}
      ref={ref}
      role="option"
      style={{
        background: active
          ? "rgba(0, 255, 255, 0.5)"
          : selected
          ? "rgba(0, 10, 20, 0.1)"
          : "none",
        border: active
          ? "1px solid rgba(0, 225, 255, 1)"
          : "1px solid transparent",
        borderRadius: 4,
        fontSize: 30,
        textAlign: "center",
        cursor: "default",
        userSelect: "none",
        padding: 0,
      }}
    >
      {children}
    </div>
  );
});

Option.displayName = "Option";

const options = [
  {
    value: "🐶",
    label: "Dog",
  },
  {
    value: "🐱",
    label: "Cat",
  },
  {
    value: "🐭",
    label: "Mouse",
  },
  {
    value: "🐹",
    label: "Hamster",
  },
  {
    value: "🐰",
    label: "Rabbit",
  },
  {
    value: "🦊",
    label: "Fox",
  },
];

type SelectProps = {
  placeholder?: string;
};

export function Select(props: SelectProps) {
  const {
    activeIndex,
    context,
    getFloatingProps,
    getInputProps,
    getItemProps,
    getListFloatingProps,
    getReferenceProps,
    handleInputChange,
    handleItemClick,
    handleKeyDown,
    listRef,
    open,
    refs,
    search,
    selectedIndex,
    strategy,
    x,
    y,
  } = useSelect();

  const { placeholder = "Choose an option" } = props;

  const buttonId = useId();
  const noResultsId = useId();
  const listboxId = useId();

  const { "aria-activedescendant": ignoreAria, ...floatingProps } =
    getFloatingProps(getListFloatingProps());

  const filteredItems = options.filter(({ label }) =>
    label.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  const selectedItem = selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <>
      <Button
        aria-describedby="emoji-label"
        aria-label="Choose emoji"
        className="EmojiPicker-button"
        id={buttonId}
        ref={refs.setReference}
        style={{
          background: open ? "rgba(0, 10, 20, 0.1)" : "",
        }}
        variant="input"
        {...getReferenceProps()}
      >
        {selectedItem?.value ? "🙂" : placeholder}
      </Button>
      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              aria-labelledby={buttonId}
              className="EmojiPicker"
              ref={refs.setFloating}
              style={{
                position: strategy,
                left: x ?? 0,
                top: y ?? 0,
              }}
              {...floatingProps}
            >
              <input
                aria-autocomplete="list"
                aria-controls={
                  filteredItems.length === 0 ? noResultsId : listboxId
                }
                aria-expanded="true"
                className="EmojiPicker-search"
                placeholder="Search emoji"
                role="combobox"
                type="text"
                value={search}
                {...getInputProps({
                  onChange: handleInputChange,
                  onKeyDown: handleKeyDown,
                })}
              />

              {filteredItems.length === 0 && (
                <p
                  aria-atomic="true"
                  aria-live="assertive"
                  className="EmojiPicker-no-results"
                  id={noResultsId}
                  key={search}
                  role="region"
                >
                  No results.
                </p>
              )}
              {filteredItems.length > 0 && (
                <div
                  id={listboxId}
                  role="listbox"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 40px 40px",
                  }}
                >
                  {filteredItems.map(({ label, value }, index) => (
                    <Option
                      active={activeIndex === index}
                      key={label}
                      name={label}
                      ref={(node) => {
                        listRef.current[index] = node;
                      }}
                      selected={selectedItem?.label === label}
                      {...getItemProps({
                        onClick: () => handleItemClick(index),
                      })}
                    >
                      {label}
                    </Option>
                  ))}
                </div>
              )}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}

Select.displayName = "Select";
