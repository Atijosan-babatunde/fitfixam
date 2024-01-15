import BGImage from "Components/BG";
import { Wrapper, Container } from "./Style";
import { HeroBtn, HeroBtn_two } from "Components/Buttons";
import HeroBg from "@/public/hero-background.png";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  const scroll = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Wrapper>
        <h1>
          <span>Feedback</span> is the Building Block of Civilization.
        </h1>
        <p>
          Here, you can find reviews of artisans and companies that offer
          artisan services. Be girded with the information that will help you
          make the right decisions.
        </p>
        <div className="btns">
          <div className="button">
            <Link href="/signup">
              <a>
                <HeroBtn>Sign up today!</HeroBtn>
              </a>
            </Link>
            <Link href="/feeds">
              <a>
                <HeroBtn_two>Start Reviewing</HeroBtn_two>
              </a>
            </Link>
          </div>
          <HiChevronDoubleDown
            fontSize={70}
            color={"#f4442e"}
            className="hero_icon"
            onClick={scroll}
            cursor="pointer"
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
