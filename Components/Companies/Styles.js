import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 7rem 0rem 7rem 30rem;
  color: #020127;

  div.container {
    h1 {
      color: #020127;
    }

    .paragraph {
      /* margin: 0.5rem 0rem 3rem 0rem; */
      margin-bottom: 3rem;
    }
  }

  div.card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-left: 5px solid #546881;
    background-color: #f9fafb;
    border-radius: 5px;
    padding: 1rem 0rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  div.company {
    padding: 1rem 3rem;
    border-right: 0.5px solid #546881;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    svg {
      font-size: 1.5rem;
      color: #3c91e6;
      margin-right: 2rem;
    }
  }

  div.icon {
    background: #07036e;
    color: #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    margin: 0rem auto 1rem auto;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  div.social {
    text-align: center;
  }

  div.details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    justify-items: center;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 25rem;
    width: 60%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
    margin-left: 20rem;

    div.card {
      grid-template-columns: repeat(1, 1fr);
      padding: 0rem 1rem 1rem 1rem;
    }

    div.company {
      border-bottom: 0.5px solid #546881;
      border-right: none;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 70%;
    margin: 7rem auto;
    /* margin: 3rem 2rem 0rem auto; */

    div.card {
      grid-template-columns: repeat(1, 1fr);
      padding: 0rem 1rem 1rem 1rem;
    }

    div.company {
      border-bottom: 0.5px solid #546881;
      border-right: none;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 70%;
    margin: 7rem auto;

    div.card {
      grid-template-columns: repeat(1, 1fr);
      padding: 0rem 1rem 1rem 1rem;
    }

    div.company {
      border-bottom: 0.5px solid #546881;
      border-right: none;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }

    div.details {
      grid-template-columns: repeat(1, 1fr);
      justify-items: left;
    }

    div.social {
      display: grid;
      grid-template-columns: 20% 80%;
      gap: 1rem;
      text-align: left;
      align-items: center;
      /* justify-items: center; */
      margin-bottom: 1rem;
      width: 100%;
      /* margin: auto; */
    }

    div.icon {
      text-align: left;
      /* margin: 0rem 1rem; */
      margin-bottom: 0rem;
    }
  }
`;
