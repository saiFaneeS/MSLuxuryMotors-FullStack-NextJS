import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import styles from "./globalNav.module.css";

const GlobalNav = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contactInfo}>
        <p>
          <IoIosCall /> <Link href="tel:0123456789">0123456789</Link>
        </p>
        <p>
          <IoMdMail /> <Link href="/">msluxurymotors@gmail.com</Link>
        </p>
      </div>
      <div className={styles.socials}>
        <Link
          target="_blank"
          href="https://www.instagram.com/saifullah_anees/?next=%2F"
        >
          <BsInstagram />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/saifizance">
          <BsFacebook />
        </Link>
        <BsWhatsapp />
      </div>
    </div>
  );
};

export default GlobalNav;
