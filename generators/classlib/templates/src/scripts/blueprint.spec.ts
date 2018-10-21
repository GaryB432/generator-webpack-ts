import { <%= classTypeName %> } from './<%= className %>';

describe('<%= classTypeName %>', () => {
  let greeter: <%= classTypeName %>;
  beforeEach(() => {
    greeter = new <%= classTypeName %>('testing');
  });
  it('should greet', () => {
    expect(greeter.greet()).toBe('Welcome to testing!');
  });
});
