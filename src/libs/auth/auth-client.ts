import { createAuthClient } from "better-auth/client";
import React from "react";

const authClient = createAuthClient();

export const AuthClientHandler = {
  CredentialsLogInHandler: async (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard"
    });
    if (error) setError(error.message ?? "Log in failed");
  },

  CredentialsSignUpHandler: async (
    name: string,
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/dashboard"
    });
    if (error) setError(error.message ?? "Sign up failed");
  },

  GoogleHandler: async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard"
    });
  },

  GithubHandler: async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard"
    });
  },

  SignOutHandler: async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          if (typeof window !== "undefined") {
            window.location.assign("/login");
          }
        }
      }
    });
  }
};
