const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import remarkGfm from 'remark-gfm';
async function webpackConfig(config, options) {
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  });
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

  // Use SVGR for SVGs (based on https://github.com/storybookjs/storybook/issues/18557)
  // 1. Disable whatever is already set to load SVGs
  config.module.rules
    .filter((rule) => rule.test?.test(".svg"))
    .forEach((rule) => (rule.exclude = /\.svg$/i));

  // 2. Add SVGR instead
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      },
      {
        loader: "file-loader",
        options: {
          name: "static/media/[path][name].[ext]",
        },
      },
    ],
    type: "javascript/auto",
    issuer: {
      and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
    },
  });
  return {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [new TsconfigPathsPlugin()],
    },
  };
}
module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: [
    "../src/Introduction.mdx",
    "../src/DesignTokens.mdx",
    "../src/Typography.mdx",
    "../src/Colors.mdx",
    "../src/Space.mdx",
    "../src/FAQs.mdx",
    "../src/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-zeplin/register",
  ],
  staticDirs: ["../src/__assets__"],
  webpackFinal: webpackConfig,
  features: {
    buildStoriesJson: true,
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
};
