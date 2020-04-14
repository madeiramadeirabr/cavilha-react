const path = require("path");
const SRC_PATH = path.join(__dirname, '../packages');
const STORIES_PATH = path.join(__dirname, '../packages');

const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");


module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: path.resolve(__dirname, '../tsconfig.json')
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
  });

  config.module.rules.push({
    test: /\.sass$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.plugins.push(new TSDocgenPlugin());

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
