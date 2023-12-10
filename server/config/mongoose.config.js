//import mongoos - require mongoose here
const mongoose = require("mongoose");
const DB_NAME = "mongodb://127.0.0.1:27017/testing";

// method that connect mongoose to MongoDB
mongoose
  .connect(DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
