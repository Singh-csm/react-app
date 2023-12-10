const Story = require("../models/story.models");

module.exports = {
  // READ ALL
  findAll: (req, res) => {
    Story.find()
      .sort({ createdAt: "desc" })
      .then((allStories) => {
        return res.json(allStories);
      })
      .catch((err) => res.json(err));
  },

  // CREATE
  create: (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const photo = req.file.filename;
    const content = req.body.content;

    const newStoryData = {
      name,
      title,
      photo,
      content,
    };

    const newStory = new Story(newStoryData);
    newStory
      .save()
      .then((newStory) => res.json(newStory))
      .catch((err) => res.json(err));

    console.log(req.body);

    // Story.create(req.body)
    //     .then( newStory => res.json(newStory))
    //     .catch( err => res.json(err))
  },

  // READ ONE
  findOne: (req, res) => {
    console.log(req.params);
    // Story.findOne({_id: req.params.id})
    Story.findById(req.params.id)
      .then((Story) => res.json(Story))
      .catch((err) => res.json(err));
  },

  // UPDATE
  update: (req, res) => {
    Story.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedStory) => res.json(updatedStory))
      .catch((err) => res.json(err));
  },

  // DELETE
  delete: (req, res) => {
    Story.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
