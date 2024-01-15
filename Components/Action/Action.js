import { HeroBtn } from "Components/Buttons";
import { Container, Wrapper } from "./Style";
import { useState } from "react";
import { FaWrench } from "react-icons/fa";
import Link from "next/link";

const Action = () => {
  const [isBlue, setIsBlue] = useState(true);

  return (
    <Container isBlue={isBlue}>
      <Wrapper>
        <div className="wrapper">
          <h1>Are you a company providing artisan services?</h1>
          <p>
            Help people discover you on <span>fitfixam</span>. Get clients here
            and let the testimonials speak for you
          </p>
          <div className="btn">
            <Link href="/contact">
              <a>
                <HeroBtn>Proceed</HeroBtn>
              </a>
            </Link>
          </div>
        </div>
        <div className="wrench">
          <FaWrench
            fontSize={510.88}
            color="#fff"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
            className="tool"
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Action;
