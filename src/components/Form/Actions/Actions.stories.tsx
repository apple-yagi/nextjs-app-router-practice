import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { Button } from "@/components/Button";

import { Actions } from ".";

const meta = {
  component: Actions,
} satisfies Meta<typeof Actions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: (
      <>
        <Button>送信</Button>
        <Button variants={{ color: "danger" }}>リセット</Button>
      </>
    ),
  },
} satisfies Story;
