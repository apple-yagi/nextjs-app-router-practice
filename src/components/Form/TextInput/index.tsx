import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  error?: false | null | string;
} & ComponentPropsWithoutRef<"input">;

export const TextInput = ({ className, label, error, ...props }: Props) => {
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
      {error && (
        <span className="text-red-400" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
