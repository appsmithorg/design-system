import React from "react";
import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: "centered",
};

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

export const decorators = [
  (Story) => (
    <div style={containerStyle}>
      <Story />
    </div>
  ),
];