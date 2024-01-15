import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const Others = ({ allOthers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Others = dynamic(() => import("@/components/AllArtisans/Others"));

  return (
    <UserLayout
      title="Fitfixam | Other Artisans"
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
      <Others allOthers={allOthers} />
    </UserLayout>
  );
};

export default Others;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const resOthers = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/5`);
  const allOthers = await resOthers.json();

  return {
    props: { allOthers },
  };
}
