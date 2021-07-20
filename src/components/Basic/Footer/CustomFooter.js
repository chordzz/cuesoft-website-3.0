import React from "react";
import { Segment, Container, Grid, Image } from "semantic-ui-react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";
import Footer6 from "./Footer6";
import MobileFooter1 from "./MobileFooter1";
import Logo from "../../../assets/icons/LogoWeb.svg";
import Logo2 from "../../../assets/icons/LogoWebDark.svg";

function CustomFooter({ darkMode }) {
  return (
    <Segment
      as="section"
      basic
      vertical
      inverted={darkMode}
      style={{
        backgroundColor: darkMode ? "#100403" : "#ffffff",
        padding: "80px 0 0 0",
      }}
      className="footer-section"
    >
      <Container>
        <Grid>
          <Grid.Row only="computer">
            <Grid.Column width={4}>
              <Footer1 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={2}>
              <Footer2 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={2}>
              <Footer3 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={2}>
              <Footer4 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={3}>
              <Footer5 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="computer">
            <Grid.Column width={16}>
              <Footer6 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
          {/* tablet footer visibility */}
          <Grid.Row only="tablet">
            <Grid.Column width={4}>
              <Footer1 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Footer2 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Footer3 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Footer4 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column style={{ paddingRight: ".5rem" }} width={3}>
              <Footer5 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="tablet">
            <Grid.Column width={16}>
              <Footer6 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
          {/* End of tablet visibility */}
          <Grid.Row columns="1" only="mobile">
            <Grid.Column>
              <MobileFooter1 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column>
              <Image
                src={darkMode ? Logo2 : Logo}
                alt="logo"
                size="small"
                inline
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} only="mobile">
            <Grid.Column>
              <Footer2 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column>
              <Footer3 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column>
              <Footer4 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile" columns="1">
            <Grid.Column>
              <Footer5 darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column>
              <Footer6 darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default CustomFooter;
