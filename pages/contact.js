import React from "react";
import Layout from "Components/Layout";
import dynamic from "next/dynamic";

const Contact = () => {
  const ContactHero = dynamic(() =>
    import("@/components/ContactHero/ContactHero")
  );
  const ContactUs = dynamic(() => import("@/components/ContactUs/ContactUs"));

  return (
    <Layout
      title="Fitfixam | Contact us"
      description="Feel free to reach out to us and our support team will get right back to you
    "
    >
      <ContactHero />
      <ContactUs />
    </Layout>
  );
};

export default Contact;
