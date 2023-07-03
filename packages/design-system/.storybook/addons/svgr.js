const config = {
  framework: "@storybook/react-webpack5",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config) => {
    const imageRule = config.module.rules.find((rule) =>
      rule.test?.test(".svg"),
    );
    imageRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

export default config;
