var http = require("http");

var responses = new Array(process.argv.length - 2);
var counter = process.argv.length - 2;

for (let i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i], function(response){
    response.setEncoding("utf8");
    var currentData = "";

    response.on("data", function(data){
      currentData += data;
    })

    response.on("end", function(data){
      counter -= 1;
      responses[i-2] = currentData;

      if (counter == 0) {
        responses.forEach(function(e){
          console.log(e);
        });
      }
    })
  })
}