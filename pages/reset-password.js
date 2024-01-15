import React from "react";
import dynamic from "next/dynamic";

const resetPassword = () => {
  const Layout = dynamic(() => import("@/components/Layout"));
  const ResetPassword = dynamic(() =>
    import("@/components/Account/ResetPassword")
  );

  return (
    <Layout>
      <ResetPassword />
    </Layout>
  );
};

export default resetPassword;
