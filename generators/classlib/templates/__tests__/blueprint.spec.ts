import { <%= classTypeName %> } from '../src/scripts/<%= className %>';

describe('<%= classTypeName %>', (): void => {
  let greeter: <%= classTypeName %>;
  beforeEach((): void => {
    greeter = new <%= classTypeName %>('testing');
  });
  it('should greet', (): void => {
    const container = document.createElement('div');
    greeter.start(container);
    expect(Array.from(container.classList)).toContain('greeter');
    expect(container.innerHTML).toEqual('<h1>Welcome to testing!</h1>');
  });
});
