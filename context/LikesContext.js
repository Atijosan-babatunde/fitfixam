import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { getTokenCookie } from "@/helpers/index";
import cookie from "cookie";

export const LikesContext = createContext(null);

export const LikesContextProvider = ({ children, token }) => {
  const { user, userData } = useContext(AuthContext);
  const [likesGiven, setLikesGiven] = useState([]);
  const [likesReceived, setLikesReceived] = useState([]);

  // console.log("user token from likes context", token);

  // console.log(userData);

  useEffect(() => {
    // if (user) {
    //   console.log(user.id);
    //   const loadLikesGiven = async (req) => {
    //     const { token } = getTokenCookie(req);
    //     console.log(token);
    //     const res = await fetch(
    //       `${NEXT_PUBLIC_API_URL}/likes/given?user=${user.id}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     const data = await res.json();
    //     setLikesGiven(data);
    //     // console.log(data);
    //   };
    //   loadLikesGiven();
    //   const loadLikesReceived = async () => {
    //     const res = await fetch(
    //       `${NEXT_PUBLIC_API_URL}/likes/received?post.user=${user.id}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     const data = await res.json();
    //     setLikesReceived(data);
    //   };
    //   loadLikesReceived();
    // }
  }, [user]);

  // console.log("LikesGiven", likesGiven);
  // console.log("LikesReceived", likesReceived);

  return (
    <LikesContext.Provider value={{ likesGiven, likesReceived }}>
      {children}
    </LikesContext.Provider>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const loggedUsers = await resUsers.json();

  console.log(token);

  return {
    props: { token },
  };
}
