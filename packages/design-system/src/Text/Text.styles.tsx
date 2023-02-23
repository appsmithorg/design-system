import styled, { css } from "styled-components";
import { Kind } from "./Text.types";

const Variables = css`
  --font-family: var(--ads-v2-font-family);
  --color: var(--ads-v2-color-fg);

  --font-size: var(--ads-v2-p-font-size);
  --font-weight: var(--ads-v2-p-font-weight);
  --line-height: var(--ads-v2-p-line-height);
  --letter-spacing: var(--ads-v2-p-letter-spacing);
`;

const Kinds = {
  error: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
    --color: var(--ads-v2-color-fg-error);
  `,
  // The default, span, uses the same values as p for now.
  span: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
  `,
  code: css`
    --font-family: var(--ads-v2-font-family-code);
    --font-size: var(--ads-v2-font-size-4);
    --font-weight: var(--ads-v2-font-weight-normal);
    --line-height: var(--ads-v2-line-height-0);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "body-s": css`
    --font-size: var(--ads-v2-font-size-2);
    --font-weight: var(--ads-v2-font-weight-normal);
    --line-height: var(--ads-v2-line-height-1);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "body-m": css`
    --font-size: var(--ads-v2-font-size-4);
    --font-weight: var(--ads-v2-font-weight-normal);
    --line-height: var(--ads-v2-line-height-3);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "action-l": css`
    --font-size: var(--ads-v2-font-size-6);
    --font-weight: var(--ads-v2-font-weight-extra-bold);
    --line-height: var(--ads-v2-line-height-4);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "action-m": css`
    --font-size: var(--ads-v2-font-size-4);
    --font-weight: var(--ads-v2-font-weight-extra-bold);
    --line-height: var(--ads-v2-line-height-3);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "action-s": css`
    --font-size: var(--ads-v2-font-size-2);
    --font-weight: var(--ads-v2-font-weight-bold);
    --line-height: var(--ads-v2-line-height-1);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "heading-xl": css`
    --font-size: var(--ads-v2-font-size-14);
    --font-weight: var(--ads-v2-font-weight-extra-bold);
    --line-height: var(--ads-v2-line-height-3);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "heading-l": css`
    --font-size: var(--ads-v2-font-size-12);
    --font-weight: var(--ads-v2-font-weight-extra-bold);
    --line-height: var(--ads-v2-line-height-1);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "heading-m": css`
    --font-size: var(--ads-v2-font-size-10);
    --font-weight: var(--ads-v2-font-weight-extra-bold);
    --line-height: var(--ads-v2-line-height-2);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "heading-s": css`
    --font-size: var(--ads-v2-font-size-6);
    --font-weight: var(--ads-v2-font-weight-bold);
    --line-height: var(--ads-v2-line-height-4);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
  "heading-xs": css`
    --font-size: var(--ads-v2-font-size-4);
    --font-weight: var(--ads-v2-font-weight-bold);
    --line-height: var(--ads-v2-line-height-5);
    --letter-spacing: var(--ads-v2-letter-spacing-0);
  `,
};

export const StyledText = styled.span<{
  color?: string;
  kind?: Kind;
}>`
  ${Variables}

  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}

  /* Base style */
  font-family: var(--font-family);
  color: ${({ color }) => (color ? color : "var(--color)")};

  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
`;
