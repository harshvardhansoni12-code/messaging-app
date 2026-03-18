"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";

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
        <DialogDescription>
          This is the description of the dialog. You can add more details here.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
