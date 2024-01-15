import {
  Container,
  Wrapper,
  PostCard,
  PostText,
  PostDetails,
  UserDetails,
  PostComments,
  PostItem,
} from "./Style";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import SinglePost from "./SinglePost";
import Link from "next/link";
import Moment from "react-moment";
import { PostCategory } from "Components/PostCategory/Style";
import userImage from "/public/userImage.png";
import { GiPodiumThird } from "react-icons/gi";

const Posts = ({ posts, comments, userPost, likes }) => {
  const [postDisplay, setPostDisplay] = useState({});
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();
  const initialState = [];

  const read = <h1>...Read more</h1>;

  useEffect(() => {
    setPostDisplay(posts);
  }, [postDisplay]);

  const displayPost = (e) => {
    setPostDisplay(e);
    router.push(`/feeds/${e.slug}`);
  };

  const categoryPage = (e) => {
    router.push(`/${e}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Wrapper>
            <PostCard>
              <UserDetails>
                <div onClick={() => displayProfile(posts.user.slug)}>
                  {posts.user.user_image ? (
                    <Image
                      src={posts.user.user_image.formats.small.url}
                      alt="User Image"
                      width={50}
                      height={50}
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
                      width={50}
                      height={50}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                  )}
                </div>
                <div className="post_dets">
                  <h3 onClick={() => displayProfile(posts.user.slug)}>
                    {posts.user.username}
                  </h3>
                  <p className="time">
                    <Moment fromNow ago>
                      {posts.created_at}
                    </Moment>
                  </p>
                </div>
              </UserDetails>
              <PostText>
                <p onClick={() => displayPost(posts)}>
                  {posts.post.slice(0, 150)}{" "}
                  {posts.post.length > 150 ? (
                    <span style={{ fontWeight: "bold" }}>...Read more</span>
                  ) : (
                    <span></span>
                  )}
                  {/* {posts.post.slice(0, 150)} */}
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
                                  blurDataURL="URL"
                                  placeholder="blur"
                                />
                              )}
                            </div>
                          )
                      )}
                  </PostComments>
                </PostDetails>
                <PostCategory className="post_category">
                  {posts.category === null || posts.category === undefined ? (
                    <div></div>
                  ) : (
                    <a>
                      <button
                        onClick={() => categoryPage(posts.category.title)}
                      >
                        #{posts.category.title}
                      </button>
                    </a>
                  )}
                </PostCategory>
              </div>
            </PostCard>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Posts;
