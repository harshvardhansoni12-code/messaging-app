"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
export const Modals = () => {
  const workspaceId = useWorkspaceId();
  const { data: workspace, workspacesLoading: workspacesLoading } =
    useGetWorkspace({
      id: workspaceId,
    });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
