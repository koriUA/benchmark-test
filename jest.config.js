module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.js?(x)',
    '!src/**/*.story.js?(x)',
    '!src/**/stories/*.js?(x)',
  ],
  //  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/coverage/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/config/', '/coverage/'],
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  globals: {
    __DEV__: false,
  },
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/**/*.(spec|test).js?(x)'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.s?css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  //  testPathIgnorePatterns: ['/config/', '/lib/'],
  testPathIgnorePatterns: ['/config/'],
  transformIgnorePatterns: [
    'node_modules/(?!(@carbon/charts)).+(.jsx?)',
    '__mocks__/copy-to-clipboard.js',
  ],

  moduleFileExtensions: ['js', 'json', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
