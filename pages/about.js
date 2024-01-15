import dynamic from "next/dynamic";

const about = () => {
  const Layout = dynamic(() => import("@/components/Layout"));
  const Hero = dynamic(() => import("@/components/AboutHero/Hero"));
  const AboutUs = dynamic(() => import("@/components/AboutUs/AboutUs"));

  return (
    <Layout
      title="Fitfixam | About"
      description="Fitfixam is a platform for both artisans and people who use the services of artisans. We want to help you find the right artisans for your projects and ensure your satisfaction."
      keywords="Artisans, Repair, Fix, Reviews, Services, Satisfied
    "
    >
      <Hero />
      <AboutUs />
    </Layout>
  );
};

export default about;
