import React from "react";
import {
  BackgroundsProps as BackgroundProps,
  BordersProps as BorderProps,
  EffectsProps,
  ITheme,
  InteractivityProps,
  LayoutProps,
  Size,
  SizingProps,
  SpaceProps,
  SystemProp,
  Theme,
  TransformsProps,
  FlexboxesProps,
} from "@xstyled/styled-components";
import * as CSS from "csstype";

interface WidthProps<T extends ITheme = Theme> {
  width?: SystemProp<Size<T> | CSS.Property.Width, T>;
}

interface HeightProps<T extends ITheme = Theme> {
  height?: SystemProp<Size<T> | CSS.Property.Height, T>;
}

interface DisplayProps {
  display?: "flex" | "inline-flex";
}

export type FlexProps = WidthProps &
  HeightProps &
  SpaceProps &
  Omit<LayoutProps, "display"> &
  SizingProps &
  BackgroundProps &
  BorderProps &
  InteractivityProps &
  EffectsProps &
  TransformsProps &
  FlexboxesProps &
  DisplayProps &
  React.HTMLAttributes<HTMLDivElement>;
