import { AuthClientHandler } from "@/libs/auth/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const LoginData = {
  title: "Log In",
  fields: [
    {
      name: "email",
      label: "Email",
      autoComplete: "email",
      type: "email",
      rules: {
        required: "Email is required",
        minLength: { value: 3, message: "At least 3 characters" }
      }
    },
    {
      name: "password",
      label: "Password",
      autoComplete: "current-password",
      type: "password",
      rules: {
        required: "Password is required",
        minLength: { value: 8, message: "At least 8 characters" }
      }
    }
  ],
  social: [
    {
      label: "SIGN IN WITH GOOGLE",
      Icon: FcGoogle,
      Fn: () => AuthClientHandler.GoogleHandler()
    },
    {
      label: "SIGN IN WITH GITHUB",
      Icon: FaGithub,
      Fn: () => AuthClientHandler.GithubHandler()
    }
  ],
  submit: "SIGN IN",
  signup: {
    text: "Don't have an account?",
    link: "Sign up"
  }
};
