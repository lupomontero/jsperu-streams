var fs = require('fs');
var ws = fs.createWriteStream(__dirname + '/testfile.tmp');

process.stdin.pipe(ws);

