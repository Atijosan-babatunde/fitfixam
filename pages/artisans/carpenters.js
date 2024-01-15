import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const carpenters = ({ allCarpenters }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Carpenters = dynamic(() =>
    import("@/components/AllArtisans/Carpenters")
  );

  return (
    <UserLayout
      title="Fitfixam | Carpenters"
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
      <Carpenters allCarpenters={allCarpenters} />
    </UserLayout>
  );
};

export default carpenters;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resCarpenters = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/1`);
  const allCarpenters = await resCarpenters.json();

  return {
    props: { allCarpenters },
  };
}
