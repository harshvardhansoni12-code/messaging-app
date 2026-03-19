"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useRouter } from "next/navigation";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState("");
  const { mutate, data, error, isError, isPending, isSuccess, isSettled } =
    useCreateWorkspace();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault;
    mutate(
      { name },
      {
        onSuccess(id) {
          router.push(`/workspace/${id}`);
          handleClose();
        },
      },
    );
  };
  //
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>Add a worspace</DialogHeader>
        <DialogTitle>Enter your workspace name</DialogTitle>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            value={name}
            disabled={isPending}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="w-full rounded-md p-2 border-2"
            placeholder="Workspace name e.g. 'friends', 'family', 'work', etc."
            required
            autoFocus
          />
          <div className="flex justify-end">
            <Button disabled={isPending}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
//
