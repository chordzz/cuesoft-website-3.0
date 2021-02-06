import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Segment,
  Container,
  Image,
  Menu,
  Button,
  Icon,
  Checkbox,
} from "semantic-ui-react";
import Logo from "../../assets/icons/LogoWeb.svg";
import Logo2 from "../../assets/icons/LogoWebDark.svg";
import { changeMode } from "../../actions";

const CustomHeader = ({ darkMode, toggleMode }) => {
  return (
    <Segment
      as="header"
      clearing
      vertical
      inverted={darkMode}
      style={{
        backgroundColor: darkMode ? "transparent" : "#ffffff",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <Container>
        <Link to="/">
          <Image
            className="brand"
            src={darkMode ? Logo2 : Logo}
            size="small"
            alt="logo"
            inline
          />
        </Link>
        <Menu
          as="nav"
          text
          inverted={darkMode}
          floated="right"
          size="large"
          stackable
          id="menu-style"
        >
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            size="medium"
          ></Menu.Item>
          <Menu.Item
            name="contact"
            as={Link}
            to="/contact"
            size="small"
          ></Menu.Item>
          <Menu.Item>
            <Button
              size="tiny"
              as={Link}
              to="#"
              color={darkMode ? "yellow" : "red"}
              style={{ borderRadius: "30px" }}
            >
              <span style={{ color: darkMode ? "#000000" : "#ffffff" }}>
                Start a project
              </span>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Icon name="sun" color={darkMode ? "yellow" : null} />
            <Checkbox toggle onChange={toggleMode} checked={darkMode} />
            <Icon name="moon" style={{ paddingLeft: "5px" }} />
          </Menu.Item>
        </Menu>
      </Container>
    </Segment>
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
