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
        <Image src={MenuIconSvg} width="20" height="20" alt="Menu" />
        <Image
          className="logo"
          src={LogoSvg}
          width="146"
          height="29"
          style={{
            marginTop: "-3px",
          }}
          alt="Logo"
        />
      </div>
      <div className="public-layout__wrapper public-layout__wrapper--rigth">
        <Image src={CartIconSvg} width="20" height="20" alt="Logo" />
        <Image src={AvatarPng} width="20" height="20" alt="Logo" />
      </div>
      {/* <img /> */}
      {/* <img /> */}
      {/* <img /> */}
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
