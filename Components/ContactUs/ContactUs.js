import { Container, Wrapper } from "./Style";
import {
  FaRegEnvelopeOpen,
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { LoginBtn } from "Components/Buttons";
import Subscribe from "Components/Subscribe/Subscribe";
import Link from "next/link";
import { useState } from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || number === null || message === "") {
      setError(true);
    } else {
      setError(false);
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          message,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setSent(true);
        setEmail("");
        setMessage("");
        setNumber("");
        setName("");

        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <div className="card_wrapper">
          <div className="card">
            <FaRegEnvelopeOpen color="#060258" fontSize={36} />
            <h3>Via Email</h3>
            <p>support@fitfixam.com</p>
            <p>info@fitfixam.com</p>
          </div>
          <div className="card">
            <FaPhoneAlt color="#060258" fontSize={36} />
            <h3>Via Phone</h3>
            <p>+234 816 6674 464</p>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Tell us Something</h2>
            <p>Questions or comments are welcome</p>
            {sent && <p className="sent">Message sent successfully!</p>}
            {error && <p className="error">Please fill all fields</p>}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <LoginBtn>Send</LoginBtn>
          </form>
        </div>
        <div className="social">
          <h2>Connect with us!</h2>
          <div className="soc">
            <a href="https://www.facebook.com/fitfixam/">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com/Ifitfixam?t=fvZSAX1y21YVuK8y6Axh-w&s=09">
              <FaTwitterSquare />
            </a>
            <a href="https://www.linkedin.com/company/fit-fixam/">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/fitfixam?igshid=YmMyMTA2M2Y=">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <Subscribe />
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
