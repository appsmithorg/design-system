import styled, { css } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Text } from "../Text";
import { ToastProps } from "./Toast.types";
import { Button } from "../Button";

const Variables = css`
  // All the --toastify prefixed variables are changing tokens defined in react-toastify
  // For a complete list, see https://fkhadra.github.io/react-toastify/how-to-style/#override-css-variables

  --toastify-toast-width: 320px;
  --toastify-toast-background: var(--ads-v2-color-bg);
  --toastify-toast-min-height: 2.5rem;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: var(--ads-v2-font-family);
  --toastify-z-index: 9999;

  --toastify-text-color-light: var(--ads-v2-color-fg-emphasis);
`;

export const StyledToast = styled(ToastContainer).attrs<ToastProps>({
  toastClassName: "toast",
  bodyClassName: "body",
})`
  .toast {
    border: solid 1px var(--ads-v2-color-border);
    padding: var(--ads-v2-spaces-3);
  }

  .body {
    padding: 0;
  }

  .Toastify__toast {
    // TODO: Move box-shadow to theme once https://www.notion.so/appsmith/Box-shadows-enumerate-name-and-document-29c2d8490b4c4a42b4f381d82e761b87 is complete
    box-shadow: 0 1.9px 7px 0 rgba(42, 42, 42, 0.01),
      0 15px 56px 0 rgba(42, 42, 42, 0.07);
  }

  .Toastify__toast-icon {
    margin-right: var(--ads-v2-spaces-3);
    align-self: flex-start;
    width: 1rem;
  }

  ${Variables}
`;

export const ToastBody = styled(Text)`
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--ads-v2-color-fg-emphasis);
`;

export const StyledButton = styled(Button)`
  margin-right: -var(--ads-v2-spaces-3);
  margin-left: var(--ads-v2-spaces-3);

  align-self: center;
`;
