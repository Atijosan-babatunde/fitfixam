import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Container } from "./style";

const RatingStar = ({ starId, userRating }) => {
  let ratingStar = (
    <AiFillStar fontSize={30} color="#B2BBC6" cursor="pointer" />
  );

  if (userRating === 0) {
    <AiFillStar fontSize={30} color="#B2BBC6" cursor="pointer" />;
  }

  if (userRating && userRating >= starId) {
    ratingStar = <AiFillStar fontSize={30} color="#FA7B23" cursor="pointer" />;
  }

  return <Container className="star">{ratingStar}</Container>;
};

export default RatingStar;
