import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Footer4Props } from "../../../types/componentTypes";

function Footer4({ darkMode }: Footer4Props) {
  const handleTerms = () => {
    window.open("https://terms.cuesoft.io/", "_blank");
  };
  const handlePrivacy = () => {
    window.open("https://privacy.cuesoft.io/", "_blank");
  };
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
        Resources
      </h4>
      <List>
        <List.Item onClick={handleTerms}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            className="footer-list"
          >
            Terms
          </List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item onClick={handlePrivacy}>
          <List.Content
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            className="footer-list"
          >
            Privacy Policy
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
            FAQ
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
            Partners
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default Footer4;
