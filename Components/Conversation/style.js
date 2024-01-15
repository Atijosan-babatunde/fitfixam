import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5rem 0rem 0rem 0rem;

  div.container {
    width: 80%;
    margin: auto;

    h1 {
      font-size: 3rem;
      width: 50%;
      margin-bottom: 2rem;
    }

    p {
      color: #040242;
      font-size: 2rem;
      width: 65%;
    }

    .blue {
      color: #07036e;
    }

    .grey {
      color: #f4442e;
    }

    .dark {
      color: #1d242d;
    }

    .img {
      display: grid;
      justify-items: center;
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.container {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.container {
      h1 {
        font-size: 2.5rem;
        width: 80%;
      }

      p {
        font-size: 1rem;
        width: 90%;
      }
    }
  }

  @media (max-width: 480px) {
    div.container {
      h1 {
        font-size: 2rem;
        width: 80%;
      }

      p {
        font-size: 0.8rem;
        width: 90%;
      }
    }
  }
`;
