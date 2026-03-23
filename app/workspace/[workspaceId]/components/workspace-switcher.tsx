"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspace } from "@/features/workspaces/api/use-create-workspace";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import { Loader } from "lucide-react";
const WorkspaceSwitcher = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();
  const { data: workspace, workspacesLoading: workspacesLoading } =
    useGetWorkspace({
      id: workspaceId,
    });

  const { data: workspaces, workspaceLoading: workspaceLoading } =
    useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#50505a]">
          {workspaceLoading ? (
            <Loader className="size-5 animate-spin shrik-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem className="hover:bg-amber-50">Help</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push(`/workspace/${workspaceId}`);
          }}
          className="
        cursor-pointer
        flex-col
        justify-start
        items-start
        hover:bg-amber-50"
        >
          {workspace?.name}
          <span className="text-xs">Active workspace</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
