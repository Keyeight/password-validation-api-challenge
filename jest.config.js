const { createDefaultPreset } = require("ts-jest");

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  testMatch: [
  "<rootDir>/tests/**/*.spec.ts", 
  "**/?(*.)+(spec|test).ts"
],
  collectCoverage: true,
  collectCoverageFrom: ["src/rules/**/*.ts", "src/services/**/*.ts"],
  coveragePathIgnorePatterns: [],
  rootDir: ".",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
