const mongo = require("mongodb").MongoClient;

const dbName = process.argv[2];
const url = "mongodb://localhost:27017/" + dbName;
const collection = process.argv[3];
const id = process.argv[4];

mongo.connect(url, function(err, db){
  let users = db.collection(collection);
  let user = {
    _id: id
  };

  users.remove(
    user,
    function(err, data){
  });

  db.close();
});