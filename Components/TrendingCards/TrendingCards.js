import React, { useState } from "react";
import { Container } from "./style";
import Image from "next/image";
import userImage from "@/public/userImage.png";
import Moment from "react-moment";
import { useRouter } from "next/router";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HeroBtn } from "../Buttons";

const TrendingCards = ({ posts }) => {
  const router = useRouter();

  const handlePost = (e) => {
    router.push(`/feeds/${e.slug}`);
  };

  const handleUser = (e) => {
    router.push(`/profile/${e.slug}`);
  };

  return (
    <Container>
      <div className="container">
        {posts.map((e) => (
          <div className="card_container" key={e.id}>
            <div className="card" key={e.id}>
              <p onClick={() => handlePost(e)}>
                {e.post.slice(0, 100)}{" "}
                {e.post.length > 100 ? (
                  <span style={{ fontWeight: "bold" }}>...Read more</span>
                ) : (
                  <span></span>
                )}
              </p>
              <div className="user">
                <div className="details" onClick={() => handleUser(e.user)}>
                  <div className="image">
                    {e.user.userImage ? (
                      <Image
                        src={e.user.userImage}
                        alt="user image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        blurDataURL="URL"
                        placeholder="blur"
                      />
                    ) : (
                      <Image
                        src={userImage}
                        alt="user image"
                        width={30}
                        height={30}
                        objectFit="cover"
                        blurDataURL="URL"
                        placeholder="blur"
                      />
                    )}
                  </div>
                  <h3>{e.user.username}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wrapper">
        <h1>
          Your journey to reviewing starts here{"                   "}
          {"                   "}
          <HiArrowNarrowRight
            color="#F4442E"
            // style={{ marginLeft: "7rem" }}
            fontSize="3rem"
            className="none"
          />
        </h1>
        <HiArrowNarrowRight
          color="#F4442E"
          // style={{ marginLeft: "7rem" }}
          fontSize="3rem"
          className="show"
          style={{ transform: "rotate(90deg)" }}
        />
        <HeroBtn>Sign up Today!</HeroBtn>
      </div>
    </Container>
  );
};

export default TrendingCards;
