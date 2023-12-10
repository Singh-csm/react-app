import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Styles from "./CommunityForm.module.css";

const CommunityUpdate = (props) => {
  const history = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stories/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setTitle(res.data.title);
        setPhoto(res.data.photo);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  // const handlePhoto = (e) => {
  //     setPhoto(e.target.files[0])
  // }

  const updateStory = (e) => {
    e.preventDefault();

    const newStory = {
      name,
      title,
      photo,
      content,
    };
    axios
      .put(`http://localhost:8000/api/stories/${id}`, newStory)
      .then((res) => {
        console.log(res.data);
        history.push("/community");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={Styles.container}>
      <h1>Add your story</h1>
      <form
        onSubmit={updateStory}
        encType="multipart/form-data"
        className={Styles.form}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className={Styles.name_input}
          name="name"
        ></input>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className={Styles.title_input}
          name="title"
        ></input>
        <p>
          <input
            type="file"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
            accept=".png, .jpg, .jpeg"
            name="photo"
            className={Styles.image_input}
          ></input>
        </p>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          name="content"
          cols="30"
          rows="10"
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

export default CommunityUpdate;
