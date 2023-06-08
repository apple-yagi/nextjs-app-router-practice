import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Root = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"form">) => {
  return (
    <form className={twMerge("flex flex-col gap-4", className)} {...props}>
      {children}
    </form>
  );
};
