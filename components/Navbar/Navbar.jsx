import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Close,
  ContactPage,
  Home,
  Info,
  MotionPhotosOffRounded,
  TimeToLeave,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(sidebar === true ? false : true);
    console.log(sidebar);
  };

  return (
    <div className={styles.main}>
      <div className={styles.sidebar} style={{ top: sidebar ? "0" : "-150%" }}>
        <ul>
          <li onClick={toggleSidebar} className={styles.close}>
            <Close />
          </li>
          <li className={styles.link}>
            <Link href="/">
              <Home /> Home
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/vehicles">
              <TimeToLeave /> Our Fleet
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <Info /> About Us
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact">
              <ContactPage /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <h3 className={styles.logo}>
            <MotionPhotosOffRounded />
            MSLuxuryMotors
          </h3>
        </Link>
        <ul className={styles.navlinks}>
          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link href="/vehicles">Fleet</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">Our Company</Link>
          </li>
          <Link href="/contact">
            <Button
              variant="contained"
              sx={{
                fontSize: "1em",
                padding: "0.2em 1.5em",
                backgroundColor: "var(--brandColor)",
                textTransform: "capitalize",
                borderRadius: "2em",
              }}
              // className={styles.contactBtn}
            >
              Contact
            </Button>
          </Link>
        </ul>
        <span onClick={toggleSidebar} className={styles.menuIcon}>
          <AiOutlineMenu />
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
