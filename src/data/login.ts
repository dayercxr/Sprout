import { AuthClientHandler } from "@/libs/auth/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const LoginData = {
  title: "Log In",
  fields: [
    { label: "Email", type: "email", placeholder: "your@email.com" },
    { label: "Password", type: "password", placeholder: "•••••••••" }
  ],
  social: [
    {
      label: "SIGN IN WITH GOOGLE",
      Icon: FcGoogle,
      Fn: AuthClientHandler.GoogleHandler()
    },
    {
      label: "SIGN IN WITH GITHUB",
      Icon: FaGithub,
      Fn: AuthClientHandler.GithubHandler()
    }
  ],
  submit: "SIGN IN",
  signup: {
    text: "Don't have an account?",
    link: "Sign up"
  }
};
