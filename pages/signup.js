import dynamic from "next/dynamic";
import { React, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";

const Signup = () => {
  const Layout = dynamic(() => import("@/components/Layout"));
  const CreateAccount = dynamic(() =>
    import("../Components/Account/CreateAccount")
  );

  const { user } = useContext(AuthContext);

  const router = useRouter();

  // if (!user) {
  return (
    <Layout
      title="Fitfixam | Sign up"
      description="Get started with Fitfixam today. Sign up for free!"
      keywords=""
    >
      <CreateAccount />
    </Layout>
  );
  // } else {
  //   return <>{router.push("/feeds")}</>;
  // }
};

export default Signup;
