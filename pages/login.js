import { getSession, signIn, signOut } from "next-auth/react";
import Signin from "../Components/Account/Signin";
import Layout from "@/components/Layout";

const Login = () => {
  return (
    <Layout title="Fitfixam | Login" description="Login to Fitfixam">
      <Signin />
    </Layout>
  );
};

export default Login;
