"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "../../../hooks/use-workspace-id";
const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();

  const { data } = useGetWorkspace({ id: workspaceId });

  return (
    <div>
      <div>data: {JSON.stringify(data)}</div>ID : {workspaceId}
    </div>
  );
};
export default WorkspaceIdPage;
//2:51:00
