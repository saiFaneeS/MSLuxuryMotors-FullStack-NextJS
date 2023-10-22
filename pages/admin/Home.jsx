import React, { useEffect } from "react";
import Dashboard from "./dashboard";
import { Montserrat } from "next/font/google";
import { useFirebase } from "@/context/firebase";
import Layout from "./Layout";
import styles from "./Home.module.css";
import Profile from "./profile";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Home = () => {
  const firebase = useFirebase();
  return (
    <>
      {firebase.isLoggedIn ? (
        <Layout className={montserrat.className}>
          <main>
            <div className={styles.navBar}>
              <h2 className={styles.title}>Dashboard</h2>
              <div className={styles.userInfo}>
                <div className={styles.text}>
                  Welcome to the Dashboard! Manage your websites posts, add new
                  ones, edit existing ones, or remove them as needed.
                </div>
              </div>
            </div>
            <Dashboard />
          </main>
        </Layout>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default Home;
