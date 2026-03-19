"use client";

import { useParams } from "next/navigation";
import { useWorkspaceId } from "../../../hooks/use-workspace-id";
const WorkspaceIdPage = async () => {
  const workspaceId = useWorkspaceId();

  return <div>ID : {workspaceId}</div>;
};
export default WorkspaceIdPage;
//2:51:00
