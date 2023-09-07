import React from "react";
import "normalize.css";
import "./styles.css";
import { MemoryRouter } from "react-router-dom";
import appsmithTheme from "./AppsmithTheme";
import axe from "axe-core";

function enableRulesByTag(tags = []) {
  const allRules = axe.getRules();
  return allRules.map((rule) =>
    tags.some((t) => rule.tags.includes(t))
      ? { id: rule.ruleId, enabled: true }
      : { id: rule.ruleId, enabled: false },
  );
}

// const AxeRules = enableRulesByTag(["wcag2a", "wcag21a", "wcag2aa", "wcag21aaa"]);
const AxeRules = enableRulesByTag(["wcag21a", "wcag21aa", "wcag22aa", "best-practice", "ACT", "cat.*"]);

export const parameters = {
  a11y: {
    config: {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      rules: AxeRules,
    },
  },
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
    canvas: {
      sourceState: "shown",
    },
    theme: appsmithTheme,
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
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <div style={containerStyle}>{Story()}</div>
    </MemoryRouter>
  ),
];
