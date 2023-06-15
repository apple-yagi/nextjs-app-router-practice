import { GetTechBlogListReturn } from "@/server/tech-blogs";
import { getToday } from "@/utils/getToday";

export const getTodayRegisteredTechBlogList =
  async (): Promise<GetTechBlogListReturn> => {
    return await (
      await fetch(`${process.env.APP_URL}/api/tech_blogs?date=${getToday()}`, {
        cache: "no-store",
        next: {
          revalidate: 0,
        },
      })
    ).json();
  };
