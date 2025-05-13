const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// iOS Bundling failed
// The package at "node_modules/ws/lib/stream.js" attempted to import the Node standard library module "stream".
// It failed because the native React runtime does not include the Node standard library.
// set the config to fix the bundling error for @supabase/supabase-js
config.resolver.unstable_enablePackageExports = false;

// Configure SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

module.exports = withNativeWind(config, { input: './global.css' });