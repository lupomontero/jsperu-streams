var http = require('http');
var request = require('request');

http.createServer(function (req, res) {
  request('http://opendata.socrata.com/api/views/ycte-ybvj/rows.json').pipe(res);
}).listen(8080);

