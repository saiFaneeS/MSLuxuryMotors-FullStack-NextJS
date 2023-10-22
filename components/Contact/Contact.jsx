"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { useFirebase } from "@/context/firebase";
import { Button } from "@mui/material";
import { useNotification } from "@/context/notificationContext";
import FromBottom from "../Animations/FromBottom";
import FadeIn from "../Animations/FadeIn";
import FadeIn2 from "../Animations/FadeIn2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const firebase = useFirebase();
  const notification = useNotification();

  const handleSendMessage = (e) => {
    e.preventDefault();
    try {
      firebase.sendMessage(name, email, phone, message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      notification.success("Your Message has been sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleBar}>
        <FadeIn>
          <h2>ARE YOU READY?</h2>
        </FadeIn>
        <FadeIn2>
          <h2>LETS CONNECT.</h2>
        </FadeIn2>
      </div>
      <FadeIn2>
        <p className={styles.desc}>
          Get in touch with us for any assistance. We are here to help you.
        </p>
      </FadeIn2>
      <div className={styles.columns}>
        <div className={styles.leftCol}>
          <div className={styles.image}>
            <Image
              src="/collage/limo1.jpg"
              height="1000"
              width="1000"
              alt="..."
            />
          </div>
        </div>
        <div className={styles.rightCol}>
          <FromBottom>
            <h2 className={styles.contact}>Contact Us</h2>
            <form>
              <div className={styles.firstI}>
                <label>Your Name*</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.secI}>
                <label>Your Email*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.thirdI}>
                <label>Phone*</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.fourthI}>
                <label>Message*</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <Button
                variant="contained"
                onClick={handleSendMessage}
                className={styles.submit}
              >
                Send Message
                <AiOutlineSend />
              </Button>
            </form>
          </FromBottom>
        </div>
      </div>
    </div>
  );
};

export default Contact;
