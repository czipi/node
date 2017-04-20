const express = require("express")();

// log requests
express.get('*', function(req, res, next){
  console.log(Date.now(), req.method, req.originalUrl);
  next();
});

// print the user id
express.get('/user/:id', function(req, res, next){
  console.log('Request Type:', req.method);
  res.end(req.params.id);
});

express.listen(3000, () => console.log("Server started."));