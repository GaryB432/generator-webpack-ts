export class Greeter {
  constructor(public greeting: string) {}
  public greet(): string {
    return `Welcome to ${this.greeting}!`;
  }
}
