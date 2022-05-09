import Cart from "@components/public_layout/Cart";
import Header from "@components/public_layout/Header";
import Sidebar from "@components/public_layout/Sidebar";
import propTypes from "prop-types";
import { useState } from "react";

const PublicLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="public-layout">
      <Header
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Cart />
      <main>{children}</main>
    </div>
  );
};

PublicLayout.propTypes = {
  children: propTypes.node,
};

PublicLayout.defaultProps = {
  children: null,
};

export default PublicLayout;
