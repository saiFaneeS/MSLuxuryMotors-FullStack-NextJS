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
        <title>MSLuxuryMotors</title>
        <meta
          name="description"
          content="Experience unparalleled luxury and comfort with MS Luxury Motors. Our professional chauffeurs provide top-notch limousine services for all your special occasions. Whether it's a wedding, corporate event, or a night out on the town, trust us for a stylish and safe journey. Book your dream limousine experience today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <style>{`.montserrat { font-family: ${montserrat.fontFamily ? montserrat.fontFamily : "sans-serif"}; }`}</style>
      </Head>
      <div className="montserrat" style={{overflow:"hidden"}}>
        <GlobalNav />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
