module.exports = {
  roots: ["<rootDir>", "<rootDir>/src"], // Set this to the directory containing your source code
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional: Additional setup
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for transforming TypeScript files
    // '\\.(css|scss|sass)$': 'identity-obj-proxy', // Use identity-obj-proxy for handling CSS modules
    // '\\.(svg)$': '<rootDir>/fileTransformer.js', // Create this file for SVG handling (see below)
  },
  // moduleNameMapper: {
  // "\\.(css|scss|sass)$": "identity-obj-proxy", // Match CSS imports to the proxy
  // },
};
