var reader = require("./6_1.js");

var dir = process.argv[2];
var ext = process.argv[3];

reader(dir, ext, function(err, data){
  if (!err) {
    data.forEach(function(e) {
      console.log(e);
    });
  } else {
    console.log("An error has occured!");
  }
});