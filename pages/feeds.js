import { NEXT_PUBLIC_API_URL } from "../config";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Feeds = ({ posts, comments, userPost, allUsers, likes }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Posts = dynamic(() => import("@/components/Discussion/Posts"));

  return (
    <UserLayout
      title="Fitfixam | Feed"
      keywords="Artisans
    Repair
    Fix
    Carpenters
    Plumbers 
    Electricians 
    Reviews 
    Good 
    Bad 
    Services 
    Satisfied 
    Craftsmen
    Experience
    "
    >
      {posts.length !== 0 ? (
        <div>
          <Container>
            {posts.map((e) => (
              <Posts
                key={e.id}
                posts={e}
                comments={comments}
                userPost={userPost}
                likes={likes}
              />
            ))}
          </Container>
        </div>
      ) : (
        <Div>
          <h2>No discussion available</h2>
        </Div>
      )}
    </UserLayout>
  );
};

export default Feeds;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const reso = await fetch(
    `${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`
  );
  const posts = await reso.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resAllUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resAllUsers.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  return {
    props: { posts, comments, allUsers, likes },
  };
}

export const Div = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const Container = styled.div`
  margin-top: 4rem;
`;
