import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import * as stories from "./TechBlogLinkForm.stories";

const { Default } = composeStories(stories);

describe("TechBlogLinkForm", () => {
  it("URLを入力すると、送信ボタンがEnabledになる", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Default />);

    await user.type(
      getByRole("textbox", { name: "技術ブログのURL" }),
      "https://example.com"
    );

    expect(getByRole("button", { name: "送信" })).toBeEnabled();
  });

  it("URLが不正なとき、エラーが表示され送信ボタンがDisabledであること", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Default />);

    await user.type(
      getByRole("textbox", { name: "技術ブログのURL" }),
      "example.com"
    );

    expect(getByRole("button", { name: "送信" })).toBeDisabled();
    expect(getByRole("alert")).toBeInTheDocument();
    expect(getByRole("alert")).toHaveTextContent("正しいURLを入力してください");
  });

  it("送信ボタンを押すと、postTechBlogLinkが呼ばれること", async () => {
    const user = userEvent.setup();
    const submit = vi.fn();
    const { getByRole } = render(<Default submit={submit} />);

    await user.type(
      getByRole("textbox", { name: "技術ブログのURL" }),
      "https://example.com"
    );
    await user.click(getByRole("button", { name: "送信" }));

    expect(submit).toHaveBeenCalledWith({
      techBlogLink: "https://example.com",
    });
  });
});
