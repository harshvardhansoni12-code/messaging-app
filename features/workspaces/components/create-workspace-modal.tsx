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

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>Add a worspace</DialogHeader>
        <DialogTitle>Enter your workspace name</DialogTitle>
        <form className="space-y-4">
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
