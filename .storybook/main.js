const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config) => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias["~"] = path.resolve(process.cwd(), "src");
    config.resolve.alias["~~"] = path.resolve(process.cwd());
    /* eslint-enable no-param-reassign */
    return config;
  },
};
