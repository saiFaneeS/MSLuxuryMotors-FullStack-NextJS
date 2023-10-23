import React from "react";
import GlobalNav from "../components/GlobalNav/GlobalNav";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={montserrat.className} style={{ overflow: "hidden" }}>
        <GlobalNav />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
