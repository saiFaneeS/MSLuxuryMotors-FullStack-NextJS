import React from "react";
import Layout from "./Layout";
import Contact from "@/components/Contact/Contact";
import Head from "next/head";

const home = () => {
  return (
    <Layout>
      <Head>
<title>Contact - Book Your Premium Chauffeur Service in the UAE</title>
<meta name="description" content="Contact us to book your premium chauffeur service for your next event or travel needs in the UAE. Our team is ready to assist you in arranging your luxury transportation. Reach out to us for bookings, queries, or special requests."/>
<meta name="keywords" content="UAE luxury transportation booking, chauffeur service inquiries, limousine hire, contact luxury car service"/>
      </Head>
      <Contact />
    </Layout>
  );
};

export default home;
