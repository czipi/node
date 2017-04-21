const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";
const collection = "prices";
const reqSize = process.argv[2];

mongo.connect(url, function(err, db){
  let coll = db.collection(collection);
  let match = {
    $match: {
      size: reqSize
    }
  };
  let group = {
    $group: {
      _id: "avg",
      avg: {
        $avg: "$price"
      }
    }
  };

  coll.aggregate(
    [match, group],
    function(err, results){
      results.forEach(function(e) {
        console.log(Number(e.avg).toFixed(2));
      });
  });

  db.close();
});