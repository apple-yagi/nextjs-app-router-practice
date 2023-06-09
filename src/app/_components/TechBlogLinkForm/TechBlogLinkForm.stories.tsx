import { Meta, StoryObj } from "@storybook/react";

import { TechBlogLinkForm } from ".";

const meta = {
  component: TechBlogLinkForm,
} satisfies Meta<typeof TechBlogLinkForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    submit: async () => {
      return;
    },
  },
} satisfies Story;
