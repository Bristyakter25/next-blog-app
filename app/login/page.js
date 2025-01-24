"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginLink className="btn btn-primary text-white">Login</LoginLink>
    </div>
  );
}
