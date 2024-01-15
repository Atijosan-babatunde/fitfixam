import { getSession, signIn, signOut } from "next-auth/react";
import ForgotPassword from "../Components/Account/ForgotPassword";
import Layout from "@/components/Layout";

const Login = () => {
  return (
    <Layout
      title="Fitfixam | Forgot Password"
      description="Reset your password if you already have an account."
      keywords="Fitfixam forgot password"
    >
      <ForgotPassword />
    </Layout>
  );
};

export default Login;
