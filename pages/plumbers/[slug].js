import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import dynamic from "next/dynamic";

const Slug = ({ post, posts, comments, likes, allUsers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Post = dynamic(() => import("@/components/PostItem/Post"));

  return (
    <UserLayout>
      <Post
        post={post}
        posts={posts}
        comments={comments}
        likes={likes}
        allUsers={allUsers}
      />
    </UserLayout>
  );
};

export default Slug;

export async function getServerSideProps({ query: { slug }, req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const { token } = parseCookies(req);

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const reso = await fetch(`${NEXT_PUBLIC_API_URL}/categories/2`);
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
