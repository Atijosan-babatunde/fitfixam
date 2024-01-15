import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 7rem auto 7rem 23rem;
  /* height: 22rem; */
  /* text-align: center; */
  color: #020127;
  padding-bottom: 2rem;
  cursor: pointer;

  div.all {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* justify-items: center; */
    width: 100%;
    text-align: center;
  }

  div.img {
    background-color: #d9d9de;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 5rem;

    div.image {
      /* margin-top: 2rem; */
      position: relative;
      top: 4rem;
    }

    .user-img {
      border-radius: 50%;
      position: relative;
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
  }

  p {
    margin-bottom: 1rem;
    font-size: 16px;
    text-transform: capitalize;
  }

  div.address {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-bottom: 3rem;
  }

  h1 {
    /* margin-left: 5rem; */
    margin-bottom: 2rem;
  }

  div.container {
    width: 100%;
  }

  div.card {
    width: 90%;
    cursor: pointer;
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    /* margin-right: -10rem; */
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* margin-left: 25rem; */
    width: 90%;
    margin: 7rem auto 7rem 17rem;

    div.all {
      grid-template-columns: repeat(3, 1fr);
    }

    div.card {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 7rem auto 7rem 17rem;

    div.all {
      grid-template-columns: repeat(2, 1fr);
    }

    div.card {
      width: 90%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 7rem auto;
    width: 90%;

    div.all {
      grid-template-columns: repeat(2, 1fr);
    }

    div.card {
      width: 90%;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    margin: 7rem auto;

    div.all {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }

    div.card {
      width: 80%;
    }
  }
`;
