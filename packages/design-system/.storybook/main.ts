import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";

async function webpackConfig(config) {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      },
    },
  });

  if (config.resolve.plugins !== undefined) {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin({})];
  }

  return config;
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "./addons/svgr.js"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: webpackConfig,
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
export default config;
