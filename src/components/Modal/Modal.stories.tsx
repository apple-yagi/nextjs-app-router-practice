import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Modal } from ".";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    trigger: <button>Open Modal</button>,
    title: "Modal Title",
    content: "Modal Description",
  },
} satisfies Story;

export const Open = {
  ...Default,
  play: async ({ canvasElement }) => {
    const ui = within(canvasElement);
    await userEvent.click(ui.getByRole("button", { name: "Open Modal" }));
  },
} satisfies Story;
