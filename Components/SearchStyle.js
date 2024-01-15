import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 4rem auto;

  div.results {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem auto;

    div.btns {
      display: flex;
      align-items: center;
      font-size: 16px;

      p {
        margin-right: 1rem;
      }

      button {
        background: #ffffff;
        border: 1px solid #b2bbc6;
        border-radius: 5px;
        font-size: 16px;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 70%;

    h1 {
      font-size: 19px;
    }

    div.results {
      align-items: center;

      h2,
      p,
      button {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    width: 70%;

    h1 {
      font-size: 19px;
    }

    div.results {
      /* align-items: center; */
      flex-direction: column;

      h2 {
        font-size: 16px;
        margin-bottom: 1rem;
      }

      div.btns {
        button {
          font-size: 14px;
        }
      }

      p,
      button {
        font-size: 13px;
      }
    }
  }
`;
