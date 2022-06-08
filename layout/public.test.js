import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import PublicLayout from "./public";

describe("<PublicLayout/>", () => {
  test("renders", () => {
    render(<PublicLayout>Testing</PublicLayout>);
    screen.getByText("Testing");
  });

  test("Open and close menu", () => {
    render(<PublicLayout>Testing</PublicLayout>);
    const element = screen.getByTestId("sidebar");
    expect(element.className).toContain("closed");
    screen.getByAltText("Menu");
    const image = screen.queryByAltText("Menu");
    fireEvent.click(image);
    expect(element.className).toContain("open");
  });
});
