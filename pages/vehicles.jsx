import React from "react";
import Layout from "./Layout";
import AllFleet from "@/components/AllFleet/AllFleet";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";

const home = () => {
  return (
    <Layout>
      <Head>
        <title>Fleet</title>
      </Head>
      <AllFleet />
      <Contact />
    </Layout>
  );
};

export default home;
