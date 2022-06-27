import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Icon, Checkbox } from "semantic-ui-react";
import Logo from "../../assets/icons/LogoWeb.svg";
import Logo2 from "../../assets/icons/LogoWebDark.svg";
import { changeMode } from "../../actions";
import { CustomHeaderProps } from "../../types/componentTypes";

const CustomHeader = ({ darkMode, toggleMode }: CustomHeaderProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);
  const typeFormFunc = () => {
    var q,
      d = document,
      gi = d.getElementById,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      const js = document.createElement("script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode?.insertBefore(js, q);
    }
  };
  return (
    <nav className="navbar custom-container">
      <Link to="/" onClick={closeMobileMenu}>
        <Image
          src={darkMode ? Logo2 : Logo}
          alt="logo"
          className="brand-img"
          size="small"
        />
      </Link>
      <Icon
        name={open ? "times" : "bars"}
        size="large"
        className={darkMode ? "menu-icon-2" : "menu-icon-1"}
        onClick={handleClick}
      />
      <ul
        className={
          open && darkMode
            ? "nav-menu-dark active"
            : open
            ? "nav-menu active"
            : "nav-menu"
        }
      >
        <li className="nav-item">
          <Link
            to="/about"
            className={darkMode ? "nav-link-2" : "nav-link-1"}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={darkMode ? "nav-link-2" : "nav-link-1"}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            className={darkMode ? "nav-link-2" : "nav-link-1"}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="typeform-share button"
            href="https://form.typeform.com/to/DEo6Wu47?typeform-medium=embed-snippet"
            data-mode="popup"
            data-size="100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={typeFormFunc}
            style={{
              color: darkMode ? "#000000" : "#ffffff",
              backgroundColor: darkMode ? "yellow" : "#db4437",
            }}
          >
            Hire Experts
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-icon">
            <Checkbox
              toggle
              onChange={toggleMode}
              checked={darkMode}
              className="check"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleMode: () => dispatch(changeMode()),
  };
};

export default connect(null, mapDispatchToProps)(CustomHeader);
