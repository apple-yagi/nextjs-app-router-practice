import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./Button.stories";

const { Default, Primary, Secondary, Danger } = composeStories(stories);

describe("Button", () => {
  it("Default Buttonが正しく表示されること", () => {
    expect(render(<Default />).asFragment()).toMatchSnapshot();
  });

  it("Primary Buttonが正しく表示されること", () => {
    expect(render(<Primary />).asFragment()).toMatchSnapshot();
  });

  it("Secondary Buttonが正しく表示されること", () => {
    expect(render(<Secondary />).asFragment()).toMatchSnapshot();
  });

  it("Danger Buttonが正しく表示されること", () => {
    expect(render(<Danger />).asFragment()).toMatchSnapshot();
  });
});
