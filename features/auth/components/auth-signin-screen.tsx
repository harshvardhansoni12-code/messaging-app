import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInScreen = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleProviderSignIn = (value: "github" | "google") => {
    signIn(value);
  };
  return (
    <>
      <Card className="w-full h-full ">
        <CardHeader className="flex justify-center items-center text-xl">
          <CardTitle>Login to continue</CardTitle>
        </CardHeader>
        <CardDescription className="flex justify-center items-center text-xl">
          Use your email or another services
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5 p-3.5">
            <Input
              placeholder="email"
              type="email"
              value={email}
              disabled={false}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <Input
              placeholder="password"
              type="password"
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <Button type="submit" className="w-full" size="lg" disabled={false}>
              Login
            </Button>
          </form>
          <Separator />
          <div className="flex flex-col gap-y-2.5 m-2.5">
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FcGoogle className="absolute left-3 size-6" />
              Sign in with Google
            </Button>
            <Button
              disabled={false}
              onClick={() => {
                handleProviderSignIn("github");
              }}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className="absolute left-3 size-6" />
              Sign in with Github
            </Button>
            <Separator />
          </div>
          <p className="flex justify-center items-center">
            Don&apos;t have an account?
            <span
              onClick={() => setState("signUp")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};
//22:00
//28:00
