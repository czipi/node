const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

const fName = process.argv[2];
const lName = process.argv[3];

mongo.connect(url, function(err, db){
  let users = db.collection("users");
  let newUser = {
    "firstName": fName,
    "lastName": lName
  };

  users.insert(newUser, function (err, data) {
    console.log(JSON.stringify(newUser));
  });

  db.close();
});