import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Image, Button, Icon, Checkbox } from "semantic-ui-react";
import { Image, Icon, Checkbox } from "semantic-ui-react";
import Logo from "../../assets/icons/LogoWeb.svg";
import Logo2 from "../../assets/icons/LogoWebDark.svg";
import { changeMode } from "../../actions";

const CustomHeader = ({ darkMode, toggleMode }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);
  const typeFormFunc = () => {
    var js,
      q,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  };
  return (
    <nav className="navbar">
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
          {/* <Button
            size="tiny"
            as={Link}
            // to="#"
            color={darkMode ? "yellow" : "red"}
            style={{ borderRadius: "30px" }}
            onClick={(closeMobileMenu, typeFormFunc)}
            className="nav-btn"
            // class="typeform-share button"
            // href="https://form.typeform.com/to/DEo6Wu47?typeform-medium=embed-snippet"
            // data-mode="popup"
            // data-size="100"
            // target="_blank"
            // rel="noopener noreferrer"
            // onClick={typeFormFunc}
          > */}
          {/* <span style={{ color: darkMode ? "#000000" : "#ffffff" }}> */}
          <a
            class="typeform-share button"
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
            Start a Project
          </a>
          {/* </span> */}
          {/* </Button> */}
        </li>
        <li className="nav-item">
          <div className="nav-icon">
            <Icon name="sun" color={darkMode ? "yellow" : null} />
            <Checkbox
              toggle
              onChange={toggleMode}
              checked={darkMode}
              className="check"
            />
            <Icon name="moon" style={{ paddingLeft: "5px" }} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

CustomHeader.propTypes = {
  darkMode: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMode: () => dispatch(changeMode()),
  };
};

export default connect(null, mapDispatchToProps)(CustomHeader);
