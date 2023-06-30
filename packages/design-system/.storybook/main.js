const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

async function webpackConfig(config, options) {

  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: { presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"] }
    }
  })

  config.resolve.plugins = config.resolve.plugins || [];

  config.resolve.plugins.push(new TsconfigPathsPlugin());

  // Use SVGR for SVGs (based on https://github.com/storybookjs/storybook/issues/18557)
  // 1. Disable whatever is already set to load SVGs
  config.module.rules
    .filter((rule) => rule.test?.test(".svg"))
    .forEach((rule) => (rule.exclude = /\.svg$/i));

  // 2. Add SVGR instead
  config.module.rules.push({
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack5',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    }, "file-loader"],
    issuer: /\.(ts|tsx|js|jsx|md|mdx)$/,
  });

  // return config
  return {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [new TsconfigPathsPlugin()]
    }
  };
}

module.exports = {
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
    "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "storybook-zeplin/register",
  ],
  webpackFinal: webpackConfig,
  features: { buildStoriesJson: true },
}

