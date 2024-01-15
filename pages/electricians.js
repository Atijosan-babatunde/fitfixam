import { NEXT_PUBLIC_API_URL } from "../config/index";
import dynamic from "next/dynamic";

const Electricians = ({ post, posts, comments, likes, allUsers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Electrician = dynamic(() =>
    import("@/components/PostCategory/Electrician")
  );

  return (
    <UserLayout title="Fitfixam | Electricians Feed">
      <div>
        {posts.posts.map((e) => (
          <Electrician
            key={e.id}
            posts={e}
            comments={comments}
            allUsers={allUsers}
            likes={likes}
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default Electricians;

export async function getServerSideProps({ query: { slug }, req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const reso = await fetch(`${NEXT_PUBLIC_API_URL}/categories/3`);
  const posts = await reso.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resUsers.json();

  return {
    props: { post, posts, comments, likes, allUsers },
  };
}
