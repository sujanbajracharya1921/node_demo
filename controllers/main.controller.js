const os = require('os');
console.log(os.userInfo());

const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(5000);
