import Head from "next/head";
import UserNavbar from "./Navbar/UserNavbar";
import Footer from "./Footer/Footer";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Router from "next/router";
import NProgress from "nprogress";
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
  const { user } = useContext(AuthContext);

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
      <UserNavbar />
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Fitfixam",
  description: "",
  keywords: "",
};
