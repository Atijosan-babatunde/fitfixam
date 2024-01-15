import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import dynamic from "next/dynamic";

const Slug = ({ post, posts, comments, likes }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const FeedPost = dynamic(() => import("@/components/PostItem/FeedPost"));

  return (
    <UserLayout>
      <FeedPost post={post} posts={posts} comments={comments} likes={likes} />
    </UserLayout>
  );
};

export default Slug;

export async function getServerSideProps({ req, query: { slug }, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const { token } = parseCookies(req);

  console.log(token);

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const reso = await fetch(
    `${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`
  );
  const posts = await reso.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const loggedUsers = await resUsers.json();

  return {
    props: { post, posts, comments, likes, token, loggedUsers },
  };
}
