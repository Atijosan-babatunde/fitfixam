import React from "react";
import { Container } from "./style";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import Moment from "react-moment";
import { useRouter } from "next/router";

const Blogging = ({ blogPosts }) => {
  console.log(blogPosts);
  const router = useRouter();

  const handleLink = (e) => {
    router.push(`/blog/${e.slug}`);
  };

  return (
    <Container>
      <div className="container">
        <div className="header">
          <h1>Feautured Articles</h1>
          <Link href="/blog">
            <a className="blog-link">All Articles {">>"}</a>
          </Link>
        </div>

        <div className="wrapper">
          {blogPosts.map((e) => (
            <div className="card" key={e.id}>
              <div className="image" onClick={() => handleLink(e)}>
                <div className="pic">
                  <Image
                    src={e.image.url}
                    alt={e.image.name}
                    width={400}
                    height={500}
                    objectFit="cover"
                    className="img"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                </div>
                <div className="other">
                  <p className="time">
                    <AiOutlineClockCircle /> {e.minutes} min read
                  </p>
                  <div className="bg">
                    <h3>{e.title}</h3>
                    <p className="article">
                      {e.article.slice(0, 100).concat("...Read more")}
                    </p>
                    <div className="details">
                      <div className="user">
                        <HiUserCircle />
                        {e.author}
                      </div>
                      <div className="time">
                        <AiOutlineCalendar />
                        <Moment format="D MMM YYYY" withTitle>
                          {e.created_at}
                        </Moment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blogging;
