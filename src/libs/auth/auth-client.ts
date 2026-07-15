import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const AuthClientHandler = {
  CredentialsLogInHandler: async (email: string, password: string) => {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard"
    });
  },

  CredentialsSignUpHandler: async (
    name: string,
    email: string,
    password: string
  ) => {
    await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/dashboard"
    });
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
