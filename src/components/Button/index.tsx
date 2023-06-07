import { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center rounded px-4 py-2 text-base",
  variants: {
    color: {
      primary:
        "border border-blue-500 bg-blue-500 text-white hover:border-blue-700 hover:bg-blue-700",
      secondary: "border border-gray-500 bg-white text-black hover:bg-gray-300",
      danger:
        "border border-red-500 bg-red-500 text-white hover:border-red-700 hover:bg-red-700",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

export const Button = ({
  children,
  role = "button",
  variants,
  ...props
}: ComponentPropsWithoutRef<"button"> & { variants?: ButtonVariants }) => {
  return (
    <button className={button(variants)} role={role} {...props}>
      {children}
    </button>
  );
};
