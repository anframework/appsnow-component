var path = require('path');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/Example/Root.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'ANInterface.js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    alias: {
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new TypescriptDeclarationPlugin({ out: 'ANInterface.d.ts' })
  ]
};
