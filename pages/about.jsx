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
        <title>About Us</title>
      </Head>
      <Welcome/>
      <About />
      <Testimonials/>
      <Contact/>
    </Layout>
  );
};

export default home;
