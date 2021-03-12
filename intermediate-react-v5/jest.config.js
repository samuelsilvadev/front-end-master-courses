module.exports = {
  verbose: true,
  transform: {
    "\\.[t]sx?$": "<rootDir>/tests/jest-preprocess.js",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/jest-setup.js"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
};
