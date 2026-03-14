import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserButton = () => {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="">
          <Avatar className="">
            <AvatarImage />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="right" className="">
          <DropdownMenuItem className="hover:bg-amber-50">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-amber-50">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-amber-50">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
