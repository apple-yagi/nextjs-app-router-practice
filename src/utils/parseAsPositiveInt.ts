import * as z from "zod";

export function parseAsPositiveInt(q: string | string[] | undefined) {
  const effect = z.number().positive().int();
  const val = Number(q);
  try {
    effect.parse(val);
    return val;
  } catch {
    return undefined;
  }
}
