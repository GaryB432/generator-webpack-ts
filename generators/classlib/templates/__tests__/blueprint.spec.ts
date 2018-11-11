import { <%= classTypeName %> } from '../src/scripts/<%= className %>';

describe('<%= classTypeName %>', () => {
  let greeter: <%= classTypeName %>;
  beforeEach(() => {
    greeter = new <%= classTypeName %>('testing');
  });
  it('should greet', () => {
    const container = document.createElement('div');
    greeter.start(container);
    expect(Array.from(container.classList)).toContain('greeter');
    expect(container.innerHTML).toEqual('<h1>Welcome to testing!</h1>');
  });
});
