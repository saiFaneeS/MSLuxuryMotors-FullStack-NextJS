import React from "react";
import styles from ".//footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.columns}>
        <div className={styles.col1}>
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
          <div className={styles.contactInfo}>
            <a href="tel:0123456789">
              <p>
                <IoIosCall /> 0123456789
              </p>
            </a>
            <a>
              <p>
                <IoMdMail /> msluxurymotors@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.subcol1}>
            <Link href="/about">Our Company</Link>
          </div>
          <div className={styles.subcol2}>
            <Link href="/vehicles">Vehicles</Link>
          </div>
          <div className={styles.subcol3}>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={styles.logo}>
            <h1>Modern Standards</h1>
            <p>Luxury Motors</p>
          </div>
          {/* <p className={styles.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            veritatis tenetur minus impedit ducimus eveniet fuga voluptatum
            voluptate tempora ut?
          </p> */}
        </div>
      </div>

      <div className={styles.footerLinks}>
        <Link href="/terms-conditions">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy & Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
