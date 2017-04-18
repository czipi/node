var fs = require("fs");

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, callback);

function callback(err, list) {
  if (!err) {
    list.forEach(function(e) {
      var fileNameParts = e.split(".");
      if (fileNameParts && fileNameParts.length == 2 && fileNameParts[1] == ext) {
        console.log(e);
      }
    });
  }
}