"use client";

import { useState } from "react";
import { AuthClientHandler } from "@/libs/auth/auth-client";
import {
  Box,
  Button,
  Divider,
  FormLabel,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  IconButton
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { ThemeToggle } from "@/components/general/themeToggle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px"
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4)
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))"
    })
  }
}));

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    AuthClientHandler.CredentialsLogInHandler(email, password, setError);
  };

  return (
    <SignUpContainer
      direction='column'
      sx={{ justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton href='/' sx={{ border: 1 }}>
          <ArrowBack />
        </IconButton>
        <ThemeToggle />
      </Box>
      <Card variant='outlined'>
        <Typography
          component='h1'
          variant='h4'
          sx={{
            width: "100%",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            fontWeight: 600,
            textAlign: "center"
          }}
        >
          Log In
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <TextField
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='your@email.com'
              name='email'
              autoComplete='email'
              variant='outlined'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <TextField
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name='password'
              placeholder='••••••'
              type='password'
              autoComplete='new-password'
              variant='outlined'
            />
          </FormControl>
          <Button type='submit' fullWidth variant='contained'>
            Sign up
          </Button>
        </Box>
        <Divider>
          <Typography sx={{ color: "text.secondary" }}>or</Typography>
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant='outlined'
            onClick={() => AuthClientHandler.GoogleHandler()}
            startIcon={<FcGoogle />}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant='outlined'
            onClick={() => AuthClientHandler.GithubHandler()}
            startIcon={<FaGithub color='primary' />}
          >
            Sign in with Github
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link href='/signup' variant='body2' sx={{ alignSelf: "center" }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
