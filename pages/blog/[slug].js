import { NEXT_PUBLIC_API_URL } from "../../config";
import dynamic from "next/dynamic";

const Slug = ({ blogPosts, post, likes, comments }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const SlugPosts = dynamic(() => import("@/components/BlogPosts/SlugPosts"));

  return (
    <UserLayout>
      <SlugPosts
        blogPosts={blogPosts}
        post={post}
        like={likes}
        comments={comments}
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

  const reso = await fetch(
    `${NEXT_PUBLIC_API_URL}/blog-posts?_sort=created_at:DESC`
  );
  const blogPosts = await reso.json();

  const resSlug = await fetch(`${NEXT_PUBLIC_API_URL}/blog-posts?slug=${slug}`);
  const post = await resSlug.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/blog-likes`);
  const likes = await resLikes.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/blog-comments`);
  const comments = await resComments.json();

  return {
    props: { blogPosts, post, likes, comments },
  };
}
