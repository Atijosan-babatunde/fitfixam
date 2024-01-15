import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  margin: auto;
  justify-items: center;
  padding-bottom: 5rem;

  .card {
    background-color: #07036e;

    button {
      color: #07036e;
    }
  }

  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;
    gap: 2rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;
    gap: 1rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  /* @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  } */
`;

export const Container = styled.div``;

export const Card = styled.div`
  width: 70%;
  background-color: #3c91e6;
  border-radius: 10px;
  color: white;
  display: grid;
  /* gap: 1rem; */

  .card_details {
    padding: 0rem 1rem;
  }

  h1 {
    padding: 1rem;
    font-size: 36px;
  }

  p {
    padding: 0rem 1rem 1rem 1rem;
    font-size: 19px;
    height: 7rem;
  }

  .image {
    border-radius: 10px;
  }

  @media (min-width: 1281px) {
    width: 70%;
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;
    gap: 1rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 1rem;
      font-size: 36px;
    }

    p {
      padding: 0rem 1rem 1rem 1rem;
      font-size: 19px;
      height: 7rem;
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 100%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;
    gap: 1rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 1rem;
      font-size: 36px;
    }

    p {
      padding: 0rem 1rem 1rem 1rem;
      font-size: 19px;
      height: 6rem;
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;
    gap: 1rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 0rem 1rem 0rem;
      font-size: 30px;
    }

    p {
      /* padding: 0rem 1rem 1rem 1rem; */
      font-size: 16px;
      height: 8rem;
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 0rem 1rem 0rem;
      font-size: 26px;
    }

    p {
      padding: 0rem 0rem 1rem 0rem;
      font-size: 16px;
      height: 6rem;
      /* margin-bottom: 1rem; */
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 0rem 1rem 0rem;
      font-size: 26px;
    }

    p {
      padding: 0rem 0rem 1rem 0rem;
      font-size: 16px;
      height: 6rem;
    }

    .image {
      border-radius: 10px;
    }
  }
`;

export const Header = styled.h1`
  @media (min-width: 1281px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }

  @media (max-width: 480px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }
`;
