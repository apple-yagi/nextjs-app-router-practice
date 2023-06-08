import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Actions = ({ children }: Props) => {
  return <div className="flex justify-end gap-2">{children}</div>;
};
