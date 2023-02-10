import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { TagProps } from "./Tag.types";
import { StyledIcon, StyledTag } from "./Tag.styles";
import { Text } from "../Text";

/*TODO:
 * It is unclear how the tag component can be interacted with using the keyboard.
 * Should just the icon have a focus style? Should the whole tag have a focus style?
 * Should the escape key dismiss the tag? Or should the enter key dismiss the tag when the icon is focused?
 */
function Tag({ children, ...rest }: TagProps) {
  const [isClosed, setClosed] = React.useState(false);
  return (
    <StyledTag isClosed={isClosed} {...rest}>
      <Text kind="body-s">{children}</Text>
      <StyledIcon name="close-line" onClick={() => setClosed(true)} size="md" />
    </StyledTag>
  );
}

Tag.displayName = "Tag";

Tag.defaultProps = {
  size: "small",
};

export { Tag };
