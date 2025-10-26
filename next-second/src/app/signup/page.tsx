"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    console.log(username, password, email);

    try {
      await axios.post("/api/signup", {
        username,
        password,
        email,
      });
    } catch (error) {
      console.log(error);
    }

    router.push("/login");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center">
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input name="email" type="email" placeholder="email" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
