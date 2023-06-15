CREATE TABLE IF NOT EXISTS "tech_blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"link" text NOT NULL,
	"og_image" text NOT NULL,
	"reading_date" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "unique_tech_blog_link_idx" ON "tech_blogs" ("link");