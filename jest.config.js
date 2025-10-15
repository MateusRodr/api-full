const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  setupFiles: ["dotenv/config", "reflect-metadata"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/?(*.)+(spec|test).ts"],
  clearMocks: true,
};
