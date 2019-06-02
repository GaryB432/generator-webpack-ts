workbox.core.setCacheNameDetails({
  prefix: '<%= appname %>',
  suffix: 'v1',
  precache: 'install-time',
  runtime: 'run-time',
  googleAnalytics: 'ga',
});

workbox.precaching.precache(['/img/yeoman-003.png']);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  cleanUrls: false,
});
