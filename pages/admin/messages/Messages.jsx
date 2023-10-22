import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import styles from "./Messages.module.css";
import Message from "@/components/admin/Message/Message";
import { useFirebase } from "@/context/firebase";
import { Refresh } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useNotification } from "@/context/notificationContext";
import Profile from "../profile";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const firebase = useFirebase();
  const notification = useNotification();

  const handleRefresh = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  useEffect(() => {
    try {
      firebase.getAllMessages().then((messages) => setMessages(messages.docs));
    } catch (err) {
      console.log(err);
    }
  }, [handleRefresh]);

  return (
    <>
      {firebase.isLoggedIn ? (
        <Layout>
          <main className={styles.main}>
            <div className={styles.navBar}>
              <h2 className={styles.title}>Messages</h2>
              <div className={styles.userInfo}>
                <p className={styles.text}>
                  View and manage user messages here. This is your central hub
                  for communication with your users. You can read and delete
                  messages as needed.
                </p>
              </div>
            </div>
            <Box width={"100%"} textAlign={"right"} marginBottom={"1em"}>
              <IconButton aria-label="refresh" onClick={handleRefresh}>
                <Refresh />
              </IconButton>
            </Box>
            {messages.length > 0 ? (
              messages.map((message) => {
                return (
                  <Message
                    key={message.id}
                    msgId={message.id}
                    {...message.data()}
                    handleRefresh={handleRefresh}
                  />
                );
              })
            ) : (
              <Box sx={{ textAlign: "center" }}>No Messages Yet.</Box>
            )}
          </main>
        </Layout>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default Messages;
