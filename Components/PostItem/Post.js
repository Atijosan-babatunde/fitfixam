import { useState, useContext, useEffect, useRef } from "react";
import AuthContext from "@/context/AuthContext";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import {
  Container,
  Wrapper,
  PostItem,
  FeedPosts,
  UserPosted,
  UserInfo,
  UserPost,
  Likes,
  Comments,
  Interract,
  None,
  Reactions,
  UsersComments,
  Contain,
  Cont,
  PostImages,
} from "@/components/PostStyle";
import Image from "next/image";
import {
  PostCard,
  PostComments,
  PostDetails,
  PostText,
  UserDetails,
} from "@/components/Discussion/Style";
import { useRouter } from "next/router";
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
import Moment from "react-moment";
import { parseCookies } from "@/helpers/index";
import Link from "next/link";
import { PostCategory } from "Components/PostCategory/Style";
import userImage from "public/userImage.png";
import dynamic from "next/dynamic";

const Post = ({ post, posts, comments, likes, allUsers }) => {
  const { user } = useContext(AuthContext);
  const [postId, setPostId] = useState({});

  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };

  const [isComment, setIsComment] = useState({
    content: "",
    post: postId,
    timestamp: "",
    users: user,
  });

  const [isLiked, setIsLiked] = useState(false);
  const [userLiked, setUserLiked] = useState();

  const findUserLiked = () => {
    if (user) {
      post.map((e) => {
        setUserLiked(
          likes.find(
            (like) => user.id === like.user.id && e.id === like.post.id
          )
        );
      });
    }
  };

  useEffect(() => {
    getPostId();
    findUserLiked();
  }, [user]);

  const router = useRouter();

  const refreshData = () => router.replace(router.asPath);

  let postLike = 0;

  const displayPost = (e) => {
    router.push(`/carpenters/${e.slug}`);
  };

  const getPostId = (e) => {
    post.map((m) => {
      setPostId(m);
    });
  };

  const handleInputChange = (e, p) => {
    getPostId(p);
    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      post: postId,
      users: user,
    });

    getPostId(p);
    // console.log(postId);

    // handleData(e);
  };

  const updateLike = async (e) => {
    setIsLiked(true);

    console.log(isLiked);

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`, {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${isToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          post: postId,
        }),
      });
      const data = await res.json();
      // setLikedPost(data);
      console.log(data);
      setUserLiked(true);
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const unlike = async (e) => {
    // try {
    setIsLiked(false);
    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/post-likes/${userLiked.id}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        // body: JSON.stringify(isLiked),
      }
    );
    const data = await res.json();
    // setLikedPost(data);
    console.log(data);
    setUserLiked(false);
    refreshData();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const postComment = async (e, p) => {
    getPostId(p);
    e.preventDefault();

    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      post: postId,
      users: user,
    });

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(isComment),
      });
      const data = await res.json();
      console.log(data);
      setIsComment({
        content: "",
        post: "",
        users: "",
      });
    } catch (error) {
      console.log(error);
    }

    refreshData();
  };

  const categoryPage = (e) => {
    router.push(`/${e}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <>
      <Container>
        <FeedPosts>
          {posts.posts.map((post) => (
            <PostCard key={post.id}>
              <PostText>
                <p onClick={() => displayPost(post)}>
                  {post.post.slice(0, 80).concat(" ...")}{" "}
                  <span style={{ fontWeight: "bold" }}>Read more</span>
                </p>
              </PostText>
              <PostCategory className="post_category">
                <Link href="/carpenters">
                  <a>
                    <button>#Carpenters</button>
                  </a>
                </Link>
              </PostCategory>
              <PostDetails>
                <UserDetails>
                  {allUsers.map((all) =>
                    post.user === all.id ? (
                      <div className="user_details">
                        {all.user_image ? (
                          <Image
                            src={all.user_image.formats.small.url}
                            alt="User Image"
                            width={50}
                            height={50}
                            cursor="pointer"
                            objectFit="cover"
                            blurDataURL="URL"
                            placeholder="blur"
                            className="user_image"
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
                <PostComments></PostComments>
              </PostDetails>
            </PostCard>
          ))}
        </FeedPosts>
        <Wrapper>
          {post.map((e) => (
            <PostItem key={e.id}>
              <p onClick={() => router.back()} className="back">
                Back
              </p>
              <UserPosted>
                {e.user.user_image ? (
                  <Image
                    src={e.user.user_image.formats.small.url}
                    alt="User Image"
                    width={80}
                    height={80}
                    cursor="pointer"
                    objectFit="cover"
                    blurDataURL="URL"
                    placeholder="blur"
                    className="user_image"
                    onClick={() => displayProfile(e.user.slug)}
                  />
                ) : (
                  <Image
                    src={userImage}
                    alt="User Image"
                    width={80}
                    height={80}
                    cursor="pointer"
                    objectFit="cover"
                    blurDataURL="URL"
                    placeholder="blur"
                    className="user_image"
                    onClick={() => displayProfile(e.user.slug)}
                  />
                )}

                <UserInfo>
                  <h2 onClick={() => displayProfile(e.user.slug)}>
                    {e.user.username}
                  </h2>
                  <p>
                    <Moment fromNow ago>
                      {e.created_at}
                    </Moment>
                  </p>
                </UserInfo>
              </UserPosted>
              <UserPost>
                <p className="post">{e.post}</p>
                <PostImages>
                  {e.images &&
                    e.images.map((img) => (
                      <div className="post_images" key={img.id}>
                        <Image
                          src={img.url}
                          alt={img.name}
                          width={img.width}
                          height={img.height}
                          obajectFit="cover"
                        />
                      </div>
                    ))}
                </PostImages>
              </UserPost>
              <Interract>
                <div className="interract">
                  <Likes>
                    <FaHeart fontSize={26} color="#F4442E" />
                    <div className="liked_images">
                      {likes.map((l) =>
                        user ? (
                          <div key={l.id}>
                            {console.log(l)}
                            {l.post.id === e.id ? (
                              <div>
                                {l.user.user_image ? (
                                  <Image
                                    src={l.user.user_image.formats.small.url}
                                    alt="User Image"
                                    width={30}
                                    height={30}
                                    className="user_image"
                                    objectFit="cover"
                                    blurDataURL="URL"
                                    placeholder="blur"
                                  />
                                ) : (
                                  <Image
                                    src={userImage}
                                    alt="User Image"
                                    width={30}
                                    height={30}
                                    className="user_image"
                                    objectFit="cover"
                                    blurDataURL="URL"
                                    placeholder="blur"
                                  />
                                )}
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        ) : (
                          <div></div>
                        )
                      )}
                      <div className="liking">
                        {likes.map((like) =>
                          user ? (
                            <p className="user_likes" key={like.id}>
                              {e.post_likes.map((use) =>
                                console.log(use.user, user.id)
                              )}
                              {like.post.id === e.id ? (
                                <div>
                                  <None>
                                    {(postLike += e.post_likes.length)}
                                  </None>
                                  {console.log(postLike)}

                                  {userLiked && e.post_likes.length > 1 && (
                                    <p className="user_likes">
                                      You and {e.post_likes.length - 1} other(s)
                                      like this post
                                    </p>
                                  )}

                                  {userLiked && e.post_likes.length === 1 && (
                                    <p className="user_likes">
                                      You like this post
                                    </p>
                                  )}

                                  {!userLiked && e.post_likes.length === 1 && (
                                    <p className="user_likes">
                                      {like.user.username} likes this post
                                    </p>
                                  )}

                                  {!userLiked && e.post_likes.length > 1 && (
                                    <p className="user_likes">
                                      {likes
                                        .slice(-1)
                                        .map((last) => last.user.username)}{" "}
                                      and {e.post_likes.length - 1} other(s)
                                      like this post
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </p>
                          ) : (
                            <p></p>
                          )
                        )}
                      </div>
                    </div>
                  </Likes>
                  <div className="comment_share">
                    <div className="comment_count">
                      <p>{e.comments.length}</p>
                      <FaComment fontSize={16} color="#3074B8" />
                    </div>
                    <div className="share_count">
                      <FaShare fontSize={16} color="#FA7B23" />
                    </div>
                  </div>
                </div>
              </Interract>
              <Reactions>
                {user ? (
                  <div className="reactions">
                    <div className="like">
                      {userLiked ? (
                        <>
                          <FaHeart
                            fontSize={26}
                            onClick={() => unlike(e)}
                            color="#F4442E"
                          />
                          <p>Liked</p>
                        </>
                      ) : (
                        <>
                          <FaRegHeart
                            fontSize={26}
                            onClick={() => updateLike(e)}
                            color="#060258"
                          />
                          <p>Like</p>
                        </>
                      )}
                    </div>
                    <div className="comment_here" onClick={handleFocus}>
                      <FaRegComment fontSize={26} color="#020127" />
                      <p>Comment</p>
                    </div>
                    <div className="share_here"></div>
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
                {comments.map((com) => (
                  <div key={com.key}>
                    {e.id === com.post.id ? (
                      <UsersComments>
                        <div
                          className="image"
                          onClick={() => displayProfile(com.users.slug)}
                        >
                          {com.users.user_image ? (
                            <Image
                              src={com.users.user_image.formats.small.url}
                              alt="User Image"
                              width={70}
                              height={70}
                              className="user_image"
                              objectFit="cover"
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          ) : (
                            <Image
                              src={userImage}
                              alt="User Image"
                              width={70}
                              height={70}
                              className="user_image"
                              objectFit="cover"
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          )}
                        </div>
                        <div>
                          <div className="name_time">
                            <h2 onClick={() => displayProfile(com.users.slug)}>
                              {com.users.username}
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
                {user ? (
                  <form
                    className="input_comment"
                    onSubmit={(s) => postComment(s, e)}
                  >
                    <FaCamera
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
                    />
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={isComment.content}
                      onChange={(input) => handleInputChange(input, e)}
                      ref={ref}
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
                      </span>
                      <span>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </span>{" "}
                      to react to this post
                    </p>
                  </Cont>
                )}
              </Comments>
            </PostItem>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Post;
