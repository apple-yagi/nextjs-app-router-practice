import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

import * as Form from ".";

const TestForm = () => {
  return (
    <Form.Root>
      <Form.TextInput label="テスト" />
      <Form.Actions>
        <Button>送信</Button>
        <Button variants={{ color: "secondary" }}>キャンセル</Button>
      </Form.Actions>
    </Form.Root>
  );
};

const meta = {
  component: TestForm,
} satisfies Meta<typeof TestForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
