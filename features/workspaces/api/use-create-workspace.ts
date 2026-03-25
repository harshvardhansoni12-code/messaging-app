import { useMutation } from "convex/react";
import { useCallback, useState } from "react";

import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

//////////////

type RequestType = { name: string };
type ResponseType = {
  _id: Id<"workspaces">;
  _creationTime: number;
  name: string;
  userIds: Id<"users">[];
  joinCode: string;
} | null;

type Options = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
};

export const useCreateWorkspace = () => {
  const mutation = useMutation(api.workspaces.create);

  const [data, setData] = useState<ResponseType>(null);
  const [error, setError] = useState<unknown>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  const mutate = useCallback(
    async (values: RequestType, options: Options = {}) => {
      setIsPending(true);
      setIsSuccess(false);
      setIsError(false);
      setIsSettled(false);

      try {
        const response = await mutation(values);
        setData(response);
        setIsSuccess(true);
        options.onSuccess?.(response);
      } catch (err) {
        setError(err);
        setIsError(true);
        options.onError?.(err);
      } finally {
        setIsPending(false);
        setIsSettled(true);
        options.onSettled?.();
      }
    },
    [mutation],
  );

  return {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError,
    isSettled,
  };
};

//2:21:24
