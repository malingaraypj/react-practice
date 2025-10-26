"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const email = formData.get("email");

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }

    router.push("/");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center">
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
