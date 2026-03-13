"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();

  const handleSignOut = () => {
    signOut();
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
