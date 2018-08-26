import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('<%= appname %>');

const el = document.getElementById('greeting');
if (el) {
  el.innerText = greeter.greet();
}
