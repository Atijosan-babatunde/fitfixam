import { Container, Wrapper, Card, Header } from "./Style";
import Image from "next/image";
import CarpenterImg from "@/public/Carpenter_img.png";
import PlumberImg from "@/public/Plumber_img.png";
import ElectricianImg from "@/public/Electrician_img.png";
import { BtnCard } from "../Buttons";
import Link from "next/link";

const ReviewCard = () => {
  return (
    <Container>
      <Header>Who we review</Header>
      <Wrapper>
        <Card>
          <div className="image">
            <Image
              src={CarpenterImg}
              alt="Carpenter image"
              width={410}
              height={312}
              objectFit="cover"
              className="image"
              blurDataURL="URL"
              placeholder="blur"
            />
          </div>
          <div className="card_details">
            <h1>Carpenters</h1>
            <p>
              Choose the right carpenter for your project by asking the right
              questions
            </p>
            <Link href="/artisans/carpenters">
              <a>
                <BtnCard>
                  <button>Click Here</button>
                </BtnCard>
              </a>
            </Link>
          </div>
        </Card>
        <Card className="card">
          <Image
            src={PlumberImg}
            alt="Plumber image"
            width={410}
            height={312}
            objectFit="cover"
            className="image"
            blurDataURL="URL"
            placeholder="blur"
          />
          <div className="card_details">
            <h1>Plumber</h1>
            <p>
              Are you looking to install new pipes, or fix the ones you have
              already? You need to make an informed choice
            </p>
            <Link href="/artisans/plumbers">
              <a>
                <BtnCard>
                  <button className="btn">Click Here</button>
                </BtnCard>
              </a>
            </Link>
          </div>
        </Card>
        <Card>
          <Image
            src={ElectricianImg}
            alt="Electrician image"
            width={410}
            height={312}
            objectFit="cover"
            blurDataURL="URL"
            placeholder="blur"
            className="image"
          />
          <div className="card_details">
            <h1>Electricians</h1>
            <p>
              Have any electrical issues? Be sure your home is safe. Hire an
              electrical expert.
            </p>
            <Link href="/artisans/electricians">
              <a>
                <BtnCard>
                  <button>Click Here</button>
                </BtnCard>
              </a>
            </Link>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ReviewCard;
