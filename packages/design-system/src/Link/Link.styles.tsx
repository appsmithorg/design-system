import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Variables = css`
  --color: var(--ads-v2-color-fg-brand);
`;

export const StyledLink = styled(RouterLink)`
  ${Variables}

  font-family: var(--ads-v2-font-family);
  color: var(--color);
`;
