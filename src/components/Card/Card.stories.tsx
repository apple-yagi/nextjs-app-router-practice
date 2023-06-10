import { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "新しく自分のブログサイトを作り直しました",
    ogImage:
      "https://images.microcms-assets.io/assets/a7208e73031e4a0c89212443979ab98a/82716655718e4eef8af491d11a52c66b/renewal_my_blog_ogp.png",
  },
} satisfies Story;
