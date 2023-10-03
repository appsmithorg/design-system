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
  FlexboxGridsProps,
  GridsProps,
} from "@xstyled/styled-components";
import * as CSS from "csstype";

interface WidthProps<T extends ITheme = Theme> {
  width?: SystemProp<Size<T> | CSS.Property.Width, T>;
}

interface HeightProps<T extends ITheme = Theme> {
  height?: SystemProp<Size<T> | CSS.Property.Height, T>;
}

export type BoxProps = WidthProps &
  HeightProps &
  SpaceProps &
  LayoutProps &
  SizingProps &
  BackgroundProps &
  BorderProps &
  InteractivityProps &
  EffectsProps &
  TransformsProps &
  FlexboxesProps &
  FlexboxGridsProps &
  GridsProps &
  React.HTMLAttributes<HTMLDivElement>;
