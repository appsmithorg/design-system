import styled, { css } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Text } from "../Text";

const Variables = css`
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

// Variant style definitions
const YOUR_VARIANTS = css`
  // Styles for the variants defined in your type
`;

export const StyledToast = styled(ToastContainer).attrs({
  toastClassName: "toast",
  bodyClassName: "body",
})`
  .toast {
    box-shadow: var(--ads-v2-toast-box-shadow);
    padding: 0;
  }

  .body {
    padding: 0;
  }

  ${Variables} /* Variant styles */

  /* Base style */

  /* Additional styles and classes */
`;

export const ToastBody = styled(Text)`

  // TODO: add props for the typography style this text will be following instead
  //  of the font styles here.
  font-size: 12px;
  line-height: 1.4;
  // font-weight: 500; // Acc to Zeplin

  padding: 0.5rem;
`;
