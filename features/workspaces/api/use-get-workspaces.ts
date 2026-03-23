import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.get, {});
  const workspaceLoading = data === undefined;
  return { data, workspaceLoading };
};
