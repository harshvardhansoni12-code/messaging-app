"use client";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { UserButton } from "@/features/auth/components/user-button";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data, workspaceLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal();
  const router = useRouter();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);
  useEffect(() => {
    if (workspaceLoading) return;
    if (!open) {
      if (!workspaceId) {
        setOpen(true);
        toast.error("No workspace found. Create one.");
      } else {
        toast.success("welcome");
        router.push(`/workspace/${workspaceId}`);
      }
    }
  }, [workspaceLoading, workspaceId, open, setOpen]);
  //
  return (
    <>
      <div className="h-20px w-full flex">
        <div className="md:h-auto md:w-90">this is home page</div>
        <div>
          <UserButton />
        </div>
      </div>
    </>
  );
}
