import styled from "styled-components";

export const Container = styled.div`
  background-color: #3c91e6;
  color: #fff;
  padding: 2rem 0rem;

  @media (max-width: 2100px) {
    background-color: #3c91e6;
    color: #fff;
    padding: 2rem 0rem;
  }
`;

export const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5rem 0rem;

  div.wrapper {
    width: 50%;
    margin: auto;
    text-align: center;
  }

  h1 {
    font-size: 56px;
    margin: 1rem 0rem;
  }

  p {
    font-size: 32px;
    /* margin-bottom: 1rem; */
    width: 90%;
    margin: 0rem auto 1rem auto;

    span {
      color: #1b4167;
      font-weight: 700;
    }
  }

  div.wrench {
    position: absolute;
    top: 3rem;
    overflow-x: clip;
    width: 20rem;
    right: 0rem;

    .tool {
      overflow-x: clip;
    }
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
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }

    div.wrench {
      top: 15rem;
      width: 25%;

      svg {
        font-size: 400px;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.wrapper {
      width: 80%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }

    div.wrench {
      top: 15rem;
      width: 25%;

      svg {
        font-size: 300px;
      }
    }
  }

  @media (max-width: 480px) {
    div.wrapper {
      width: 90%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }

    div.wrench {
      top: 20rem;
      width: 25%;

      svg {
        font-size: 200px;
      }
    }
  }
`;

export const Wrap = styled.div`
  .action {
    background-color: #f4442e;
  }

  @media (min-width: 1200px) and (max-width: 2100px) {
    .action {
      background-color: #f4442e;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    .action {
      background-color: #f4442e;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    .action {
      background-color: #f4442e;
    }
  }
`;
