import { getTodayRegisteredTechBlogList } from "./getTodayRegisteredTechBlogList.server";
import { TodayRegisteredTechBlogListPresenter } from "./TodayRegisteredTechBlogList.presenter";

export const TodayRegisteredTechBlogList = async () => {
  const techBlogList = await getTodayRegisteredTechBlogList();

  return <TodayRegisteredTechBlogListPresenter techBlogList={techBlogList} />;
};
