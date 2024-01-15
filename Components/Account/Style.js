import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  height: 100%;
  position: fixed;
  justify-items: center;
  /* grid-gap: 8rem; */
  width: 100%;

  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    /* grid-template-columns: 20% 80%; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  justify-items: center;
  grid-gap: 10px;
  width: 100%;
  justify-self: flex-end;
  position: relative;
  margin: auto;
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 10rem;

  h1 {
    font-size: 40px;
    margin: 5rem 0rem 0rem 0rem;
    padding: 0rem;
    height: 4rem;
  }

  .paragraph {
    width: 50%;
    margin: auto;
    margin-top: 2rem;
    /* margin-bottom: 4rem; */
    font-size: 18px;
  }

  p {
    font-size: 20px;
    /* margin-bottom: 4rem; */
  }

  a {
    color: blue;
  }

  form {
    display: grid;
    width: 50%;
    margin: auto;

    div.forgot {
      margin-top: -3.5rem;
      text-align: right;
      color: #000;
      text-decoration: underline;
      z-index: 5;

      a {
        color: #000;
      }
    }

    div.password {
      width: 100%;
      position: relative;

      input {
        width: 100%;
        position: reletive;
      }

      div.show-password {
        position: relative;
        bottom: 5.5rem;
        left: 18rem;
      }
    }

    input.error {
      border: 2px solid #ec3123;
      color: #ec3123;
    }

    input {
      border: 1px solid #909dad;
      height: 4rem;
      padding: 1rem;
      font-size: 18px;
      margin-bottom: 3rem;
      border-radius: 10px;
      /* border: ${({ error }) =>
        error ? "2px solid #ec3123" : "1px solid #909dad"}; */
      border: 1px solid #909dad;
    }

    span {
      /* margin-bottom: -2rem; */
      color: #ec3123;
      text-align: left;
    }

    p.is_artisan {
      font-size: 26px;
      font-weight: 400;
      text-align: left;
      color: #050253;
    }

    div.artisan_btn {
      display: flex;

      input {
        border: 1px solid #909dad;
        background: #fff;
        border-radius: 5px;
        padding: 0rem 2rem;
        margin-top: 1rem;
        margin-right: 2rem;
        cursor: pointer;
      }

      .active {
        background: #050253;
        color: #fff;
      }
    }

    div.category {
      transition: all 0.3s ease;

      p {
        font-size: 26px;
        text-align: left;
        font-weight: 400;
        color: #050253;
      }

      .artisan_category {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        align-items: center;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
          color: #050253;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 1281px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 10rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 0rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 50%;
      margin: auto;
      margin-top: 2rem;
      /* margin-bottom: 4rem; */
      font-size: 18px;
    }

    p {
      font-size: 20px;
      /* margin-bottom: 4rem; */
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 50%;
      margin: auto;

      div.password {
        width: 100%;
        position: relative;

        input {
          width: 100%;
          position: reletive;
        }

        div.show-password {
          position: relative;
          bottom: 5.5rem;
          left: 18rem;
        }
      }

      input {
        border: 1px solid #909dad;
        height: 4rem;
        padding: 1rem;
        font-size: 18px;
        margin-bottom: 3rem;
        border-radius: 10px;
      }

      span {
        /* margin-bottom: -2rem; */
        color: #ec3123;
        text-align: left;
      }

      p.is_artisan {
        font-size: 26px;
        font-weight: 400;
        text-align: left;
        color: #050253;
      }

      div.artisan_btn {
        display: flex;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }

      div.category {
        transition: all 0.3s ease;

        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
          display: flex;
          flex-wrap: wrap;
          flex-basis: 100%;
          align-items: center;

          input {
            border: 1px solid #909dad;
            background: #fff;
            border-radius: 5px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            margin-right: 2rem;
            cursor: pointer;
          }

          .active {
            background: #050253;
            color: #fff;
          }
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 10rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 50%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 16px;
    }

    p {
      font-size: 24px;
      margin: 0rem;
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 50%;
      margin: auto;

      div.password {
        width: 100%;
        position: relative;

        input {
          width: 100%;
          position: reletive;
        }

        div.show-password {
          position: relative;
          bottom: 5.5rem;
          left: 7rem;
        }
      }

      input {
        border: 1px solid #909dad;
        height: 4rem;
        padding: 1rem;
        font-size: 18px;
        margin-bottom: 3rem;
        border-radius: 10px;
      }

      span {
        /* margin-bottom: -2rem; */
        color: #ec3123;
        text-align: left;
      }

      p.is_artisan {
        font-size: 26px;
        font-weight: 400;
        text-align: left;
        color: #050253;
      }

      div.artisan_btn {
        display: flex;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }

      div.category {
        p {
          font-size: 26px;
        }

        .artisan_category {
          display: flex;
          text-align: left;
          font-weight: 400;
          color: #050253;

          input {
            border: 1px solid #909dad;
            background: #fff;
            border-radius: 5px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            margin-right: 2rem;
            cursor: pointer;
          }

          .active {
            background: #050253;
            color: #fff;
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 10rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 50%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 18px;
    }

    p {
      font-size: 24px;
      margin: 0rem;
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 50%;
      margin: auto;

      div.password {
        width: 100%;
        position: relative;

        input {
          width: 100%;
          position: reletive;
        }

        div.show-password {
          position: relative;
          bottom: 5.5rem;
          left: 7rem;
        }
      }

      input {
        border: 1px solid #909dad;
        height: 4rem;
        padding: 1rem;
        font-size: 18px;
        margin-bottom: 3rem;
        border-radius: 10px;
      }

      span {
        /* margin-bottom: -2rem; */
        color: #ec3123;
        text-align: left;
      }

      p.is_artisan {
        font-size: 26px;
        font-weight: 400;
        text-align: left;
        color: #050253;
      }

      div.artisan_btn {
        display: flex;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }

      div.category {
        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
          display: flex;

          input {
            border: 1px solid #909dad;
            background: #fff;
            border-radius: 5px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            margin-right: 2rem;
            cursor: pointer;
          }

          .active {
            background: #050253;
            color: #fff;
          }
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    margin-top: 4rem;
    padding-bottom: 10rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 50%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 16px;
    }

    p {
      font-size: 18px;
      margin: 0rem;
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 80%;
      margin: auto;

      div.password {
        width: 100%;
        position: relative;

        input {
          width: 100%;
          position: reletive;
        }

        div.show-password {
          position: relative;
          bottom: 5.5rem;
          left: 11rem;
        }
      }

      input {
        border: 1px solid #909dad;
        height: 4rem;
        padding: 1rem;
        font-size: 18px;
        margin-bottom: 3rem;
        border-radius: 10px;
      }

      span {
        /* margin-bottom: -2rem; */
        color: #ec3123;
        text-align: left;
      }

      p.is_artisan {
        font-size: 26px;
        font-weight: 400;
        text-align: left;
        color: #050253;
      }

      div.artisan_btn {
        display: flex;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }

      div.category {
        p {
          font-size: 26px;
          text-align: left;
          color: #050253;
        }

        .artisan_category {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-weight: 400;
          color: #050253;

          input {
            border: 1px solid #909dad;
            background: #fff;
            border-radius: 5px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            margin-right: 2rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            width: 100%;

            &:hover {
              opacity: 0.5;
            }
          }

          .active {
            background: #050253;
            color: #fff;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    margin-top: 6rem;
    padding-bottom: 5rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 80%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 16px;
    }

    p {
      font-size: 18px;
      margin: 0rem;
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 80%;
      margin: auto;

      div.password {
        width: 100%;
        position: relative;

        input {
          width: 100%;
          position: reletive;
        }

        div.show-password {
          position: relative;
          bottom: 5.5rem;
          left: 8rem;
        }
      }

      input {
        border: 1px solid #909dad;
        height: 4rem;
        padding: 1rem;
        font-size: 18px;
        margin-bottom: 3rem;
        border-radius: 10px;
      }

      span {
        /* margin-bottom: -2rem; */
        color: #ec3123;
        text-align: left;
      }

      p.is_artisan {
        font-size: 26px;
        font-weight: 400;
        text-align: left;
        color: #050253;
      }

      div.artisan_btn {
        display: flex;

        input {
          border: 1px solid #909dad;
          background: #fff;
          border-radius: 5px;
          padding: 0rem 2rem;
          margin-top: 1rem;
          margin-right: 2rem;
          cursor: pointer;
        }

        .active {
          background: #050253;
          color: #fff;
        }
      }

      div.category {
        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
          display: flex;

          input {
            border: 1px solid #909dad;
            background: #fff;
            border-radius: 5px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            margin-right: 2rem;
            cursor: pointer;
          }

          .active {
            background: #050253;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const Aside = styled.div`
  h1 {
    span {
      color: #f4442e;
    }
  }

  svg {
    text-align: center;
  }

  @media (min-width: 1281px) {
    text-align: left;
    background-color: #020122;
    background: url("/signupBg.png");
    /* mix-blend-mode: color; */
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
    /* right: 100rem; */
    left: 0rem;
    top: 0rem;
    bottom: 0rem;

    h1 {
      font-size: 50px;
      margin-bottom: 2rem;
      margin-top: 10rem;
    }

    p {
      font-size: 24px;
      margin-top: 0rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: left;
    background: url("/signupBg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
    /* right: 100rem; */
    left: 0rem;
    top: 0rem;
    bottom: 0rem;

    h1 {
      font-size: 50px;
      margin-bottom: 0rem;
      margin-top: 15rem;
    }

    p {
      font-size: 24px;
      margin-top: 0rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: left;
    background: url("/signupBg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
    /* right: 100rem; */
    left: 0rem;
    top: 0rem;
    bottom: 0rem;

    h1 {
      font-size: 40px;
      margin-bottom: 0rem;
      margin-top: 15rem;
    }

    p {
      font-size: 20px;
      margin-top: 0rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ProviderBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Spinner = styled.div``;

export const RegisterAlert = styled.div`
  background: #ffffffcf;
  width: 100%;
  text-align: center;
  margin: auto;
  padding: 1rem;
  color: #8bc34a;
  position: fixed;
  left: 0rem;
  display: ${({ sent }) => (sent ? "grid" : "none")};
  justify-items: center;
  align-items: center;
  height: ${({ sent }) => (sent ? "100%" : "0%")};
  opacity: ${({ sent }) => (sent ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  z-index: 100;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    width: 80%;
    margin: auto;
    font-size: 2rem;

    svg {
      color: #8bc34a;
    }
  }

  @media (min-width: 1281px) {
    width: 100%;
    margin: auto;
    /* height: ${({ sent }) => (sent ? "100%" : "0%")}; */
    height: 100%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 80%;
    padding: 1rem;
    height: ${({ sent }) => (sent ? "100%" : "0%")};

    p {
      font-size: 19px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    padding: 1rem;
    height: ${({ sent }) => (sent ? "100%" : "0%")};

    p {
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    padding: 1rem;
    height: ${({ sent }) => (sent ? "100%" : "0%")};

    p {
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 1rem;
    height: ${({ sent }) => (sent ? "100%" : "0%")};

    p {
      font-size: 19px;
    }
  }
`;

export const Alert = styled.div`
  /* background-color: #f5f5f5; */
  border: 1px solid #8bc34a;
  width: 60%;
  text-align: center;
  margin: 2rem auto 4rem auto;
  padding: 1rem;
  border-radius: 20px;
  color: #8bc34a;
  height: ${({ sent }) => (sent ? "block" : "none")};
  height: ${({ sent }) => (sent ? "4rem" : "0rem")};
  /* height: 4rem; */
  opacity: ${({ sent }) => (sent ? "1" : "0")};
  transition: all 0.3s ease-in-out;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    svg {
      color: #8bc34a;
    }
  }

  @media (min-width: 1281px) {
    width: 60%;
    margin: 2rem auto 4rem auto;
    height: ${({ sent }) => (sent ? "4rem" : "0rem")};
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto 4rem auto;
    height: ${({ sent }) => (sent ? "5rem" : "0rem")};

    p {
      font-size: 19px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto 4rem auto;
    height: ${({ sent }) => (sent ? "5rem" : "0rem")};

    p {
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto 4rem auto;
    height: ${({ sent }) => (sent ? "5rem" : "0rem")};

    p {
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto 4rem auto;
    height: ${({ sent }) => (sent ? "5rem" : "0rem")};

    p {
      font-size: 19px;
    }
  }
`;
