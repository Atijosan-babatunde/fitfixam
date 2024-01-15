import { Container, Wrapper, Arrow, Header } from "./Style";
import Image from "next/image";
import ReviewCard from "Components/ReviewCard/ReviewCard";
import animation from "@/public/Animation.gif";
import Why from "../Why/Why";

const Review = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          unoptimized={true}
          src={animation}
          alt="GIF"
          width={700}
          height={400}
          objectFit="contain"
          blurDataURL="URL"
          placeholder="blur"
        />
      </Wrapper>
      <Why />
      <ReviewCard />
    </Container>
  );
};

export default Review;
