import { useState, useContext, useEffect } from "react";
import {
  Container,
  Wrapper,
  Aside,
  ProviderBtns,
  Spinner,
  Alert,
} from "./Style";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/logo-blue.png";
import { useRouter } from "next/router";
import { GoogleBtn, FacebookBtn, RegisterBtn } from "../Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BiShow, BiHide } from "react-icons/bi";
import Link from "next/link";
import spinner from "@/public/spinner.gif";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artisan, setArtisan] = useState("");
  const [slug, setSlug] = useState(
    (Math.random() + 1).toString(36).substring(7)
  );
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [user_category, setUser_category] = useState({
    id: "",
  });
  const [isCarpenter, setIsCarpenter] = useState(false);
  const [isPlumber, setIsPlumber] = useState(false);
  const [isElectrician, setIsElectrician] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sent, setSent] = useState(false);

  const router = useRouter();

  const {
    register,
    error,
    setError,
    emailError,
    setEmailError,
    isLoading,
    emailEmpty,
    setEmailEmpty,
    nameError,
    setNameError,
    passwordError,
    setPasswordError,
    confirmError,
    setConfirmError,
  } = useContext(AuthContext);

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: router.query.code,
        password,
        passwordConfirmation: passwordConfirm,
      }),
    });

    const data = await res.json();

    setSent(true);

    setTimeout(() => {
      setSent(false);
      router.push("/login");
    }, 5000);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <>
      {/* {isLoading && (
        <Spinner>
          <Image src={spinner} alt="spinner" width={500} height={500} />
        </Spinner>
      )} */}
      <Container>
        <Aside>
          <Image src={Logo} alt="Fitifixam logo" width={100} height={100} />
          <h1>Reset Password!</h1>
          {/* <p>Are you ready to get started?</p> */}
        </Aside>
        <Wrapper error={error}>
          <Alert sent={sent}>
            <p>
              Password reset successful. You can now login!{" "}
              <IoMdCheckmarkCircleOutline color="#8bc34a" fontSize={30} />
            </p>
          </Alert>
          {/* <h1>Reset Password</h1> */}
          <form onSubmit={handleSubmitSignup}>
            <div className="password">
              {passwordError && <span>Enter password</span>}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                className={error || passwordError ? "error" : ""}
              />
              <div className="show-password">
                {showPassword ? (
                  <BiHide onClick={() => handleShowPassword()} />
                ) : (
                  <BiShow onClick={() => handleShowPassword()} />
                )}
              </div>
            </div>
            <div className="password">
              {error && <span>Passwords do not match</span>}
              {confirmError && <span>Confirm password</span>}
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm New Password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className={error || confirmError ? "error" : ""}
              />
              <div className="show-password">
                {showConfirm ? (
                  <BiHide onClick={() => handleShowConfirmPassword()} />
                ) : (
                  <BiShow onClick={() => handleShowConfirmPassword()} />
                )}
              </div>
            </div>
            <RegisterBtn>Reset</RegisterBtn>
          </form>
          <p className="paragraph">
            By Clicking “enter”, you hereby attest to have read our{" "}
            <Link href="/privacyPolicy">
              <a>Privacy Policy </a>
            </Link>
            and agree to our{" "}
            <Link href="/privacyPolicy">
              <a>Terms and Conditions</a>
            </Link>
          </p>
          <p className="paragraph">
            Already have an account?{" "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default ResetPassword;
