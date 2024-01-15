import { Container, Wrapper, Flex, Social, Grid } from "./Style";
import Logo from "@/public/Logo-white.png";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import FooterBg from "@/public/hammer-bg.png";
import BGImage from "./BG";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src={Logo}
          alt="Fitfixam logo"
          width={200}
          height={100}
          objectFit="contain"
        />

        <Flex>
          <h2>Company</h2>
          <ul>
            <Link href="/about">
              <a>
                <li>About us</li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li>Contact us</li>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <li>Blog</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Terms & Conditions</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Privacy Policy</li>
              </a>
            </Link>
          </ul>
        </Flex>
        <Flex>
          <h2>Navigation</h2>
          <ul>
            <Link href="/feeds">
              <a>
                <li>Discussions</li>
              </a>
            </Link>
            <Link href="/carpenters">
              <a>
                <li>Carpenters</li>
              </a>
            </Link>
            <Link href="/plumbers">
              <a>
                <li>Plumbers</li>
              </a>
            </Link>
            <Link href="/electricians">
              <a>
                <li>Electricians</li>
              </a>
            </Link>
            <Link href="/companies">
              <a>
                <li>Company Reviews</li>
              </a>
            </Link>
          </ul>
        </Flex>
        <Flex>
          <Social>
            <a href="https://www.linkedin.com/company/fit-fixam/">
              <FaLinkedinIn fontSize={30} className="icon" />
            </a>
            <a href="https://instagram.com/fitfixam?igshid=YmMyMTA2M2Y=">
              <FaInstagram fontSize={30} className="icon" />
            </a>
            <a href="https://www.facebook.com/fitfixam/">
              <FaFacebookF fontSize={30} className="icon" />
            </a>
            <a href="https://twitter.com/Ifitfixam?t=fvZSAX1y21YVuK8y6Axh-w&s=09">
              <FaTwitter fontSize={30} className="icon" />
            </a>
          </Social>
          <p>fitfixam, 2022. All Rights Reserved</p>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Footer;
