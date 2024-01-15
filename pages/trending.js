import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const Trending = ({ post, posts, comments, likes }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Posts = dynamic(() => import("@/components/Discussion/Posts"));

  return (
    <UserLayout
      title="Fitfixam | Trending"
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
          {posts.map((e) => (
            <Posts key={e.id} posts={e} comments={comments} likes={likes} />
          ))}
        </div>
      ) : (
        <div>No discussion available</div>
      )}
    </UserLayout>
  );
};

export default Trending;

export async function getServerSideProps({ query: { slug }, req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const reso = await fetch(`${NEXT_PUBLIC_API_URL}/posts?comments_gte=3`);
  const posts = await reso.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  return {
    props: { post, posts, comments, likes },
  };
}
