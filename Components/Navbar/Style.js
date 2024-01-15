import styled from "styled-components";

export const Sign = styled.div`
  div.sign_nav {
    z-index: 100;
    position: absolute;
    color: white;
    margin-left: 3rem;
    font-size: 26px;
    transition: all 2s ease;
    margin-top: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }
  .blue {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.sign_nav {
      color: #07036e;
    }

    .white {
      display: none;
    }

    .blue {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .white {
      display: none;
    }

    .blue {
      display: block;
      width: 100%;
      margin: auto;
    }
  }
`;

export const Modal = styled.div`
  background: #0201278f;
  position: fixed;
  height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
  width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
  opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
  /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
  z-index: 200;
  transition: all 0.1s ease-in-out;
  top: 0;

  div.cancel_icon {
    position: absolute;
    top: 1.5rem;
    right: 17rem;
    cursor: pointer;
  }

  @media (min-width: 1281px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;
    top: 0;

    div.cancel_icon {
      position: absolute;
      top: 1.5rem;
      right: 17rem;
      cursor: pointer;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 1.5rem;
      right: 10rem;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 1.5rem;
      right: 2rem;
      cursor: pointer;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 3.3rem;
      right: 2rem;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 2rem;
      right: 1rem;
      cursor: pointer;
    }
  }
`;

export const CreatePost = styled.div`
  @media (min-width: 1281px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "70%")};
    margin: 3rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "70%")};
    margin: 3rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 3rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 5rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 480px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 4rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }
`;

export const Tags = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.mech {
      background: #fdd6bb;
      margin-right: 2rem;
    }

    input.others {
      background: #bbfdd1;
      margin-right: 2rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 16px;
    }

    input {
      font-size: 12px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 1rem;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 16px;
    }

    input {
      font-size: 12px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 1rem;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }
`;

export const Contain = styled.div`
  display: ${({ isModal }) => (!isModal ? "none" : "block")};
  text-align: center;
  padding: 5rem 0rem;

  h1 {
    font-size: 40px;
    color: #07036e;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 30px;
    color: #07036e;
  }
`;

export const PostContainer = styled.div`
  position: relative;
  display: ${({ isModal }) => (!isModal ? "none" : "block")};
  /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

  textarea {
    margin-top: 1rem;
    border-right: none;
    border-left: none;
    border-top: 2px solid #d9d9de;
    border-bottom: 2px solid #d9d9de;
    width: 100%;
    /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    height: 20rem;
    padding: 2rem 4rem 2rem 4rem;
    font-size: 24px;
    font-family: "Inter", sans-serif;
  }

  h2.post_header {
    color: #020127;
    padding: 2rem 2rem 0rem 4rem;
  }

  @media (min-width: 1281px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 10rem;
      padding: 1rem;
      font-size: 13px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 2rem;
    }
  }

  @media (max-width: 480px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 10rem;
      padding: 1rem;
      font-size: 13px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 2rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  width: 80%;
  margin: auto;
  position: relative;

  /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

  button {
    border: none;
    padding: 1rem;
    font-size: 19px;
    border-radius: 10px;
    cursor: pointer;
  }

  button.btn_cancel {
    background: #f5f7f9;
    margin-right: 3rem;
  }

  button.btn_send {
    background: #07036e;
    font-weight: 700;
    color: #fff;
  }

  div.upload {
    width: 60%;
  }

  div.file {
    position: relative;
    width: 100%;
    /* padding-right: 2rem; */

    div.input {
      width: 100%;
      /* display: flex; */
      align-items: center;
      margin-top: 1rem;
      position: relative;
      /* width: 100%; */
    }

    p {
      position: relative;
      /* right: 30rem; */
      font-size: 16px;
      width: 100%;
    }

    svg {
      position: relative;
    }
  }

  div.label {
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 0.5rem;
    width: 50%;
    /* position: absolute; */
    top: 1;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    span {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      font-size: 10px;
    }
  }

  p.remove {
    position: absolute;
    /* left: 15rem; */
    font-weight: 700;
    font-size: 30px;
    top: 2.5rem;
    left: 15rem;
    z-index: 100;
  }

  label.label {
    width: 100%;
    position: relative;
    left: 0;
    /* margin-top: 2rem; */
  }

  input[type="file"] {
    opacity: 0;
    display: none;

    &::-webkit-file-upload-button {
      display: none;
    }

    /* #file-upload-button {
        display: none;
      } */
  }

  @media (min-width: 1281px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 80%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 80%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 80%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 90%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 0.7rem;
      font-size: 14px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 1rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    flex-direction: column;
    width: 90%;
    margin: auto;

    button {
      border: none;
      padding: 0.7rem;
      font-size: 14px;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 1rem;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 1rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 1rem;
  /* position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  left: 0;
  right: 0; */

  div.button_nav {
    z-index: 700;
    display: flex;
    gap: 1rem;
  }

  a.image {
    width: 10rem;
  }

  .img {
    height: 10rem;
  }

  div.sign_nav {
    z-index: 100;
    position: absolute;
    color: white;
    margin-left: 3rem;
    font-size: 26px;
    transition: all 2s ease;
    margin-top: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    list-style: none;
    font-size: 24px;
  }

  div.contain {
    width: 40%;
  }

  ul {
    display: grid;
    grid-template-columns: 10% 90%;
    justify-items: center;
    align-items: center;
    height: 6rem;
  }

  .burger_mobile {
    display: none;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    li {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    li {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    position: fixed;
    z-index: 500;
    top: 0rem;
    right: 0rem;
    width: 100%;
    background-color: #f0f3f6;
    height: 6rem;
    padding-top: 1px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

    a.image {
      margin-left: 2rem;
    }

    .img {
      z-index: 600;
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;
    }

    div.button_nav {
      z-index: 700;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .burger_mobile {
      z-index: 800;
      position: absolute;
      right: 0;
      margin-right: 2rem;
      display: block;
      cursor: pointer;
    }

    ul {
      grid-template-columns: 30%;
      justify-content: space-between;
      transition: all 0.2s ease-in-out;
    }

    a {
      font-weight: 700;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  font-size: 26px;
  margin: auto;
  transition: all 0.2s ease-in-out;

  .active {
    border-bottom: 2px solid #f4442e;
    padding-bottom: 10px;
    color: #f4442e;
  }

  a {
    transition: all 0.3s ease-in-out;
  }

  li {
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #f4442e;
    }
  }

  div.contain {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
  }

  div.button_nav {
    justify-self: end;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    height: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: 0rem;
    bottom: 0rem;
    z-index: 200;
    background-color: #f0f3f6;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    padding-top: 0rem;
    padding-bottom: 7rem;
    transition: all 0.2s ease-in-out;

    div.contain {
      flex-direction: column;
      text-align: center;
      align-content: space-between;
      height: 50%;
      transition: all 0.2s ease-in-out;
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }

    div.button_nav {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
  }
`;

export const UserNav = styled.div`
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    position: fixed;
    /* left: 0; */
    z-index: 100;
    top: 0;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    div {
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 15%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.2s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    position: fixed;
    /* left: 0; */
    z-index: 100;
    top: 0;
    /* margin: auto; */
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    div {
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;
      /* width: 100%;
      justify-content: space-between; */

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 20%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  /* @media (max-width: 768px) {
    input {
      width: 90%;
    }
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    /* grid-template-columns: 10% 60% 30%; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;
    position: fixed;
    /* left: 0; */
    z-index: 100;
    top: 0;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 100%;
    }
    input {
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 20%;
      padding: 2rem 1rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 5px;
          cursor: pointer;
          font-size: 14px;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;
    position: fixed;
    z-index: 100;
    top: 0;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 90%;
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 30%;
      padding: 2rem 1rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 2px;
          cursor: pointer;
          font-size: 14px;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }

    .username {
      display: none;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    /* grid-template-columns: 10% 60% 30%; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;
    position: fixed;
    /* left: 0; */
    z-index: 100;
    top: 0;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 90%;
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 90%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 1rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 40%;
      padding: 2rem 1rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 2px;
          cursor: pointer;
          font-size: 14px;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }

    .username {
      display: none;
    }
  }

  /* @media (max-width: 600px) {
    input {
      width: 80%;
    }
  }

  @media (max-width: 378px) {
    input {
      width: 80%;
    }

    .username {
      display: none;
    }
  } */
`;

export const UserSideNav = styled.div`
  display: grid;
  /* padding: 1rem; */
  background: #f0f3f6;
  width: 18rem;
  height: 100%;
  position: fixed;
  transition: all 0.1s ease;
  top: 5rem;
  /* padding-left: 1rem; */
  z-index: 100;
  transition: all 0.3s ease-in-out;
  /* justify-items: center; */

  div.write_icon {
    margin-bottom: 1rem;
  }

  .active {
    border-right: 5px solid #07036e;
    background-color: #dad9e9;
    transition: all 0.3s ease-in-out;
    /* width: ${({ userIsOpen }) => (userIsOpen ? "15%" : "4%")}; */
    width: 100%;
    /* padding: 1rem; */
  }

  .add_post_page {
    background-color: #07036e;
    padding: 3px;
    border-radius: 7px;
    position: fixed;
    left: 55rem;
    top: 30rem;
  }

  div.settings {
    margin-top: 5rem;
  }

  @media (min-width: 1281px) {
    width: 18rem;

    div.settings {
      margin-top: 5rem;
    }

    div.write_icon {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* width: ${({ userIsOpen }) => (userIsOpen ? "30%" : "6%")}; */
    width: 15rem;

    div.settings {
      margin-top: 5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* width: ${({ userIsOpen }) => (userIsOpen ? "40%" : "8%")}; */
    width: 15rem;

    div.settings {
      margin-top: 5rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "60%" : "0%")};
    /* width: 40%; */
    /* display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")}; */

    div.side_nav {
      display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")};
    }

    div.settings {
      margin-top: 3rem;
    }
  }

  @media (max-width: 480px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "70%" : "0%")};

    div.side_nav {
      display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")};
    }

    div.settings {
      margin-top: 3rem;
    }
  }
`;

export const IconNav = styled.div`
  /* padding-left: 25px; */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  height: 3rem;

  div.write_icon {
    margin-bottom: 1rem;
  }

  div.write {
    margin: 1rem auto;
  }

  svg {
    font-size: 1.3rem;
  }

  p {
    color: #07036e;
    margin-left: 1rem;
    font-weight: bold;
    /* font-size: 1.3rem; */
  }

  &:hover {
    background-color: #dad9e9;
  }

  .add_post {
    background-color: #f4442e;
    padding: 3px;
    border-radius: 3px;
  }

  @media (min-width: 1281px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 10px;
    padding-right: 16px;

    div.write_icon {
      margin-bottom: 1rem;
    }

    div.write {
      background: #fff;
      border: 2px solid #07036e;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border-radius: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 1rem;
          color: #f4442e;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 10px;
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "16px" : "4px")};

    div.write {
      background: #fff;
      border: 2px solid #07036e;
      padding: 0.5rem;
      border-radius: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 1rem;
          color: #f4442e;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    padding-left: 1.5rem;
    /* padding-right: 10px; */
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "16px" : "4px")};
    /* display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")}; */

    div.write {
      background: #fff;
      border: 2px solid #07036e;
      padding: 0.5rem;
      border-radius: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 1rem;
          color: #f4442e;
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "30px" : "12px")};
    /* display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")}; */

    div.write {
      background: #fff;
      border: 2px solid #07036e;
      padding: 0.5rem;
      border-radius: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 1rem;
          color: #f4442e;
        }
      }
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 10px;
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "30px" : "10px")};

    div.write {
      background: #fff;
      border: 2px solid #07036e;
      padding: 0.5rem;
      border-radius: 10px;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 1rem;
          color: #f4442e;
        }
      }
    }
  }
`;

export const NavMenu = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  width: 18rem;
  /* width: 4%; */

  div.side_menu {
    background: #f0f3f6;
    height: 10rem;
    width: 4.7rem;
    display: none;
  }

  .menu {
    margin-left: 1rem;
    top: 1rem;
    left: 0rem;
    position: relative;
    /* top: 4rem; */
  }

  .logo_image {
    background-color: #f0f3f6;
    padding: 2rem 5rem 2rem 2rem;
    z-index: 400;
    width: 100%;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
    width: 18rem;
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
      display: none;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      /* top: 4rem; */
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: 20%;
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
      display: none;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    /* width: ${({ userIsOpen }) => (userIsOpen ? "40%" : "8%")}; */
    width: 20%;

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "60%" : "60%")};
    /* width: 40%; */
    /* display: none; */

    div.side_menu {
      background: #f0f3f6;
      height: 4rem;
      top: 2rem;
      display: block;
    }

    .menu {
      margin-left: 1rem;
      /* top: 1rem; */
      left: 0rem;
      position: relative;
      /* top: 4rem; */
    }

    .logo_image {
      /* background-color: #f0f3f6; */
      background: ${({ userIsOpen }) => (userIsOpen ? "#f0f3f6" : "none")};
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    /* width: ${({ userIsOpen }) => (userIsOpen ? "75%" : "12%")}; */
    width: ${({ userIsOpen }) => (userIsOpen ? "70%" : "16%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      display: block;
      height: 4rem;
      width: 3rem;
    }

    .menu {
      margin-left: 1rem;
      left: 0rem;
      position: relative;
    }

    .logo_image {
      background: ${({ userIsOpen }) => (userIsOpen ? "#f0f3f6" : "none")};
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
      display: ${({ userIsOpen }) => (userIsOpen ? "block" : "none")};
    }
  }
`;

export const Search = styled.div`
  margin-left: 25rem;
  /* display: flex; */
  font-size: 20px;

  .search {
    position: absolute;
    margin-left: 1rem;
    margin-top: 0.8rem;
    z-index: 1;
  }

  input {
    padding-left: 3rem;
  }

  @media (min-width: 1281px) {
    margin-left: 25rem;

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* margin-left: 8rem; */
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 15rem;
    margin-right: 1rem;
    width: 80%;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (max-width: 480px) {
    margin-left: 4rem;
    width: 80%;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;

  button {
    border: none;
    background: none;
    color: #07036e;
    font-weight: 700;
    font-size: 19px;
    padding: 1rem 1rem;
    width: 7rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */

    &:hover {
      color: #fff;
      background: #07036e;
      border-radius: 7px;
    }
  }

  h3 {
    margin: 0rem 1rem;
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    gap: 0.5rem;

    button {
      font-size: 14px;
      width: 4rem;
      padding: 1rem 0.2rem;
    }
  }

  @media (max-width: 375px) {
    justify-content: left;
    margin-left: -20px;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
  border-radius: 10px;
  width: 60%;
  left: 20rem;
  top: 6rem;
  margin: auto;
  z-index: 800;
  font-size: 19px;
  height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
  overflow-y: scroll;
  transition: all 0.3s ease;

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

  @media (min-width: 1281px) {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
    border-radius: 10px;
    /* width: 62%; */
    margin: auto;
    z-index: 800;
    font-size: 19px;
    height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
    overflow-y: scroll;
    transition: all 0.3s ease;

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

    div.search_container {
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      display: ${({ isSearch }) => (isSearch ? "block" : "none")};
    }

    div.search_item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #b2bbc6;
      padding-bottom: 2rem;

      h3 {
        color: #6069f0;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
    border-radius: 10px;
    /* width: 62%; */
    margin: auto;
    z-index: 800;
    font-size: 19px;
    height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
    overflow-y: scroll;
    transition: all 0.3s ease;

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

    div.search_container {
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      display: ${({ isSearch }) => (isSearch ? "block" : "none")};
    }

    div.search_item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #b2bbc6;
      padding-bottom: 2rem;

      h3 {
        color: #6069f0;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
    border-radius: 10px;
    /* width: 62%; */
    margin: auto;
    z-index: 800;
    font-size: 16px;
    height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
    overflow-y: scroll;
    transition: all 0.3s ease;

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

    div.search_container {
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      display: ${({ isSearch }) => (isSearch ? "block" : "none")};
    }

    div.search_item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #b2bbc6;
      padding-bottom: 2rem;

      h2 {
        font-size: 16px;
      }

      h3 {
        color: #6069f0;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
    border-radius: 10px;
    width: 80%;
    left: 5rem;
    margin: auto;
    z-index: 800;
    font-size: 16px;
    height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
    overflow-y: scroll;
    transition: all 0.3s ease;

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

    div.search_container {
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      display: ${({ isSearch }) => (isSearch ? "block" : "none")};
    }

    div.search_item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #b2bbc6;
      padding-bottom: 2rem;

      h2 {
        font-size: 16px;
      }

      h3 {
        color: #6069f0;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 480px) {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
    border-radius: 10px;
    width: 90%;
    left: 2rem;
    margin: auto;
    z-index: 800;
    font-size: 12px;
    height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
    overflow-y: scroll;
    transition: all 0.3s ease;

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

    div.search_container {
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      display: ${({ isSearch }) => (isSearch ? "block" : "none")};
    }

    div.search_item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #b2bbc6;
      padding-bottom: 2rem;

      h2 {
        font-size: 12px;
      }

      h3 {
        color: #6069f0;
        cursor: pointer;
        font-size: 10px;
      }
    }
  }
`;
