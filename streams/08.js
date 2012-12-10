var request = require('request');
var JSONStream = require('JSONStream');

var parser = JSONStream.parse([ 'data', true ]);
var res = request('http://opendata.socrata.com/api/views/ycte-ybvj/rows.json');
//var res = require('fs').createReadStream(__dirname + '/../rows.json');

parser.on('data', function (data) {
  console.log(data);
});

res.pipe(parser);
