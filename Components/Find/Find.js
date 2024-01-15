import React from "react";
import { Container } from "./style";
import { HeroBtn } from "../Buttons";
import Link from "next/link";

const Find = () => {
  return (
    <Container>
      <div className="container">
        <h1>Find the artisan that is right for you without hassle</h1>
        <p>
          Discover rated artisans with the click of a button, no stress, no
          hassle, no wahala
        </p>
        <Link href="/find-an-artisan">
          <a>
            <HeroBtn>Click Here</HeroBtn>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Find;
