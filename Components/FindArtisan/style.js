import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1281px) {
    width: 60%;
    margin: 0rem auto 0rem 15rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* margin-left: 10rem; */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* margin-left: 10rem; */
  }

  @media (min-width: 481px) and (max-width: 767px) {
    /* margin-left: 5rem; */
  }

  @media (max-width: 480px) {
    /* margin-left: 5rem; */
  }
`;

export const Wrapper = styled.div`
  /* width: 100%; */
`;

export const Card = styled.div`
  background: #f9fafb;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 25rem;
  text-align: center;
  color: #020127;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  cursor: pointer;

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
    font-size: 19px;
    text-transform: capitalize;
  }

  div.address {
    display: flex;
    gap: 5px;
    justify-content: center;
    width: 90%;
    margin: auto;
  }

  @media (min-width: 1281px) {
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 25rem;
    text-align: center;
    color: #020127;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    cursor: pointer;

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
      font-size: 19px;
      text-transform: capitalize;
    }

    div.address {
      display: flex;
      gap: 5px;
      justify-content: center;
      width: 90%;
      margin: auto;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 22rem;
    text-align: center;
    color: #020127;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    cursor: pointer;

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
      font-size: 19px;
      text-transform: capitalize;
    }

    div.address {
      display: flex;
      gap: 5px;
      justify-content: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 22rem;
    text-align: center;
    color: #020127;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    cursor: pointer;

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
      font-size: 19px;
      text-transform: capitalize;
    }

    div.address {
      display: flex;
      gap: 5px;
      justify-content: center;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 90%;
    height: 22rem;
    text-align: center;
    color: #020127;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    cursor: pointer;

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
      /* gap: 5px; */
      justify-content: center;
      width: 80%;
      margin: auto;

      p {
        /* font-size: 14px; */
        width: 100%;
        margin: auto;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 90%;
    height: 22rem;
    text-align: center;
    color: #020127;
    padding-bottom: 0.5rem;
    margin: 2rem auto;
    cursor: pointer;

    div.img {
      background-color: #d9d9de;
      border-radius: 10px 10px 0px 0px;
      margin-bottom: 2rem;

      div.image {
        /* margin-top: 2rem; */
        position: relative;
        top: 2rem;
        object-fit: contain;
        width: 50% !important;
        margin: auto;
        position: relative !important;
        height: unset !important;
      }
      /* img {
        min-width: 20%;
        min-height: 20%;
      } */
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
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 15px;
      text-transform: capitalize;
    }

    div.address {
      display: flex;
      gap: 5px;
      justify-content: center;
      width: 80%;
      padding-bottom: 1rem;
      margin: auto;

      p {
        font-size: 14px;
        width: 100%;
        margin: auto;
      }
    }
  }
`;
