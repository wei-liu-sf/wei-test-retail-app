const path = require('path');
const webpack = require('webpack');



/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "env": (config) => ({
    ...config,
    WEBPACK_TARGET: 'web'
  }),
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "previewHead": (head) => `
    ${head}
    ${'<script>window.WEBPACK_TARGET = "web";</script>'}
  `,
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        DEBUG: false,
        NODE_ENV: `'${process.env.NODE_ENV}'`,
        WEBPACK_TARGET: `'web'`,
        ['global.GENTLY']: false

      })
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      '@salesforce/retail-react-app/app/*': path.resolve(__dirname, '../app/*')
      // Add more explicit aliases as needed
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve('process/browser'),
      'fs': false,
      'path': require.resolve('path-browserify'),
      'os': require.resolve('os-browserify/browser'),
      "stream": require.resolve("stream-browserify") 
    };
    // Ensure nested paths are resolved correctly
    config.resolve.modules = [
      path.resolve(__dirname, '../app'),
      'node_modules'
    ];

    config.resolve = {
      ...config.resolve,
      conditionNames: ['browser', 'require', 'node', 'default'],
    }

    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('svg'))
    );

    config.module.rules = [{
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    },
      ...config.module.rules,
      
    ]
    return config;
  }
};export default config;
