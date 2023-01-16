import styled, { css } from "styled-components";

const Variables = css`
  --text-input-color-border: var(--ads-v2-color-border);
  --text-input-color-border-hover: var(--ads-v2-color-border-emphasis);
  --text-input-color-border-active: var(--ads-v2-color-border-emphasis-plus);
  --text-input-border-radius: var(--ads-v2-border-radius);
  --text-input-width-border: 1px;
  --text-input-padding: var(--ads-v2-spaces-4);
  --text-input-width: 100%;
  --text-input-color-input: var(--ads-v2-color-fg);
`;

export const MainContainer = styled.div<{
  labelPosition?: "top" | "left";
}>`
  ${Variables}

  display: flex;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === "left" ? "row" : "column"};
  gap: ${({ labelPosition }) =>
    labelPosition === "left"
      ? "var(--ads-v2-spaces-4)"
      : "var(--ads-v2-spaces-2)"};
  font-family: var(--ads-v2-font-family);
  width: var(--text-input-width);
  align-items: baseline;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ads-v2-spaces-2);
  width: 100%;
  font-size: 14px;
`;

export const StyledTextInput = styled.input`
  ${Variables}

  background-color: var(--ads-v2-color-background);
  border: var(--text-input-width-border) solid var(--text-input-color-border);
  border-radius: var(--text-input-border-radius);
  color: var(--text-input-color-input);
  font-family: var(--ads-v2-font-family);
  padding: var(--text-input-padding);
`;

export const Label = styled.label`
  font-size: 13px;
  color: var(--ads-v2-color-fg-muted);

  & > span {
    color: var(--ads-v2-color-fg-error);
    margin-left: var(--ads-v2-spaces-1);
  }
`;

export const Description = styled.div`
  font-size: 13px;
  color: var(--ads-v2-color-fg-muted);
`;

export const ErrorMessage = styled.div`
  color: var(--ads-v2-color-fg-error);
  font-size: 13px;
`;
