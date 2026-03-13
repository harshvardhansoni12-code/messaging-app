"use client";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (e) {
      toast.error("Something went wrong");
      return;
    } finally {
      toast.success("You have been logged out.");
    }
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="md:h-auto md:w-90">this is home page</div>
        <Button
          onClick={() => {
            handleSignOut();
          }}
        >
          log out
        </Button>
      </div>
    </>
  );
}
