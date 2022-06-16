const path = require("path");

async function supportCssModules(config) {

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

  return config
}

module.exports = {
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
  ],
  "framework": "@storybook/react",
  "webpackFinal": supportCssModules,
}