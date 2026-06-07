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
import { SignupData } from "@/data/signup";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState<string>("");

  const { title, fields, social, submit, login } = SignupData;

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    AuthClientHandler.CredentialsSignUpHandler(
      formData.name,
      formData.email,
      formData.password,
      setError
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
              onClick={() => Fn}
              startIcon={<Icon />}
            >
              {label}
            </Button>
          ))}
          <Typography sx={{ textAlign: "center" }}>
            {login.text}{" "}
            <Link href='/login' variant='body2' sx={{ alignSelf: "center" }}>
              {login.link}
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
