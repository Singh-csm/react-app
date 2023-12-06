//import mongoos - require mongoose here
const mongoose = require('mongoose');
const DB_NAME = "mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/testYOGA"

// method that connect mongoose to MongoDB
mongoose.connect( DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));