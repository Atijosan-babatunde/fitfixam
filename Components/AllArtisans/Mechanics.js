import React, { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { Container } from "./style";
import FindArtisans from "@/components/FindArtisan/FindArtisans";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import RatingStar from "../RatingStar/RatingStar";
import userImage from "@/public/userImage.png";

const Mechanics = ({ allMechanics }) => {
  const router = useRouter();

  const stars = [0, 1, 2, 3, 4, 5];

  const { sum, setSum } = useContext(AuthContext);

  const handlePush = (e) => {
    router.push(`/profile/${e.slug}`);
  };

  return (
    <Container>
      <div className="container">
        <h1>Mechanics</h1>
        <div className="all">
          {allMechanics.users_permissions_users.map((e) => (
            <div className="card" key={e.id} onClick={() => handlePush(e)}>
              <div className="img">
                <div className="image">
                  {e.user_image ? (
                    <Image
                      src={e.user_image.url}
                      alt="user image"
                      height={118.21}
                      width={118.21}
                      objectFit="cover"
                      className="user-img"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="user image"
                      height={118.21}
                      width={118.21}
                      objectFit="cover"
                      className="user-img"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                  )}
                </div>
              </div>
              <h2>{e.username}</h2>
              <div
                className="star"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {stars.map((star, i) =>
                  i === 0 ? (
                    <></>
                  ) : (
                    <RatingStar
                      key={i}
                      starId={i}
                      id={i}
                      userRating={e.rating}
                    />
                  )
                )}
              </div>
              <p className="category">{e.category}</p>
              {e.address && (
                <div className="address">
                  <FaMapMarkerAlt />
                  <p>{e.address}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Mechanics;
