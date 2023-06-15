import { Err, handleNotAllowed } from "@/server/error";
import { GetTechBlogListReturn, getTechBlogList } from "@/server/tech-blogs";
import { parseAsPositiveInt } from "@/utils/parseAsPositiveInt";
import { parseAsStringOrUndefined } from "@/utils/parseAsStringOrUndefined";

import type { NextApiHandler } from "next";

const handleGet: NextApiHandler<GetTechBlogListReturn> = async (req, res) => {
  const { readingDate, limit } = req.query;

  const result = await getTechBlogList({
    readingDate: parseAsStringOrUndefined(readingDate),
    limit: parseAsPositiveInt(limit),
  });

  res.statusCode = 200;
  res.end(JSON.stringify(result));
};

const handler: NextApiHandler<GetTechBlogListReturn | Err> = async (
  req,
  res
) => {
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    default:
      return handleNotAllowed(res);
  }
};

export default handler;
