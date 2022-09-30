import { addons } from "@storybook/addons";
import appsmithTheme from "./AppsmithTheme";

addons.setConfig({
  theme: appsmithTheme,
  selectedPanel: "ds-test"
});