import { useState } from "react";
import "./styles.css";

/* eslint-disable react/prop-types */
export default function Ratings({ numOfElem = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }

  function handleMouseMove(getCurrentId) {
    setHover(getCurrentId);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="rating-container">
      {[...Array(numOfElem)].map((_, index) => {
        index += 1;
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div
              className={`circle ${
                index <= (hover || rating) ? "active" : "inactive"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
