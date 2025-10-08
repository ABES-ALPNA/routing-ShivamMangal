//Question-6
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/user' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'Amit', age: 25 }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/user');
});
