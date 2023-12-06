const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} is required"]
    },
    title : {
        type: String,
        required: [true, "{PATH} is required"]
    },
    photo: {
        type: String
    },
    content : {
        type: String
    }
}, {timestamps: true})

// create the schema and export it 
const Story = mongoose.model("Story", StorySchema);
module.exports = Story;