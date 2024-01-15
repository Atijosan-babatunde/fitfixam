import { useState, useContext, useEffect } from "react";
import { Container, Wrapper, Aside, ProviderBtns, Alert } from "./Style";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/logo-blue.png";
import { GoogleBtn, FacebookBtn, LoginBtn } from "../Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_URL } from "@/config/index";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiShow, BiHide } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";
// import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

const CreateAccount = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [sent, setSent] = useState(false);

  const { forgotPassword, error, setError } = useContext(AuthContext);

  const handleSubmitSignin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 10000);
    }

    if (!res.ok) {
      setError(true);

      // setErrorMessage(data.message[0].messages[0].message);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <Aside>
          <h1>Forgot your password?</h1>
          <p></p>
        </Aside>
        <Wrapper error={error}>
          <Alert sent={sent}>
            <p>
              Check your mail! A link has been sent to you.{" "}
              <IoMdCheckmarkCircleOutline color="#8bc34a" fontSize={30} />
            </p>
          </Alert>
          {/* <p>Enter email</p> */}
          <form onSubmit={handleSubmitSignin}>
            <div className="password">
              {error && <span>{errorMessage}</span>}
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "error forgot" : "forgot"}
              />
            </div>
            <LoginBtn>Submit</LoginBtn>
          </form>
          <p className="paragraph">
            Don{"'"}t have an account?{" "}
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default CreateAccount;
