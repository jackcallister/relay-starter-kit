module.exports = {
  entry: './src/client/Client.jsx',

  output: {
    path: './dist/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel', query: { plugins: ['./scripts/babelRelayPlugin'] } },
    ]
  },
};
