import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.es.js',
      format: 'es',
      name: 'element-ui-admin',
    },
    {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'element-ui-admin',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
};
