import { desc, sql } from "drizzle-orm";

import { db, techBlogs } from "@/db";
import { GetTechBlogListReturn } from "@/server/tech-blogs";
import { getToday } from "@/utils/getToday";

export const getTodayRegisteredTechBlogList =
  async (): Promise<GetTechBlogListReturn> => {
    // API経由のデータフェッチ
    // return await (
    //   await fetch(`${process.env.APP_URL}/api/tech_blogs?date=${getToday()}`, {
    //     cache: "no-store",
    //   })
    // ).json();

    // DB経由のデータフェッチ
    return db
      .select()
      .from(techBlogs)
      .where(sql`${techBlogs.readingDate} = ${getToday()}`)
      .orderBy(desc(techBlogs.createdAt))
      .limit(20);
  };
