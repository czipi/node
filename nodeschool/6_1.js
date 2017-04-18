var fs = require("fs");

module.exports = function (dir, ext, callback){
  fs.readdir(dir, function(err, list){
    if (err) {
      return callback(err);
    }

    var files = [];

    list.forEach(function(e) {
      var fileNameParts = e.split(".");
      if (fileNameParts && fileNameParts.length == 2 && fileNameParts[1] == ext) {
        files.push(e);
      }
    });

    return callback(null, files);
  });
};