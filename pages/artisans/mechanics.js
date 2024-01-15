import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const mechanics = ({ allMechanics }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Mechanics = dynamic(() => import("@/components/AllArtisans/Mechanics"));

  console.log(allMechanics);

  return (
    <UserLayout
      title="Fitfixam | Mechanics"
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
      <Mechanics allMechanics={allMechanics} />
    </UserLayout>
  );
};

export default mechanics;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const resMechanics = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/4`);
  const allMechanics = await resMechanics.json();

  return {
    props: { allMechanics },
  };
}
