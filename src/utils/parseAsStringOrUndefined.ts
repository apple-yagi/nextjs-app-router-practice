import * as z from "zod";

export const parseAsStringOrUndefined = (q: string | string[] | undefined) => {
  z.string().or(z.undefined()).parse(q);
  return q as string | undefined;
};
