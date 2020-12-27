import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Segment, Container, Image, Menu, Button } from "semantic-ui-react";
<<<<<<< Updated upstream
import Logo from "../../assets/icons/logo1.svg";
import Logo2 from "../../assets/icons/logo2.svg";
=======
import Logo from "../../icons/home/logo1.svg";
import Logo2 from "../../icons/home/logo2.svg";
>>>>>>> Stashed changes

const CustomHeader = ({ darkMode }) => {
  return (
    <Segment
      as="header"
      clearing
      vertical
      inverted={darkMode}
      style={{ backgroundColor: !darkMode && "#ffffff" }}
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
        <Menu as="nav" text inverted={darkMode} floated="right" size="large">
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
        </Menu>
      </Container>
    </Segment>
  );
};

CustomHeader.propTypes = {
  darkMode: PropTypes.bool,
};

export default CustomHeader;
