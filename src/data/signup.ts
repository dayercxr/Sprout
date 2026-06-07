import { AuthClientHandler } from "@/libs/auth/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const SignupData = {
  title: "Sign Up",
  fields: [
    { label: "Full Name", type: "name", placeholder: "John Wick" },
    { label: "Email", type: "email", placeholder: "your@email.com" },
    { label: "Password", type: "password", placeholder: "•••••••••" }
  ],
  submit: "SIGN UP",
  social: [
    {
      label: "SIGN UP WITH GOOGLE",
      Icon: FcGoogle,
      Fn: AuthClientHandler.GoogleHandler()
    },
    {
      label: "SIGN UP WITH GITHUB",
      Icon: FaGithub,
      Fn: AuthClientHandler.GithubHandler()
    }
  ],
  login: {
    text: "Already have an account?",
    link: "Sign in"
  }
};
