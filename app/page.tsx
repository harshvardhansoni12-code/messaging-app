import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { AuthScreen } from "@/features/auth/components/auth-screen";
export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-90"></div>
      </div>
    </>
  );
}
