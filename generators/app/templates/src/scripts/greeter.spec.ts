import { Greeter } from './greeter';

describe('Greeter', () => {
  let greeter: Greeter;
  beforeEach(() => {
    greeter = new Greeter('testing');
  });
  it('should greet', () => {
    expect(greeter.greet()).toBe('Welcome to testing!');
  });
});
