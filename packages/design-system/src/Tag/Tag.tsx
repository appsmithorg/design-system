import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { TagProps } from "./Tag.types";
import { StyledTag } from "./Tag.styles";

/**
 * TODO:
 * - use text
 * - add isClosable
 * @param children
 * @param rest
 * @constructor
 */
function Tag({ children, ...rest }: TagProps) {
  return <StyledTag {...rest}>{children}</StyledTag>;
}

Tag.displayName = "Tag";

Tag.defaultProps = {};

export { Tag };
