"use server";

import { load } from "cheerio";
import { revalidateTag } from "next/cache";

import { db, techBlogs } from "@/db";
import { getToday } from "@/utils/getToday";

import { TechBlogLinkFormValues } from "../_components/TechBlogLinkForm/useTechBlogLinkForm";

export const postTechBlog = async ({
  techBlogLink,
}: TechBlogLinkFormValues) => {
  const text = await (await fetch(techBlogLink)).text();
  const $ = load(text);

  const title = $("meta[property='og:title']").attr("content");
  if (typeof title !== "string") throw new Error("title is not found");

  const ogImage = $("meta[property='og:image']").attr("content");
  if (typeof ogImage !== "string") throw new Error("ogImage is not found");

  await db.insert(techBlogs).values({
    title,
    ogImage,
    link: techBlogLink,
    readingDate: getToday(),
  });

  revalidateTag("getTodayRegisterdTechBlogList");
};
