import styled from "styled-components";

export const Container = styled.div`
  /* margin-left: 10rem; */
  /* padding-left: 5rem; */
  /* display: grid;
  grid-template-columns: 30% 70%; */
  width: 60%;
  margin: 6rem auto;
  overflow-y: hidden;
  position: fixed;
  left: 15rem;

  @media (min-width: 1281px) {
    padding-left: 7rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-left: 7rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PostImages = styled.div`
  display: grid;
  width: 60%;
  margin: 0rem auto 2rem auto;

  div.post_images {
    width: 100%;
  }

  .post_images:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    width: 100%;
  }

  .post_images:first-child img {
    border-radius: 10px 10px 0px 0px;
    min-width: 39rem;
    max-height: 20rem;
  }

  .post_images:nth-child(2) img {
    margin: 0px 2px;
    border-radius: 0px 0px 0px 10px;
  }

  .post_images:nth-child(3) img {
    border-radius: 0px 0px 10px 0px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0rem auto 2rem 0rem;

    .post_images:first-child img {
      min-width: 30rem;
      max-height: 15rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0rem auto 2rem 0rem;
    /* width: 50%; */

    .post_images:first-child img {
      min-width: 30rem;
      max-height: 15rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0rem auto 2rem auto;
    width: 80%;

    .post_images:first-child img {
      min-width: 25rem;
      max-height: 15rem;
      /* margin: auto; */
    }
  }

  @media (max-width: 480px) {
    margin: 0rem auto 2rem auto;
    width: 100%;

    .post_images:first-child img {
      min-width: 18rem;
      max-height: 20rem;
      margin: auto;
    }
  }

  /* .post_images {
    display: flex;
    padding: 2rem;
    gap: 3px;
    -webkit-column-gap: 3px;

    &:nth-of-type(1n) {
      border-radius: 10px 0px 0px 0px;
    }

    .imgs {

      img {
        margin: 2px;
      }
    }
  }  */
`;

export const Wrapper = styled.div`
  padding-top: 5rem;
  /* width: 100%; */
  /* margin: 0rem auto 0rem auto; */
  background: #040242ba;
  display: flex;
  justify-content: end;
  position: fixed;
  /* border-radius: 10px 10px 0px 0px; */
  z-index: 50;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* margin-right: 20rem; */

  p.back {
    width: 90%;
    margin: 2rem auto 0rem auto;
    font-weight: 400;
    text-decoration: underline;
    color: #020127;
  }

  div.reactions {
    padding: 0rem 2rem;
    /* background: #fcfdfd; */
  }

  /* ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  } */

  /* Track */
  /* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 10px;
  } */

  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  } */

  /* Handle on hover */
  /* ::-webkit-scrollbar-thumb:hover {
    background: #dbdbdb;
  } */

  .user_image {
    border-radius: 50%;
  }

  @media (min-width: 1281px) {
    /* left: 45rem; */
    /* right: 2rem; */
  }

  @media (max-width: 1200px) {
    /* left: 5rem; */
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* padding-left: 4rem; */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    left: 5rem;
    padding-left: 4rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-left: 0;
    left: 0;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    left: 0;
  }

  /* @media (max-width: 1200px) {
    margin: auto;
    left: 0rem;
    right: 0rem;
    width: 100%;
    padding: 0rem 4rem 10rem 8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0rem 2rem 10rem 5rem;
  }

  @media (max-width: 600px) {
    padding: 0rem 0rem 10rem 3rem;
  } */
`;

export const PostItem = styled.div`
  width: 60%;
  /* overflow-y: scroll; */
  height: 90vh;
  padding-bottom: 2rem;
  background: #fff;
  /* position: fixed; */
  overflow-y: scroll;

  p.post {
    font-size: 19px;
    line-height: 1.5;
    color: #020127;
    font-weight: 400;
    width: 90%;
    margin: 0rem auto 0rem auto;
  }

  @media (min-width: 1281px) {
    p.post {
      width: 90%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 60%;

    p.post {
      width: 100%;
      font-size: 19px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 89%;

    p.post {
      width: 100%;
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;

    p.post {
      width: 90%;
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    p.post {
      width: 90%;
      font-size: 19px;
    }
  }
`;

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  a {
    color: #07036e;
    transition: all 0.3 ease-in-out;

    &:hover {
      color: #f4442e;
      transition: all 0.3 ease-in-out;
    }
  }

  p {
    margin: 1rem 2rem;
  }
`;

export const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* margin: 0rem 1rem; */
  background-color: #fcfdfd;

  a {
    color: #07036e;
    transition: all 0.3 ease-in-out;

    &:hover {
      color: #f4442e;
      transition: all 0.3 ease-in-out;
    }
  }

  p {
    margin: 1rem 2rem;
    font-size: 26px;
  }

  @media (max-width: 600px) {
    /* font-size: 16px; */

    p.signin {
      margin: 1rem 0rem;
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    p.signin {
      margin: 1rem 0rem;
      font-size: 14px;
    }
  }
`;

export const FeedPosts = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  padding-bottom: 10rem;

  /* margin-left: 4rem; */

  p {
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const UserPosted = styled.div`
  display: flex;
  align-items: center;
  /* background: #fcfdfd; */
  /* margin-bottom: 1rem; */
  width: 90%;
  margin: 0rem auto 1rem auto;
  padding: 2rem 0rem 0rem 2rem;

  .user_image {
    cursor: pointer;
  }

  h2 {
    /* margin-bottom: -15px; */
    /* font-size: 20px; */
  }
`;

export const UserInfo = styled.div`
  margin-left: 1rem;

  h2 {
    font-size: 20px;
    color: #020127;
    cursor: pointer;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 12px;
  }
`;

export const UserPost = styled.div`
  /* background: #fcfdfd; */
  padding: 0rem 2rem;

  p {
    /* border-bottom: 1.5px solid #dad9e9; */
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    margin-bottom: 0rem;
    width: 90%;
    font-size: 19px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin: auto;
  }
`;

export const Interract = styled.div`
  align-items: center;
  /* height: 3rem; */
  /* background: #fcfdfd; */
  padding: 0rem 2rem;
  /* margin-bottom: 2rem; */
  z-index: 200;
  /* border-bottom: 1.5px solid #dad9e9;
  padding: 1rem 2rem;
  margin-bottom: 2rem; */

  div.interract {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    z-index: 300;
    padding: 0rem 0rem 1rem 0rem;
    width: 90%;
    margin: 0rem auto 1rem auto;
  }

  div.likes {
    /* border-bottom: 1.5px solid #dad9e9; */
    display: flex;
    align-items: center;
  }

  .liked_images {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .comment_share {
    display: flex;
    /* border-bottom: 1.5px solid #dad9e9; */

    .comment_count,
    .share_count {
      display: flex;
      align-items: center;
      padding-right: 10px;

      p {
        margin-right: 10px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.interract {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.interract {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.interract {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    div.interract {
      width: 100%;
    }
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1.5px solid #dad9e9; */
  /* justify-content: space-between; */
  width: 90%;

  div.liking {
    height: 1.2rem;
    overflow: hidden;
  }

  p.user_likes {
    font-size: 15px;
    font-weight: 400;
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const Reactions = styled.div`
  width: 100%;
  /* background-color: #fcfdfd; */
  padding-left: 2rem;
  padding-right: 2rem;

  div.reactions {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    padding: 0rem 0rem 1rem 0rem;
    margin: 0rem auto 2rem auto;
    width: 90%;
  }

  div {
    margin-right: 2rem;
  }

  /* .comment_here {
    cursor: pointer;
  } */

  .like,
  .comment_here,
  .share_here {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    p {
      margin-left: 10px;
    }
  }

  @media (max-width: 900px) {
    .like,
    .comment_here,
    .share_here {
      font-size: 14px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.reactions {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.reactions {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.reactions {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    div.reactions {
      width: 100%;
    }
  }
`;

export const Comments = styled.div`
  background-color: #fff;
  /* overflow-y: scroll; */
  height: 30rem;
  padding-bottom: 50rem;
  width: 100%;
  margin: auto;

  p {
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    /* padding: 0rem 2rem 0rem 0rem; */
  }

  .input_comment {
    display: flex;
    align-items: center;
    background-color: #fcfdfd;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    border-radius: 10px 0px 0px 0px;
    width: 60%;
    margin: auto;
    position: fixed;
    bottom: 0;
    right: 0;

    input {
      border-radius: 5px 0px 0px 5px;
      width: 100%;
      border: none;
      background-color: #fff;
      height: 50px;
      font-size: 19px;
      /* color: #b2bbc6; */
      padding: 0rem 1rem;
    }

    button {
      border: none;
      background: #07036e;
      border-radius: 0px 5px 5px 0px;
      color: #fff;
      height: 50px;
      font-size: 19px;
      padding: 0px 20px;
      cursor: pointer;
    }

    .input_icons {
      margin-right: 15px;
    }
  }

  @media (min-width: 1281px) {
    width: 100%;

    .input_comment {
      width: 60%;
    }
  }

  /* @media (max-width: 1900px) {
    width: 80%;

    .input_comment {
      width: 65%;
    }
  } */

  /* @media (max-width: 1500px) {
    width: 80%;
    margin-right: 5rem;

    .input_comment {
      width: 48%;
    }
  } */

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 100%;
    margin-right: 5rem;

    .input_comment {
      width: 60%;
      /* padding-left: 10rem; */
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    margin-right: 10rem;

    .input_comment {
      width: 80%;
      padding-left: 10rem;
      padding-right: 3rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-right: 3rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-right: 3rem;
    }
  }
`;

export const None = styled.div`
  display: none;
`;

export const UsersComments = styled.div`
  display: flex;
  width: 90%;
  gap: 1rem;
  flex-wrap: nowrap;
  /* grid-template-columns: 10% 70%; */
  /* justify-items: center; */
  align-items: flex-start;
  color: #020127;
  padding: 0rem 2rem;
  margin: 0rem auto 2rem auto;

  div.comment {
    width: 90%;
  }

  h2 {
    font-size: 20px;
    margin-right: 10px;
    /* width: 60%; */
  }

  p.content {
    width: 100%;
  }

  div.comment_content {
    /* flex-basis: 5; */
    width: 100%;
  }

  .image {
    margin: 0px 0px 0px 0px;
    cursor: pointer;
    flex-basis: 1;
  }

  p.time {
    font-size: 11px;
  }

  span {
    background-color: #020127;
    border-radius: 50%;
    height: 5px;
    width: 5px;
    margin-right: 10px;
  }

  .name_time {
    display: flex;
    flex-wrap: nowrap;
    /* grid-template-columns: 60% 5% 30%; */
    align-items: center;
    margin-bottom: 0.5rem;
    /* justify-content: center; */
    width: 100%;

    h2 {
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 15% 80%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 19px;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .name_time {
      width: 20rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .name_time {
      width: 20rem;
    }
  }

  @media (max-width: 480px) {
    .name_time {
      width: 15rem;
    }
  }

  @media (max-width: 365px) {
    padding: 0rem;
    grid-template-columns: 20% 80%;
  }
`;
