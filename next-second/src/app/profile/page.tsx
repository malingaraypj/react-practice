"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    try {
      const response = await axios.get("/api/logout");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/login");
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1>Profile Page</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleOnClick}
      >
        logout
      </button>
    </div>
  );
};

export default ProfilePage;
