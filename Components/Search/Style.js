import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  font-size: 20px;
  position: fixed;

  div.container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #b2bbc6;
    padding-bottom: 2rem;

    .image {
      border-radius: 50%;
    }

    h3 {
      color: #6069f0;
      cursor: pointer;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;

    div.container {
      gap: 0.3rem;
    }

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 14px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 14px;

    div.container {
      gap: 0.3rem;
    }

    h2 {
      font-size: 14px;
    }

    h3 {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;

    div.container {
      gap: 0.3rem;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      justify-content: left;
      width: 100%;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div``;
