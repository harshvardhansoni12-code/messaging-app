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
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpScreen = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState(false);
  const { signIn } = useAuthActions();

  // credentials handler
  const onPasswordSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setPending(false);
      return;
    } else {
      try {
        await signIn("password", { email, password, flow: "signUp" });
        toast.success("Welcome back!");
      } catch (e) {
        toast.error("Something went wrong");
      } finally {
        setPending(false);
      }
    }
  };

  //sign up handler
  const handleProviderSignUp = async (value: "github" | "google") => {
    try {
      setPending(true);
      await signIn(value);
      toast.success("Welcome back!");
    } catch (e) {
      toast.error("Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Card className="w-full h-full ">
        <CardHeader className="flex justify-center items-center text-xl">
          <CardTitle>Sign up to continue</CardTitle>
        </CardHeader>
        <CardDescription className="flex justify-center items-center text-xl">
          Use your email or another services
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5 p-3.5" onSubmit={onPasswordSignUp}>
            <Input
              placeholder="email"
              type="email"
              disabled={pending}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <Input
              placeholder="password"
              type="password"
              disabled={pending}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <br />
            <Input
              placeholder="Confirm password"
              type="password"
              disabled={pending}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            />
            <br />
            <Button type="submit" className="w-full" size="lg" disabled={false}>
              Sign Up
            </Button>
          </form>
          <Separator />
          <div className="flex flex-col gap-y-2.5 m-2.5">
            <Button
              disabled={pending}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FcGoogle className="absolute left-3 size-6" />
              Sign up with Google
            </Button>
            <Button
              disabled={pending}
              onClick={() => {
                handleProviderSignUp("github");
              }}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className="absolute left-3 size-6" />
              Sign up with Github
            </Button>
            <Separator />
          </div>
          <p className="flex justify-center items-center">
            Already have an account?
            <span
              onClick={() => setState("signIn")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

//35:00
//1:30:00
