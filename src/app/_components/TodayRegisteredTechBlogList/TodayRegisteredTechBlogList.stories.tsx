import { Meta, StoryObj } from "@storybook/react";

import { TodayRegisteredTechBlogListPresenter } from "./TodayRegisteredTechBlogList.presenter";

const meta = {
  component: TodayRegisteredTechBlogListPresenter,
} satisfies Meta<typeof TodayRegisteredTechBlogListPresenter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    techBlogList: Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      title: "新しく自分のブログサイトを作り直しました",
      link: "https://apple-yagi.me/blog/renewal_my_blog",
      ogImage:
        "https://images.microcms-assets.io/assets/a7208e73031e4a0c89212443979ab98a/82716655718e4eef8af491d11a52c66b/renewal_my_blog_ogp.png",
      readingDate: "2023-06-12",
      createdAt: new Date("2023-06-12T13:02:02.000Z"),
      updatedAt: new Date("2023-06-12T13:02:02.000Z"),
    })),
  },
} satisfies Story;
