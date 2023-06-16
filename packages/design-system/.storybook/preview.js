import React from "react";
import "normalize.css";
import "./styles.css";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    source: { excludeDecorators: true },
  },
};

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

export const decorators = [
  (Story) => <div style={containerStyle}>{Story()}</div>,
];

addDecorator((Story) => (
  <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
));
