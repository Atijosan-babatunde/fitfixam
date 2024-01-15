import React from "react";
import qs from "qs";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { Container } from "@/components/SearchStyle";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Search = ({ posts, query }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const SearchItem = dynamic(() => import("@/components/Search/SearchItem"));

  const router = useRouter();

  return (
    <UserLayout>
      <Container>
        <h1>
          You searched for {'"'}
          {router.query.term}
          {'"'}
        </h1>
        <div className="results">
          <h2>Results</h2>
          <div className="btns">
            <p>Sort Order</p>
            <button>Recent</button>
            <button>Popular</button>
          </div>
        </div>
        <SearchItem key={posts.id} posts={posts} />
      </Container>
    </UserLayout>
  );
};

export default Search;

export async function getServerSideProps({ query: { term }, req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const query = qs.stringify({
    _where: {
      _or: [{ post_contains: term }],
    },
  });

  const resPosts = await fetch(`${NEXT_PUBLIC_API_URL}/posts?${query}`);
  const posts = await resPosts.json();

  return {
    props: { posts, query },
  };
}
