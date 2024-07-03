import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import { ReviewItem } from "./ReviewItem";
import Spinner from "react-bootstrap/Spinner";
import "./styles.css";
// const data2 = [
//   {
//     title: "One of the best economic keyboards",
//     rating: "Rating 4 of 5",
//     name: "Sebitas",
//     review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//           iste facilis deleniti laudantium dicta fugit magni, vel, blanditiis
//           rerum dignissimos, autem consequatur expedita distinctio sequi
//           consequuntur. Quasi accusamus esse suscipit`,
//   },
//   {
//     title: "One of the best economic keyboards",
//     rating: "Rating 4 of 5",
//     name: "Sebitas",
//     review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//             iste facilis deleniti laudantium dicta fugit magni, vel, blanditiis
//             rerum dignissimos, autem consequatur expedita distinctio sequi
//             consequuntur. Quasi accusamus esse suscipit`,
//   },
//   {
//     title: "One of the best economic keyboards",
//     rating: "Rating 4 of 5",
//     name: "Sebitas",
//     review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//                 iste facilis deleniti laudantium dicta fugit magni, vel, blanditiis
//                 rerum dignissimos, autem consequatur expedita distinctio sequi
//                 consequuntur. Quasi accusamus esse suscipit`,
//   },
// ];

export const Reviews = ({ reviews }) => {
  const { result } = reviews || [];

  return (
    <ListGroup
      as="ol"
      className="overflow-auto h-100 background-purple"
      numbered
    >
      {result?.map((review) => (
        <ReviewItem
          key={review.id}
          props={{ ...review }}
          className="bg-primary"
        />
      ))}
    </ListGroup>
  );
};
