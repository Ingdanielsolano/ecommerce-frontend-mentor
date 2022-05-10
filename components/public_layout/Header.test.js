import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";

test("it render", () => {
  let openSidebar = false;
  let isCartOpen = false;
  const setOpenSidebar = () => (openSidebar = !openSidebar);

  const setIsCartOpen = () => (isCartOpen = !isCartOpen);

  const view = render(
    <Header
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />
  );
  console.log(view);
});
