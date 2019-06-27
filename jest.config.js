module.exports = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/.circleci/", "<rootDir>/cypress/", "<rootDir>/node_modules/"],
  testResultsProcessor: "jest-sonar-reporter"
};
