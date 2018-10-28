import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('<%= appname %>');

const el = document.getElementById('greeting');
if (el) {
  el.innerText = greeter.greet();
}
<% if (workbox) { %>

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
<% } %>
