import { PostContainer, PostWrapper } from "./Style";
import Image from "next/image";
import user from "@/pages/api/user";
import { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";

const SinglePost = ({ postDisplay }) => {
  const { allUsers } = useContext(AuthContext);

  // console.log(postDisplay.user.id);
  // if (postDisplay.id === user.posts.id) {
  //   console.log("Matched");
  // } else {
  //   console.log("do not mactch");
  // }

  return (
    <PostContainer>
      {/* <Image
        src={postDisplay.user.user_image.formats.small.url}
        alt="User Image"
        width={50}
        height={50}
        cursor="pointer"
        objectFit="cover"
        className="user_image"
      /> */}
      <div>{postDisplay.post}</div>
    </PostContainer>
  );
};

export default SinglePost;
