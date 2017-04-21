const mongo = require("mongodb").MongoClient;

const dbName = process.argv[2];
const url = "mongodb://localhost:27017/" + dbName;

mongo.connect(url, function(err, db){
  let users = db.collection("users");
  let user = {
    username: "tinatime"
  };

  users.update(
    user,
    {$set: {
      age: 40
    }},
    function(err, data){
  });

  db.close();
});