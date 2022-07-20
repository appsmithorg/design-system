import tinycolor from "tinycolor2";
import { TypographyKeys, typography } from "Constants/typography";

export const hexToRgb = (
  hex: string,
): {
  r: number;
  g: number;
  b: number;
} => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: -1,
        g: -1,
        b: -1,
      };
};

export const hexToRgba = (color: string, alpha: number) => {
  const value = hexToRgb(color);
  return `rgba(${value.r}, ${value.g}, ${value.b}, ${alpha});`;
};

export const lighten = (color: string, amount: number) => {
  return tinycolor(color)
    .lighten(amount)
    .toString();
};

export const darken = (color: string, amount: number) => {
  return tinycolor(color)
    .darken(amount)
    .toString();
};

export const isEmail = (value: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

export const getTypographyByKey = (key: TypographyKeys) => `
  font-weight: ${typography[key].fontWeight};
  font-size: ${typography[key].fontSize}px;
  line-height: ${typography[key].lineHeight}px;
  letter-spacing: ${typography[key].letterSpacing}px;
`;
