const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";
const collection = "parrots";
const minAge = Number(process.argv[2]);

mongo.connect(url, function(err, db){
  let coll = db.collection(collection);
  let ageFilter = {
    age: {$gt: minAge}
  };

  coll.count(
    ageFilter,
    function(err, count){
      console.log(count);
  });

  db.close();
});