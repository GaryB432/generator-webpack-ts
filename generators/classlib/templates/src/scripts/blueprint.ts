export class <%= classTypeName %> {
  constructor(public greeting: string) {}
  public start(container: HTMLElement): void {
    const h1 = document.createElement('h1');
    container.classList.add('greeter');
    h1.innerText = `Welcome to ${this.greeting}!`;
    container.appendChild(h1);
  }
}
