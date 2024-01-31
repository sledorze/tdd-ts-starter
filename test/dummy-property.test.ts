import * as fc from 'fast-check';

describe.skip('The test suite', () => {
  it('run property based testing', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        return str.length !== 0;
      })
    );
  });
});
