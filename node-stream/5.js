// not finished yet!!!!! not working
var split = require("split");
var through = require("through2");

var stream = through(write, end);

var cnt = 0;

function write (buffer, encoding, next) {
  if (cnt++ % 2 != 0) {
    this.push(buffer.toString().toUpperCase() + '\n');
  } else {
    this.push(buffer.toString().toLowerCase() + '\n');
  }
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);