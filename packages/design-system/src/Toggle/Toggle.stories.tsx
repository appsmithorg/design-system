import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Toggle as ToggleComponent } from "./Toggle";

export default {
  title: "Design System/Toggle",
  component: ToggleComponent,
} as ComponentMeta<typeof ToggleComponent>;

export const Toggle = <ToggleComponent />;
