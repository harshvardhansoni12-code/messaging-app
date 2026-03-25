import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

interface UseGetWorkspaceProps {
  id?: Id<"workspaces">;
}

export const useGetWorkspace = ({ id }: UseGetWorkspaceProps) => {
  const validId = id && id !== "undefined" ? id : undefined;
  const data = useQuery(
    api.workspaces.getById,
    validId ? { id: validId } : "skip",
  );
  const workspacesLoading = data === undefined;
  return { data, workspacesLoading };
};
