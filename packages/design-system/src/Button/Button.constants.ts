import { CLASS_NAME_PREFIX } from "__config__/constants";

/**
 * Class naming concepts:
 * Main prefix and component name will be separated by a single hyphen.
 * Sub-elements will be separated by double underscores.
 * rest will be separated by single hyphens.
 *
 * Example:
 * ads-v2-button
 * ads-v2-button__loading
 * ads-v2-button__loading-icon
 * ads-v2-button__content
 * ads-v2-button__content-children
 * ads-v2-button__content-icon-start
 * ads-v2-button__content-icon-end
 */

// classnames
export const ButtonClassName = CLASS_NAME_PREFIX + "-button";

export const ButtonLoadingClassName = ButtonClassName + "__loading";
export const ButtonLoadingIconClassName = ButtonLoadingClassName + "-icon";

export const ButtonContentClassName = ButtonClassName + "__content";
export const ButtonContentChildrenClassName =
  ButtonContentClassName + "-children";
export const ButtonContentIconStartClassName =
  ButtonContentClassName + "-icon-start";
export const ButtonContentIconEndClassName =
  ButtonContentClassName + "-icon-end";
