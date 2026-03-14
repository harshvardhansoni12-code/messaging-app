"use client";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

import { UserButton } from "@/features/auth/components/user-button";
export default function Home() {
  return (
    <>
      <div className="h-20px w-full flex">
        <div className="md:h-auto md:w-90">this is home page</div>

        <UserButton />
      </div>
    </>
  );
}
