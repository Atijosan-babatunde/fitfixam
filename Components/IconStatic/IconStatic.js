import React from "react";
import { Container } from "./Style";
import Image from "next/image";
// import iconStatic from "/public/StaticIcon.png";

const IconStatic = () => {
  return (
    <Container>
      <div className="img">
        {/* <Image
          src={iconStatic}
          alt="icons"
          width="20px"
          height="800px"
          objectFit="contain"
        /> */}
      </div>
      <h2>Feed</h2>
    </Container>
  );
};

export default IconStatic;
