import Image from "next/image";
import propTypes from "prop-types";
import MenuIconSvg from "@public/icons/icon-menu.svg";
import LogoSvg from "@public/images/logo.svg";
import CartIconSvg from "@public/icons/icon-cart.svg";
import AvatarPng from "@public/images/image-avatar.png";

const PublicLayout = ({ children }) => (
  <div className="public-layout">
    <nav className="public-layout__navbar">
      <div className="public-layout__wrapper public-layout__wrapper--left">
        <div>
          <Image src={MenuIconSvg} width="20" height="16" alt="Menu" />
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
    <main>{children}</main>
  </div>
);

PublicLayout.propTypes = {
  children: propTypes.node,
};

PublicLayout.defaultProps = {
  children: null,
};

export default PublicLayout;
