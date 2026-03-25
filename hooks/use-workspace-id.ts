import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export const useWorkspaceId = (): Id<"workspaces"> | undefined => {
  const params = useParams();
  const workspaceId = params.workspaceId;
  if (!workspaceId || workspaceId === "undefined") {
    return undefined;
  }
  return workspaceId as Id<"workspaces">;
};
