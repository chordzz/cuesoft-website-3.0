import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Segment, Container, Image, Menu, Button } from "semantic-ui-react";
import Logo from "../../assets/icons/logo1.svg";
import Logo2 from "../../assets/icons/logo2.svg";

const CustomHeader = ({ darkMode }) => {
  //  const [activeItem, setActiveItem] = useState("home");

  //  const navigateTo = (page) => {
  //   setActiveItem(page);
  // };
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
            alt="logo"
            size="small"
            inline
          />
        </Link>
        <Menu as="nav" text inverted={darkMode} floated="right" size="large">
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            // active={activeItem === "about"}
            // onClick={() => navigateTo("about")}
            size="small"
          ></Menu.Item>
          <Menu.Item
            name="services"
            as={Link}
            to="/services"
            // active={activeItem === "services"}
            // onClick={() => navigateTo("services")}
            size="small"
          ></Menu.Item>
          <Menu.Item
            name="products"
            as={Link}
            to="/products"
            // active={activeItem === "products"}
            // onClick={() => navigateTo("products")}
            size="small"
          ></Menu.Item>
          <Menu.Item
            name="contact"
            as={Link}
            to="/contact"
            // active={activeItem === "contact"}
            // onClick={() => navigateTo("contact")}
            size="small"
          ></Menu.Item>
          <Menu.Item>
            <Button
              size="tiny"
              as={Link}
              to="/project"
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
