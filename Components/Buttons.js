import styled from "styled-components";

export const BtnNav = styled.button`
  border: 2px solid #f4442e;
  background-color: none;
  color: #fff;
  background: #f4442e;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: #060363;
    color: white;
    transition: all 0.2s ease-in-out;
    border: 2px solid #060363;
  }
`;

export const BtnNav_two = styled.button`
  border: 2px solid #060363;
  background-color: none;
  color: #060363;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    color: #f4442e;
    border: 2px solid #f4442e;
    /* border: none; */
    transition: all 0.2s ease-in-out;
  }
`;

export const HeroBtn = styled.button`
  border: 3px solid #060363;
  background-color: none;
  color: #060363;
  font-weight: bold;
  padding: 20px 50px;
  border-radius: 10px;
  cursor: pointer;
  /* width: 15%; */
  font-size: 26px;
  margin: auto;
  background-color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #060363;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 19px;
    padding: 10px 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 19px;
    padding: 10px 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 19px;
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 1rem 1rem;
    border: 2px solid #060363;
  }
`;

export const HeroBtn_two = styled.button`
  border: 3px solid #f4442e;
  background-color: none;
  color: #f4442e;
  font-weight: bold;
  padding: 20px 50px;
  border-radius: 10px;
  cursor: pointer;
  /* width: 15%; */
  font-size: 26px;
  margin: auto;
  background-color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f4442e;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 19px;
    padding: 10px 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 19px;
    padding: 10px 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 19px;
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 1rem 1rem;
    border: 2px solid #f4442e;
  }
`;

export const InputBtn = styled.button`
  border: none;
  border-radius: 0px 15px 15px 0px;
  font-size: 24px;
  padding: 1.5rem;
  background-color: #07036e;
  width: 10%;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: none;
    border: 2px solid #07036e;
    color: #07036e;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 20%;
  }

  @media (max-width: 900px) {
    width: 30%;
  }

  @media (max-width: 375px) {
    border: none;
    border-radius: 15px;
    font-size: 24px;
    padding: 1.5rem;
    background-color: #07036e;
    width: 30%;
    color: #fff;
    transition: all 0.3s ease-in-out;
    margin-top: 2rem;

    &:hover {
      background: none;
      border: 2px solid #07036e;
      color: #07036e;
    }
  }
`;

export const GoogleBtn = styled.button`
  background: none;
  border: 0.5px solid black;
  border-radius: 10px;
  font-size: 26px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  height: 4rem;
  margin: 0.5rem;
`;

export const FacebookBtn = styled.button`
  border: none;
  background: #3b5998;
  border-radius: 10px;
  font-size: 26px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  color: white;
  height: 4rem;
  margin: 0.5rem;
`;

export const RegisterBtn = styled.button`
  border: 3px solid #07036e;
  background: none;
  height: 4rem;
  border-radius: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #07036e;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background: #07036e;
  }

  @media (max-width: 900px) {
    font-size: 19px;
  }
`;

export const LoginBtn = styled.button`
  border: none;
  background: #07036e;
  height: 4rem;
  border-radius: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #07036e;
    border: 2px solid #07036e;
    background: none;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const BtnCard = styled.div`
  @media (min-width: 1281px) {
    button {
      background-color: #fff;
      font-size: 26px;
      font-weight: 700;
      color: #3c91e6;
      border: none;
      border-radius: 5px;
      width: 90%;
      padding: 0.5rem 1rem;
      margin: 1rem;
      display: grid;
      align-self: flex-end;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: #fff;
      }
    }

    .btn {
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    button {
      background-color: #fff;
      font-size: 26px;
      font-weight: 700;
      color: #3c91e6;
      border: none;
      border-radius: 5px;
      width: 90%;
      padding: 0.5rem 1rem;
      margin: 1rem;
      display: grid;
      align-self: flex-end;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: #fff;
      }
    }

    .btn {
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    button {
      background-color: #fff;
      font-size: 26px;
      font-weight: 700;
      color: #3c91e6;
      border: none;
      border-radius: 5px;
      width: 100%;
      padding: 0.5rem 1rem;
      margin: 0rem auto 1rem auto;
      display: grid;
      align-self: flex-end;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: #fff;
      }
    }

    .btn {
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    button {
      background-color: #fff;
      font-size: 26px;
      font-weight: 700;
      color: #3c91e6;
      border: none;
      border-radius: 5px;
      width: 100%;
      padding: 0.5rem 1rem;
      margin: 0rem auto 1rem auto;
      display: grid;
      align-self: flex-end;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: #fff;
      }
    }

    .btn {
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }

  @media (max-width: 480px) {
    button {
      background-color: #fff;
      font-size: 26px;
      font-weight: 700;
      color: #3c91e6;
      border: none;
      border-radius: 5px;
      width: 100%;
      padding: 0.5rem 1rem;
      margin: 0rem auto 1rem auto;
      display: grid;
      align-self: flex-end;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: #fff;
      }
    }

    .btn {
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }
`;
