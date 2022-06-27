import { List } from "semantic-ui-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Footer3Props } from "../../../types/componentTypes";

function Footer3({ darkMode }: Footer3Props) {
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
        Community
      </h4>
      <List>
        <List.Item>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
            }}
            className="footer-list"
          >
            <a
              href="https://medium.com/cuesoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </List.Content>
        </List.Item>
      </List>
      <div style={{ paddingTop: "1rem" }}>
        <span style={{ paddingRight: "0.5rem" }}>
          <a
            href="https://www.facebook.com/cuesoft"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            <FaFacebookF />
          </a>
        </span>
        <span style={{ paddingRight: "0.5rem" }}>
          <a
            href="https://twitter.com/CuesoftCloud"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            <FaTwitter />
          </a>
        </span>
        <span style={{ paddingRight: "0.5rem" }}>
          <a
            href="https://www.instagram.com/cuesoftcloud/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            <FaInstagram />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/company/cuesoft"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer3;
