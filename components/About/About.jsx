import React from "react";
import styles from "./about.module.css";
import { TbMoneybag } from "react-icons/tb";
import { VscVerified } from "react-icons/vsc";
import { BsPhone } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import Reveal from "../Animations/FromBottom";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.panel1}>
        <h2>At Modern Standard Luxury Motors,</h2>
        <p>
          What We Do at MS Luxury Motors At MS Luxury Motors, we specialize in
          delivering top-tier chauffeur services that combine opulence with
          efficiency. Our primary mission is to redefine luxury transportation,
          ensuring that every journey with us is marked by seamless comfort and
          elegance. From the moment you step into one of our premium vehicles,
          you'll experience a level of service that sets a new standard for the
          industry. It's not just transportation; it's a journey tailored to
          your desires, characterized by attention to detail and dedication to
          excellence.
        </p>
      </div>
      <Reveal>
        <div className={styles.panel2}>
          <div className={styles.item}>
            <h3>
              <TbMoneybag /> Affordibility
            </h3>
            <p>
              We believe in making luxury accessible without compromising
              quality. You can experience the lavishness of our services without
              exceeding your budget.
            </p>
          </div>
          <div className={styles.item}>
            <h3>
              <VscVerified /> Professional Drivers
            </h3>
            <p>
              Our chauffeurs are not just drivers; they are seasoned
              professionals devoted to your safety and comfort. With their
              experience and commitment to courtesy, you'll always feel in good
              hands
            </p>
          </div>
          <div className={styles.item}>
            <h3>
              <BsLightningCharge /> Easy Booking
            </h3>
            <p>
              Convenience is paramount. Our booking process is designed for
              simplicity, allowing you to reserve your premium ride
              effortlessly, from selecting your vehicle to specifying your
              preferences.
            </p>
          </div>
          <div className={styles.item}>
            <h3>
              <VscVerified /> Professional Drivers
            </h3>
            <p>
              Our chauffeurs are not just drivers; they are seasoned
              professionals devoted to your safety and comfort. With their
              experience and commitment to courtesy, you'll always feel in good
              hands
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
