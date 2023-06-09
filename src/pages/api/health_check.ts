import { db, techBlogs } from "@/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await db.select().from(techBlogs);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ status: "ok", result }));
}
