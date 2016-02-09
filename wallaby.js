module.exports = function () {
  return {
    files: [
      'src/**/*.ts',
      'test/**/*.ts',
      '!test/**/*spec.ts'
    ],
    tests: ['test/**/*spec.ts'],
    env: {type: 'node'}
  };
};
