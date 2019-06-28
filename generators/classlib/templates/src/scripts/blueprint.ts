export class <%= classTypeName %> {
  public constructor(public greeting: string) {}
  public start(container: HTMLElement | null): void {
    if (!!container) {
      const h1 = document.createElement('h1');
      container.classList.add('greeter');
      h1.innerText = `Welcome to ${this.greeting}!`;
      container.appendChild(h1);
    }
  }
}
