import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 10rem;

  h1 {
    font-size: 70px;
    width: 60rem;
    margin: 2rem auto 1rem auto;
    color: #040242;
    line-height: 1;
    z-index: -2;
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 24px;
    color: #47586e;
    width: 50rem;
    margin: 0rem auto 5rem auto;
  }

  span {
    color: #f4442e;
  }

  .hero_icon {
    /* margin-top: 10rem; */
    margin-bottom: -10rem;
    text-align: center;
    justify-self: flex-end;
  }

  div.btns {
    display: grid;
    justify-content: center;
  }

  div.button {
    display: flex;
    gap: 2rem;
    min-height: 2rem;
  }

  @media (min-width: 1281px) {
    text-align: center;
    padding-top: 2rem;

    h1 {
      font-size: 70px;
      width: 60rem;
      margin: 2rem auto 1rem auto;
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 24px;
      color: #47586e;
      width: 50rem;
      margin: 0rem auto 3rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 2rem;
      margin-bottom: -10rem;
      text-align: center;
      justify-self: flex-end;
    }

    div.btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    padding-top: 5rem;

    h1 {
      font-size: 50px;
      width: 40rem;
      margin: 0rem auto 2rem auto;
      color: #040242;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 22px;
      color: #47586e;
      width: 40rem;
      margin: 0rem auto 4rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 4rem;
      margin-bottom: -10rem;
      text-align: center;
      justify-self: flex-end;
    }

    div.btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 5rem;
    text-align: center;

    h1 {
      font-size: 50px;
      margin: 0rem auto 4rem auto;
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin: 2rem auto 1rem auto;
      width: 70%;
    }

    p {
      font-size: 20px;
      color: #47586e;
      width: 60%;
      margin: 0rem auto 2rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 4rem;
      margin-bottom: -10rem;
      text-align: center;
    }

    div.btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    padding-top: 0rem;

    h1 {
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      width: 30rem;
      font-size: 50px;
      margin: 2rem auto 2rem auto;
    }

    p {
      color: #47586e;
      width: 90%;
      margin: 0rem auto 1rem auto;
      font-size: 16px;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 2rem;
      margin-bottom: -10rem;
      text-align: center;
    }

    div.button {
      min-height: 5rem;
    }

    div.btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    margin-top: 4rem;
    /* padding-top: 10rem; */

    h1 {
      font-size: 50px;
      margin: 0rem auto 1rem auto;
    }

    p {
      font-size: 19px;
    }

    text-align: center;
    padding-top: 3rem;

    h1 {
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 104px;
      width: 20rem;
      font-size: 75px;
      line-height: 1;
      margin: 2rem auto;
      font-size: 35px;
    }

    p {
      color: #47586e;
      margin: 0rem auto 2rem auto;
      font-size: 16px;
      width: 80%;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 1rem;
      margin-bottom: -10rem;
      text-align: center;
    }

    div.button {
      min-height: 5rem;
    }

    div.btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Container = styled.div`
  z-index: 3;
  position: relative;
  background: url("/hero-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  position: relative;
  /* padding-top: -2rem; */
  background-color: #f9fafb;
  margin-bottom: -4rem;

  @media (min-width: 1281px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    min-height: 80vh;
    position: relative;
    /* padding-top: -2rem; */
    background-color: #f9fafb;
    margin-bottom: -4rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 80vh;
    position: relative;
    /* padding-bottom: 10rem; */
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 80vh;
    position: relative;
    padding-top: -2rem;
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    min-height: 70vh;
    margin-top: 10rem;
    position: relative;
    /* padding-top: 10rem; */
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (max-width: 480px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 80vh;
    position: relative;
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }
`;
