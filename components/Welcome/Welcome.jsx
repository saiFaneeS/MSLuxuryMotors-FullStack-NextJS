import React, { useEffect, useState } from "react";
import styles from "./welcome.module.css";
import Link from "next/link";
import { East } from "@mui/icons-material";
import FromLeft from "../Animations/FromLeft";
import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className={`${styles.main}`}>
          <div className={styles.left}>
        <FromLeft>
            <p className={styles.smText}>WELCOME TO</p>
            <h1 className={styles.lgText}>
              LUXURY LIMOUSINE CHAUFFEUR SERVICE IN DUBAI
            </h1>
            <p className={styles.desc}>
              Welcome to MS Luxury Motors, where our fleet of luxurious
              limousines stands ready to redefine your concept of premium
              chauffeur service. We specialize in making every moment
              extraordinary. Whether its a special celebration, an important
              event, or simply a desire for elegance, our signature limousines
              are here to elevate your journey into an unforgettable experience.
              Your exceptional ride begins here.
            </p>
            <Link href="/vehicles">
              <button className={styles.cta}>
                OUR FLEET <East />
              </button>
            </Link>
        </FromLeft>
          </div>
          <div className={styles.right}>
            <Image
              src={"/collage/chauufeur.jpg"}
              alt=""
              height="700"
              width="1000"
            />
          </div>
      </div>
    </>
  );
};

export default Welcome;
