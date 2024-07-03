import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.css";

export const ReviewItem = ({ props }) => {
  const { title, rating, name, review } = props;
  const newTitle = titleReplace(title);
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto form-text-color">
        <h4 className="fw-bold text-gold">{newTitle}</h4>
        <h6>Rating: {rating}</h6>
        <h6>Name : {name}</h6>
        <hr />
        <p>{review}</p>
      </div>
    </ListGroup.Item>
  );
};

function titleReplace(title) {
  return title.replace(/\d+(\.\d+)? out of 5 stars\s*/, "").trim();
}
