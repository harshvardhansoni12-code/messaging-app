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
import { useCurrentUser } from "@/features/hooks/use-current-user";
import { Loader } from "lucide-react";
export const UserButton = () => {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();
  const router = useRouter();

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground" />;
  }

  if (!data) {
    return null;
  }

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
  const { image, name, email } = data;
  //first letter of name as uppercase as fallback for avatar
  const avatarFallback = name ? name[0].toUpperCase() : "";
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="">
          <Avatar className="size-10">
            <AvatarImage alt={name} src={image} />
            <AvatarFallback className="bg-sky-500 text-white">
              {avatarFallback}
            </AvatarFallback>
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
              router.push("/help");
            }}
            className="hover:bg-amber-50"
          >
            Help
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
