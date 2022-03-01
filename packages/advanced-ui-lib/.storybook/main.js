module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        // switch to false to solve the symlink issue
        // symlinks: false
      }
    }
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}
