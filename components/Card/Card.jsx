import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import { useFirebase } from "@/context/firebase";
import { Button } from "@mui/material";
import { CallOutlined } from "@mui/icons-material";
import Link from "next/link";
import Reveal from "../Animations/FromBottom";

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

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "03183886011";
    const message = `Hello! I am interested in booking this *${carName}*. \nPer Hour: AED ${perDay}, \nPer Day: AED ${perMonth}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <Reveal>
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
        {carName ? (
          <>
            <h3 className={styles.cardTitle}>{carName}</h3>
            <div className={styles.priceTag}>
              <p>
                <span>AED {perDay}</span> / Hour
              </p>
              <p>
                <span>AED {perMonth}</span> / Day
              </p>
            </div>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.btns}>
              <>
                <Link href="tel:+0123456789">
                  <Button
                    variant="contained"
                    sx={[
                      {
                        color: "#fff",
                        backgroundColor: "#333",
                        transition: "0.2s",
                      },
                      {
                        "&:hover": {
                          backgroundColor: "var(--darkerBrandColor)",
                        },
                      },
                    ]}
                  >
                    <CallOutlined />
                  </Button>
                </Link>
                {/* <Link href="/"> */}
                  <Button
                    onClick={handleWhatsAppRedirect}
                    variant="contained"
                    sx={[
                      {
                        color: "#fff",
                        backgroundColor: "#333",
                        transition: "0.2s",
                      },
                      {
                        "&:hover": {
                          backgroundColor: "var(--darkerBrandColor)",
                        },
                      },
                    ]}
                  >
                    Book This Car
                  </Button>
                {/* </Link> */}
              </>
            </div>
          </>
        ) : (
          <div className={styles.alt}>
            <div className={styles.pricesAlt}></div>
            <div className={styles.pricesAlt}></div>
            <div className={styles.cardCtaAlt}></div>
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default Card;
