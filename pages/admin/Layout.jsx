import React from "react";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import adminStyles from "./Home.module.css";
import Sidebar from "../../components/admin/Sidebar/Sidebar";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={montserrat.className}>
        <Sidebar />
        <div className={adminStyles.main}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
