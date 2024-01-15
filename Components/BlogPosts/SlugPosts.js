import {
  Container,
  Wrapper,
  Card,
  Likes,
  Comments,
  Interract,
  None,
  Reactions,
  UsersComments,
} from "./SlugStyle";
import { Cont } from "@/components/PostStyle";
import { Contain } from "@/components/PostStyle";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaRegComment,
  FaCamera,
  FaSmile,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import AuthContext from "@/context/AuthContext";
import { useState, useContext, useEffect } from "react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { NEXT_PUBLIC_API_URL } from "../../config";
import userImage from "public/userImage.png";

const BlogPosts = ({ blogPosts, post, likes, comments }) => {
  const { user } = useContext(AuthContext);
  const [postId, setPostId] = useState({});
  const [commentDisplayed, setCommentDisplay] = useState(false);

  const [isComment, setIsComment] = useState({
    content: "",
    blog_post: postId,
    timestamp: "",
    users_permissions_user: user,
  });

  const [liked, setLiked] = useState(false);

  const [isLiked, setIsLiked] = useState({
    like: liked,
    post: postId,
    users_permissions_user: user,
  });
  // const [commentLike, setCommentLike] = useState({})

  useEffect(() => {
    getPostId();
    likePost();
    setIsLiked({
      ...isLiked,
      like: liked,
      post: postId,
      users_permissions_user: user,
    });
  }, []);

  const router = useRouter();

  const refreshData = () => router.replace(router.asPath);

  let postLike = 0;

  const getPostId = (e) => {
    // e.map((id) => setPostId(id));
    setPostId(e);
  };

  const handleInputChange = (e, p) => {
    getPostId(p);
    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      blog_post: postId,
      users_permissions_user: user,
    });

    getPostId(p);
    // console.log(postId);

    // handleData(e);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  const likePost = async (e) => {
    getPostId(e);
    setLiked(!liked);
    setIsLiked({
      ...isLiked,
      like: liked,
      blog_post: postId,
      users_permissions_user: user,
    });

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/blog-likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(isLiked),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // refreshData();
  };

  const postComment = async (e, p) => {
    getPostId(p);
    e.preventDefault();

    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      blog_post: postId,
      users_permissions_user: user,
    });

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/blog-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(isComment),
      });
      const data = await res.json();
      console.log(isComment);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    refreshData();
  };

  const displayPost = (e) => {
    router.push(`/blog/${e.slug}`);
  };

  return (
    <Container>
      <div className="cont">
        {blogPosts.map((post) => (
          <Card key={post.id} onClick={() => displayPost(post)}>
            <div className="image">
              <Image
                src={post.image.url}
                alt="article image"
                width={150}
                height={150}
                objectFit="cover"
                className="blog_image"
                borderRadius="10px"
                blurDataURL="URL"
                placeholder="blur"
              />
            </div>
            <div className="blog_details">
              <h2>{post.title}</h2>
              <p>{post.article.slice(0, 250).concat("...Read more")}</p>
              <div className="info">
                <p>
                  <BiUserCircle /> {post.author}
                </p>
                <p>
                  <BsCalendarEvent /> {post.date}
                </p>
                <p>
                  <FaRegClock /> {post.minutes} min read
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Wrapper>
        <div className="wrapper">
          {post.map((p) => (
            <div key={p.id}>
              <div className="container" key={p.id}>
                <div className="slug_image">
                  <Image
                    src={p.image.url}
                    alt="blog image"
                    width={1500}
                    height={200}
                    objectFit="cover"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                </div>
                <h1>{p.title}</h1>
                <div className="details">
                  <p>
                    <BiUserCircle /> {p.author}
                  </p>
                  <p>
                    <BsCalendarEvent /> {p.date}
                  </p>
                  <p>
                    <FaRegClock /> {p.minutes} min read
                  </p>
                </div>
                <p className="post_article">
                  <ReactMarkdown>{p.article}</ReactMarkdown>
                </p>
              </div>
              <Reactions>
                {user ? (
                  <div className="reactions">
                    <div className="like">
                      <div>
                        {liked ? (
                          <FaHeart
                            fontSize={26}
                            onClick={() => likePost(p)}
                            color="#F4442E"
                          />
                        ) : (
                          <FaRegHeart
                            fontSize={26}
                            onClick={() => likePost(p)}
                            color="#F4442E"
                          />
                        )}
                        <p>Like</p>
                      </div>
                    </div>
                    <div className="comment_here">
                      <FaRegComment fontSize={26} color="#020127" />
                      <p>Comment</p>
                    </div>
                    <div className="share_here">
                      <RiShareForwardLine fontSize={26} color="#020127" />
                      <p>Share</p>
                    </div>
                  </div>
                ) : (
                  <Contain>
                    <p>
                      <span>
                        <Link href="/login">
                          <a>Sign in</a>
                        </Link>
                      </span>{" "}
                      or{" "}
                      <span>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </span>{" "}
                      to react to this post...
                    </p>
                  </Contain>
                )}
              </Reactions>
              <Comments>
                <div className="comment">
                  {comments.map((com) => (
                    <div key={com.key}>
                      {p.id === com.blog_post.id ? (
                        <UsersComments>
                          <div
                            className="image"
                            onClick={() =>
                              displayProfile(com.users_permissions_user.slug)
                            }
                          >
                            <Image
                              src={
                                com.users_permissions_user.user_image
                                  ? com.users_permissions_user.user_image
                                      .formats.small.url
                                  : userImage
                              }
                              alt="User Image"
                              width={70}
                              height={70}
                              className="user_image"
                              objectFit="cover"
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          </div>
                          <div>
                            <div className="name_time">
                              <h2
                                onClick={() =>
                                  displayProfile(
                                    com.users_permissions_user.slug
                                  )
                                }
                              >
                                {com.users_permissions_user.username}
                              </h2>
                              <span></span>
                              <p className="time">
                                <Moment fromNow ago>
                                  {com.created_at}
                                </Moment>
                              </p>
                            </div>
                            <p>{com.content}</p>
                          </div>
                        </UsersComments>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
                {user ? (
                  <form
                    className="input_comment"
                    onSubmit={(s) => postComment(s, p)}
                  >
                    {/* <FaCamera
                    fontSize={26}
                    color="#07036E"
                    className="input_icons"
                  />
                  <AiOutlineGif
                    fontSize={16}
                    color="#07036E"
                    className="input_icons"
                  />
                  <FaSmile
                    fontSize={26}
                    color="#07036E"
                    className="input_icons"
                  /> */}
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={isComment.content}
                      onChange={(input) => handleInputChange(input, p)}
                    />
                    <button>
                      <FaTelegramPlane />
                    </button>
                  </form>
                ) : (
                  <Cont>
                    <p>
                      <span>
                        <Link href="/login">
                          <a>Sign in</a>
                        </Link>
                      </span>{" "}
                      or{" "}
                      <span>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </span>{" "}
                      to comment on this post...
                    </p>
                  </Cont>
                )}
              </Comments>
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default BlogPosts;
