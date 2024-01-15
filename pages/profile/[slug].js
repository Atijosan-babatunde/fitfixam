import React from "react";
import { parseCookies } from "@/helpers/index";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const Slug = ({ usersProfile, userPosts, token, artisanRatings }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Profile = dynamic(() => import("@/components/Profile/Profile"));

  return (
    <UserLayout>
      {usersProfile.map((userProfile) => (
        <Profile
          usersProfile={userProfile}
          userPosts={userPosts}
          key={userProfile.id}
          token={token}
          artisanRatings={artisanRatings}
        />
      ))}
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

  const resUser = await fetch(`${NEXT_PUBLIC_API_URL}/users?slug=${slug}`);
  const usersProfile = await resUser.json();

  const resPost = await fetch(
    `${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`
  );
  const posts = await resPost.json();

  const resUserPosts = await fetch(
    `${NEXT_PUBLIC_API_URL}/users/me?populate=*`
  );
  const userPosts = await resUserPosts.json();

  const resArtisanRatings = await fetch(
    `${NEXT_PUBLIC_API_URL}/artisan-ratings`
  );
  const artisanRatings = await resArtisanRatings.json();

  return {
    props: { usersProfile, posts, userPosts, token, artisanRatings },
  };
}
