import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

vi.spyOn(window, "alert").mockImplementation(() => {});
