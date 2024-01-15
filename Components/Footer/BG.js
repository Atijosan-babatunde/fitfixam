import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  z-index: -1;
  top: 243.9rem;
  bottom: 0rem;
  right: 0rem;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage({ url }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  //   const [imageURL, setImageURL] = useState(url);

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setHeight("357px");
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setHeight("357px");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image src={url} width={width} height={height} alt="Background Image" />
      </Box>
    );
  }

  return null;
}

export default BGImage;
