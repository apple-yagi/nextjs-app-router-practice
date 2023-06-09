"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: ReactNode;
  title: string;
  content: ReactNode;
};

export const Modal = ({
  open,
  onOpenChange,
  trigger,
  title,
  content,
}: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[calc(100vw_-_32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 shadow-lg">
          <Dialog.Title className="mb-2 text-lg font-semibold">
            {title}
          </Dialog.Title>
          <Dialog.Description asChild>{content}</Dialog.Description>
          <Dialog.Close className="absolute right-4 top-4 rounded-full" asChild>
            <button aria-label="閉じる">
              <Cross2Icon color="#6b7280" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
