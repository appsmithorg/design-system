import styled, { css } from "styled-components";

const Variables = css`
  --radio-color-border: var(--ads-v2-color-border);
  --radio-color-background: var(--ads-v2-color-bg);
  --radio-color-check-mark: var(--ads-v2-color-bg-brand-secondary);
  --radio-color-label: var(--ads-v2-color-fg);
`;

const BasicStyles = css`
  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: var(--ads-v2-spaces-7);
    font-family: var(--ads-v2-font-family);
    color: var(--radio-color-label);
  }

  label::before {
    content: "";
    position: absolute;
    width: var(--ads-v2-spaces-5);
    height: var(--ads-v2-spaces-5);
    background-color: var(--radio-color-background);
    border: 1px solid var(--radio-color-border);
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: border-color 400ms ease;
  }

  label::after {
    content: "";
    position: absolute;
    width: var(--ads-v2-spaces-5);
    height: var(--ads-v2-spaces-5);
    background-color: var(--radio-color-check-mark);
    border: 1px solid var(--radio-color-check-mark);
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%) scale(0);
    transition: transform 200ms ease;
  }

  input[type="radio"]:checked + label::before {
    --radio-color-border: var(--ads-v2-color-border-brand-secondary);
  }

  input[type="radio"]:checked + label::after {
    transform: translateY(-50%) scale(0.55);
  }

  /* unchecked hover - outer circle */
  input[type="radio"]:hover:not(:disabled) + label::before {
    --radio-color-border: var(--ads-v2-color-border-emphasis);
  }
  /* checked hover - outer circle */
  input[type="radio"]:checked:hover:not(:disabled) + label::before {
    --radio-color-border: var(--ads-v2-color-border-brand-secondary-emphasis);
  }

  /* checked hover - inner circle */
  input[type="radio"]:checked:hover:not(:disabled) + label::after {
    --radio-color-check-mark: var(
      --ads-v2-color-border-brand-secondary-emphasis
    );
  }
`;

export const StyledRadio = styled.label<{
  disabled?: boolean;
  isFocusVisible?: boolean;
}>`
  ${Variables}

  ${BasicStyles}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    & > * {
      cursor: not-allowed !important;
    }
  `}

  ${({ isFocusVisible }) =>
    isFocusVisible &&
    `
    input[type="radio"]:checked + label::before {
      outline: var(--ads-v2-border-width-outline) solid var(--ads-v2-color-outline);
      outline-offset: var(--ads-v2-offset-outline);
    }
    `}
`;

export const StyledRadioGroup = styled.div<{
  UNSAFE_gap?: string;
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ UNSAFE_gap }) => UNSAFE_gap || "var(--ads-v2-spaces-6)"};
  padding-left: var(--ads-v2-spaces-1);

  /* This Aria field is added by react-aria library */
  &[aria-orientation="vertical"] {
    flex-direction: column;
  }

  &[aria-orientation="horizontal"] {
    flex-direction: row;
  }

  &[aria-disabled="true"] {
    opacity: 0.6;
    & * {
      cursor: not-allowed !important;
    }
  }
`;

export const RadioDescription = styled.div`
  margin-top: var(--ads-v2-spaces-2);
  padding-left: var(--ads-v2-spaces-7);
  font-family: var(--ads-v2-font-family);
`;
