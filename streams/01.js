var fs = require('fs');
var s = fs.createReadStream('/etc/passwd');

s.on('error', function (err) { console.error(err); });
s.on('data', function (chunk) { console.log(chunk); });
s.on('end', function () { console.log('Stream ended!'); });

