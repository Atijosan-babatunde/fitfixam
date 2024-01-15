import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { LikesContextProvider } from "@/context/LikesContext";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on("routerChangeStart", handleStart);
    router.events.on("routerChangeComplete", handleComplete);
    router.events.on("routerChangeError", handleComplete);

    return () => {
      router.events.off("routerChangeStart", handleStart);
      router.events.off("routerChangeComplete", handleComplete);
      router.events.off("routerChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="loadingio-spinner-gear-ndv7awo92p">
        <div className="ldio-iks01nn0sh9">
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  );
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <Loading />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
