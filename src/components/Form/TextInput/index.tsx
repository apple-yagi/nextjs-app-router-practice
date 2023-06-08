import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const TextInput = ({ className, label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>
      <input
        className={twMerge(
          "block w-full rounded-lg border border-gray-300 bg-gray-100 p-4 focus:border-primary",
          className
        )}
        id={label}
        type="text"
        {...props}
      />
    </div>
  );
};
