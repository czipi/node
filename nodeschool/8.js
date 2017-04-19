var http = require("http");

http.get(process.argv[2], function(response){
response.setEncoding("utf8");

  var receivedLength = 0;
  var receivedData = "";

  response.on('data', function(data){
    receivedLength += data.length;
    receivedData += data;
  })

  response.on('error', function(data){
    // do nothing
  })

  response.on('end', function(data){
    console.log(receivedLength);
    console.log(receivedData);
  })
});