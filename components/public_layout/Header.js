import CartIconSvg from "public/icons/icon-cart.svg";
import MenuIconSvg from "public/icons/icon-menu.svg";
import AvatarPng from "public/images/image-avatar.png";
import LogoSvg from "public/images/logo.svg";
import Image from "next/image";
import propTypes from "prop-types";

const Header = ({ openSidebar, setOpenSidebar, isCartOpen, setIsCartOpen }) => (
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
      <Image
        onClick={() => setIsCartOpen(!isCartOpen)}
        src={CartIconSvg}
        width="24"
        height="24"
        alt="Logo"
      />
      <Image src={AvatarPng} width="27" height="27" alt="Logo" />
    </div>
  </nav>
);

Header.propTypes = {
  openSidebar: propTypes.bool.isRequired,
  setOpenSidebar: propTypes.func.isRequired,
  isCartOpen: propTypes.bool.isRequired,
  setIsCartOpen: propTypes.func.isRequired,
};

export default Header;
