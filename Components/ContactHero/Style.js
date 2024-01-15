import styled from "styled-components";

export const Container = styled.div`
  background: url("/contact-us.png");
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  padding-top: 7rem;
  padding-bottom: 3rem;
  text-align: center;
  color: #fff;
  margin-bottom: 3rem;
  /* bottom: 0; */

  @media (max-width: 768px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 86px;
    text-align: center;
  }

  p {
    font-size: 34px;
    width: 70%;
    margin: 0rem auto;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    text-align: center;
    position: relative;
    justify-content: center;

    h1 {
      /* padding-top: 3rem; */
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 19px;
    }
  }
`;
