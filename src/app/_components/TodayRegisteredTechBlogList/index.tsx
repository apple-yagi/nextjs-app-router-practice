import { getTodayRegisteredTechBlogList } from "./getTodayRegisteredTechBlogList.server";
import { TodayRegisteredTechBlogListPresenter } from "./TodayRegisteredTechBlogList.presenter";

// React Server Components(RSC)
export const TodayRegisteredTechBlogList = async () => {
  const techBlogList = await getTodayRegisteredTechBlogList();

  return <TodayRegisteredTechBlogListPresenter techBlogList={techBlogList} />;
};
