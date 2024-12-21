import http from 'http';
import ConnectDB from './src/configs/DatabaseSetup.js';

ConnectDB();
http.createServer(function (req,res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("Hello");
}).listen(8080);
