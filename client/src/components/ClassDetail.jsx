import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Styles from "./ClassDetail.module.css";
import { connect } from "react-redux";

const ClassDetail = (props) => {
  const { classId } = useParams();
  const history = useNavigate();

  return (
    <div>
      <div className={Styles.contentbox}>
        <img src={props.classes[classId].imgUrl} className={Styles.img}></img>
        <div className={Styles.text}>
          <h1>{props.classes[classId].title}</h1>
          <p>{props.classes[classId].date}</p>
          <p className={Styles.flex_icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4406/4406111.png"
              className={Styles.icon}
            ></img>{" "}
            {props.classes[classId].method}
          </p>
          <p>{props.classes[classId].level}</p>
          <p>Instructor: {props.classes[classId].teacher}</p>
          <p>Class Overview:</p>
          <p>{props.classes[classId].content}</p>
          <p>Duration: {props.classes[classId].duration}</p>
          <p>Price: ${props.classes[classId].price}</p>
          <p>Unlimited Access for all classes: $35/month </p>
          <button
            className={Styles.button}
            onClick={() => {
              props.dispatch({
                type: "addItem",
                payload: {
                  id: props.classes[classId].id,
                  title: props.classes[classId].title,
                  date: props.classes[classId].date,
                  price: props.classes[classId].price,
                },
              });
              history.push("/myclass");
            }}
          >
            {" "}
            Add to My Class
          </button>
          <button onClick={() => history.goBack()} className={Styles.button}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

function storeData(state) {
  return {
    state: state,
  };
}
export default connect(storeData)(ClassDetail);

// export default ClassDetail
