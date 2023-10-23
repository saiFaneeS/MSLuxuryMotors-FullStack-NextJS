import React from "react";
import Layout from "./Layout";
import AllFleet from "@/components/AllFleet/AllFleet";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";

const home = () => {
  return (
    <Layout>
      <Head>
        <title>
          Luxurious Fleet for Hire | MS Luxury Motors - UAE Limousine Services
        </title>
        <meta
          name="description"
          content="Discover our exquisite fleet of luxury vehicles available for hire. From elegant limousines to stylish sedans, we offer premium transportation solutions for your special events and business needs in the UAE. Book your luxury ride today."
        />
        <meta
          name="keywords"
          content="Luxury vehicle fleet, chauffeur-driven cars, top-class limousines, UAE transportation service"
        />
      </Head>
      <AllFleet />
      <Contact />
    </Layout>
  );
};

export default home;
