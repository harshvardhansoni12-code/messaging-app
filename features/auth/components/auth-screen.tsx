"use client";
import { useState } from "react";
import { SignInScreen } from "./auth-signin-screen";
import { SignInFlow } from "../types";
import { Button } from "@/components/ui/button";
import { SignUpScreen } from "./auth-signup-screen";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <>
      {/* <Button
        onClick={() => {
          setState("signIn");
        }}
      >
        Sign In
      </Button>
      <Button
        onClick={() => {
          setState("signUp");
        }}
      >
        Sign up
      </Button> */}
      {state === "signIn" ? (
        <div>
          <SignInScreen setState={setState} />
        </div>
      ) : (
        <div>
          <SignUpScreen setState={setState} />
        </div>
      )}
    </>
  );
};
