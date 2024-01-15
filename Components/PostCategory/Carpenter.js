import {
  Container,
  Wrapper,
  PostCard,
  PostText,
  PostDetails,
  UserDetails,
  PostComments,
  PostItem,
} from "@/components/Discussion/Style";
import { PostCategory } from "./Style";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import userImage from "public/userImage.png";

const Carpenter = ({ posts, comments, allUsers, likes }) => {
  console.log(posts);

  const router = useRouter();

  const displayPost = (e) => {
    router.push(`/carpenters/${e.slug}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <Container>
      <Wrapper>
        <PostCard>
          <UserDetails>
            {allUsers.map((all) =>
              posts.user === all.id ? (
                <div className="user_details">
                  {all.user_image ? (
                    <Image
                      src={all.user_image.formats.small.url}
                      alt="User Image"
                      width={50}
                      height={50}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                      blurDataURL="URL"
                      placeholder="blur"
                      onClick={() => displayProfile(all.slug)}
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="User Image"
                      width={50}
                      height={50}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                      blurDataURL="URL"
                      placeholder="blur"
                      onClick={() => displayProfile(all.slug)}
                    />
                  )}

                  <div>
                    <h3 onClick={() => displayProfile(all.slug)}>
                      {all.username}
                    </h3>
                    <p className="time">
                      <Moment fromNow ago>
                        {posts.created_at}
                      </Moment>
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </UserDetails>
          <PostText>
            <p onClick={() => displayPost(posts)}>
              {posts.post.slice(0, 150)}{" "}
              {posts.post.length > 150 ? (
                <span style={{ fontWeight: "bold" }}>...Read more</span>
              ) : (
                <span></span>
              )}
            </p>
          </PostText>
          <div className="images">
            {posts.images &&
              posts.images.map((i) => (
                <div className="imgs" key={i.id}>
                  <Image
                    src={i.url}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt={i.name}
                    className="img"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                </div>
              ))}
          </div>
          <div className="details">
            <PostDetails>
              <PostComments>
                {likes.length > 0 &&
                  likes.map(
                    (l) =>
                      posts.id === l.post.id && (
                        <div key={l.id}>
                          {l.user.user_image ? (
                            <Image
                              src={l.user.user_image.formats.small.url}
                              alt="User Image"
                              width={30}
                              height={30}
                              cursor="pointer"
                              objectFit="cover"
                              className="user_image"
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          ) : (
                            <Image
                              src={userImage}
                              alt="User Image"
                              width={30}
                              height={30}
                              cursor="pointer"
                              objectFit="cover"
                              className="user_image"
                            />
                          )}
                        </div>
                      )
                  )}
              </PostComments>
            </PostDetails>
            <PostCategory className="post_category">
              <Link href="/carpenters">
                <a>
                  <button>#Carpenters</button>
                </a>
              </Link>
            </PostCategory>
          </div>
        </PostCard>
      </Wrapper>
    </Container>
  );
};

export default Carpenter;
