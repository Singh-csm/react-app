import React, { useState } from "react";
import axios from "axios";
import Styles from "./CommunityForm.module.css";
import { Link, useNavigate } from "react-router-dom";

const CommunityForm = (props) => {
  const history = useNavigate();

  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [newStory, setNewStory] = useState({
    name: null,
    title: null,
    photo: null,
    content: null,
  });

  const changeHandler = (e) => {
    console.log(e.target.name);
    setNewStory({
      ...newStory,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    setNewStory({ ...newStory, photo: e.target.files[0] });
  };

  const createStory = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newStory.name);
    formData.append("title", newStory.title);
    formData.append("photo", newStory.photo);
    formData.append("content", newStory.content);

    axios
      .post("http://localhost:8000/api/stories", formData)
      .then((res) => {
        console.log(res.data);
        history.push("/community");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.container}>
      <h1>Add your story</h1>
      <form
        onSubmit={createStory}
        encType="multipart/form-data"
        className={Styles.form}
      >
        <input
          onChange={changeHandler}
          placeholder="Name"
          className={Styles.name_input}
          name="name"
        ></input>
        <input
          onChange={changeHandler}
          placeholder="Title"
          className={Styles.title_input}
          name="title"
        ></input>
        <p>
          <input
            type="file"
            onChange={handlePhoto}
            accept=".png, .jpg, .jpeg"
            name="photo"
            className={Styles.image_input}
          ></input>
        </p>
        <textarea
          onChange={changeHandler}
          name="content"
          cols="30"
          rows="20"
          className={Styles.text_area}
        ></textarea>
        <p>
          <button className={Styles.button}>Post</button>
          <Link to="/community">
            <button className={Styles.button}>Cancel</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CommunityForm;
