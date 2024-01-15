import React, { useState } from "react";
import { InputBtn } from "Components/Buttons";
import { Container, Wrapper } from "./Style";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
    } else {
      setError(false);
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setSent(true);
        setEmail("");

        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <h1>Get exclusive news first-hand</h1>
        <p>Sign up to our newsletter to receive regular updates</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBtn>Enter</InputBtn>
          {sent && <p className="sent">You have successfully subscribed</p>}
          {error && <p className="error">Please fill the field</p>}
        </form>
      </Wrapper>
    </Container>
  );
};

export default Subscribe;
