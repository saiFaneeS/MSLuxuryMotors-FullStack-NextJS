import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import { useFirebase } from "@/context/firebase";
import { MdCall } from "react-icons/md";
import { Button } from "@mui/material";
import { Call, CallOutlined } from "@mui/icons-material";
import Link from "next/link";

const Card = ({ carName, perDay, perMonth, description, imageUrl }) => {
  const [url, setUrl] = useState(null);

  const firebase = useFirebase();

  useEffect(() => {
    try {
      firebase.getImageUrl(imageUrl).then((url) => setUrl(url));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          {url ? (
            <Image
              width="500"
              height="500"
              quality="20"
              src={url}
              alt={carName}
            />
          ) : (
            <>
              <div className={styles.imgAlt}></div>
            </>
          )}
        </div>
        <h3 className={styles.cardTitle}>{carName}</h3>
        {perDay && perMonth ? (
          <div className={styles.priceTag}>
            <p>
              <span>AED {perDay}</span> / Hour
            </p>
            <p>
              <span>AED {perMonth}</span> / Day
            </p>
          </div>
        ) : (
          <>
            <div className={styles.pricesAlt}></div>
            <div className={styles.pricesAlt}></div>
          </>
        )}
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.btns}>
          {carName ? (
            <>
              <Link href="tel:+0123456789">
                <Button variant="contained" className={styles.cardCta}>
                  <CallOutlined />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="contained" className={styles.cardCta}>
                  Book This Car
                </Button>
              </Link>
            </>
          ) : (
            <>
              <div className={styles.cardCtaAlt}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
