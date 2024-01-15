import React from "react";
import { Container } from "./style";
import TrendingCards from "../TrendingCards/TrendingCards";

const Conversation = ({ posts }) => {
  return (
    <Container>
      <div className="container">
        <h1>
          <span className="blue">Join the Conversation! </span>
          <br />
          <span className="grey">Find an artisan,</span>{" "}
          <span className="dark">Make a post.</span>
        </h1>
        <p>
          Save time & money, and help others do the same. Together, we can curb
          mediocre services from artisans, promote competent services.
          <strong> See what others have said...</strong>
        </p>
      </div>
      <TrendingCards posts={posts} />
    </Container>
  );
};

export default Conversation;
