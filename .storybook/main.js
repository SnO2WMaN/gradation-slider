const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-a11y/register",
  ],
  webpackFinal: async (config) => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias["~"] = path.resolve(process.cwd(), "src");
    config.resolve.alias["~~"] = path.resolve(process.cwd());
    /* eslint-enable no-param-reassign */
    return config;
  },
};
