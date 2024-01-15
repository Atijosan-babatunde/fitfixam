import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import dynamic from "next/dynamic";

const FindArtisan = ({ carpenters, plumbers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const FindArtisans = dynamic(() =>
    import("@/components/FindArtisan/FindArtisans")
  );

  const [isCarpenter, setIsCarpenter] = useState();
  const [isElectricians, setIsElectricians] = useState();
  const [isMechanics, setIsMechanics] = useState();
  const [isOthers, setIsOthers] = useState();

  useEffect(() => {
    getPlumbers();
    getElectricians();
    getMechanics();
    getOthers();
  }, []);

  const getPlumbers = async () => {
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/1?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsCarpenter(json);
    }
  };

  const getElectricians = async () => {
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/3?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsElectricians(json);
    }
  };

  const getMechanics = async () => {
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/4?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsMechanics(json);
    }
  };

  const getOthers = async () => {
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/5?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsOthers(json);
    }
  };

  return (
    <UserLayout
      title="Fitfixam | Find an Artisan"
      description="Connect with artisans."
      keywords="Artisans
      Repair
      Fix
      Carpenters
      Plumbers 
      Electricians 
      Reviews 
      Good 
      Bad 
      Services 
      Satisfied 
      Craftsmen
      Experience
      "
    >
      <Container>
        <>
          <Header>
            <h1>Carpenters</h1>
            <Link href="/artisans/carpenters">
              <a>See all</a>
            </Link>
          </Header>
          <Cards>
            {isCarpenter &&
              isCarpenter.users_permissions_users
                .slice(0, 5)
                .map((carpenter) => (
                  <div className="card" key={carpenter.id}>
                    <FindArtisans
                      key={carpenter.id}
                      user={carpenter}
                      category={isCarpenter.category}
                    />
                  </div>
                ))}
          </Cards>
        </>
        <>
          <Header>
            <h1>Plumbers</h1>
            <Link href="/artisans/plumbers">
              <a>See all</a>
            </Link>
          </Header>
          <Cards>
            {plumbers.users_permissions_users.slice(0, 5).map((plumber) => (
              <div className="card" key={plumber.id}>
                <FindArtisans
                  key={plumber.id}
                  user={plumber}
                  category={plumbers.category}
                />
              </div>
            ))}
          </Cards>
        </>
        <>
          <Header>
            <h1>Electricians</h1>
            <Link href="/artisans/electricians">
              <a>See all</a>
            </Link>
          </Header>
          <Cards>
            {isElectricians &&
              isElectricians.users_permissions_users
                .slice(0, 5)
                .map((electrician) => (
                  <div className="card" key={electrician.id}>
                    <FindArtisans
                      key={electrician.id}
                      user={electrician}
                      category={isElectricians.category}
                    />
                  </div>
                ))}
          </Cards>
        </>

        <>
          <Header>
            <h1>Mechanics</h1>
            <Link href="/artisans/mechanics">
              <a>See all</a>
            </Link>
          </Header>
          <Cards>
            {isMechanics &&
              isMechanics.users_permissions_users.slice(0, 5).map((mech) => (
                <div className="card" key={mech.id}>
                  <FindArtisans
                    key={mech.id}
                    user={mech}
                    category={isMechanics.categories}
                  />
                </div>
              ))}
          </Cards>
        </>

        <>
          <Header>
            <h1>Others</h1>
            <Link href="/artisans/others">
              <a>See all</a>
            </Link>
          </Header>
          <Cards>
            {isOthers &&
              isOthers.users_permissions_users.slice(0, 5).map((mech) => (
                <div className="card" key={mech.id}>
                  <FindArtisans
                    key={mech.id}
                    user={mech}
                    category={isOthers.categories}
                  />
                </div>
              ))}
          </Cards>
        </>
      </Container>
    </UserLayout>
  );
};

export default FindArtisan;

export const Container = styled.div`
  margin: 10rem auto;
`;

export const Header = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 2rem auto 2rem 30rem;
    align-items: center;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
    margin: 1rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 2rem 0rem 2rem 20rem;
    align-items: center;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    margin: 2rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    margin: 2rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 80%;
  margin: 0rem auto;

  div.card {
    width: 100%;
    margin-right: -10rem;
  }

  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 80%;
    margin: 0rem auto;

    div.card {
      width: 100%;
      margin-right: -10rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 60%;
    gap: 5rem;
    /* margin-left: 20rem; */

    div.card {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 30%;
    gap: 2rem;
    margin-left: 15rem;

    div.card {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 40%;
    gap: 1rem;
    margin: auto;

    div.card {
      width: 100%;
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 70%;
    margin: auto;
    /* gap: 1rem; */

    div.card {
      width: 100%;
      margin: auto;
    }
  }
`;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resCarpenters = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/1`);
  const carpenters = await resCarpenters.json();

  const resPlumbers = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/2?_limit=5`
  );
  const plumbers = await resPlumbers.json();

  const resElectricians = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/3`
  );
  const electricians = await resElectricians.json();

  return {
    props: { carpenters, plumbers },
  };
}
