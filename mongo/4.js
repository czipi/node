const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";
const minAge = Number(process.argv[2]);

mongo.connect(url, function(err, db){
  let parrots = db.collection("parrots");
  let docs = parrots.find({
    "age":{$gt:minAge}
  }, {
    name: true,
    age: true,
    _id: false
  }).toArray(function(err, arr) {
    console.log(arr);
  });

  db.close();
});