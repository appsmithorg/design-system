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

export const RadioComponent = styled.label<{
  disabled?: boolean;
}>`
  ${Variables}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  `}

  ${BasicStyles}
`;

export const StyledRadioGroup = styled.div<{
  direction?: "row" | "column";
  gap?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ gap }) => gap || "var(--ads-v2-spaces-6)"};
`;

export const RadioDescription = styled.div`
  margin-top: var(--ads-v2-spaces-2);
  padding-left: var(--ads-v2-spaces-7);
  font-family: var(--ads-v2-font-family);
`;
