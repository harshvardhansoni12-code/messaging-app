"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useRouter } from "next/navigation";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { mutate } = useCreateWorkspace();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const data = await mutate(
        { name: "Workspace 1" },
        {
          onSuccess: (data) => {
            setOpen(false);
            router.push(`/workspace/${data}`);
          },
          onError: (error) => {
            // error handling
          },
          onSettled: () => {
            // cleanup
          },
        },
      );
    } catch {
    } finally {
    }
  };
  //
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>Add a worspace</DialogHeader>
        <DialogTitle>Enter your workspace name</DialogTitle>
        <form
          className="space-y-4"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <input
            value=""
            disabled={false}
            onChange={() => {}}
            type="text"
            className="w-full rounded-md p-2 border-2"
            placeholder="Workspace name e.g. 'friends', 'family', 'work', etc."
            required
            autoFocus
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
//
