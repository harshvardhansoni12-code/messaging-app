import { useMutation } from "convex/react";



import { api } from "../../../convex/_generated/api";

import { useCallback } from "react";

import { Id } from "../../../convex/_generated/dataModel";



//////////////

type RequestType = {name: string};

type ResponseType = { _id: Id<"workspaces">; _creationTime: number; name: string; userIds: Id<"users">; joinCode: string; } | null;



type Options = {

  onSuccess?: (data: ResponseType) => void;

  onError?: () => void;

  onSettled?: () => void;

};



export const useCreateWorkspace = () => {

  const mutation = useMutation(api.workspaces.create);

  const mutate = useCallback(

    async (values: RequestType, options: Options) => {

      try {

        const response = await mutation(values);

        options?.onSuccess?.(response);

      } catch {

        options?.onError?.();

      } finally {

        options?.onSettled?.();

      }

    },

    [mutation],

  );



  return {

    mutate,

  };

};

//2:21:24

