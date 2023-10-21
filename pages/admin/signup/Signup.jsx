"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import styles from "./signup.module.css";
import Layout from "../Layout";
import { useFirebase } from "@/context/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNotification } from "@/context/notificationContext";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const firebase = useFirebase();
  const notification = useNotification();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signupUserWithEmailAndPassword(email, password);
      notification.success("New User Created");
      router.push("/admin");
    } catch (err) {
      return notification.error("Email already exists");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Layout className={styles.main}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 22,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup for Admin
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </Box>
          <Link href="/admin/login">Login</Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
