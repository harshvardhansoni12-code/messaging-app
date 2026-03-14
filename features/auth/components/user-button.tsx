import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useAuthActions } from "@convex-dev/auth/react";
import toast from "react-hot-toast";
export const UserButton = () => {
  const { signOut } = useAuthActions();
  const router = useRouter();
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
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="">
          <Avatar className="size-10">
            <AvatarImage />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="right" className="">
          <DropdownMenuItem
            onClick={() => {
              router.push("/profile");
            }}
            className="hover:bg-amber-50"
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              router.push("/settings");
            }}
            className="hover:bg-amber-50"
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleSignOut();
            }}
            className="hover:bg-amber-50"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
