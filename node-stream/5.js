// not finished yet!!!!! not working
var split = require("split");
var through = require("through2");

var stream = through(write, end);

var cnt = 0;
function write (buffer, encoding, next) {
  if (cnt++ % 2 == 0) {
    this.push(Buffer.from(buffer.toString().toUpperCase()));
  } else {
    this.push(Buffer.from(buffer.toString().toLowerCase()));
  }
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(split("\n")).pipe(stream).pipe(process.stdout);