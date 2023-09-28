import React from "react";

import { BannerProps } from "./Banner.types";
import { StyledBanner } from "./Banner.styles";

function Banner({ link, ...props }: BannerProps) {
  return <StyledBanner links={[link]} {...props} _componentType="banner" />;
}

Banner.displayName = "Banner";

export { Banner };
