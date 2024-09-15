module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",  // Transforms JavaScript and JSX files using babel-jest
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)"  // Allow Jest to process axios in node_modules
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"  // Optional: Mock out CSS imports for Jest
    },
    testEnvironment: "jsdom",  // Use jsdom to simulate a browser environment for React components
  };
  