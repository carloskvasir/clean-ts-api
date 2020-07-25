module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
