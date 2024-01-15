import React from "react";
import { Container } from "./style";
import Link from "next/link";

const Why = () => {
  return (
    <Container>
      <div className="container">
        <div className="image">
          <h1>
            Why <span>fitfixam</span>?
          </h1>
        </div>

        <div className="texts">
          <p>
            You, like many other Nigerians have most likely hired an artisan
            (carpenter, plumber, electrician, etc.) who after claiming to be
            proficient in his area of expertise,{" "}
            <strong>ended up disappinting</strong> you. In addition to being
            unprofessional, some of these artisans are completely dishonest.{" "}
            <br /> <br /> We believe there’s a way to avoid hiring unskilled and
            untrained craftsmen.
            <strong> By leaving a review on your experience</strong> with an
            artisan who either satisfied you or disappointed you, you help
            others know who to patronize and who to avoid completely
            (individuals or companies).
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Why;
