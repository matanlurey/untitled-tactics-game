/* eslint-disable @typescript-eslint/no-var-requires */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };
  return rewireReactHotLoader(config, env);
};
