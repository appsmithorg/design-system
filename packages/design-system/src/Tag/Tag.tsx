import React from "react";

import { TagProps } from "./Tag.types";
import { StyledIcon, StyledTag } from "./Tag.styles";
import { Text } from "../Text";

/*TODO:
 * It is unclear how the tag component can be interacted with using the keyboard.
 * Should just the icon have a focus style? Should the whole tag have a focus style?
 * Should the escape key dismiss the tag? Or should the enter key dismiss the tag when the icon is focused?
 */
function Tag({ children, isClosable, onClose, ...rest }: TagProps) {
  const [isClosed, setClosed] = React.useState(false);

  const closeHandler = () => {
    setClosed(true);
    onClose && onClose();
  };

  return (
    <StyledTag isClosed={isClosed} {...rest}>
      <Text kind="body-s">{children}</Text>
      {isClosable && (
        <StyledIcon name="close-line" onClick={closeHandler} size="sm" />
      )}
    </StyledTag>
  );
}

Tag.displayName = "Tag";

Tag.defaultProps = {
  size: "sm",
  isClosable: true,
};

export { Tag };
