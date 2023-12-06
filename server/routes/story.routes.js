// import the controller
const Story = require("../controllers/story.controllers");
const multer = require("multer");
const {v4: uuidv4} = require("uuid")
let path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + "_" + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};

const upload = multer({ storage, fileFilter });



// add routes for each CRUD method
module.exports = (app) => {
    app.get("/api/stories", Story.findAll)
    app.post("/api/stories", upload.single('photo'), Story.create)
    app.get("/api/stories/:id", Story.findOne)
    app.put("/api/stories/:id", Story.update)
    app.delete("/api/stories/:id", Story.delete)
    // app.post('/stats', upload.single('uploaded_file'), function (req, res) {
    //     // req.file is the name of your file in the form above, here 'uploaded_file'
    //     // req.body will hold the text fields, if there were any 
    //     console.log(req.file, req.body)
    // });
}