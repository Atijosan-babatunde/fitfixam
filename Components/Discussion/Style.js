import styled from "styled-components";

export const Container = styled.div`
  /* margin-left: 9rem; */
  margin: 0rem auto 0rem 30rem;
  top: 6rem;
  position: relative;
  /* padding-top: 2rem; */
  /* display: grid;
  grid-template-columns: 60% 40%; */
  justify-content: center;
  width: 60%;

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 20rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 12rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: auto;
  }

  /* height: 100rem; */

  /* @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0rem;
  } */
`;

export const Wrapper = styled.div`
  .details {
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
    align-items: center;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  .imgs:first-child img {
    border-radius: 10px 0px 0px 10px;
  }

  .imgs:nth-child(2) img {
    margin: 0px 2px;
  }

  .imgs:nth-child(3) img {
    border-radius: 0px 10px 10px 0px;
  }

  .images {
    display: flex;
    /* width: 60%; */
    padding: 2rem;
    gap: 3px;
    -webkit-column-gap: 3px;

    &:nth-of-type(1n) {
      border-radius: 10px 0px 0px 0px;
    }

    .imgs {
      /* width: 100%; */

      img {
        /* width: 100%; */
        margin: 2px;
      }
    }
  }
`;

export const PostCard = styled.div`
  background: #f9fafb;
  border-radius: 10px;
  width: 90%;
  margin: 2rem 0rem;
  color: #020127;
  font-weight: 400;
  font-size: 16px;

  .user_image {
    border-radius: 50%;
    cursor: pointer;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    margin: 2rem auto 2rem 7rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2rem auto;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin: 2rem auto;
  }
`;

export const PostDetails = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  align-items: center;
  /* border-top: 0.5px solid #c4c4c4; */
  /* background: #fff; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PostText = styled.div`
  cursor: pointer;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 19px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem 1rem 2rem;
  width: 100%;
  /* background: #f9fafb; */

  div.post_dets {
    width: 100%;
  }

  div.user_details {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    cursor: pointer;
  }

  p.time {
    margin-left: 1rem;
    font-size: 14px;
  }
`;

export const PostComments = styled.div`
  display: flex;
  justify-self: end;
  padding: 0rem 2rem 0rem 0rem;
`;

export const PostItem = styled.div`
  height: 100%;
`;

export const PostContainer = styled.div`
  position: absolute;
  top: 10rem;
`;

export const PostWrapper = styled.div``;
