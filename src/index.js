const { server } = require('./server');

server.listen(3000).then(({ url }) => {
  console.log(url);
});
