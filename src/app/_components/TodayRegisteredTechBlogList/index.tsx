import { desc, sql } from "drizzle-orm";

import { db, techBlogs } from "@/db";

import { TodayRegisterdTechBlogListPresenter } from "./TodayRegisterdTechBlogList.presenter";

export const TodayRegisterdTechBlogList = async () => {
  const techBlogList = await db
    .select()
    .from(techBlogs)
    .where(sql`${techBlogs.createdAt} < ${getToday()}::date`)
    .orderBy(desc(techBlogs.createdAt));

  return <TodayRegisterdTechBlogListPresenter techBlogList={techBlogList} />;
};

const getToday = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
