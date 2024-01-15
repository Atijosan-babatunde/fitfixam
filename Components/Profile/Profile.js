import { React, useEffect } from "react";
import { Container, Wrapper } from "./Style";
import AuthContext from "@/context/AuthContext";
import { useState, UseEffect, useContext } from "react";
import Image from "next/image";
import userImage from "public/userImage.png";
import {
  FaUserAlt,
  FaToolbox,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPen,
} from "react-icons/fa";
import Moment from "react-moment";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { GiCancel } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRouter } from "next/router";
import spinner from "@/public/spinner.gif";
import Rating from "react-rating";
import RatingStar from "../RatingStar/RatingStar";
import Star from "../RatingStar/Star";

const Profile = ({ usersProfile, token, userPosts, artisanRatings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: usersProfile.username,
    personal_information: usersProfile.personal_information,
    specializations: usersProfile.specializations,
    skills: usersProfile.skills,
    interest: usersProfile.interest,
    affiliations: usersProfile.affiliations,
    phone: usersProfile.phone,
    email: usersProfile.email,
    address: usersProfile.address,
    user_image: usersProfile.user_image,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [description, setDescription] = useState("");
  const [matchUser, setMatchUser] = useState();

  console.log(usersProfile);

  const stars = [0, 1, 2, 3, 4, 5];
  // console.log(stars.shift());

  const refreshData = () => router.reload();

  // console.log(usersProfile);

  const { user, sum, setSum } = useContext(AuthContext);

  let binaryData = [];

  useEffect(() => {
    rateUser();

    console.log(usersProfile.artisan_ratings);
    if (user) {
      usersProfile.artisan_ratings.map((e) => {
        console.log(e);
      });
    }
  }, []);

  const router = useRouter();

  const imageUploaded = async (e) => {
    // e.preventDefault();
    setUserInfo({ ...userInfo, user_image: e });

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    console.log(data);
    // setIsPosted(data);
    // setIsOpen(false);
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await res.json();

    setIsOpen(false);

    console.log(data);

    refreshData();
  };

  const handleFileChange = (e) => {
    // const files = e.target;

    setImage(e.target.files[0]);

    // console.log(e.target.files[0]);

    binaryData.push(image);

    uploadImage();

    // uploadImage(e);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const uploadImage = async () => {
    // e.preventDefault();

    setIsLoading(true);
    setMessage("File uploading...");

    const formData = new FormData();
    formData.append("files", image);
    // formData.append("ref", "user");
    formData.append("refId", usersProfile.id);
    formData.append("field", "user_image");

    const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      // headers: {
      //   // "Content-Type": "multipart/form-data",
      //   Authorization: `Bearer ${token}`,
      // },
      body: formData,
    });

    const data = await resUpload.json();

    if (resUpload.ok) {
      imageUploaded(data);
      setMessage("File uploaded successfully! Save Chages.");
      setTimeout(() => {
        setMessage();
      }, 7000);
    } else {
      setMessage("Select a file");
      setTimeout(() => {
        setMessage();
      }, 7000);
    }

    setIsLoading(false);

    setUserProfileImage(data);

    console.log(userProfileImage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleIsImage = () => {
    setIsImage(true);
  };

  const rateUser = async () => {
    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/artisan-ratings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating: rating,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRating = async (e) => {
    e.preventDefault();

    const one = 20;
    const two = 40;
    const three = 60;
    const four = 100;
    const five = 200;

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/artisan-ratings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: usersProfile,
          user_rating: user,
          rating_text: description,
          rating: rating,
        }),
      });
      const data = await res.json();
      console.log(data);
      // refreshData();
    } catch (error) {
      console.log(error);
    }

    console.log(rating, description);

    let count = 0;
    let add = 0;

    for (let i = 0; i < usersProfile.rating_artisan.length; i++) {
      add += usersProfile.rating_artisan[i].rating;
    }

    stars.forEach(function (value, index) {
      count += value;
      add += value * (index + 1);
    });

    console.log(stars);
    if (usersProfile.rating_artisan.length < 1) {
      setSum(0);
    } else {
      setSum(add / count);
      setRating(add / count);
    }

    try {
      const res = await fetch(
        `${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: rating,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    refreshData();
  };

  const getRatingScore = (e) => {
    if (e === 0) console.log(index);
    setRating(e);
  };

  return (
    <Container isOpen={isOpen}>
      <div className="form-modal">
        <GiCancel
          color="#F0F3F6"
          fontSize={40}
          className="cancel_icon"
          onClick={openModalHandler}
        />
        <form className="edit" onSubmit={(e) => updateUserHandler(e)}>
          <div className="user">
            <div className="user_info">
              <div className="img">
                {usersProfile.user_image ? (
                  <Image
                    src={usersProfile.user_image.url}
                    alt="user image"
                    width={170}
                    height={170}
                    className="image"
                    objectFit="cover"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                ) : (
                  <Image
                    src={userImage}
                    alt="user image"
                    width={170}
                    height={170}
                    className="image"
                    objectFit="cover"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                )}
              </div>
              {/* {image && (
                <div className="img-preview">
                  <Image
                    src={window.URL.createObjectURL(
                      new Blob(binaryData, { type: "application/zip" })
                    )}
                    alt="Image preview"
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                </div>
              )} */}
              <div className="edit_img" onClick={handleIsImage}>
                <div className="upload-form">
                  <label htmlFor="file-input">
                    <FaPen color="#07036E" fontSize={15} className="pen" />
                  </label>
                  <input
                    type="file"
                    id="file-input"
                    className="image-input"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              {/* {isImage ? (
                <div className="upload-form">
                  <input
                    type="file"
                    className="image-input"
                    onChange={handleFileChange}
                  />
                  <button onClick={uploadImage}></button>
                </div>
              ) : (
                <></>
              )} */}
              {/* <div className="upload-btn">
                <button onClick={uploadImage}>Update Image</button>
              </div> */}
              <h2>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userInfo.username}
                  onChange={(e) => handleInputChange(e)}
                  className="name"
                />
              </h2>
            </div>
            <div className="additionals">
              <p>
                <FaPhone color="#07036E" />
                <input
                  type="number"
                  placeholder={
                    usersProfile.phone
                      ? usersProfile.Phone
                      : "Enter phone number"
                  }
                  name="phone"
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
              <p>
                <FaEnvelope color="#07036E" />
                <input
                  type="email"
                  placeholder={
                    usersProfile.email ? usersProfile.email : "Enter your email"
                  }
                  name="email"
                  id="email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
              <p>
                <FaMapMarkerAlt color="#07036E" />
                <input
                  type="text"
                  placeholder={
                    usersProfile.address
                      ? usersProfile.address
                      : "Enter your address"
                  }
                  name="address"
                  id="address"
                  value={userInfo.address}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
            </div>
          </div>
          <div className="edit_form">
            <div className="message">
              <span>{message}</span>
              {isLoading && (
                <Image
                  src={spinner}
                  alt="spinner"
                  width={20}
                  height={20}
                  blurDataURL="URL"
                  placeholder="blur"
                />
              )}
            </div>
            <div className="modal">
              <div className="header">
                <h1>Personal Informations</h1>
                <button>Save</button>
              </div>
              <div className="textarea">
                <textarea
                  placeholder={
                    usersProfile.personal_information
                      ? usersProfile.personal_information
                      : "Write about yourself"
                  }
                  rows="5"
                  name="personal_information"
                  id="personal_information"
                  value={userInfo.personal_information}
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
              {usersProfile.artisan ? (
                <div className="grid">
                  <h2>Specializations:</h2>
                  <input
                    type="text"
                    placeholder={
                      usersProfile.specializations
                        ? usersProfile.specializations
                        : "Enter your specializations"
                    }
                    name="specializations"
                    id="specializations"
                    value={userInfo.specializations}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              ) : (
                <div></div>
              )}
              {usersProfile.artisan ? (
                <div className="grid">
                  <h2>Skills:</h2>
                  <input
                    type="text"
                    placeholder={
                      usersProfile.skills
                        ? usersProfile.skills
                        : "Enter your Skills"
                    }
                    name="skills"
                    id="skills"
                    value={userInfo.skills}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              ) : (
                <div></div>
              )}
              <div className="grid">
                <h2>Interests:</h2>
                <input
                  type="text"
                  placeholder={
                    usersProfile.interests
                      ? usersProfile.interests
                      : "Enter your interests"
                  }
                  name="interest"
                  id="interest"
                  value={userInfo.interest}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="grid">
                <h2>Affiliations:</h2>
                <input
                  type="text"
                  placeholder={
                    usersProfile.affiliations
                      ? usersProfile.affiliations
                      : "Enter your affiliations"
                  }
                  name="affiliations"
                  id="affiliations"
                  value={userInfo.affiliations}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <form className="reset">
              <h1>Security</h1>
              <div className="reset_password">
                <label htmlFor="">Change Password</label>
                <div className="reset_input">
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Re-enter Password" />
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
      <div className="profile">
        <div className="container">
          <div className="detail">
            <div className="user">
              <div className="img_container">
                {usersProfile.user_image ? (
                  <Image
                    src={usersProfile.user_image.url}
                    alt="User image"
                    width={170}
                    height={170}
                    objectFit="cover"
                    className="image"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                ) : (
                  <Image
                    src={userImage}
                    alt="User image"
                    width={170}
                    height={170}
                    objectFit="cover"
                    className="image"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                )}
              </div>
              <div className="name">
                <p>
                  {usersProfile.username}
                  {"      "}
                  {"      "}
                  {usersProfile.artisan ? <FaToolbox /> : <FaUserAlt />}
                  {console.log(usersProfile.rating)}
                </p>
              </div>
              <div className="star" style={{ display: "flex" }}>
                {stars.map((star, i) =>
                  i === 0 ? (
                    <></>
                  ) : (
                    <RatingStar
                      key={i}
                      starId={i}
                      id={i}
                      userRating={usersProfile.rating}
                    />
                  )
                )}
              </div>
              {usersProfile.artisan && (
                <div className="category">
                  <p>{usersProfile.user_category.categories}</p>
                  <p>
                    <FaMapMarkerAlt color="#07036E" /> {usersProfile.address}
                  </p>
                </div>
              )}
            </div>
            <div className="contact">
              {/* {console.log(usersProfile.category)} */}
              <h1>Contact</h1>
              {usersProfile.phone ? (
                <p>
                  <FaPhone color="#07036E" />
                  {usersProfile.phone}
                </p>
              ) : (
                <p>
                  <FaPhone color="#07036E" />
                </p>
              )}
              {usersProfile.email ? (
                <p>
                  <FaEnvelope color="#07036E" />
                  {usersProfile.email}
                </p>
              ) : (
                <p>
                  <FaEnvelope color="#07036E" />
                </p>
              )}
              {usersProfile.address ? (
                <p>
                  <FaMapMarkerAlt color="#07036E" />
                  {usersProfile.address}
                </p>
              ) : (
                <p>
                  <FaMapMarkerAlt color="#07036E" />
                </p>
              )}
            </div>
          </div>
          <div className="info">
            <div className="split">
              <h1>Personal information</h1>
              {user ? (
                user.id === usersProfile.id ? (
                  <button onClick={openModalHandler}>Edit</button>
                ) : (
                  <div></div>
                )
              ) : (
                <div></div>
              )}
            </div>
            {usersProfile.personal_information ? (
              <p className="personal">{usersProfile.personal_information}</p>
            ) : (
              <p className="personal"></p>
            )}
            {usersProfile.artisan ? (
              usersProfile.specializations ? (
                <div className="flex">
                  <h2>Specialization: {"         "}</h2>
                  <p>{usersProfile.specializations}</p>
                </div>
              ) : (
                <div className="flex">
                  <h2>Specialization: {"         "}</h2>
                  <p></p>
                </div>
              )
            ) : (
              <div></div>
            )}
            {usersProfile.artisan ? (
              usersProfile.skills ? (
                <div className="flex">
                  <h2>Skills: {"         "}</h2>
                  <p>{usersProfile.skills}</p>
                </div>
              ) : (
                <div className="flex">
                  <h2>Skills: {"         "}</h2>
                  <p></p>
                </div>
              )
            ) : (
              <div></div>
            )}
            {usersProfile.interest ? (
              <div className="flex">
                <h2>Interests: {"         "}</h2>
                <p>{usersProfile.interest}</p>
              </div>
            ) : (
              <div className="flex">
                <h2>Interests: {"         "}</h2>
                <p></p>
              </div>
            )}
            {usersProfile.affiliations ? (
              <div className="flex">
                <h2>Affiliations: {"         "}</h2>
                <p>{usersProfile.affiliations}</p>
              </div>
            ) : (
              <div className="flex">
                <h2>Affiliations: {"         "}</h2>
                <p></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Wrapper>
        {usersProfile.artisan ? (
          user && user.id !== usersProfile.id ? (
            <div className="reviews">
              <div className="wrapper">
                <h1>What others have said</h1>
                {artisanRatings.map(
                  (rate) =>
                    rate.user &&
                    rate.user.id === usersProfile.id && (
                      <div className="card" key={rate.id}>
                        <div className="dets">
                          {rate.user_rating.user_image ? (
                            <Image
                              src={rate.user_rating.user_image.url}
                              alt="User image"
                              width={70}
                              height={70}
                              objectFit="cover"
                              blurDataURL="URL"
                              placeholder="blur"
                              className="image"
                            />
                          ) : (
                            <Image
                              src={userImage}
                              alt="User image"
                              width={70}
                              height={70}
                              objectFit="cover"
                              className="image"
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          )}
                          <div className="post">
                            <div className="username">
                              <h2>{rate.user_rating.username}</h2>
                              <p className="time">
                                <Moment fromNow ago>
                                  {rate.created_at}
                                </Moment>
                              </p>
                              {stars.map((star, i) =>
                                i === 0 ? (
                                  <></>
                                ) : (
                                  <RatingStar
                                    key={i}
                                    starId={i}
                                    id={i}
                                    userRating={rate.rating}
                                  />
                                )
                              )}
                            </div>
                            <div className="user_post">
                              <p>{rate.rating_text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              {user && user.id !== usersProfile.id && (
                <div className="review_form">
                  <h2>Rate and Review</h2>
                  <form action="" onSubmit={handleRating}>
                    {/* <Rating start={0} stop={5} /> */}
                    <div className="flex">
                      {stars.map((star, i) =>
                        i === 0 ? (
                          <></>
                        ) : (
                          <Star
                            key={i}
                            starId={i}
                            rating={hoverRating || rating}
                            onMouseEnter={() => setHoverRating(i)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => getRatingScore(i)}
                            id={i}
                          />
                        )
                      )}
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Write something..."
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <input type="submit" value="Send" />
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="wrapper">
              <h1>What others have said</h1>
              {artisanRatings.map(
                (rate) =>
                  rate.user &&
                  rate.user.id === usersProfile.id && (
                    <div className="card" key={rate.id}>
                      <div className="dets">
                        {rate.user_rating.user_image ? (
                          <Image
                            src={rate.user_rating.user_image.url}
                            alt="User image"
                            width={70}
                            height={70}
                            objectFit="cover"
                            className="image"
                            blurDataURL="URL"
                            placeholder="blur"
                          />
                        ) : (
                          <Image
                            src={userImage}
                            alt="User image"
                            width={70}
                            height={70}
                            objectFit="cover"
                            className="image"
                            blurDataURL="URL"
                            placeholder="blur"
                          />
                        )}
                        <div className="post">
                          <div className="username">
                            {console.log(rate.rating)}
                            <h2>{rate.user_rating.username}</h2>
                            <p className="time">
                              <Moment fromNow ago>
                                {rate.created_at}
                              </Moment>
                            </p>
                            {stars.map((star, i) =>
                              i === 0 ? (
                                <></>
                              ) : (
                                <RatingStar
                                  key={i}
                                  starId={i}
                                  id={i}
                                  userRating={rate.rating}
                                />
                              )
                            )}
                          </div>
                          <div className="user_post">
                            <p>{rate.rating_text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )
        ) : (
          <div className="wrapper">
            <h1>Recent Activities</h1>
            {usersProfile.posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="dets">
                  {usersProfile.user_image ? (
                    <Image
                      src={usersProfile.user_image.url}
                      alt="User image"
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="image"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="User image"
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="image"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                  )}
                  <div className="post">
                    <div className="username">
                      <h2>{usersProfile.username}</h2>
                      <p className="time">
                        <Moment fromNow ago>
                          {post.created_at}
                        </Moment>
                      </p>
                    </div>
                    <div className="user_post">
                      <p>{post.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Profile;
