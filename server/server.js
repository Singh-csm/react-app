const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static("images")); // tells the application withch folder to serve images from

// database connection
require("./config/mongoose.config");

// connect the routes
require("./routes/story.routes")(app);
const user = require("./routes/user");

app.use("/api/user/", user);

//alwasy put this at the end to start server
app.listen(4000, () => console.log(`🎈🎈 server up on port: ${4000}`));
