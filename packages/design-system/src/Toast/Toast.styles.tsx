import styled, { css } from "styled-components";
import { ToastContainer, ToastOptions } from "react-toastify";
import { Text } from "../Text";
import { ToastProps } from "./Toast.types";

const Variables = css`
  // All the --toastify prefixed variables are changing tokens defined in react-toastify
  // For a complete list, see https://fkhadra.github.io/react-toastify/how-to-style/#override-css-variables

  --toastify-color-info: var(--ads-v2-color-fg-information);
  --toastify-color-success: var(--ads-v2-color-fg-success);
  --toastify-color-warning: var(--ads-v2-color-fg-warning);
  --toastify-color-error: var(--ads-v2-color-fg-danger);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: var(--ads-v2-color-bg);
  --toastify-toast-min-height: 2.5rem;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: var(--ads-v2-font-family);
  --toastify-z-index: 9999;

  --toastify-text-color-light: var(--ads-v2-color-fg);

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // TODO: Move box-shadow to theme once https://www.notion.so/appsmith/Box-shadows-enumerate-name-and-document-29c2d8490b4c4a42b4f381d82e761b87 is complete
  --ads-v2-toast-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3),
    0 8px 12px 0 rgba(0, 0, 0, 0.15);
`;

export const StyledToast = styled(ToastContainer).attrs<ToastProps>({
  toastClassName: "toast",
  bodyClassName: "body",
})`
  .toast {
    box-shadow: var(--ads-v2-toast-box-shadow);
    padding: var(--ads-v2-spaces-3);
  }

  .body {
    padding: 0;
  }

  .Toastify__toast-icon {
    margin-right: var(--ads-v2-spaces-3);
    align-items: flex-start;
    width: 1rem;
  }

  ${Variables}
`;

export const ToastBody = styled(Text)`
  // TODO: add props for the typography style this text will be following instead
  //  of the font styles here.
  font-size: 12px;
  line-height: 1.4;
  // font-weight: 500; // Acc to Zeplin, but it doesn't look good.

  padding: 0;
  display: flex;
  align-items: flex-start;
`;
