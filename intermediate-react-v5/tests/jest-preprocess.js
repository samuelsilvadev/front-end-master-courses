const babelJest = require("babel-jest");

const babelOptions = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};

module.exports = babelJest.createTransformer(babelOptions);
