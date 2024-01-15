import { useState, useContext, useEffect } from "react";
import { Container, Wrapper, Aside, ProviderBtns } from "./Style";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/logo-blue.png";
import { GoogleBtn, FacebookBtn, LoginBtn } from "../Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiShow, BiHide } from "react-icons/bi";
// import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

const CreateAccount = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, errorMessage, isLoading, error } = useContext(AuthContext);

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const displayError = () => {
    if (error) {
      setTimeout(() => {}, 3000);
      return <span>Invalid email or password</span>;
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Aside>
            {/* <Image src={Logo} alt="Fitifixam logo" width={100} height={100} /> */}
            <h1>Welcome back, we missed you!</h1>
            {/* <p>It’s good to have you back.</p> */}
          </Aside>
          <Wrapper error={error}>
            <h1>Login</h1>
            {/* <p>You can either login with</p> */}
            <ProviderBtns>
              {/* {Object.values(providers).map((provider) => (
                <div key={provider.name} className={styles.container}>
                  <button
                    onClick={() =>
                      SignIntoProvider(provider.id, {
                        callbackUrl: "/dashboard",
                      })
                    }
                  >
                    <GoogleBtn>
                      <FcGoogle /> {provider.name}
                    </GoogleBtn>
                  </button>
                </div>
              ))} */}
              {/* <GoogleBtn onClick={() => signIn()}>
                <FcGoogle /> Google
              </GoogleBtn>
              <FacebookBtn>
                <FaFacebookSquare /> Facebook
              </FacebookBtn> */}
            </ProviderBtns>
            {/* <h2>Or</h2> */}
            <form onSubmit={handleSubmitSignin}>
              <div className="password">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? "error" : ""}
                />

                {displayError()}
              </div>
              {/* {error ? <span>Invalid email or password</span> : <span></span>} */}
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={error ? "error" : ""}
                />
                <div className="show-password">
                  {showPassword ? (
                    <BiHide onClick={() => handleShowPassword()} />
                  ) : (
                    <BiShow onClick={() => handleShowPassword()} />
                  )}
                </div>
              </div>
              <div className="forgot">
                <Link href="/forgot-password">
                  <a>Forgot Password</a>
                </Link>
              </div>
              <LoginBtn>Login</LoginBtn>
            </form>
            <p className="paragraph">
              Don{"'"}t have an account?{" "}
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </p>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default CreateAccount;
