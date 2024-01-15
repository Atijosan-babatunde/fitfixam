import React from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let ratingStar = (
    <AiFillStar fontSize={30} color="#B2BBC6" cursor="pointer" />
  );

  if (rating && rating >= starId) {
    ratingStar = <AiFillStar fontSize={30} color="#FA7B23" cursor="pointer" />;
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {ratingStar}
    </div>
  );
};

export default Star;
