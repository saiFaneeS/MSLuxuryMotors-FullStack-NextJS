import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import styles from "./globalNav.module.css";

const GlobalNav = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+9203183886011";
    const message = `Hello! I am interested in booking a Limousine Service.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  
  return (
    <div className={styles.main}>
      <div className={styles.contactInfo}>
        <p>
          <Link href="tel:+920123456789">
            <IoIosCall />
            +92 0123456789
          </Link>
        </p>
        <p>
          <Link href="/">
            <IoMdMail />
            msluxurymotors@gmail.com
          </Link>
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
        <Link href="" onClick={handleWhatsAppRedirect}>
          <BsWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default GlobalNav;
