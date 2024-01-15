import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const Plumbers = ({ allPlumbers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Plumber = dynamic(() => import("@/components/AllArtisans/Plumber"));

  return (
    <UserLayout
      title="Fitfixam | Plumbers"
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
  Experience"
    >
      <Plumber allPlumbers={allPlumbers} />
    </UserLayout>
  );
};

export default Plumbers;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resPlumbers = await fetch(
    `${NEXT_PUBLIC_API_URL}/users/?_user_category=2`
  );
  const allPlumbers = await resPlumbers.json();

  console.log(allPlumbers);

  return {
    props: { allPlumbers },
  };
}
