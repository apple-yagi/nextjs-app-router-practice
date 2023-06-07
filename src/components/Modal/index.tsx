import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

type Props = {
  trigger: ReactNode;
  title: string;
  description: ReactNode;
};

export const Modal = ({ trigger, title, description }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[calc(100vw_-_32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 shadow-lg">
          <Dialog.Title className="mb-2 text-lg font-semibold text-gray-500">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-4 text-sm text-gray-500">
            {description}
          </Dialog.Description>
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
