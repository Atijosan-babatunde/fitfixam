import styled from "styled-components";
import BG from "@/public/hammer-bg.png";

export const Container = styled.div`
  padding: 5rem 0rem 5rem 0rem;
  width: 100%;
  margin: auto;
  color: white;
  background: url("/hammer-bg.png"), #07036e;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  li {
    list-style: none;
    margin-bottom: 1rem;
  }

  @media (max-width: 2100px) {
    padding: 5rem 0rem 5rem 0rem;
    width: 100%;
    margin: auto;
    color: white;
    background: url("/hammer-bg.png"), #07036e;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    li {
      list-style: none;
      margin-bottom: 1rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 90%;
  margin: auto;
  align-items: flex-start;

  @media (max-width: 2100px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 90%;
    margin: auto;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    gap: 3rem;
  }
`;

export const Flex = styled.div`
  @media (max-width: 2100px) {
    ul {
      padding: 0;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }
`;

export const Social = styled.div`
  margin-bottom: 1rem;

  .icon {
    margin-right: 2rem;
  }

  @media (max-width: 2100px) {
    margin-bottom: 1rem;

    .icon {
      margin-right: 2rem;
    }
  }
`;

export const Grid = styled.div``;
