import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { TagProps } from "./Tag.types";
import { StyledTag } from "./Tag.styles";
import { Text } from "../Text";

/**
 * TODO:
 * - add isClosable
 * @param children
 * @param rest
 * @constructor
 */
function Tag({ children, ...rest }: TagProps) {
  return (
    <StyledTag {...rest}>
      <Text kind="body-s">{children}</Text>
    </StyledTag>
  );
}

Tag.displayName = "Tag";

Tag.defaultProps = {
  size: "small",
};

export { Tag };
