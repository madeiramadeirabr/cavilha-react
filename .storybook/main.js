const path = require("path");

module.exports = {
  stories: ['../packages/**/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [path.resolve(__dirname, '../packages')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register'
  ]
};



