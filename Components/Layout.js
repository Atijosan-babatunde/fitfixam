import Head from "next/head";
import dynamic from "next/dynamic";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Router from "next/router";
import NProgress from "nprogress";
import { useRouter } from "next/router";
// import "@/styles/nprogress.css";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => {
  setTimeout(() => {
    NProgress.done();
  }, 5000);
};

export default function Layout({
  title,
  keywords,
  description,
  children,
  router,
}) {
  const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
  const Footer = dynamic(() => import("@/components/Footer/Footer"));

  const { user } = useContext(AuthContext);
  const isRouter = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <div>{children}</div>
      {isRouter.pathname === "/login" ||
      isRouter.pathname === "/signup" ||
      isRouter.pathname === "/forgot-password" ||
      isRouter.pathname === "/reset-password" ? (
        <></>
      ) : (
        <Footer />
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "Fitfixam",
  description: "",
  keywords: "",
};
