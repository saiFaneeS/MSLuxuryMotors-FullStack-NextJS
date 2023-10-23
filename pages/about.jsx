import React from "react";
import About from "@/components/About/About";
import Layout from "./Layout";
import Head from "next/head";
import Welcome from "@/components/Welcome/Welcome";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact/Contact";

const home = () => {
  return (
    <Layout>
      <Head>
        <title>Leading Limousine Chauffeur Service in the UAE</title>
        <meta
          name="description"
          content="Discover our exquisite fleet of luxury vehicles available for hire. From elegant limousines to stylish sedans, we offer premium transportation solutions for your special events and business needs in the UAE. Book your luxury ride today."
        />
        <meta
          name="keywords"
          content="Luxury vehicle fleet, chauffeur-driven cars, top-class limousines, UAE transportation service"
        />
      </Head>
      <Welcome />
      <About />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default home;
