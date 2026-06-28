"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { AuthClientHandler } from "@/libs/auth/auth-client";
import { signupSchema, SignupFormValues } from "@/libs/auth/schema";
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
  const [submitError, setSubmitError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" }
  });

  const { title, fields, social, submit, login } = SignupData;

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setSubmitError("");
      await AuthClientHandler.CredentialsSignUpHandler(
        data.name,
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
                name={name as keyof SignupFormValues}
                control={control}
                rules={rules}
                render={({ field }) => {
                  const fieldName = name as keyof SignupFormValues;
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
          <Button
            disabled={isSubmitting}
            type='submit'
            fullWidth
            variant='contained'
          >
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
