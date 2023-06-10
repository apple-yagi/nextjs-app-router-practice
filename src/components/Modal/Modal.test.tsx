import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Modal } from ".";

const ModalTest = () => (
  <Modal
    trigger={<button>Open Modal</button>}
    title="Modal Title"
    content="Modal Description"
  />
);

describe("Modal", () => {
  it("Modalが正しく表示されること", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<ModalTest />);

    await user.click(getByRole("button", { name: "Open Modal" }));

    expect(getByRole("dialog")).toBeInTheDocument();
    expect(getByRole("heading", { name: "Modal Title" })).toBeInTheDocument();
    expect(getByRole("dialog")).toMatchSnapshot();
  });

  it("CloseIconを押すとModalが閉じること", async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole } = render(<ModalTest />);

    await user.click(getByRole("button", { name: "Open Modal" }));
    expect(getByRole("dialog")).toBeInTheDocument();

    await user.click(getByRole("button", { name: "閉じる" }));
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });
});
