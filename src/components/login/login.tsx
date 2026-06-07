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
  IconButton
} from "@mui/material";
import { Card } from "@/components/general/auth/card";
import { SignUpContainer } from "@/components/general/auth/container";
import { ThemeToggle } from "@/components/general/themeToggle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { LoginData } from "@/data/login";

export default function Login(props: { disableCustomTheme?: boolean }) {
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { title, fields, social, submit, signup } = LoginData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    AuthClientHandler.CredentialsLogInHandler(
      formData.email,
      formData.password,
      setError
    );
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
          {title}
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {fields.map(({ label, type, placeholder }) => (
            <FormControl key={label}>
              <FormLabel htmlFor='name'>{label}</FormLabel>
              <TextField
                autoComplete={type}
                name={type}
                required
                fullWidth
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </FormControl>
          ))}
          <Button type='submit' fullWidth variant='contained'>
            {submit}
          </Button>
        </Box>
        <Divider>
          <Typography sx={{ color: "text.secondary" }}>or</Typography>
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {social.map(({ label, Icon, Fn }) => (
            <Button
              key={label}
              fullWidth
              variant='outlined'
              onClick={Fn}
              startIcon={<Icon />}
            >
              {label}
            </Button>
          ))}
          <Typography sx={{ textAlign: "center" }}>
            {signup.text}{" "}
            <Link href='/signup' variant='body2' sx={{ alignSelf: "center" }}>
              {signup.link}
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
