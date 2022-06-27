import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Footer2Props } from "../../../types/componentTypes";

function Footer2({ darkMode }: Footer2Props) {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <h4
        style={{
          color: darkMode ? "#F4B400" : "#db4437",
          paddingBottom: "30px",
          fontWeight: "600",
        }}
        className="footer-header"
      >
        Company
      </h4>
      <List>
        <List.Item as={Link} to="/about">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            About
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Careers
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="/contact">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Contact
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item as={Link} to="#">
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            Investors
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default Footer2;
