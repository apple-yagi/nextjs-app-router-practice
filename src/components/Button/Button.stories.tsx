import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: {
    children: "三毛猫",
  },
} satisfies StoryObj<typeof meta>;

export const Primary = {
  args: {
    variants: {
      color: "primary",
    },
    children: "マンチカン",
  },
} satisfies StoryObj<typeof meta>;

export const Secondary = {
  args: {
    variants: {
      color: "secondary",
    },
    children: "スコティッシュフォールド",
  },
} satisfies StoryObj<typeof meta>;

export const Danger = {
  args: {
    variants: {
      color: "danger",
    },
    children: "ベンガル",
  },
} satisfies StoryObj<typeof meta>;
