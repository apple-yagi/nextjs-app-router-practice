import { InferModel } from "drizzle-orm";
import {
  date,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const techBlogs = pgTable(
  "tech_blogs",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    link: text("link").notNull(),
    ogImage: text("og_image").notNull(),
    readingDate: date("reading_date").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (techBlogs) => {
    return {
      uniqueTechBlogLinkIdx: uniqueIndex("unique_tech_blog_link_idx").on(
        techBlogs.link
      ),
    };
  }
);

export type TechBlog = InferModel<typeof techBlogs, "select">;
