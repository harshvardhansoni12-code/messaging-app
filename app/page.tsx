"use client";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { UserButton } from "@/features/auth/components/user-button";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data, isLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal();
  const router = useRouter();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);
  /* Show toast notification when workspaceId is available */
  useEffect(() => {
    if (isLoading) return;
    if (workspaceId) {
      toast.success(`Workspace created`);
      router.replace(`/workspace/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    } else {
      toast.error("No workspace found");
    }
  }, [isLoading, workspaceId, open, setOpen, router]);
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
