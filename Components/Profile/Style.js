import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

  /* .star {
    display: flex;
  } */

  div.profile {
    width: 70%;
    margin-left: 25rem;
    margin-right: 3rem;
  }

  button {
    background: #07036e;
    border-radius: 5px;
    font-size: 19px;
    border: none;
    color: #fff;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      border: 1.5px solid #07036e;
      background: none;
      color: #07036e;
    }
  }

  div.upload-btn {
    width: 100%;
    display: grid;
    justify-items: center;
    margin-bottom: 2rem;

    button {
      background-color: #f4442e;

      &:hover {
        border: 1.5px solid #f4442e;
        background: none;
        color: #f4442e;
      }
    }
  }

  div.form-modal {
    background-color: #04023ac0;
    position: fixed;
    /* width: 100%; */
    height: 100%;
    z-index: 800;
    top: 0;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    transition: all 0.1s ease-in-out;

    .cancel_icon {
      position: relative;
      top: 5rem;
      width: 100%;
      bottom: 0;
      cursor: pointer;
    }

    form.edit {
      background-color: #f2f4f7;
      width: 80%;
      border-radius: 10px;
      margin: 7rem auto;
      grid-template-columns: 30% 70%;
      justify-items: center;
      width: ${({ isOpen }) => (isOpen ? "80%" : "0%")};
      display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
      transition: all 0.1s ease-in-out;
      /* align-items: center; */

      div.user {
        display: grid;
        justify-items: center;
        width: 100%;
        margin: 0rem auto;
        height: 50rem;

        div.user_info {
          background: #d9d9de;
          width: 100%;
          border-radius: 10px 10px 0px 0px;
          height: 10rem;
          padding-top: 4rem;
          margin: 0rem auto;

          h2 {
            margin-bottom: 1rem;
          }

          div.img {
            width: 40%;
            margin: auto;
          }

          .image {
            border-radius: 50%;
            margin: auto;
            width: 60%;
          }

          div.edit_img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #f2f4f7;
            position: relative;
            bottom: 3rem;
            left: 14rem;
            text-align: center;

            div.upload-form {
              input {
                visibility: hidden;
                width: 0;
                height: 0;
              }
            }

            .pen {
              margin-top: 8px;
            }
          }

          h2 {
            text-align: center;
            input.name {
              font-size: 26px;
              text-align: center;
              font-weight: 700;
              border: 1px solid #b2bbc6;
              border-radius: 10px;
              padding: 0.5rem;
            }
          }
        }

        div.additionals {
          width: 90%;
          margin: 0rem auto;

          p {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            input {
              font-size: 19px;
              border-radius: 10px;
              padding: 0.5rem;
              width: 90%;
              border: 1px solid #b2bbc6;
            }
          }
        }
      }
    }

    div.edit_form {
      padding: 4rem 0rem;
      width: 95%;

      h1 {
        font-size: 26px;
      }

      h2,
      p {
        font-size: 19px;
      }

      div.modal {
        width: 80%;
        margin: auto;

        div.header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        textarea,
        input {
          border: 1px solid #b2bbc6;
          border-radius: 10px;
          font-size: 19px;
          padding: 0.5rem;
        }

        div.textarea {
          textarea {
            width: 100%;
            margin: 1rem 0rem;
          }
        }

        div.grid {
          display: flex;
          grid-gap: 1rem;
          margin-bottom: 1rem;
          justify-content: space-between;
          width: 100%;
          align-items: center;

          input {
            width: 90%;
          }
        }
      }
    }

    form.reset {
      width: 100%;

      h1 {
        width: 80%;
        margin: auto;
      }

      div.reset_password {
        display: grid;
        margin: 1rem auto 0rem auto;
        width: 80%;

        label {
          margin-bottom: 1rem;
        }

        div.reset_input {
          width: 100%;

          input {
            font-size: 19px;
            padding: 0.5rem;
            width: 40%;
            border-radius: 10px;
            border: 1px solid #b2bbc6;
            margin-right: 1rem;
          }
        }
      }
    }
  }

  div.container {
    display: grid;
    grid-template-columns: 40% 60%;
    justify-items: center;
    width: 100%;
    margin: auto;

    div.detail,
    div.info {
      background-color: #f9fafb;
      border-radius: 10px;
      margin: 4rem auto;
    }

    div.detail {
      display: grid;
      justify-items: center;
      width: 90%;

      div.user {
        background: #d9d9de;
        width: 100%;
        margin: 0rem auto;
        display: grid;
        justify-items: center;
        height: 11rem;
        border-radius: 10px 10px 0px 0px;
        margin-bottom: 2rem;

        div.img_container {
          margin: 4rem 0rem 0rem 0rem;

          .image {
            border-radius: 50%;
          }
        }

        div.name {
          padding: 0rem 1rem 0rem 1rem;
          color: #020127;
          display: flex;
          font-size: 26px;
          font-weight: 700;
        }

        div.category {
          text-align: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          padding: 1rem;
        }
      }
    }

    div.contact {
      margin-top: 11rem;
      margin-bottom: 4rem;
      width: 80%;

      h1 {
        color: #020127;
        font-size: 26px;
        margin-bottom: 1rem;
      }

      p {
        color: #020127;
        font-size: 19px;
        display: flex;
        align-items: center;
        grid-gap: 1rem;
        width: 90%;
        margin-bottom: 1rem;
      }
    }

    div.info {
      width: 100%;
      /* z-index: 500; */
      color: #020127;
      /* margin-right: 10rem; */

      div.split {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 3rem auto 0rem auto;

        h1 {
          font-size: 26px;
          /* margin-bottom: 2rem; */
        }
      }

      p.personal {
        width: 80%;
        margin: 1rem auto;
        font-size: 19px;
      }

      div.flex {
        display: flex;
        grid-gap: 1rem;
        align-items: center;
        width: 90%;
        margin: auto;
        margin-bottom: 1rem;

        h2,
        p {
          font-size: 19px;
        }
      }
    }
  }

  @media (min-width: 1281px) {
    /* z-index: 500; */
    background-color: #fff;

    div.profile {
      width: 80%;
      margin-top: 5rem;
      margin-left: 20rem;
      margin-right: 3rem;
    }

    button {
      background: #07036e;
      border-radius: 5px;
      font-size: 19px;
      border: none;
      color: #fff;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1.5px solid #07036e;
        background: none;
        color: #07036e;
      }
    }

    div.upload-btn {
      width: 100%;
      display: grid;
      justify-items: center;
      margin-bottom: 2rem;

      button {
        background-color: #f4442e;

        &:hover {
          border: 1.5px solid #f4442e;
          background: none;
          color: #f4442e;
        }
      }
    }

    div.form-modal {
      background-color: #04023ac0;
      position: fixed;
      /* width: 100%; */
      height: 100%;
      z-index: 800;
      top: 0;
      width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
      transition: all 0.1s ease-in-out;

      .cancel_icon {
        position: relative;
        top: 5rem;
        width: 100%;
        bottom: 0;
        cursor: pointer;
      }

      form.edit {
        background-color: #f2f4f7;
        width: 80%;
        border-radius: 10px;
        margin: 7rem auto;
        grid-template-columns: 30% 70%;
        justify-items: center;
        width: ${({ isOpen }) => (isOpen ? "80%" : "0%")};
        display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
        transition: all 0.1s ease-in-out;
        /* align-items: center; */

        div.user {
          display: grid;
          justify-items: center;
          width: 100%;
          margin: 0rem auto;
          height: 50rem;

          div.user_info {
            background: #d9d9de;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            height: 10rem;
            padding-top: 4rem;
            margin: 0rem auto;

            h2 {
              margin-bottom: 1rem;
            }

            div.img {
              width: 40%;
              margin: auto;
            }

            .image {
              border-radius: 50%;
              margin: auto;
              width: 60%;
            }

            div.edit_img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f2f4f7;
              position: relative;
              bottom: 3rem;
              left: 14rem;
              text-align: center;

              div.upload-form {
                input {
                  visibility: hidden;
                  width: 0;
                  height: 0;
                }
              }

              .pen {
                margin-top: 8px;
              }
            }

            h2 {
              text-align: center;
              input.name {
                font-size: 26px;
                text-align: center;
                font-weight: 700;
                border: 1px solid #b2bbc6;
                border-radius: 10px;
                padding: 0.5rem;
              }
            }
          }

          div.additionals {
            width: 90%;
            margin: 0rem auto;

            p {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              input {
                font-size: 19px;
                border-radius: 10px;
                padding: 0.5rem;
                width: 90%;
                border: 1px solid #b2bbc6;
              }
            }
          }
        }
      }

      div.edit_form {
        padding: 4rem 0rem;
        width: 95%;

        h1 {
          font-size: 26px;
        }

        h2,
        p {
          font-size: 19px;
        }

        div.modal {
          width: 80%;
          margin: auto;

          div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          textarea,
          input {
            border: 1px solid #b2bbc6;
            border-radius: 10px;
            font-size: 19px;
            padding: 0.5rem;
          }

          div.textarea {
            textarea {
              width: 100%;
              margin: 1rem 0rem;
            }
          }

          div.grid {
            display: flex;
            grid-gap: 1rem;
            margin-bottom: 1rem;
            justify-content: space-between;
            width: 100%;
            align-items: center;

            input {
              width: 90%;
            }
          }
        }
      }

      form.reset {
        width: 100%;

        h1 {
          width: 80%;
          margin: auto;
        }

        div.reset_password {
          display: grid;
          margin: 1rem auto 0rem auto;
          width: 80%;

          label {
            margin-bottom: 1rem;
          }

          div.reset_input {
            width: 100%;

            input {
              font-size: 19px;
              padding: 0.5rem;
              width: 40%;
              border-radius: 10px;
              border: 1px solid #b2bbc6;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: 40% 60%;
      justify-items: center;
      width: 95%;
      margin: 0rem 3rem 0rem 0rem;

      div.detail,
      div.info {
        background-color: #f9fafb;
        border-radius: 10px;
        margin: 4rem auto;
      }

      div.detail {
        display: grid;
        justify-items: center;
        width: 90%;

        div.user {
          background: #d9d9de;
          width: 100%;
          margin: 0rem auto;
          display: grid;
          justify-items: center;
          height: 11rem;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 2rem;

          div.img_container {
            margin: 4rem 0rem 0rem 0rem;

            .image {
              border-radius: 50%;
            }
          }

          div.name {
            padding: 0rem 1rem 0rem 1rem;
            color: #020127;
            display: flex;
            font-size: 26px;
            font-weight: 700;
          }

          div.category {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding: 1rem;
            margin-bottom: 2rem;
          }
        }
      }

      div.contact {
        margin-top: 13rem;
        margin-bottom: 4rem;
        width: 80%;

        h1 {
          color: #020127;
          font-size: 26px;
          margin-bottom: 1rem;
        }

        p {
          color: #020127;
          font-size: 19px;
          display: flex;
          align-items: center;
          grid-gap: 1rem;
          width: 90%;
          margin-bottom: 1rem;
        }
      }

      div.info {
        width: 100%;
        /* z-index: 500; */
        color: #020127;
        /* margin-right: 10rem; */

        div.split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 3rem auto 0rem auto;

          h1 {
            font-size: 26px;
            /* margin-bottom: 2rem; */
          }
        }

        p.personal {
          width: 80%;
          margin: 1rem auto;
          font-size: 19px;
        }

        div.flex {
          display: flex;
          grid-gap: 1rem;
          align-items: center;
          width: 90%;
          margin: auto;
          margin-bottom: 1rem;

          h2,
          p {
            font-size: 19px;
          }
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    z-index: 500;
    background-color: #fff;
    margin-left: 2rem;

    div.profile {
      width: 90%;
      margin: 5rem auto 0rem auto;
    }

    button {
      background: #07036e;
      border-radius: 5px;
      font-size: 19px;
      border: none;
      color: #fff;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1.5px solid #07036e;
        background: none;
        color: #07036e;
      }
    }

    div.upload-btn {
      width: 100%;
      display: grid;
      justify-items: center;
      margin-bottom: 2rem;

      button {
        background-color: #f4442e;

        &:hover {
          border: 1.5px solid #f4442e;
          background: none;
          color: #f4442e;
        }
      }
    }

    div.form-modal {
      background-color: #04023ac0;
      position: fixed;
      /* width: 100%; */
      height: 100%;
      z-index: 800;
      top: 0;
      width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
      transition: all 0.1s ease-in-out;

      .cancel_icon {
        position: relative;
        top: 5rem;
        width: 100%;
        bottom: 0;
        cursor: pointer;
      }

      form.edit {
        background-color: #f2f4f7;
        width: 70%;
        border-radius: 10px;
        margin: 7rem auto;
        grid-template-columns: 30% 70%;
        justify-items: center;
        width: ${({ isOpen }) => (isOpen ? "90%" : "0%")};
        display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
        transition: all 0.1s ease-in-out;
        /* align-items: center; */

        div.user {
          display: grid;
          justify-items: center;
          width: 100%;
          height: 40rem;

          div.user_info {
            background: #d9d9de;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            height: 10rem;
            padding-top: 4rem;
            margin: 0rem auto;

            h2 {
              margin-bottom: 1rem;
            }

            div.img {
              width: 40%;
              margin: auto;
            }

            .image {
              border-radius: 50%;
              margin: auto;
              width: 60%;
            }

            div.edit_img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f2f4f7;
              position: relative;
              bottom: 3rem;
              left: 12rem;
              text-align: center;

              div.upload-form {
                input {
                  visibility: hidden;
                  width: 0;
                  height: 0;
                }
              }

              .pen {
                margin-top: 8px;
              }
            }

            h2 {
              text-align: center;
              input.name {
                font-size: 26px;
                text-align: center;
                font-weight: 700;
                border: 1px solid #b2bbc6;
                border-radius: 10px;
                padding: 0.5rem;
                width: 80%;
              }
            }

            button.upload-btn {
              margin: auto;
            }
          }

          div.additionals {
            width: 90%;
            margin: 0rem auto;
            height: 0rem;

            p {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              input {
                font-size: 19px;
                border-radius: 10px;
                padding: 0.5rem;
                width: 90%;
                border: 1px solid #b2bbc6;
              }
            }
          }
        }
      }

      div.edit_form {
        padding: 4rem 0rem;
        width: 100%;

        h1 {
          font-size: 26px;
        }

        h2,
        p {
          font-size: 19px;
        }

        div.modal {
          width: 80%;
          margin: auto;

          div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80%;
            margin: auto;
          }

          textarea,
          input {
            border: 1px solid #b2bbc6;
            border-radius: 10px;
            font-size: 19px;
            padding: 0.5rem;
            /* margin: auto; */
          }

          div.textarea {
            width: 80%;
            margin: auto;

            textarea {
              width: 100%;
              margin: 1rem auto;
            }
          }

          div.grid {
            display: flex;
            grid-gap: 1rem;
            margin: 0rem auto 1rem auto;
            justify-content: space-between;
            width: 80%;
            align-items: center;

            input {
              width: 90%;
            }
          }
        }
      }

      form.reset {
        width: 70%;
        margin: auto;

        div.reset_password {
          display: grid;
          margin: 1rem auto 0rem auto;
          width: 100%;

          label {
            margin-bottom: 1rem;
          }

          div.reset_input {
            input {
              font-size: 19px;
              padding: 0.5rem;
              width: 30%;
              border-radius: 10px;
              border: 1px solid #b2bbc6;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      width: 50%;
      margin-left: 20rem;
      /* gap: 2rem; */

      div.detail,
      div.info {
        background-color: #f9fafb;
        border-radius: 10px;
        margin: 2rem auto;
      }

      div.detail {
        display: grid;
        justify-items: center;
        width: 100%;

        div.user {
          background: #d9d9de;
          width: 100%;
          margin: 0rem auto;
          display: grid;
          justify-items: center;
          height: 11rem;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 2rem;

          div.img_container {
            margin: 4rem 0rem 0rem 0rem;

            .image {
              border-radius: 50%;
            }
          }

          div.name {
            padding: 0rem 1rem 1rem 1rem;
            color: #020127;
            display: flex;
            font-size: 26px;
            font-weight: 700;
          }

          div.category {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding: 1rem;
          }
        }
      }

      div.contact {
        margin-top: 12rem;
        margin-bottom: 4rem;
        width: 90%;

        h1 {
          color: #020127;
          font-size: 26px;
          margin-bottom: 1rem;
        }

        p {
          color: #020127;
          font-size: 16px;
          display: flex;
          align-items: center;
          grid-gap: 1rem;
          width: 100%;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
      }

      div.info {
        width: 100%;
        /* z-index: 500; */
        color: #020127;
        /* margin-right: 10rem; */

        div.split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 3rem auto 0rem auto;

          h1 {
            font-size: 26px;
            /* margin-bottom: 2rem; */
          }
        }

        p.personal {
          width: 80%;
          margin: 1rem auto;
          font-size: 19px;
        }

        div.flex {
          display: flex;
          grid-gap: 1rem;
          align-items: center;
          width: 90%;
          margin: auto;
          margin-bottom: 1rem;

          h2,
          p {
            font-size: 19px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #fff;
    margin-left: 2rem;

    div.profile {
      width: 80%;
      margin: 5rem auto 2rem auto;
    }

    button {
      background: #07036e;
      border-radius: 5px;
      font-size: 19px;
      border: none;
      color: #fff;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1.5px solid #07036e;
        background: none;
        color: #07036e;
      }
    }

    div.upload-btn {
      width: 100%;
      display: grid;
      justify-items: center;
      margin-bottom: 2rem;

      button {
        background-color: #f4442e;

        &:hover {
          border: 1.5px solid #f4442e;
          background: none;
          color: #f4442e;
        }
      }
    }

    div.form-modal {
      background-color: #04023ac0;
      position: fixed;
      /* width: 100%; */
      height: 100%;
      z-index: 800;
      top: 0;
      width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
      transition: all 0.1s ease-in-out;

      .cancel_icon {
        position: relative;
        top: 5rem;
        width: 100%;
        bottom: 0;
        cursor: pointer;
      }

      form.edit {
        background-color: #f2f4f7;
        width: 70%;
        border-radius: 10px;
        margin: 7rem auto;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        overflow-y: scroll;
        width: ${({ isOpen }) => (isOpen ? "70%" : "0%")};
        display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
        transition: all 0.1s ease-in-out;
        height: 50rem;
        /* align-items: center; */

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

        div.user {
          display: grid;
          justify-items: center;
          width: 100%;

          div.user_info {
            background: #d9d9de;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            height: 10rem;
            padding-top: 4rem;
            margin: 0rem auto;
            /* height: 20rem; */

            h2 {
              margin-bottom: 1rem;
            }

            div.img {
              width: 40%;
              margin: auto;
              display: grid;
              justify-items: center;
            }

            .image {
              border-radius: 50%;
              margin: auto;
              width: 60%;
            }

            div.edit_img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f2f4f7;
              position: relative;
              bottom: 3rem;
              left: 24rem;
              text-align: center;

              div.upload-form {
                input {
                  visibility: hidden;
                  width: 0;
                  height: 0;
                }
              }

              .pen {
                margin-top: 8px;
              }
            }

            h2 {
              text-align: center;
              input.name {
                font-size: 26px;
                text-align: center;
                font-weight: 700;
                border: 1px solid #b2bbc6;
                border-radius: 10px;
                padding: 0.5rem;
              }
            }
          }

          div.additionals {
            width: 90%;
            margin: 16rem auto 0rem auto;
            /* height: 20rem; */

            p {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              input {
                font-size: 19px;
                border-radius: 10px;
                padding: 0.5rem;
                width: 90%;
                border: 1px solid #b2bbc6;
              }
            }
          }
        }
      }

      div.edit_form {
        padding: 4rem 0rem;
        width: 95%;
        margin: auto;

        h1 {
          font-size: 26px;
        }

        h2,
        p {
          font-size: 19px;
        }

        div.modal {
          width: 100%;

          div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: auto;
          }

          textarea,
          input {
            border: 1px solid #b2bbc6;
            border-radius: 10px;
            font-size: 19px;
            padding: 0.5rem;
          }

          div.textarea {
            width: 80%;
            margin: auto;
          }

          textarea {
            width: 100%;
            margin: 1rem auto;
          }

          div.grid {
            display: flex;
            grid-gap: 1rem;
            /* margin-bottom: 1rem; */
            justify-content: space-between;
            width: 80%;
            align-items: center;
            margin: 1rem auto 0rem auto;

            input {
              width: 90%;
            }
          }
        }
      }

      form.reset {
        width: 80%;
        margin: 2rem auto 0rem auto;

        div.reset_password {
          display: grid;
          margin-top: 1rem;

          label {
            margin-bottom: 1rem;
          }

          div.reset_input {
            width: 100%;

            input {
              font-size: 19px;
              padding: 0.5rem;
              width: 35%;
              border-radius: 10px;
              border: 1px solid #b2bbc6;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      width: 70%;
      margin-left: 13rem;
      gap: 2rem;

      div.detail,
      div.info {
        background-color: #f9fafb;
        border-radius: 10px;
        margin: 2rem auto;
      }

      div.detail {
        display: grid;
        justify-items: center;
        width: 100%;

        div.user {
          background: #d9d9de;
          width: 100%;
          margin: 0rem auto;
          display: grid;
          justify-items: center;
          height: 11rem;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 2rem;

          div.img_container {
            margin: 4rem 0rem 0rem 0rem;

            .image {
              border-radius: 50%;
            }
          }

          div.name {
            padding: 0rem 1rem 1rem 1rem;
            color: #020127;
            display: flex;
            font-size: 26px;
            font-weight: 700;
          }

          div.category {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding: 1rem;
          }
        }
      }

      div.contact {
        margin-top: 12rem;
        margin-bottom: 4rem;
        width: 90%;

        h1 {
          color: #020127;
          font-size: 26px;
          margin-bottom: 1rem;
        }

        p {
          color: #020127;
          font-size: 16px;
          display: flex;
          align-items: center;
          grid-gap: 1rem;
          width: 100%;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
      }

      div.info {
        width: 100%;
        /* z-index: 500; */
        color: #020127;
        /* margin-right: 10rem; */

        div.split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 3rem auto 0rem auto;

          h1 {
            font-size: 26px;
            /* margin-bottom: 2rem; */
          }
        }

        p.personal {
          width: 80%;
          margin: 1rem auto;
          font-size: 19px;
        }

        div.flex {
          display: flex;
          grid-gap: 1rem;
          align-items: center;
          width: 90%;
          margin: auto;
          margin-bottom: 1rem;

          h2,
          p {
            font-size: 19px;
          }
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #fff;
    /* margin-left: 2rem; */

    div.profile {
      width: 80%;
      margin: 4rem auto 0rem auto;
    }

    button {
      background: #07036e;
      border-radius: 5px;
      font-size: 19px;
      border: none;
      color: #fff;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1.5px solid #07036e;
        background: none;
        color: #07036e;
      }
    }

    div.upload-btn {
      width: 100%;
      display: grid;
      justify-items: center;
      margin-bottom: 2rem;

      button {
        background-color: #f4442e;

        &:hover {
          border: 1.5px solid #f4442e;
          background: none;
          color: #f4442e;
        }
      }
    }

    div.form-modal {
      background-color: #04023ac0;
      position: fixed;
      /* width: 100%; */
      height: 100%;
      z-index: 800;
      top: 0;
      width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
      transition: all 0.1s ease-in-out;

      .cancel_icon {
        position: relative;
        top: 5rem;
        width: 100%;
        bottom: 0;
        cursor: pointer;
      }

      form.edit {
        background-color: #f2f4f7;
        width: 70%;
        border-radius: 10px;
        margin: 7rem auto;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        overflow-y: scroll;
        width: ${({ isOpen }) => (isOpen ? "70%" : "0%")};
        display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
        transition: all 0.1s ease-in-out;
        height: 50rem;
        /* align-items: center; */

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

        div.user {
          display: grid;
          justify-items: center;
          width: 100%;

          div.user_info {
            background: #d9d9de;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            height: 10rem;
            padding-top: 4rem;
            margin: 0rem auto;
            /* height: 20rem; */

            h2 {
              margin-bottom: 1rem;
            }

            div.img {
              width: 40%;
              margin: auto;
              display: grid;
              justify-items: center;
            }

            .image {
              border-radius: 50%;
              margin: auto;
              width: 60%;
            }

            div.edit_img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f2f4f7;
              position: relative;
              bottom: 3rem;
              left: 1rem;
              text-align: center;

              div.upload-form {
                input {
                  visibility: hidden;
                  width: 0;
                  height: 0;
                }
              }

              .pen {
                margin-top: 8px;
              }
            }

            h2 {
              text-align: center;
              input.name {
                font-size: 26px;
                text-align: center;
                font-weight: 700;
                border: 1px solid #b2bbc6;
                border-radius: 10px;
                padding: 0.5rem;
              }
            }
          }

          div.additionals {
            width: 90%;
            margin: 16rem auto 0rem auto;
            /* height: 20rem; */

            p {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              input {
                font-size: 19px;
                border-radius: 10px;
                padding: 0.5rem;
                width: 90%;
                border: 1px solid #b2bbc6;
              }
            }
          }
        }
      }

      div.edit_form {
        padding: 4rem 0rem;
        width: 95%;
        margin: auto;

        h1 {
          font-size: 26px;
        }

        h2,
        p {
          font-size: 19px;
        }

        div.modal {
          width: 100%;

          div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: auto;
          }

          textarea,
          input {
            border: 1px solid #b2bbc6;
            border-radius: 10px;
            font-size: 19px;
            padding: 0.5rem;
          }

          div.textarea {
            width: 80%;
            margin: auto;
          }

          textarea {
            width: 100%;
            margin: 1rem auto;
          }

          div.grid {
            display: flex;
            grid-gap: 1rem;
            /* margin-bottom: 1rem; */
            justify-content: space-between;
            width: 80%;
            align-items: center;
            margin: 1rem auto 0rem auto;

            input {
              width: 90%;
            }
          }
        }
      }

      form.reset {
        width: 80%;
        margin: 2rem auto 0rem auto;

        div.reset_password {
          display: grid;
          margin-top: 1rem;

          label {
            margin-bottom: 1rem;
          }

          div.reset_input {
            width: 100%;

            input {
              font-size: 19px;
              padding: 0.5rem;
              width: 35%;
              border-radius: 10px;
              border: 1px solid #b2bbc6;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      width: 100%;
      margin: auto;
      /* gap: 2rem; */

      div.detail,
      div.info {
        background-color: #f9fafb;
        border-radius: 10px;
        margin: 2rem auto 2rem auto;
      }

      div.detail {
        display: grid;
        justify-items: center;
        width: 100%;

        div.user {
          background: #d9d9de;
          width: 100%;
          margin: 0rem auto;
          display: grid;
          justify-items: center;
          height: 11rem;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 2rem;

          div.img_container {
            margin: 4rem 0rem 0rem 0rem;

            .image {
              border-radius: 50%;
            }
          }

          div.name {
            padding: 0rem 1rem 1rem 1rem;
            color: #020127;
            display: flex;
            font-size: 26px;
            font-weight: 700;
          }

          div.category {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding: 1rem;
          }
        }
      }

      div.contact {
        margin-top: 13rem;
        margin-bottom: 4rem;
        width: 90%;

        h1 {
          color: #020127;
          font-size: 26px;
          margin-bottom: 1rem;
        }

        p {
          color: #020127;
          font-size: 16px;
          display: flex;
          align-items: center;
          grid-gap: 1rem;
          width: 100%;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
      }

      div.info {
        width: 100%;
        /* z-index: 500; */
        color: #020127;
        /* margin-right: 10rem; */

        div.split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 3rem auto 0rem auto;

          h1 {
            font-size: 26px;
            /* margin-bottom: 2rem; */
          }
        }

        p.personal {
          width: 80%;
          margin: 1rem auto;
          font-size: 19px;
        }

        div.flex {
          display: flex;
          grid-gap: 1rem;
          align-items: center;
          width: 90%;
          margin: auto;
          margin-bottom: 1rem;

          h2,
          p {
            font-size: 19px;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    background-color: #fff;
    /* margin-left: 2rem; */

    div.profile {
      width: 90%;
      margin: 4rem auto 0rem auto;
    }

    button {
      background: #07036e;
      border-radius: 5px;
      font-size: 19px;
      border: none;
      color: #fff;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1.5px solid #07036e;
        background: none;
        color: #07036e;
      }
    }

    div.upload-btn {
      width: 100%;
      display: grid;
      justify-items: center;
      margin-bottom: 2rem;

      button {
        background-color: #f4442e;

        &:hover {
          border: 1.5px solid #f4442e;
          background: none;
          color: #f4442e;
        }
      }
    }

    div.form-modal {
      background-color: #04023ac0;
      position: fixed;
      /* width: 100%; */
      height: 100%;
      z-index: 800;
      top: 0;
      width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
      transition: all 0.1s ease-in-out;

      .cancel_icon {
        position: relative;
        top: 2rem;
        width: 100%;
        bottom: 0;
        cursor: pointer;
      }

      form.edit {
        background-color: #f2f4f7;
        width: 70%;
        border-radius: 10px;
        margin: 4rem auto;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        overflow-y: scroll;
        width: ${({ isOpen }) => (isOpen ? "90%" : "0%")};
        display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
        transition: all 0.1s ease-in-out;
        height: 50rem;
        /* align-items: center; */

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

        div.user {
          display: grid;
          justify-items: center;
          width: 100%;

          div.user_info {
            background: #d9d9de;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            height: 10rem;
            padding-top: 4rem;
            margin: 0rem auto;
            /* height: 20rem; */

            h2 {
              margin-bottom: 1rem;
            }

            div.img {
              width: 40%;
              margin: auto;
              display: grid;
              justify-items: center;
            }

            .image {
              border-radius: 50%;
              margin: auto;
              width: 60%;
            }

            div.edit_img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f2f4f7;
              position: relative;
              bottom: 3rem;
              left: 15rem;
              text-align: center;

              div.upload-form {
                input {
                  visibility: hidden;
                  width: 0;
                  height: 0;
                }
              }

              .pen {
                margin-top: 8px;
              }
            }

            h2 {
              text-align: center;
              input.name {
                font-size: 26px;
                text-align: center;
                font-weight: 700;
                border: 1px solid #b2bbc6;
                border-radius: 10px;
                padding: 0.5rem;
              }
            }
          }

          div.additionals {
            width: 90%;
            margin: 16rem auto 0rem auto;
            /* height: 20rem; */

            p {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              input {
                font-size: 14px;
                border-radius: 10px;
                padding: 0.5rem;
                width: 90%;
                border: 1px solid #b2bbc6;
              }
            }
          }
        }
      }

      div.edit_form {
        padding: 4rem 0rem;
        width: 95%;
        margin: auto;

        h1 {
          font-size: 19px;
        }

        h2,
        p {
          font-size: 14px;
        }

        div.modal {
          width: 100%;

          div.header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: auto;
          }

          textarea,
          input {
            border: 1px solid #b2bbc6;
            border-radius: 10px;
            font-size: 14px;
            padding: 0.5rem;
          }

          div.textarea {
            width: 80%;
            margin: auto;
          }

          textarea {
            width: 100%;
            margin: 1rem auto;
          }

          div.grid {
            display: flex;
            grid-gap: 1rem;
            /* margin-bottom: 1rem; */
            justify-content: space-between;
            width: 80%;
            align-items: center;
            margin: 1rem auto 0rem auto;

            input {
              width: 90%;
            }
          }
        }
      }

      form.reset {
        width: 80%;
        margin: 2rem auto 0rem auto;

        div.reset_password {
          display: grid;
          margin-top: 1rem;

          label {
            margin-bottom: 1rem;
          }

          div.reset_input {
            width: 100%;
            display: grid;
            /* justify-items: center; */

            input {
              font-size: 14px;
              padding: 0.5rem;
              width: 100%;
              border-radius: 10px;
              border: 1px solid #b2bbc6;
              margin-right: 1rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      width: 100%;
      margin: auto;
      /* gap: 2rem; */

      div.detail,
      div.info {
        background-color: #f9fafb;
        border-radius: 10px;
        margin: 2rem auto 0rem auto;
      }

      div.detail {
        display: grid;
        justify-items: center;
        width: 100%;

        div.user {
          background: #d9d9de;
          width: 100%;
          margin: 0rem auto;
          display: grid;
          justify-items: center;
          height: 11rem;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 2rem;

          div.img_container {
            margin: 4rem 0rem 0rem 0rem;

            .image {
              border-radius: 50%;
            }
          }

          div.name {
            padding: 0rem 1rem 1rem 1rem;
            color: #020127;
            display: flex;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
          }

          div.category {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding: 1rem;
          }
        }
      }

      div.contact {
        margin-top: 15rem;
        margin-bottom: 2rem;
        width: 90%;

        h1 {
          color: #020127;
          font-size: 19px;
          margin-bottom: 1rem;
        }

        p {
          color: #020127;
          font-size: 14px;
          display: flex;
          align-items: center;
          grid-gap: 0.5rem;
          width: 100%;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
      }

      div.info {
        width: 100%;
        /* z-index: 500; */
        color: #020127;
        /* margin-right: 10rem; */

        div.split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin: 3rem auto 0rem auto;

          h1 {
            font-size: 19px;
            /* margin-bottom: 2rem; */
          }
        }

        p.personal {
          width: 80%;
          margin: 1rem auto;
          font-size: 14px;
        }

        div.flex {
          display: flex;
          grid-gap: 1rem;
          align-items: center;
          width: 90%;
          margin: auto;
          margin-bottom: 1rem;

          h2,
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;

  div.reviews {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    margin-left: 0rem;
    align-items: flex-start;
    gap: 5rem;
    width: 100%;
  }

  div.review_form {
    background: #f9fafb;
    border-radius: 10px;
    display: grid;
    justify-items: center;
    padding: 2rem;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
    margin-right: 0rem;

    div.flex {
      display: flex;
    }

    form {
      display: grid;
      justify-items: center;
      gap: 2rem;

      textarea {
        border: 1px solid #ebeef2;
        border-radius: 5px 0px 0px 5px;
        padding: 1rem;
        width: 100%;
        font-size: 16px;
        font-family: "Inter", sans-serif;
      }

      input {
        width: 100%;
        background: #2c2929;
        border-radius: 10px;
        border: none;
        color: #fff;
        padding: 1rem 0rem;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        border: 2px solid #2c2929;
        cursor: pointer;

        &:hover {
          border: 2px solid #2c2929;
          color: #2c2929;
          background: none;
        }
      }
    }

    h2 {
      color: #07036e;
    }

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 3rem;
      /* z-index: 700; */
      width: 80%;

      h1 {
        font-size: 26px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 2rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
        }
        gap: 1rem;
        align-items: center;

        .image {
          border-radius: 50%;
        }

        div.post {
          div.username {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            h2 {
              font-size: 26px;
            }

            p {
              font-size: 14px;
            }
          }
        }

        div.user_post {
          p {
            font-size: 19px;
          }
        }
      }
    }
  }

  @media (min-width: 1281px) {
    width: 80%;
    margin-left: 20rem;
    margin-right: 3rem;

    div.reviews {
    }

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 3rem;
      /* z-index: 700; */
      width: 100%;

      h1 {
        font-size: 26px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 2rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
          gap: 1rem;
          align-items: center;

          .image {
            border-radius: 50%;
          }

          div.post {
            div.username {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              h2 {
                font-size: 26px;
              }

              p {
                font-size: 14px;
              }
            }
          }

          div.user_post {
            p {
              font-size: 19px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
    margin: auto;

    div.reviews {
      grid-template-columns: repeat(1, 1fr);
      width: 50%;
      justify-content: center;
      margin-left: 20rem;
    }

    div.review_form {
      margin-right: 0rem;
    }

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 3rem;
      margin: auto;
      width: 100%;
      /* z-index: 100; */

      h1 {
        font-size: 19px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 2rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
          gap: 1rem;
          align-items: center;

          .image {
            border-radius: 50%;
          }

          div.post {
            div.username {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              h2 {
                font-size: 26px;
              }

              p {
                font-size: 11px;
              }
            }
          }

          div.user_post {
            p {
              font-size: 11px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    margin-left: 10rem;

    div.reviews {
      grid-template-columns: repeat(1, 1fr);
      width: 60%;
      justify-content: center;
      margin-left: 9rem;
    }

    div.review_form {
      margin-right: 0rem;
    }

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 3rem;
      z-index: 700;
      width: 100%;

      h1 {
        font-size: 19px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 2rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
          gap: 1rem;
          align-items: center;

          .image {
            border-radius: 50%;
          }

          div.post {
            div.username {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              h2 {
                font-size: 19px;
              }

              p {
                font-size: 11px;
              }
            }
          }

          div.user_post {
            p {
              font-size: 11px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    margin: auto;

    div.reviews {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      justify-content: center;
      margin-left: 0rem;
    }

    div.review_form {
      margin-right: 0rem;
    }

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 1rem;
      z-index: 700;
      width: 100%;

      h1 {
        font-size: 16px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
          gap: 1rem;
          align-items: center;

          .image {
            border-radius: 50%;
          }

          div.post {
            div.username {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              h2 {
                font-size: 16px;
              }

              p {
                font-size: 10px;
              }
            }
          }

          div.user_post {
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    margin: 2rem auto;

    div.wrapper {
      background: #f9fafb;
      border-radius: 10px;
      padding: 1rem;

      h1 {
        font-size: 16px;
        margin-bottom: 2rem;
      }

      div.card {
        background: #ebeef2;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;

        div.dets {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;

          .image {
            border-radius: 50%;
          }

          div.post {
            div.username {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;

              h2 {
                font-size: 16px;
              }

              p {
                font-size: 10px;
              }
            }
          }

          div.user_post {
            p {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;
