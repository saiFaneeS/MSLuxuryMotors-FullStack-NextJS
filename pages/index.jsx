import React from "react";
import Layout from "./Layout";
import Hero from "@/components//Hero/Hero";
import Welcome from "@/components/Welcome/Welcome";
import AllFleet from "@/components/AllFleet/AllFleet";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Welcome />
        <AllFleet />
        <About />
        <Testimonials/>
        <Contact />
      </Layout>
    </>
  );
}
