import { Container, Wrapper, Card } from "./Style";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { useRouter } from "next/router";

const BlogPosts = ({ blogPosts }) => {
  const router = useRouter();

  const displayPost = (e) => {
    router.push(`/blog/${e.slug}`);
  };

  return (
    <Container>
      {blogPosts.map((post) => (
        <Card key={post.id} onClick={() => displayPost(post)}>
          <div className="image">
            <Image
              src={post.image.url}
              alt="article image"
              width={200}
              height={200}
              objectFit="cover"
              className="blog_image"
              borderRadius="10px"
              blurDataURL="URL"
              placeholder="blur"
            />
          </div>
          <div className="blog_details">
            <h2>{post.title}</h2>
            <p>{post.article.slice(0, 150).concat("...Read more")}</p>
            <div className="info">
              <p>
                <BiUserCircle /> {post.author}
              </p>
              <p>
                <BsCalendarEvent /> {post.date}
              </p>
              <p>
                <FaRegClock /> {post.minutes} min read
              </p>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default BlogPosts;
