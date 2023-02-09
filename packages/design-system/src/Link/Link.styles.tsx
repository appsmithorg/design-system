import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "../Icon";

const Variables = css`
  --color: var(--ads-v2-color-fg-brand);
`;

export const StyledLink = styled(RouterLink)`
  ${Variables}
  ${Variables};


  font-family: var(--ads-v2-font-family);
  color: var(--color);

  text-decoration: none;

  display: flex;
  align-content: center;
`;

export const StyledIcon = styled(Icon)`
  margin-left: var(--ads-v2-spaces-2);
`;
