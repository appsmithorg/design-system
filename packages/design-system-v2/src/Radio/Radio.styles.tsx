import styled, { css } from "styled-components";

const Variables = css`
  --radio-color-border: var(--ads-v2-color-border);
  --radio-color-background: transparent;
  --radio-color-border-checked: var(--ads-v2-color-bg-brand-secondary);
  --radio-color-check-mark: var(--ads-v2-color-bg-brand-secondary);
  --radio-color-label: var(--ads-v2-color-fg);
`;

const BasicStyles = css`
  input[type="radio"] {
    display: none;
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: 24px;
    font-family: var(--ads-v2-font-family);
    color: var(--radio-color-label);
  }

  label::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
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
    width: 16px;
    height: 16px;
    background-color: var(--radio-color-check-mark);
    border: 1px solid var(--radio-color-check-mark);
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%) scale(0);
    transition: transform 200ms ease;
  }

  input[type="radio"]:checked + label::before {
    border-color: var(--radio-color-border-checked);
  }

  input[type="radio"]:checked + label::after {
    transform: translateY(-50%) scale(0.55);
  }
`;

export const RadioComponent = styled.div<{
  disabled?: boolean;
}>`
  ${Variables}

  ${({ disabled }) => disabled && `opacity: 0.6;`}

  ${BasicStyles}
`;
