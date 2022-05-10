import "@testing-library/jest-dom/extend-expect";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Header from "./Header";

test("it render", () => {
  let openSidebar = false;
  let isCartOpen = false;
  const setOpenSidebar = () => (openSidebar = !openSidebar);

  const setIsCartOpen = () => (isCartOpen = !isCartOpen);

  render(
    <Header
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />
  );

  screen.getByAltText("Menu");
  screen.queryByAltText("Menu");
});

test("click to open sidebar", () => {
  let openSidebar = false;
  let isCartOpen = false;
  const setOpenSidebar = () => (openSidebar = !openSidebar);

  const setIsCartOpen = () => (isCartOpen = !isCartOpen);

  const mockHandler = jest.fn();

  render(
    <Header
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      openSidebar={openSidebar}
      setOpenSidebar={mockHandler}
    />
  );

  screen.getByAltText("Menu");
  const image = screen.queryByAltText("Menu");
  fireEvent.click(image);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
