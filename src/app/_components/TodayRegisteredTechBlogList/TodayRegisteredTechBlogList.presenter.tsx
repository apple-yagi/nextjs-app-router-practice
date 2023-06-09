import { Card } from "@/components/Card";

type Props = {
  techBlogList: {
    id: number;
    title: string;
    ogImage: string;
    link: string;
    readingDate: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export const TodayRegisteredTechBlogListPresenter = ({
  techBlogList,
}: Props) => {
  return (
    <ul className="grid place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techBlogList.map((techBlog) => (
        <li key={techBlog.id} className="sm:min-w-[33%]">
          <a href={techBlog.link} target="_blank" rel="noopener noreferrer">
            <Card title={techBlog.title} ogImage={techBlog.ogImage} />
          </a>
        </li>
      ))}
    </ul>
  );
};
