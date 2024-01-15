import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const electricians = ({ allElectricians }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Electrician = dynamic(() =>
    import("@/components/AllArtisans/Electrician")
  );

  return (
    <UserLayout
      title="Fitfixam | Electricians"
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
      <Electrician allElectricians={allElectricians} />
    </UserLayout>
  );
};

export default electricians;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const resElectricians = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/3`
  );
  const allElectricians = await resElectricians.json();

  return {
    props: { allElectricians },
  };
}
