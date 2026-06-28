"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AuthClientHandler } from "@/libs/auth/auth-client";
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
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
import { LoginTypes } from "@/types";

export default function Login(props: { disableCustomTheme?: boolean }) {
  const [submitError, setSubmitError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginTypes>({
    defaultValues: { email: "", password: "" }
  });

  const { title, fields, social, submit, signup } = LoginData;

  const onSubmit = async (data: LoginTypes) => {
    try {
      setSubmitError("");
      await AuthClientHandler.CredentialsLogInHandler(
        data.email,
        data.password
      );
    } catch (err) {
      setSubmitError("Invalid username or password.");
      return submitError;
    }
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
        {submitError && <Alert severity='error'>{submitError}</Alert>}
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {fields.map(({ name, label, type, autoComplete, rules }) => (
            <FormControl key={name}>
              <FormLabel htmlFor='name' sx={{ marginBottom: 1 }}>
                {label}
              </FormLabel>
              <Controller
                key={name}
                name={name as keyof LoginTypes}
                control={control}
                rules={rules}
                render={({ field }) => {
                  const fieldName = name as keyof LoginTypes;
                  return (
                    <TextField
                      {...field}
                      label={label}
                      type={type}
                      autoComplete={autoComplete}
                      error={!!errors[fieldName]}
                      helperText={
                        errors[fieldName]?.message as unknown as string
                      }
                    />
                  );
                }}
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
