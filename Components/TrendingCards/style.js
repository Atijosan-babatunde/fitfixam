import styled from "styled-components";

export const Container = styled.div`
  background: url("/home-bg.png");
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  margin: 4rem 0rem 0rem 0rem;
  padding-bottom: 4rem;

  div.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  div.card {
    background: #ffffff;
    box-shadow: 0px 8px 32px 8px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 1rem;
    width: 90%;
    z-index: 1;
    margin: auto;

    p {
      font-size: 19px;
      line-height: 1.5;
      color: #1d242d;
      width: 90%;
      margin: 0rem auto 3rem auto;
      cursor: pointer;
    }
  }

  div.user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  div.details {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;

    h3 {
      /* margin-top: 1rem; */
      color: #151a20;
    }
  }

  div.wrapper {
    display: flex;
    width: 80%;
    justify-content: center;
    margin: 6rem auto 0rem auto;

    h1 {
      color: #07036e;
      width: 40rem;
      font-size: 48px;
    }

    svg {
      margin-left: 7rem;
    }

    .show {
      display: none;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.container {
      grid-template-columns: repeat(2, 1fr);
    }

    div.wrapper {
      h1 {
        font-size: 30px;
        width: 25rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.container {
      grid-template-columns: repeat(2, 1fr);
    }

    div.wrapper {
      h1 {
        font-size: 30px;
        width: 25rem;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.container {
      grid-template-columns: repeat(2, 1fr);
    }

    div.card {
      /* width: 100%; */

      p {
        font-size: 13px;
      }
    }

    div.wrapper {
      flex-direction: column;
      /* margin-top: 3rem; */
      align-items: center;
      width: 90%;
      margin: 3rem auto 0rem auto;

      h1 {
        font-size: 30px;
        width: 60%;
        text-align: center;
      }

      svg {
        margin-left: 0rem;
        margin: 1rem 0rem;
        transform: rotate(90deg);
      }

      .show {
        display: block;
      }

      .none {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    background-position: center;

    div.container {
      grid-template-columns: repeat(1, 1fr);
    }

    div.card {
      margin-bottom: 2rem;
      p {
        font-size: 13px;
      }
    }

    div.user {
      h3 {
        font-size: 14px;
      }
    }

    div.details {
      h3 {
        font-size: 14px;
      }
    }

    div.wrapper {
      flex-direction: column;
      /* margin-top: 3rem; */
      align-items: center;
      width: 90%;
      margin: 3rem auto 0rem auto;

      h1 {
        font-size: 24px;
        width: 70%;
        text-align: center;
      }

      svg {
        margin-left: 0rem;
        margin: 1rem 0rem;
        transform: rotate(90deg);
      }

      .show {
        display: block;
      }

      .none {
        display: none;
      }
    }
  }
`;
