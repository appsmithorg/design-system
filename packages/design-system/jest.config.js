module.exports = {
  roots: ["<rootDir>/src"], // Set this to the directory containing your source code
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for transforming TypeScript files
    "\\.(svg)$": "<rootDir>/fileTransformer.js", // Create this file for SVG handling (see below)
  },
  // moduleNameMapper: {
  // '\\.(css|scss|sass)$': 'identity-obj-proxy', // Match CSS imports to the proxy
  // },
};
