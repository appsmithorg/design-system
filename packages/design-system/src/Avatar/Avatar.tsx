import React, { ForwardedRef } from "react";
import clsx from "classnames";

import {
  AvatarGroupAvatarProps,
  AvatarGroupProps,
  AvatarProps,
} from "./Avatar.types";
import {
  AvatarMenuItem,
  StyledAvatar,
  StyledAvatarGroup,
} from "./Avatar.styles";
import { Icon } from "Icon";
import {
  AvatarClassName,
  AvatarImageClassName,
  AvatarSvgClassName,
  AvatarLetterClassName,
  AvatarGroupClassName,
} from "./Avatar.constants";
import { Tooltip } from "Tooltip";
import { Menu, MenuItem, MenuTrigger } from "Menu";
import { MenuContent } from "Menu";

const Avatar = React.forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const {
      className,
      firstLetter,
      image,
      label,
      size = "md",
      svgIconName = "user-3-line",
      tooltipPlacement = "bottom",
      ...rest
    } = props;
    return (
      <Tooltip content={label} placement={tooltipPlacement}>
        <StyledAvatar
          aria-label={label}
          className={clsx(AvatarClassName, className)}
          size={size}
          {...rest}
          ref={ref}
        >
          {image && (
            <img alt="avatar" className={AvatarImageClassName} src={image} />
          )}
          {!image && firstLetter && (
            <span className={AvatarSvgClassName}>{firstLetter}</span>
          )}
          {!image && !firstLetter && (
            <Icon
              className={AvatarLetterClassName}
              name={svgIconName}
              size={size}
            />
          )}
        </StyledAvatar>
      </Tooltip>
    );
  },
);

Avatar.displayName = "Avatar";

Avatar.defaultProps = {};

function AvatarGroup(props: AvatarGroupProps) {
  const {
    avatars,
    className,
    maxAvatars = 3,
    size = "md",
    tooltipPlacement = "bottom",
  } = props;
  const mainAvatars = avatars.slice(0, maxAvatars);
  const restAvatars = avatars.slice(maxAvatars);
  return (
    <StyledAvatarGroup className={clsx(AvatarGroupClassName, className)}>
      {mainAvatars.map((avatar: AvatarGroupAvatarProps, index: number) => {
        return (
          <Avatar
            className={avatar.className}
            firstLetter={avatar.firstLetter}
            image={avatar.image}
            key={index.toString()}
            label={avatar.label}
            size={size}
            svgIconName={avatar.svgIconName}
            tooltipPlacement={tooltipPlacement}
          />
        );
      })}
      {restAvatars.length > 1 && (
        <Menu>
          <MenuTrigger>
            <Avatar
              className={clsx(AvatarClassName)}
              firstLetter={`${
                restAvatars.length > 9 ? 9 : restAvatars.length
              }+`}
              label="Show More"
              size={size}
              tooltipPlacement={tooltipPlacement}
            />
          </MenuTrigger>
          <MenuContent loop>
            {restAvatars.map(
              (avatar: AvatarGroupAvatarProps, index: number) => {
                return (
                  <MenuItem key={index.toString()} size={size}>
                    <AvatarMenuItem>
                      <Avatar
                        className={avatar.className}
                        firstLetter={avatar.firstLetter}
                        image={avatar.image}
                        label={avatar.label}
                        size={size}
                        svgIconName={avatar.svgIconName}
                        tooltipPlacement={tooltipPlacement}
                      />
                      {avatar.label}
                    </AvatarMenuItem>
                  </MenuItem>
                );
              },
            )}
          </MenuContent>
        </Menu>
      )}
    </StyledAvatarGroup>
  );
}

export { Avatar, AvatarGroup };
