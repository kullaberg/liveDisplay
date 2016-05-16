const feed = new Instafeed({
  get: 'tagged',
  tagName: 'kullaberg',
  clientId: '28a08e6a0ed544d5a93055908484acdb',
});
feed.run();
