import styled from "styled-components";

export const Container = styled.div`
  .container {
    width: 80%;
    margin: 3rem auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    color: #07036e;
    align-items: center;
    margin-bottom: 2rem;
  }

  div.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 100%;
  }

  h1 {
    font-size: 60px;
  }

  .blog-link {
    text-decoration: underline;
    font-size: 26px;
  }

  img {
    &:hover {
      /* object-fit: cover; */
      transform: scale(1.2);
      transition: transform 1s, filter 2s ease-in-out;
      filter: blur(2px);
    }
  }

  .img {
    border-radius: 15px;
  }

  div.image {
    position: relative;
    width: 400px;
    height: 500px;
    cursor: pointer;
    transition: transform 0.2s, filter 0.3s ease-in-out;

    &:hover {
      /* object-fit: cover; */
      /* transform: scale(1.2); */
      /* transition: transform 0.1s, filter s ease-in-out; */
      filter: blur(2px);
    }

    div.other {
      position: absolute;
      top: 0rem;
      width: 100%;
      height: 100%;

      .bg {
        background: linear-gradient(
          180deg,
          rgba(196, 196, 196, 0) 7.45%,
          #020127 63.85%
        );
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        height: 13rem;
        position: absolute;
        bottom: 0;
        border-radius: 15px;
      }

      .article {
        color: #fff;
        width: 80%;
        margin: 1rem auto;
      }

      p.time {
        color: #fff;
        background: #020127;
        width: 40%;
        display: flex;
        align-items: center;
        gap: 10px;
        position: absolute;
        font-weight: 700;
        padding: 10px 2px;
        top: 0rem;
        right: 0rem;
        border-radius: 0px 15px 0px 0px;
        justify-content: center;

        svg {
          font-weight: 700;
        }
      }

      h3 {
        /* position: absolute; */
        bottom: 5rem;
        color: #fff;
        width: 80%;
        margin: auto;
        left: 2rem;
        font-size: 26px;

        /* top: 0rem; */
      }

      .details {
        position: absolute;
        bottom: 1rem;
        display: flex;
        color: #fff;
        font-weight: 500;
        left: 2rem;
        gap: 1rem;

        .user,
        .time {
          align-items: center;
          display: flex;
          gap: 10px;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .header {
    }

    div.wrapper {
      grid-template-columns: repeat(2, 1fr);
    }

    h1 {
      font-size: 40px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .container {
      width: 90%;
    }

    h1 {
      font-size: 30px;
    }

    .blog-link {
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    h1 {
      font-size: 30px;
    }

    .blog-link {
      font-size: 16px;
    }

    div.wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
    }

    .blog-link {
      font-size: 13px;
    }

    div.image {
      width: 90%;
      margin: auto;
      height: 100%;

      div.other {
        width: 100%;
        margin: auto;

        h3 {
          font-size: 20px;
        }

        p.article {
          font-size: 16px;
        }

        .bg {
          margin: auto;
          height: 12rem;
        }
      }
    }

    .img {
      width: 70%;
    }

    .pic {
      /* width: 70%; */
      margin: auto;
    }

    div.wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
