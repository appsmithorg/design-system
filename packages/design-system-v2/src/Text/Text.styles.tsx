import styled, { css } from "styled-components";
import { Kind } from "./Text.types";

const TypographyScales = css`
  --ads-v2-h1-font-size: var(--ads-v2-font-size-10);
  --ads-v2-h1-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h1-line-height: var(--ads-v2-line-height-8);
  --ads-v2-h1-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h2-font-size: var(--ads-v2-font-size-8);
  --ads-v2-h2-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h2-line-height: var(--ads-v2-line-height-7);
  --ads-v2-h2-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h3-font-size: var(--ads-v2-font-size-7);
  --ads-v2-h3-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h3-line-height: var(--ads-v2-line-height-6);
  --ads-v2-h3-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h4-font-size: var(--ads-v2-font-size-6);
  --ads-v2-h4-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h4-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h4-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h5-font-size: var(--ads-v2-font-size-4);
  --ads-v2-h5-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h5-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h5-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h6-font-size: var(--ads-v2-font-size-2);
  --ads-v2-h6-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h6-line-height: var(--ads-v2-line-height-1);
  --ads-v2-h6-letter-spacing: var(--ads-v2-letter-spacing-3);

  --ads-v2-p-font-size: var(--ads-v2-font-size-4);
  --ads-v2-p-font-weight: var(--ads-v2-font-weight-normal);
  --ads-v2-p-line-height: var(--ads-v2-line-height-3);
  --ads-v2-p-letter-spacing: var(--ads-v2-letter-spacing-0);
`

const Variables = css`
  --font-family: var(--ads-v2-font-family);

  --font-size: var(--ads-v2-p-font-size);
  --font-weight: var(--ads-v2-p-font-weight);
  --line-height: var(--ads-v2-p-line-height);
  --letter-spacing: var(--ads-v2-p-letter-spacing);
`;

const Kinds = {
  span: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
  `,
  p: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
  `,
  h1: css`
    --font-size: var(--ads-v2-h1-font-size);
    --font-weight: var(--ads-v2-h1-font-weight);
    --line-height: var(--ads-v2-h1-line-height);
    --letter-spacing: var(--ads-v2-h1-letter-spacing);
  `,
  h2: css`
    --font-size: var(--ads-v2-h2-font-size);
    --font-weight: var(--ads-v2-h2-font-weight);
    --line-height: var(--ads-v2-h2-line-height);
    --letter-spacing: var(--ads-v2-h2-letter-spacing);
    `,
  h3: css`
    --font-size: var(--ads-v2-h3-font-size);
    --font-weight: var(--ads-v2-h3-font-weight);
    --line-height: var(--ads-v2-h3-line-height);
    --letter-spacing: var(--ads-v2-h3-letter-spacing);
  `,
  h4: css`
    --font-size: var(--ads-v2-h4-font-size);
    --font-weight: var(--ads-v2-h4-font-weight);
    --line-height: var(--ads-v2-h4-line-height);
    --letter-spacing: var(--ads-v2-h4-letter-spacing);
    `,
  h5: css`
    --font-size: var(--ads-v2-h5-font-size);
    --font-weight: var(--ads-v2-h5-font-weight);
    --line-height: var(--ads-v2-h5-line-height);
    --letter-spacing: var(--ads-v2-h5-letter-spacing);
    `,
  h6: css`
    --font-size: var(--ads-v2-h6-font-size);
    --font-weight: var(--ads-v2-h6-font-weight);
    --line-height: var(--ads-v2-h6-line-height);
    --letter-spacing: var(--ads-v2-h6-letter-spacing);
    `,
};

export const StyledText = styled.span<{
  kind?: Kind;
}>`
  ${TypographyScales}
  ${Variables}

  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}

  /* Base style */
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);

`;
