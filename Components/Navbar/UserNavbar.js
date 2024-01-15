import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/Blue.png";
import userImage from "public/userImage.png";
import {
  Wrapper,
  Container,
  UserNav,
  UserSideNav,
  IconNav,
  NavMenu,
  Search,
  Modal,
  CreatePost,
  PostContainer,
  Tags,
  Actions,
  Btn,
  Contain,
  SearchContainer,
} from "./Style";
import { BtnNav } from "../Buttons";
import Link from "next/link";
import {
  FaToolbox,
  FaHammer,
  FaScrewdriver,
  FaWrench,
  FaRegCompass,
  FaUsersCog,
  FaFeatherAlt,
  FaRegLifeRing,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import { CgMore } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTrendingUp, BiUserCircle } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import userImg from "@/public/userImage.png";
import logo from "@/public/logo-menu.png";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { GrAttachment } from "react-icons/gr";

const Navbar = () => {
  const router = useRouter();

  const [image, setImage] = useState([]);
  // const [imagePreview, setImagePreview] = useState(
  //   isPosted.image ? isPosted.image.formats.thumbnail.url : null
  // );
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [postCategory, setPostCategory] = useState("");
  const [postItem, setPostItem] = useState({
    post: "",
    slug: (Math.random() + 1).toString(36).substring(7),
    user: user,
    category: {
      id: "",
    },
  });
  const [isProfile, setIsProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isCarpenter, setIsCarpenter] = useState(false);
  const [isPlumber, setIsPlumber] = useState(false);
  const [isElect, setIsElect] = useState(false);
  const [isOthers, setIsOthers] = useState(false);
  const [isMechanic, setIsMechanic] = useState(false);
  const [message, setMessage] = useState("");
  const [isFile, setIsFile] = useState();
  const [fileName, setFileName] = useState("");
  const [lessonImage, setLessonImage] = useState([]);

  let imgArr = [];

  useEffect(() => {
    // setPostCategory(postCategory);
    // console.log(postCategory);
  }, [postCategory]);

  const refreshData = () => router.replace(router.asPath);

  const imageUploaded = async (e) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts/${e.id}`);
    const data = await res.json();
    console.log(data);
    // setIsPosted(data);
    setIsModal(false);
  };

  const openProfileDropdown = () => {
    setIsProfile(!isProfile);

    console.log(isProfile);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };

  const handleIsOpen = () => {
    setUserIsOpen(!userIsOpen);
    // setTimeout(() => {
    // }, 2000);
  };

  const handleClose = () => {
    setUserIsOpen(false);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  const handlePostCategory = (e) => {
    // console.log(postItem.category);
    const { post, name } = e.target;
    setPostCategory(name);
    setPostItem({
      ...postItem,
      category: {
        id: name,
      },
    });
  };

  // fetch("https://ip.jsontest.com", { mode: "cors" })
  //   .then((resp) => resp.json())
  //   .then((ip) => {
  //     console.log(ip);
  //   });

  const handleInputChange = (e) => {
    const { post, value } = e.target;
    setPostItem({
      ...postItem,
      post: value,
      slug: (Math.random() + 1).toString(36).substring(7),
      user: user,
      // category: {
      //   id: postCategory,
      // },
    });
  };

  const handlePost = async (files) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postItem),
    });

    const data = await res.json();
    // setIsPosted(data);
    console.log(data);
    setPostItem({
      post: "",
      slug: "",
      user: "",
    });

    // if (!res.ok) {
    //   alert("something went wrong");
    // } else {
    //   const data = await res.json();
    //   setIsPosted(data);
    //   console.log(isPosted);
    // }

    const formData = new FormData();
    for (let i = 0; i < image.length; i++) {
      // formData.append("files", image);
      formData.append("files", image[i]);
    }
    formData.append("ref", "posts");
    formData.append("refId", data.id);
    formData.append("field", "images");
    // image.forEach(({ file }) =>
    //   bodyFormData.append(`files.images`, file, file.name)
    // );

    const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    if (resUpload.ok) {
      imageUploaded(data);
    }

    console.log();

    setIsModal(false);

    setImage(null);

    refreshData();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 3) {
      setMessage("You have an upload limit of 3 images");
      setTimeout(() => {
        setMessage("");
      }, 5000);
      e.target.value = null;
    } else {
      setImage(e.target.files);
    }

    const data = [];
    for (let i = 0; i < e.target.files.length; i++) {
      data.push(e.target.files[i]);
    }
    setLessonImage(data);

    // setFileName(e.target.files[0].name);
    lessonImage.map((i) => {
      console.log(i);
    });

    setIsFile(true);

    // imgArr.push(e.target.files[i]);
    // setImage([imgArr]);
    // console.log(e.target.files[i]);
    // formData.append(e.targte.files[i].name, files[i]);
    // handlePost(e.target.files);
  };

  const handleSearchChange = async (e) => {
    setIsSearch(true);
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setIsSearch(false);
    }

    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/posts?post_contains=${searchValue}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    setSearchData(data);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    setSearchValue("");
    router.push(`/feeds/search?term=${searchValue}`);
    setIsSearch(false);

    // setSearchData(data);
  };

  const handleCarpenter = (e) => {
    setIsCarpenter(true);
    setIsPlumber(false);
    setIsElect(false);
    setIsMechanic(false);
    setIsOthers(false);

    handlePostCategory(e);
  };
  const handlePlumber = (e) => {
    setIsCarpenter(false);
    setIsPlumber(true);
    setIsElect(false);
    setIsMechanic(false);
    setIsOthers(false);

    handlePostCategory(e);
  };
  const handleElect = (e) => {
    setIsCarpenter(false);
    setIsPlumber(false);
    setIsElect(true);
    setIsMechanic(false);
    setIsOthers(false);

    handlePostCategory(e);
  };

  const handleMechanic = (e) => {
    setIsCarpenter(false);
    setIsPlumber(false);
    setIsElect(false);
    setIsMechanic(true);
    setIsOthers(false);

    handlePostCategory(e);
  };

  const handleOthers = (e) => {
    setIsCarpenter(false);
    setIsPlumber(false);
    setIsElect(false);
    setIsMechanic(false);
    setIsOthers(true);

    handlePostCategory(e);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("files", image);
    // formData.append("ref", "posts");
    // formData.append("refId", data.id);
    formData.append("field", "images");
    // image.forEach(({ file }) =>
    //   bodyFormData.append(`files.images`, file, file.name)
    // );

    const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: formData,
    });

    if (resUpload.ok) {
      imageUploaded();
    }
  };

  const handleRemoveFile = (e) => {
    // setSelectedFile();

    setIsFile(null);
  };

  return (
    <>
      <Modal isModal={isModal}>
        <div className="cancel_icon" onClick={() => openModal()}>
          <MdCancel color="#EBEEF2" fontSize={40} />
        </div>
        <CreatePost>
          {user ? (
            <PostContainer isModal={isModal}>
              <h2 className="post_header">
                <FaEnvelope /> Write Something
              </h2>
              <textarea
                type="text"
                placeholder="Start typing here..."
                className="post_input"
                value={postItem.post}
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              <Tags>
                <h2>Add a tag:</h2>
                <input
                  type="button"
                  placeholder="#Carpenters"
                  value="#Carpenters"
                  name="1"
                  className={isCarpenter ? "carpenter active" : "carpenter"}
                  onClick={(e) => handleCarpenter(e)}
                />
                <input
                  type="button"
                  placeholder="#Electricians"
                  value="#Electricians"
                  name="3"
                  className={isElect ? "electrician active" : "electrician"}
                  onClick={(e) => handleElect(e)}
                />
                <input
                  type="button"
                  placeholder="#Plumbers"
                  value="#plumbers"
                  name="2"
                  className={isPlumber ? "plumber active" : "plumber"}
                  onClick={(e) => handlePlumber(e)}
                />
                <input
                  type="button"
                  placeholder="#Mechanics"
                  value="#mechanics"
                  name="34"
                  className={isMechanic ? "mech active" : "mech"}
                  onClick={(e) => handleMechanic(e)}
                />
                <input
                  type="button"
                  placeholder="#Others"
                  value="#others"
                  name="35"
                  className={isOthers ? "others active" : "others"}
                  onClick={(e) => handleOthers(e)}
                />
              </Tags>
              <Actions>
                <div className="upload">
                  <div className="file">
                    <div className="file-label">
                      <label htmlFor="file">Upload your Picture</label> <br />
                    </div>

                    <div className="input">
                      {/* <input
                        type="file"
                        name="file"
                        id="file"
                        className="width"
                        placeholder="Choose image"
                        onChange={(e) => handleFileChange(e)}
                      /> */}
                      <input
                        type="file"
                        placeholder="Upload an image"
                        onChange={handleFileChange}
                        multiple="multiple"
                        accept=".jpg,.jpeg,.png"
                        name="file"
                        id="file"
                      />
                      {isFile && (
                        <p className="remove" onClick={handleRemoveFile}>
                          X
                        </p>
                      )}
                      <label htmlFor="file" className="label">
                        <div className="label">
                          {isFile ? (
                            lessonImage.map((i) => (
                              <div key={i}>
                                <span>{i.name}</span>
                              </div>
                            ))
                          ) : (
                            <p>Choose image</p>
                          )}
                          {!isFile && <GrAttachment fontSize={30} />}
                        </div>
                      </label>
                    </div>
                  </div>

                  <p>{message}</p>
                </div>
                <div className="btn">
                  <button
                    className="btn_cancel"
                    onClick={() => setIsModal(false)}
                  >
                    Cancel
                  </button>
                  <button onClick={handlePost} className="btn_send">
                    Send
                  </button>
                </div>
              </Actions>
            </PostContainer>
          ) : (
            <Contain isModal={isModal}>
              <h1>You are not logged in!</h1>
              <Btn className="btn">
                <Link href="/login">
                  <a>
                    <button>Sign in</button>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <button>Sign up</button>
                  </a>
                </Link>
              </Btn>
              <p>to create a post...</p>
            </Contain>
          )}
        </CreatePost>
      </Modal>
      <UserNav isProfile={isProfile}>
        <NavMenu userIsOpen={userIsOpen}>
          <div className="side_menu">
            <GiHamburgerMenu
              fontSize={30}
              cursor="pointer"
              onClick={() => handleIsOpen()}
              className="menu"
            />
          </div>

          <div className="logo_image">
            <Link href="/">
              <a>
                <Image src={logo} alt="Fitfixam Logo" width={130} height={50} />
              </a>
            </Link>
          </div>
        </NavMenu>
        <Search>
          <form onSubmit={submitSearch}>
            <FaSearch fontSize={26} className="search" color="#E5E5E5" />
            <input
              type="text"
              placeholder="Search"
              userIsOpen={userIsOpen}
              value={searchValue}
              name="search Value"
              onChange={(e) => handleSearchChange(e)}
            />
          </form>
        </Search>
        {user ? (
          <>
            <div className="user_profile">
              <FaBell fontSize={26} cursor="pointer" className="bell" />
              {user.user_image ? (
                <Image
                  src={user.user_image.formats.small.url}
                  alt="User Image"
                  width={50}
                  height={50}
                  cursor="pointer"
                  objectFit="cover"
                  className="user_image"
                  onClick={() => router.push(`/profile/${user.slug}`)}
                />
              ) : (
                <Image
                  src={userImage}
                  alt="User Image"
                  width={50}
                  height={50}
                  cursor="pointer"
                  objectFit="cover"
                  className="user_image"
                  onClick={() => router.push(`/profile/${user.slug}`)}
                />
              )}

              <div className="user_info">
                <h3
                  onClick={() => router.push(`/profile/${user.slug}`)}
                  className="username"
                >
                  {user.username}
                </h3>
                {isProfile ? (
                  <FaChevronUp
                    fontSize={19}
                    cursor="pointer"
                    onClick={() => openProfileDropdown()}
                  />
                ) : (
                  <FaChevronDown
                    fontSize={19}
                    cursor="pointer"
                    onClick={() => openProfileDropdown()}
                  />
                )}
              </div>
            </div>
            <div className="profile_dropdown" isProfile={isProfile}>
              <div>
                <BiUserCircle fontSize={19} />
                <p onClick={() => router.push(`/profile/${user.slug}`)}>
                  Go to Profile
                </p>
              </div>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </>
        ) : (
          <Btn>
            <Link href="/login">
              <a>
                <button>Sign in</button>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <button>Sign up</button>
              </a>
            </Link>
          </Btn>
        )}
      </UserNav>
      <UserSideNav
        userIsOpen={userIsOpen}
        // onMouseEnter={() => setUserIsOpen(true)}
        // onMouseLeave={() => setUserIsOpen(false)}
      >
        <div className="side_nav">
          <div className="write_icon">
            <IconNav>
              <div className="write" onClick={() => openModal()}>
                <p>
                  Write something <FaPlus />
                </p>
              </div>
            </IconNav>
          </div>

          <Link href="/feeds">
            <a>
              <IconNav className={router.pathname === "/feeds" ? "active" : ""}>
                <FaToolbox fontSize={26} cursor="pointer" color="#07036e" />
                <p>General Discussions</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/trending">
            <a>
              <IconNav
                className={router.pathname == "/trending" ? "active" : ""}
              >
                <BiTrendingUp fontSize={26} cursor="pointer" color="#07036e" />
                <p>Trending</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/carpenters">
            <a>
              <IconNav
                className={router.pathname == "/carpenters" ? "active" : ""}
              >
                <FaHammer fontSize={26} cursor="pointer" color="#07036e" />
                <p>Carpenters</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/electricians">
            <a>
              <IconNav
                className={router.pathname == "/electricians" ? "active" : ""}
              >
                <FaScrewdriver fontSize={26} cursor="pointer" color="#07036e" />
                <p>Electricians</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/plumbers">
            <a>
              <IconNav
                className={router.pathname == "/plumbers" ? "active" : ""}
              >
                <FaWrench fontSize={26} cursor="pointer" color="#07036e" />
                <p>Plumbers</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/mechanics">
            <a>
              <IconNav
                className={router.pathname == "/mechanics" ? "active" : ""}
              >
                <FaCogs fontSize={26} cursor="pointer" color="#07036e" />
                <p>Mechanics</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/others">
            <a>
              <IconNav className={router.pathname == "/others" ? "active" : ""}>
                <CgMore fontSize={26} cursor="pointer" color="#07036e" />
                <p>Others</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/companies">
            <a>
              <IconNav
                userIsOpen={userIsOpen}
                className={router.pathname === "/companies" ? "active" : ""}
              >
                <FaRegCompass fontSize={26} cursor="pointer" color="#07036e" />
                <p>Companies</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/find-an-artisan">
            <a>
              <IconNav
                className={
                  router.pathname === "/find-an-artisan" ? "active" : ""
                }
              >
                <FaUsersCog fontSize={26} cursor="pointer" color="#07036e" />
                <p>Find an Artisan</p>
              </IconNav>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <IconNav className={router.pathname === "/blog" ? "active" : ""}>
                <FaFeatherAlt fontSize={26} cursor="pointer" color="#07036e" />
                <p>Articles</p>
              </IconNav>
            </a>
          </Link>
          <div className="settings">
            <Link href="/faq">
              <a>
                <IconNav>
                  <FaRegLifeRing
                    fontSize={26}
                    cursor="pointer"
                    color="#07036e"
                  />
                  <p>Help</p>
                </IconNav>
              </a>
            </Link>
          </div>
        </div>
        {/* <FaPlus
          fontSize={50}
          cursor="pointer"
          color="#fff"
          className="add_post_page"
          onClick={() => openModal()}
        /> */}
      </UserSideNav>
      <SearchContainer isSearch={isSearch}>
        <div className="search_container">
          {searchData.length === 0 ? (
            <p>Not found, try something else...</p>
          ) : (
            searchData.map((e) => (
              <div className="search_item" key={e.id}>
                <h2>{e.user.username}</h2>
                {"-"}
                <p>{e.post.slice(0, 60).concat("...")}</p>
                <h3 onClick={() => router.push(`/feeds/${e.slug}`)}>
                  Read more
                </h3>
              </div>
            ))
          )}
        </div>
      </SearchContainer>
    </>
  );
};

export default Navbar;
