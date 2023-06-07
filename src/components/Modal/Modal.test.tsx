import { composeStories } from "@storybook/react";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import * as stories from "./Modal.stories";

const { Open } = composeStories(stories);

describe("Modal", () => {
  it("Modalが正しく表示されること", async () => {
    const { container, getByRole } = render(<Open />);

    await Open.play({ canvasElement: container });

    expect(getByRole("dialog")).toBeInTheDocument();
    expect(getByRole("heading", { name: "Modal Title" })).toBeInTheDocument();
    expect(getByRole("button", { name: "閉じる" })).toBeInTheDocument();
    expect(getByRole("dialog")).toMatchSnapshot();
  });

  it("CloseIconを押すとModalが閉じること", async () => {
    const user = userEvent.setup();

    const { container, getByRole, queryByRole } = render(<Open />);

    await Open.play({ canvasElement: container });
    await user.click(getByRole("button", { name: "閉じる" }));

    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });
});
