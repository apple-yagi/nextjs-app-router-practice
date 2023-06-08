import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import { TextInput } from ".";

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Label",
  },
} satisfies Story;

export const ClickedLabel = {
  ...Default,
  play: async ({ canvasElement }) => {
    const ui = within(canvasElement);
    await ui.getByLabelText("Label").focus();
  },
} satisfies Story;
