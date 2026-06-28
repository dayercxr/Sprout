import { AuthClientHandler } from "@/libs/auth/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const SignupData = {
  title: "Sign Up",
  fields: [
    {
      name: "name",
      label: "Full Name",
      autoComplete: "name",
      type: "name",
      rules: {
        required: "Full name is required",
        minLength: { value: 3, message: "At least 3 characters" }
      }
    },
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
      autoComplete: "new-password",
      type: "password",
      rules: {
        required: "Password is required",
        minLength: { value: 8, message: "At least 8 characters" }
      }
    }
  ],
  submit: "SIGN UP",
  social: [
    {
      label: "SIGN UP WITH GOOGLE",
      Icon: FcGoogle,
      Fn: () => AuthClientHandler.GoogleHandler()
    },
    {
      label: "SIGN UP WITH GITHUB",
      Icon: FaGithub,
      Fn: () => AuthClientHandler.GithubHandler()
    }
  ],
  login: {
    text: "Already have an account?",
    link: "Sign in"
  }
};
