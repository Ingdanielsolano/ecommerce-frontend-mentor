import CloseIconSvg from "@public/icons/icon-close.svg";
import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";

const Sidebar = ({ openSidebar, setOpenSidebar }) => (
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
        <Image src={CloseIconSvg} width="14" height="14" alt="Close sidebar" />
      </button>
      <Link href="/product">Collections</Link>
      <Link href="/product">Men</Link>
      <Link href="/product">Women</Link>
      <Link href="/product">About</Link>
      <Link href="/product">Contact</Link>
    </div>
  </div>
);

Sidebar.propTypes = {
  openSidebar: propTypes.bool.isRequired,
  setOpenSidebar: propTypes.func.isRequired,
};

export default Sidebar;
