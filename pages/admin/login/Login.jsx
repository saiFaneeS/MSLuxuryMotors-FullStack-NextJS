import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import styles from "./Login.module.css";
import Layout from "../Layout";
import { useFirebase } from "@/context/firebase";
import Link from "next/link";
import { useNotification } from "@/context/notificationContext";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const firebase = useFirebase();
  const notification = useNotification();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.loginUserWithEmailAndPassword(email, password);
      router.push("/admin");
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Layout className={styles.main}>
      <Head>
        <title>Login User - Admin Dashboard</title>
      </Head>

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
            Login to Admin
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
              Login
            </Button>
          </Box>
          {firebase.isLoggedIn && (
            <Link href="/admin/signup">Create Account</Link>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
