import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styles from "./Navigation.module.css";
import {
  AccountCircle,
  ChatBubble,
  Dashboard,
  FiberManualRecord,
} from "@mui/icons-material";
import Link from "next/link";
import { useFirebase } from "@/context/firebase";

export default function Sidebar() {
  const firebase = useFirebase();
  return (
    <>
      {/* Header */}
      <div className={styles.main}>
        {/* Logo */}
        <Box>
          <Link href="/admin">
            <h3 className={styles.logo}>
              <IconButton color="inherit">
                <Dashboard />
              </IconButton>
              <span>Dashboard</span>
            </h3>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "0.5em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link className={styles.links} href="/admin/messages">
            <IconButton color="inherit">
              <ChatBubble />
            </IconButton>
            <p>Messages</p>
          </Link>
          <Link className={styles.links} href="/admin/profile">
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Account</p>
          </Link>
           {firebase.isLoggedIn ? (
            <div
              className={styles.status}
              style={{ display: "flex", gap: "0.5em", alignItems: "center" }}
            >
              <FiberManualRecord sx={{ color: "limegreen" }} /> <p>Logged In</p>
            </div>
          ) : (
            <div
              className={styles.status}
              style={{ display: "flex", gap: "0.5em", alignItems: "center" }}
            >
              <FiberManualRecord sx={{ color: "crimson" }} />
              <p>Logged Out</p>
            </div>
          )} 
        </Box>
      </div>
    </>
  );
}
