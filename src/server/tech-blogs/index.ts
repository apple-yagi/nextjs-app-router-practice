import { desc, sql } from "drizzle-orm";

import { db, techBlogs } from "@/db";

type Params = {
  readingDate?: string;
  limit?: number;
};

export const getTechBlogList = async ({ readingDate, limit = 20 }: Params) => {
  return await db
    .select()
    .from(techBlogs)
    .where(
      readingDate ? sql`${techBlogs.readingDate} = ${readingDate}` : sql`1 = 1`
    )
    .orderBy(desc(techBlogs.createdAt))
    .limit(limit);
};

export type GetTechBlogListReturn = Awaited<ReturnType<typeof getTechBlogList>>;
