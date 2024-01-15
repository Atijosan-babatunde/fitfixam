import { createContext, useState, useEffect } from "react";
import { NEXT_PUBLIC_URL, NEXT_PUBLIC_API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState();
  const [emailError, setEmailError] = useState();
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isToken, setIsToken] = useState();
  const [sum, setSum] = useState(0);
  // const [allUsers, setAllUsers] = useState(null);

  // const { data: session } = useSession();

  // console.log(session);
  // console.log(userData);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
    // router.prefetch("/feeds");
  }, []);

  // Register
  const register = async (user) => {
    setIsLoading(true);
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      setEmailError(res);

      setTimeout(() => {
        setEmailError(false);
      }, 5000);
    }

    const data = await res.json();

    // console.log(data);

    setUserData(data);

    if (res.ok) {
      setIsLoading(true);
      setUser(data.user);
      setSent(true);

      console.log(user);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        router.push("/feeds");
      }, 3000);
      setEmailMessage("Check email for confirmation!");
      setIsLoading(false);
    } else {
      console.log("not working");
      setEmailError(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmailError(false);
      }, 1000);
    }
  };

  const forgotPassword = async ({ email }) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    console.log(data);

    // if (res.ok) {
    //   setUser(data.user.user);
    //   setUserData(data);
    //   // router.push("/feeds");
    // } else {
    //   setErrorMessage(data.message);
    //   setError(true);
    // }
  };

  // Login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    // console.log(data);
    // setUserData(data);

    if (res.ok) {
      setUser(data.user.user);
      setUserData(data);
      router.push("/feeds");
    } else {
      setErrorMessage(data.message);
      setError(true);
    }
  };

  // Logout
  const logout = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/login");
    }
  };

  // Get all users
  const getUsers = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
    const data = await res.json();

    if (res.ok) {
      setAllUsers(data.res);
    } else {
      setAllUsers(null);
    }
  };

  // Provider authentication
  const userProvider = async () => {
    setUser(session.user);
    console.log(user);
  };

  // Check user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        errorMessage,
        register,
        login,
        logout,
        checkUserLoggedIn,
        isLoading,
        error,
        userProvider,
        userData,
        setError,
        emailError,
        setEmailError,
        emailEmpty,
        setEmailEmpty,
        nameError,
        setNameError,
        passwordError,
        setPasswordError,
        confirmError,
        setConfirmError,
        forgotPassword,
        emailMessage,
        sent,
        sum,
        setSum,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// export async function getServerSideProps() {

//   return {
//     props: {
//       allUsers,
//     },
//   };
// }
