import React from "react";
import Layout from "./Layout";
import { Box } from "@mui/material";
import styles from "../styles/terms.module.css";

const TermsAndConditions = () => {
  return (
    <Layout>
      <Box className={styles.main} sx={{ margin: "4em 12%" }}>
        <h2 className={styles.title}>Privacy & Policy</h2>

        <h3 className={styles.subTitle}>
          What personal data we collect and why we collect it
        </h3>
        <p className={styles.paragraph}>
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection. An anonymized string created from
          your email address (also called a hash) may be provided to CCLIMO to
          see if you are using it. The CCLIMO privacy policy is available here:
          https:cclimo.ae/privacy/. After approval of your comment, your profile
          picture is visible to the public in the context of your comment.
        </p>
        <h3 className={styles.subTitle}>Media</h3>
        <p className={styles.paragraph}>
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>
        <h3 className={styles.subTitle}>Cookies</h3>
        <p className={styles.paragraph}>
          If you leave a comment on our site you may opt-in to saving your name,
          email address, and website in cookies. These are for your convenience
          so that you do not have to fill in your details again when you leave
          another comment. These cookies will last for one year. If you visit
          our login page, we will set a temporary cookie to determine if your
          browser accepts cookies. This cookie contains no personal data and is
          discarded when you close your browser. When you log in, we will also
          set up several cookies to save your login information and your screen
          display choices. Login cookies last for two days, and screen options
          cookies last for a year. If you select “Remember Me”, your login will
          persist for two weeks. If you log out of your account, the login
          cookies will be removed. If you edit or publish an article, an
          additional cookie will be saved in your browser. This cookie includes
          no personal data and simply indicates the post ID of the article you
          just edited. It expires after 1 day.
        </p>
        <h3 className={styles.subTitle}>
          Embedded content from other websites
        </h3>
        <p className={styles.paragraph}>
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.). Embedded content from other websites behaves
          in the exact same way as if the visitor has visited the other website.
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracking your interaction with the
          embedded content if you have an account and are logged in to that
          website.
        </p>
        <h3 className={styles.subTitle}>PAYMENT</h3>
        <p className={styles.paragraph}>
          CCLIMO.AE OFFERS TWO PAYMENT OPTIONS: CUSTOMER PAYS A DEPOSIT DURING
          THE ONLINE RESERVATION PROCESS, THE REMAINDER WILL BE PAID TO THE
          DRIVER FULL PAYMENT DURING THE ONLINE RESERVATION PROCESS SOME
          DESTINATIONS MAY REQUIRE FULL PAYMENT IN ADVANCE.
        </p>
      </Box>
    </Layout>
  );
};

export default TermsAndConditions;
