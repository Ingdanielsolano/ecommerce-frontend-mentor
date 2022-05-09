import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import MenuIconSvg from "@public/icons/icon-menu.svg";
import LogoSvg from "@public/images/logo.svg";
import CartIconSvg from "@public/icons/icon-cart.svg";
import CloseIconSvg from "@public/icons/icon-close.svg";
import AvatarPng from "@public/images/image-avatar.png";
import { useState } from "react";

const PublicLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState();
  return (
    <div className="public-layout">
      <nav className="public-layout__navbar">
        <div className="public-layout__wrapper public-layout__wrapper--left">
          <div>
            <Image
              onClick={() => setOpenSidebar(!openSidebar)}
              src={MenuIconSvg}
              width="20"
              height="16"
              alt="Menu"
            />
          </div>
          <div className="logo">
            <Image src={LogoSvg} width="146" height="24" alt="Logo" />
          </div>
        </div>
        <div className="public-layout__wrapper public-layout__wrapper--rigth">
          <Image src={CartIconSvg} width="24" height="24" alt="Logo" />
          <Image src={AvatarPng} width="27" height="27" alt="Logo" />
        </div>
      </nav>
      <div
        className={`public-layout__sidenav-wrapper public-layout__sidenav-wrapper${
          openSidebar ? "--open" : "--closed"
        }`}
      >
        <div
          className={`public-layout__sidenav public-layout__sidenav${
            openSidebar ? "--open" : "--closed"
          }`}
        >
          <button onClick={() => setOpenSidebar(!openSidebar)}>
            <Image
              src={CloseIconSvg}
              width="14"
              height="14"
              alt="Close sidebar"
            />
          </button>
          <Link href="/product">Collections</Link>
          <Link href="/product">Men</Link>
          <Link href="/product">Women</Link>
          <Link href="/product">About</Link>
          <Link href="/product">Contact</Link>
        </div>
      </div>
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
