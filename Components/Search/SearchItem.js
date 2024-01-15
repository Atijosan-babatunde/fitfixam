import React, { useEffect, useContext } from "react";
import { Container, Wrapper } from "./Style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import userImage from "@/public/userImage.png";

const SearchItem = ({ posts }) => {
  const router = useRouter();

  return (
    <Container>
      {posts.length === 0 ? (
        <p>Search not found, try again!</p>
      ) : (
        posts.map((e) => (
          <div className="container" key={e.id}>
            {e.user.user_image ? (
              <Image
                src={e.user.user_image.url}
                alt="user image"
                width={40}
                height={40}
                objectFit="cover"
                className="image"
                blurDataURL="URL"
                placeholder="blur"
              />
            ) : (
              <Image
                src={userImage}
                alt="user image"
                width={40}
                height={40}
                objectFit="cover"
                className="image"
                blurDataURL="URL"
                placeholder="blur"
              />
            )}
            <h2>{e.user.username}</h2>
            {"-"}
            <p>{e.post.slice(0, 60).concat("...")}</p>
            <h3 onClick={() => router.push(`/feeds/${e.slug}`)}>Read more</h3>
          </div>
        ))
      )}

      <Wrapper></Wrapper>
    </Container>
  );
};

export default SearchItem;
