"use client";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { UserButton } from "@/features/auth/components/user-button";
export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  return (
    <>
      <div className="h-20px w-full flex">
        <div className="md:h-auto md:w-90">this is home page</div>

        <UserButton />
      </div>
    </>
  );
}
