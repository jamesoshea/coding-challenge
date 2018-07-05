module.exports = {
  presets: ["@vue/app"],
  env: {
    test: {
      plugins: [
        "env",
        "stage-2",
        "transform-es2015-modules-commonjs",
        "babel-plugin-transform-es2015-modules-commonjs",
      ],
    },
  },
};
