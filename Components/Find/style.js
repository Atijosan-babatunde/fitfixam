import styled from "styled-components";

export const Container = styled.div`
  background: #07036e;
  color: #fff;
  padding: 7rem 0rem;

  div.container {
    display: grid;
    text-align: center;
    width: 45%;
    margin: auto;
  }

  h1 {
    font-size: 56px;
    line-height: 1;
  }

  p {
    margin: 3rem auto;
    font-size: 32px;
    line-height: 1.2;
    width: 80%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.container {
      width: 60%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.container {
      width: 90%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    div.container {
      width: 90%;
    }

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`;
