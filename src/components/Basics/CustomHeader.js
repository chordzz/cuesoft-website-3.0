import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Segment, Container, Image, Menu, Button } from "semantic-ui-react";
import Logo from "../../assets/icons/logo1.svg";
import Logo2 from "../../assets/icons/logo2.svg";
import { connect } from "react-redux";
import { darkMode } from "../../actions";
import { Checkbox } from "semantic-ui-react";

const CustomHeader = ({ darkMode, backgroundToggle }) => {
  return (
    <Segment
      as="header"
      clearing
      vertical
      inverted={darkMode}
      style={{ backgroundColor: darkMode ? "transparent" : "#ffffff" }}
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
          inverted={darkMode ? "#ffffff" : null}
          floated="right"
          size="large"
          stackable
        >
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            size="small"
          ></Menu.Item>
          <Menu.Item name="services" as={Link} to="#" size="small"></Menu.Item>
          <Menu.Item name="products" as={Link} to="#" size="small"></Menu.Item>
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
            <Checkbox toggle onClick={backgroundToggle} />
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
    backgroundToggle: () => dispatch(darkMode()),
  };
};

export default connect(null, mapDispatchToProps)(CustomHeader);
