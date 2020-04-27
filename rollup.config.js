import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './build/helper.js',
    format: 'umd',
    name: 'Helper',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
};
