export class <%= classTypeName %> {
  public constructor(public greeting: string) {}
  public start(container: HTMLElement | null): void {
    const h1 = document.createElement('h1');
    if (!!container) {
      h1.innerText = `Welcome to ${this.greeting}!`;
      container.classList.add('greeter');
      container.appendChild(h1);
    }
  }
}
