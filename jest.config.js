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
  testMatch: ["<rootDir>/tests/**/*.spec.ts", "**/?(*.)+(spec|test).ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/rules/**/*.ts",
    "src/services/**/*.ts",
    "src/controllers/**/*.ts",
    "src/routes/**/*.ts",
    "src/app.ts",
  ],
  coveragePathIgnorePatterns: ["src/server.ts"],
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
