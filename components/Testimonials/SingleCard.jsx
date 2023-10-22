import React from "react";
import styles from "./Testimonials.module.css";
import { SplideSlide } from "@splidejs/react-splide";
import { FormatQuote } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const SingleCard = () => {
  return (
    <div className={styles.item}>
      <p className={styles.comment}>
        I was amazed by the quality of service provided. The chauffeur was
        incredibly professional and courteous. The limousine was immaculate and
        the overall experience was truly memorable. I highly recommend their
        services to anyone looking for a luxurious and comfortable ride.
      </p>
      <div className={styles.quoteIcon}>
        <FormatQuote />
      </div>
      <div className={styles.wrapper}>
        <Avatar
          sx={{
            position: "absolute",
            top: "-2em",
            left: "50%",
            transform: "translate(-50%, 0%)",
            width: "4em",
            height: " 4em",
            backgroundColor: "#eee",
            borderRadius: "50%",
            border: "2px solid #fff",
          }}
        />
        <h3>John Doe</h3>
      </div>
    </div>
  );
};

export default SingleCard;
