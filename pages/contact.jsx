import React from "react";
import Layout from "./Layout";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";

const home = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Contact />
    </Layout>
  );
};

export default home;
