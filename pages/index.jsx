import React from "react";
import Layout from "./Layout";
import Hero from "@/components//Hero/Hero";
import Welcome from "@/components/Welcome/Welcome";
import AllFleet from "@/components/AllFleet/AllFleet";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Premier Limousine Chauffeur Service in UAE | MS Luxury Motors
        </title>
        <meta
          name="description"
          content="Experience luxury transportation with our top-rated limousine chauffeur service in the UAE. Enjoy comfortable rides and professional chauffeurs for all your events and special occasions. Contact us now for bookings and inquiries."
        />
        <meta
          name="keywords"
          content="UAE limousine service, luxury chauffeur, premium transportation, professional car service"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Hero />
        <Welcome />
        <AllFleet />
        <About />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}
