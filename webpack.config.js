const path = require('path')
const nodeExternals = require('webpack-node-externals')

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

module.exports = {
  mode: env,
  target: 'node',
  devtool: isDevelopment ? 'source-map' : false,
  entry: {
    'public/js/client': './src/client.tsx',
    'dist/server': './src/server.ts',
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
}


