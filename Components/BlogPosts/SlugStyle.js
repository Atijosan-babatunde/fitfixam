import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 3rem auto;

  div.cont {
    margin-right: 3rem;
    overflow-y: scroll;
    height: 55rem;
    padding-right: 1rem;
    padding-bottom: 5rem;

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }
  }

  @media (min-width: 1281px) {
    width: 60%;
    margin: 3rem auto;

    div.cont {
      margin-right: 3rem;
      overflow-y: scroll;
      height: 55rem;
      padding-right: 1rem;
      padding-bottom: 5rem;

      ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #c0c0c0;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #dbdbdb;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 7rem;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(1, 1fr);
    /* position: fixed; */

    div.cont {
      display: none;
      margin-right: 3rem;
      overflow-y: scroll;
      height: 55rem;
      padding-right: 1rem;
      padding-bottom: 5rem;

      ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #c0c0c0;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #dbdbdb;
      }
    }
  }
`;

export const Card = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    /* border: 0.5px solid #020127; */
    border-radius: 10px;
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 5rem;
    background: #f9fafb;
    cursor: pointer;

    h2 {
      font-size: 20px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 12px;
    }

    div.image {
      margin-right: 2rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 70%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
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

export const Wrapper = styled.div`
  color: #020127;
  position: fixed;
  background: #040242ba;
  display: flex;
  justify-content: end;
  width: 100%;
  top: 0;
  bottom: 0;
  /* left: 65rem; */
  right: 0rem;
  overflow-y: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #dbdbdb;
  }

  div.wrapper {
    background: #fff;
    height: 100%;
    width: 70%;
    position: relative;
    top: 5rem;
  }
  div.container {
    background: #fff;
    padding-bottom: 1rem;
  }

  h1 {
    text-align: center;
    margin: 2rem 0rem 1rem 0rem;
  }

  div.details {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 0rem auto 3rem auto;

    p {
      text-align: center;
    }
  }

  p.post_article {
    width: 90%;
    margin: auto;
    font-size: 19px;
    background: #fff;
    line-height: 1.5;
  }

  @media (min-width: 1281px) {
    color: #020127;
    position: fixed;
    background: #040242ba;
    display: flex;
    justify-content: end;
    width: 100%;
    top: 0;
    bottom: 0;
    /* left: 65rem; */
    right: 0rem;
    overflow-y: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }

    div.wrapper {
      background: #fff;
      height: 100%;
      width: 70%;
      position: relative;
      top: 5rem;
    }
    div.container {
      background: #fff;
      padding-bottom: 1rem;
    }

    h1 {
      text-align: center;
      margin: 2rem 0rem 1rem 0rem;
    }

    div.details {
      display: flex;
      width: 50%;
      justify-content: space-between;
      margin: 0rem auto 3rem auto;

      p {
        text-align: center;
      }
    }

    p.post_article {
      width: 90%;
      margin: auto;
      font-size: 19px;
      background: #fff;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    color: #020127;
    background: none;
    margin: 0rem 0rem;
    padding-bottom: 5rem;
    width: 100%;
    /* position: fixed; */

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }

    div.wrapper {
      background: #fff;
      width: 70%;
      position: relative;
      /* top: 5rem; */
    }

    h1 {
      text-align: center;
      margin-top: 1rem;
    }

    div.details {
      display: flex;
      width: 50%;
      justify-content: space-between;
      margin: 0rem auto 1rem auto;
      p {
        text-align: center;
      }
    }

    p.post_article {
      width: 80%;
      margin: auto;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    color: #020127;
    margin: 0rem 1rem 0rem 0rem;
    padding-bottom: 5rem;
    background: none;
    /* position: fixed; */

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }

    div.wrapper {
      background: #fff;
      height: 100%;
      width: 70%;
      position: relative;
    }

    h1 {
      text-align: center;
      margin-top: 1rem;
      font-size: 30px;
    }

    div.details {
      display: flex;
      width: 70%;
      justify-content: space-between;
      margin: 0rem auto 1rem auto;
      p {
        text-align: center;
      }
    }

    p.post_article {
      width: 80%;
      margin: auto;
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    color: #020127;
    margin: 0rem 0rem 0rem 5rem;
    padding-bottom: 5rem;
    background: none;
    /* position: fixed; */
    width: 100%;

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }

    div.wrapper {
      background: #fff;
      width: 100%;
      position: relative;
    }

    h1 {
      text-align: center;
      margin-top: 1rem;
      font-size: 30px;
    }

    div.details {
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin: 0rem auto 1rem auto;
      p {
        text-align: center;
      }
    }

    p.post_article {
      width: 80%;
      margin: auto;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    color: #020127;
    margin: 0rem 0rem 0rem 4rem;
    padding-bottom: 5rem;
    background: none;
    /* position: fixed; */

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbdbdb;
    }

    div.wrapper {
      background: #fff;
      width: 100%;
      position: relative;
    }

    h1 {
      text-align: center;
      margin-top: 1rem;
      font-size: 25px;
      margin-bottom: 0.5rem;
    }

    div.details {
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin: 0rem auto 1rem auto;
      p {
        text-align: center;
        font-size: 14px;
      }
    }

    p.post_article {
      width: 80%;
      margin: auto;
      font-size: 16px;
    }
  }
`;

export const Interract = styled.div``;

export const None = styled.div``;

export const Reactions = styled.div`
  @media (min-width: 1281px) {
    width: 100%;
    border-bottom: 1.5px solid #dad9e9;
    border-top: 1.5px solid #dad9e9;
    margin: 0rem auto;
    padding: 1rem 0rem;

    background: #fff;

    div.reactions {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
    }

    div.like > div,
    div.comment_here,
    div.share_here {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1.5px solid #dad9e9;
    border-top: 1.5px solid #dad9e9;
    margin: 2rem 0rem;
    padding: 1rem 0rem;

    div.reactions {
      display: flex;
      justify-content: space-between;
      width: 70%;
      margin: auto;
    }

    div.like > div,
    div.comment_here,
    div.share_here {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1.5px solid #dad9e9;
    border-top: 1.5px solid #dad9e9;
    margin: 2rem 0rem;
    padding: 1rem 0rem;

    div.reactions {
      display: flex;
      justify-content: space-between;
      width: 70%;
      margin: auto;
    }

    div.like > div,
    div.comment_here,
    div.share_here {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1.5px solid #dad9e9;
    border-top: 1.5px solid #dad9e9;
    margin: 2rem 0rem;
    padding: 1rem 0rem;

    div.reactions {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: auto;
    }

    div.like > div,
    div.comment_here,
    div.share_here {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1.5px solid #dad9e9;
    border-top: 1.5px solid #dad9e9;
    margin: 2rem 0rem;
    padding: 1rem 0rem;

    div.reactions {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: auto;
    }

    div.like > div,
    div.comment_here,
    div.share_here {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }
`;

export const UsersComments = styled.div`
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 10% 90%;
    justify-items: left;
    align-items: flex-start;
    color: #020127;
    padding: 0rem 2rem;
    margin-bottom: 2rem;

    div.comment {
      width: 100%;
    }

    h2 {
      font-size: 26px;
      margin-right: 10px;
    }

    /* p {
    margin: 0;
  } */

    .image {
      margin: 0px 20px 0px 0px;
    }

    p.time {
      font-size: 19px;
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
      align-items: center;
      /* margin-bottom: -40px; */
      width: 100%;

      h2 {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: 10% 90%;
    justify-items: left;
    /* grid-gap: 2rem; */
    align-items: flex-start;
    color: #020127;
    padding: 0rem 2rem;
    margin-bottom: 2rem;

    div.comment {
      width: 100%;
    }

    h2 {
      font-size: 26px;
      margin-right: 10px;
    }

    .image {
      margin: 0px 20px 0px 0px;
      /* width: 20%; */
    }

    p.time {
      font-size: 19px;
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
      align-items: center;
      /* margin-bottom: -40px; */
      width: 100%;

      h2 {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 10% 90%;
    justify-items: left;
    /* grid-gap: 2rem; */
    align-items: flex-start;
    color: #020127;
    padding: 0rem 2rem;
    margin-bottom: 2rem;

    div.comment {
      width: 100%;
    }

    h2 {
      font-size: 26px;
      margin-right: 10px;
    }

    .image {
      margin: 0px 20px 0px 0px;
      /* width: 20%; */
    }

    p.time {
      font-size: 19px;
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
      align-items: center;
      /* margin-bottom: -40px; */
      width: 100%;

      h2 {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 20% 80%;
    justify-items: left;
    /* grid-gap: 2rem; */
    align-items: flex-start;
    color: #020127;
    padding: 0rem 2rem;
    margin-bottom: 2rem;

    div.comment {
      width: 100%;
    }

    h2 {
      font-size: 26px;
      margin-right: 10px;
    }

    .image {
      margin: 0px 20px 0px 0px;
      /* width: 20%; */
    }

    p.time {
      font-size: 19px;
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
      align-items: center;
      /* margin-bottom: -40px; */
      width: 100%;

      h2 {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 20% 80%;
    justify-items: left;
    /* grid-gap: 2rem; */
    align-items: flex-start;
    color: #020127;
    padding: 0rem 2rem;
    margin-bottom: 2rem;

    div.comment {
      width: 100%;
    }

    h2 {
      font-size: 26px;
      margin-right: 10px;
    }

    .image {
      margin: 0px 20px 0px 0px;
      /* width: 20%; */
    }

    p.time {
      font-size: 19px;
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
      align-items: center;
      /* margin-bottom: -40px; */
      width: 100%;

      h2 {
        cursor: pointer;
      }
    }
  }
`;

export const Likes = styled.div``;

export const Comments = styled.div`
  background-color: #fff;
  padding-top: 2rem;
  padding-bottom: 6rem;

  .user_image {
    cursor: pointer;
  }

  div.comment {
    margin-bottom: 18rem;
  }
  /* margin-bottom: 5rem; */

  p {
    font-weight: 400;
    font-size: 20px;
    width: 80%;
    /* padding: 0rem 2rem 0rem 0rem; */
  }

  .input_comment {
    display: flex;
    align-items: center;
    background-color: #fcfdfd;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 70%;
    justify-content: center;
    margin: auto;
    position: fixed;
    bottom: 0;
    right: 0;

    input {
      border-radius: 5px 0px 0px 5px;
      width: 70%;
      border: none;
      background-color: #fff;
      height: 50px;
      font-size: 19px;
      color: #b2bbc6;
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
    background-color: #fff;
    padding-top: 2rem;
    padding-bottom: 1rem;

    .user_image {
      cursor: pointer;
    }

    div.comment {
      margin-bottom: 8rem;
    }
    /* margin-bottom: 5rem; */

    p {
      font-weight: 400;
      font-size: 20px;
      width: 80%;
      /* padding: 0rem 2rem 0rem 0rem; */
    }

    .input_comment {
      display: flex;
      align-items: center;
      background-color: #fcfdfd;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 70%;
      justify-content: center;
      margin: auto;
      position: fixed;
      bottom: 0;
      right: 0;

      input {
        border-radius: 5px 0px 0px 5px;
        width: 70%;
        border: none;
        background-color: #fff;
        height: 50px;
        font-size: 19px;
        color: #b2bbc6;
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
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background-color: #fff;
    /* margin-top: 5rem; */

    .user_image {
      cursor: pointer;
    }

    div.comment {
      margin-bottom: 18rem;
    }
    /* margin-bottom: 5rem; */

    p {
      font-weight: 400;
      font-size: 20px;
      width: 100%;
      /* padding: 0rem 2rem 0rem 0rem; */
    }

    .input_comment {
      display: flex;
      align-items: center;
      background-color: #fcfdfd;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 70%;
      padding-right: 2rem;
      margin: auto;
      position: fixed;
      bottom: 0;
      right: 0;

      input {
        border-radius: 5px 0px 0px 5px;
        width: 70%;
        border: none;
        background-color: #fff;
        height: 50px;
        font-size: 19px;
        color: #b2bbc6;
        padding: 0rem 1rem;
        margin: auto;
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
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #fff;
    /* margin-top: 5rem; */

    .user_image {
      cursor: pointer;
    }

    div.comment {
      margin-bottom: 18rem;
    }
    /* margin-bottom: 5rem; */

    p {
      font-weight: 400;
      font-size: 20px;
      width: 100%;
      /* padding: 0rem 2rem 0rem 0rem; */
    }

    .input_comment {
      display: flex;
      align-items: center;
      background-color: #fcfdfd;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 70%;
      padding-right: 2rem;
      margin: auto;
      position: fixed;
      bottom: 0;
      right: 0;

      input {
        border-radius: 5px 0px 0px 5px;
        width: 70%;
        border: none;
        background-color: #fff;
        height: 50px;
        font-size: 19px;
        color: #b2bbc6;
        padding: 0rem 1rem;
        margin: auto;
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
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #fff;
    /* margin-top: 5rem; */

    .user_image {
      cursor: pointer;
    }

    div.comment {
      margin-bottom: 18rem;
    }
    /* margin-bottom: 5rem; */

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
      width: 100%;
      margin: auto;
      position: fixed;
      bottom: 0;
      right: 0;

      input {
        border-radius: 5px 0px 0px 5px;
        width: 70%;
        border: none;
        background-color: #fff;
        height: 50px;
        font-size: 19px;
        color: #b2bbc6;
        padding: 0rem 1rem;
        margin: auto;
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
  }

  @media (max-width: 480px) {
    background-color: #fff;
    /* margin-top: 5rem; */

    .user_image {
      cursor: pointer;
    }

    div.comment {
      margin-bottom: 18rem;
    }
    /* margin-bottom: 5rem; */

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
      width: 100%;
      padding-right: 2rem;
      margin: auto;
      position: fixed;
      bottom: 0;
      right: 0;

      input {
        border-radius: 5px 0px 0px 5px;
        width: 70%;
        border: none;
        background-color: #fff;
        height: 50px;
        font-size: 19px;
        color: #b2bbc6;
        padding: 0rem 1rem;
        margin: auto;
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
  }
`;
