import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import * as stories from "./Card.stories";

const { Default } = composeStories(stories);

describe("Card", () => {
  it("正しく表示されること", () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot();
  });
});
