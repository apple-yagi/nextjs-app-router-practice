import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import * as stories from "./TextInput.stories";

const { Default, ClickedLabel } = composeStories(stories);

describe("TextInput", () => {
  it("正しく表示されること", () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot();
  });

  it("Labelをクリックした時にフォーカスされること", async () => {
    const { container, getByRole } = render(<ClickedLabel />);

    await ClickedLabel.play({ canvasElement: container });

    expect(getByRole("textbox")).toHaveFocus();
  });
});
