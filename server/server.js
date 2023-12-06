const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));
app.use(express.static("images")) // tells the application withch folder to serve images from

// database connection
require('./config/mongoose.config');

// connect the routes
require("./routes/story.routes")(app);

//alwasy put this at the end to start server
app.listen(PORT, ()=> console.log(`🎈🎈 server up on port: ${PORT}`))