import styled, { css } from "styled-components";
import { ToggleIconClassName } from "./ToggleButton.constants";
import { ToggleButtonSizes } from "./ToggleButton.types";

const Variables = css`
  --toggle-padding: var(--ads-v2-spaces-2);
  --toggle-color-border: var(--ads-v2-colors-control-field-default-border);
  --toggle-color-background: var(--ads-v2-colors-control-field-default-bg);
  --toggle-color-icon: var(--ads-v2-colors-control-icon-default-fg);
  --toggle-height: var(--ads-v2-spaces-5);
  --toggle-width: var(--ads-v2-spaces-5);
`;

const Sizes = {
  sm: css`
    --toggle-padding: var(--ads-v2-spaces-1);
    --toggle-height: var(--ads-v2-spaces-5);
    --toggle-width: var(--ads-v2-spaces-5);
  `,
  md: css`
    --toggle-padding: var(--ads-v2-spaces-2);
    --toggle-height: var(--ads-v2-spaces-7);
    --toggle-width: var(--ads-v2-spaces-7);
  `,
  lg: css`
    --toggle-padding: var(--ads-v2-spaces-2);
    --toggle-height: var(--ads-v2-spaces-8);
    --toggle-width: var(--ads-v2-spaces-8);
  `,
};

export const StyledToggleButton = styled.button<{
  isDisabled?: boolean;
  isSelected?: boolean;
  size?: ToggleButtonSizes;
  kind?: "primary" | "secondary";
}>`
  ${Variables};

  ${({ size }) => size && Sizes[size]};

  padding: var(--toggle-padding);
  border-radius: var(--ads-v2-border-radius);
  cursor: pointer;
  height: var(--toggle-height);
  width: var(--toggle-width);

  & > .${ToggleIconClassName} {
    height: 100%;
    width: 100%;
  }

  &:hover:enabled {
    --toggle-color-background: var(--ads-v2-colors-control-field-hover-bg);
    --toggle-color-border: var(--ads-v2-colors-control-field-hover-border);
  }

  ${({ isSelected }) =>
    isSelected &&
    `--toggle-color-background: var(--ads-v2-colors-control-field-checked-bg);
     --toggle-color-border: var(--ads-v2-colors-control-field-checked-border);
     --toggle-color-icon: var(--ads-v2-colors-control-icon-checked-fg);

     &:hover:enabled {
       --toggle-color-background: var(--ads-v2-colors-control-field-checked-hover-bg);
       --toggle-color-border: var(--ads-v2-colors-control-field-checked-hover-border);
     }
  `}

  &:focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
  &:disabled {
    opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed;
  }

  border: 1px solid var(--toggle-color-border);
  background-color: var(--toggle-color-background);
  & .${ToggleIconClassName} {
    color: var(--toggle-color-icon);
  }

  ${({ kind, isSelected }) => {
    if (kind !== "primary") return;
    let css = `
      --toggle-color-background: var( --ads-v2-color-bg-emphasis);
      --toggle-color-border: var( --ads-v2-color-bg-emphasis);
      --toggle-color-icon: var(--ads-v2-colors-action-tertiary-label-default-fg);
      &:hover:enabled {
        --toggle-color-background: var( --ads-v2-color-bg-emphasis-plus);
        --toggle-color-border: var( --ads-v2-color-bg-emphasis-plus);
        --toggle-color-icon: var(--ads-v2-color-fg-on-brand);
      }
    `;

    if (isSelected) {
      css += `
      --toggle-color-background: var(
        --ads-v2-color-bg-brand-secondary
      );
      --toggle-color-border: var(
        --ads-v2-color-bg-brand-secondary
      );
      --toggle-color-icon: var(--ads-v2-color-fg-on-brand);
 
      &:hover:enabled {
        --toggle-color-background: var(
          --ads-v2-color-bg-brand-secondary-emphasis
        );
        --toggle-color-border: var(
          --ads-v2-color-bg-brand-secondary-emphasis
        );
      }
      `;
    }
    return css;
  }}
`;
