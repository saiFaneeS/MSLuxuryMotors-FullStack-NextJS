import React from "react";
import styles from ".//hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import FromBottom from "../Animations/FromBottom"

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.col1}>
        <FromBottom>

        <h1 className={styles.title}>
          HIRE AN ULTIMATE <span>MOTOR EXPERIENCE</span>
        </h1>
        </FromBottom>
        <FromBottom>

        <p className={styles.desc}>
          Welcome to MS Luxury Motors, where opulence meets unparalleled
          service. Our fleet of exquisite limousines is ready to transport you
          in style, making every moment memorable.
        </p>
        </FromBottom>
        <FromBottom>

        <Link href="/vehicles">
          <Button variant="contained" className={styles.cta}>BOOK NOW</Button>
        </Link>
        </FromBottom>
        <div className={styles.heroImgContainer}>
          <Image
            className={styles.heroImg}
            src={"/hero/audi.png"}
            alt={""}
            height="700"
            width="700"
          />
        </div>
      </div>
      <div className={styles.col2}>
        <div className={`${styles.panel} ${styles.panel1}`}></div>
        <div className={`${styles.panel} ${styles.panel2}`}></div>
        <div className={`${styles.panel} ${styles.panel3}`}></div>
      </div>
    </div>
  );
};

export default Hero;
