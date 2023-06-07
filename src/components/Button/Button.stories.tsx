import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "三毛猫",
  },
} satisfies Story;

export const Primary = {
  args: {
    variants: {
      color: "primary",
    },
    children: "マンチカン",
  },
} satisfies Story;

export const Secondary = {
  args: {
    variants: {
      color: "secondary",
    },
    children: "スコティッシュフォールド",
  },
} satisfies Story;

export const Danger = {
  args: {
    variants: {
      color: "danger",
    },
    children: "ベンガル",
  },
} satisfies Story;
