import React, { useEffect } from "react";
import Layout from "../Layout";
import styles from "./Profile.module.css";
import { useFirebase } from "@/context/firebase";
import { Avatar, Box, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useNotification } from "@/context/notificationContext";
import Head from "next/head";

const Messages = () => {
  const firebase = useFirebase();
  const notification = useNotification();

  const logout = () => {
    signOut(firebase.firebaseAuth)
      .then(() => {
        console.log("logged out");
        notification.success("Logged Out");
      })
      .catch((error) => {
        console.error(error);
        // notification.error("");
      });
  };

  return (
    <Layout>
      <Head>
        <title>User Profile - Admin Dashboard</title>
      </Head>
      <main className={styles.main}>
        <Avatar
          sx={{
            height: "5em",
            width: "5em",
            bgcolor: "primary.main",
            margin: "0 auto",
          }}
        />
        <div>
          <p style={{ margin: "1em " }}>Signed in as,</p>
          <p className={styles.field}>
            {firebase.user ? firebase.user?.email : "No User"}
          </p>
          <Box margin={"2em auto"} width={"fit-content"}>
            <p style={{ margin: "1em", color: "#666" }}>
              {firebase.user
                ? "Logout to Signin as a different User."
                : "Please Signin to proceed."}
            </p>
            {firebase.user && (
              <Link href={"/admin/signup"}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "2px",
                    marginBottom: "1em",
                    maxWidth: "23em",
                  }}
                >
                  Create Account
                </Button>
              </Link>
            )}
            {firebase.isLoggedIn ? (
              <Button
                onClick={logout}
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: "2px",
                  marginBottom: "1em",
                  maxWidth: "23em",
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href={"/admin/login"}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ borderRadius: "2px" }}
                    className={styles.signin}
                  >
                    Signin
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </div>
      </main>
    </Layout>
  );
};

export default Messages;
