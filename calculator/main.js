const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, 'www');

app.get("*", function(req, res, next){
  console.log("'" + req.url + "'");
  next();
});


app.use(express.static(publicPath));

app.listen(3000, () => console.log("Server started."));