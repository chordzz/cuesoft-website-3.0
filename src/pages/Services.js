import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Segment, Container, Header, Grid } from "semantic-ui-react";
import {
  WebContent,
  AppContent,
  EnterpriseContent,
  Household,
} from "../components/Services";
import {
  FrontendSegment,
  MobileSegment,
  BackendSegment,
} from "../components/Tools";
import PropTypes from "prop-types";

function Services({ darkMode, household }) {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <Segment
        as="section"
        vertical
        basic
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#100403" : "#ffffff",
          padding: "50px 0",
          // minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Header>
            <Grid centered>
              <Grid.Row>
                <Grid.Column computer={14}>
                  <h2
                    style={{
                      textAlign: "center",
                      color: darkMode ? "#ffffff" : null,
                    }}
                  >
                    We offer custom software services and solutions built
                    specifically for your business
                  </h2>
                </Grid.Column>
                <Grid.Column computer={9}>
                  <p
                    style={{
                      textAlign: "center",
                      padding: "30px 0",
                      color: darkMode ? "#ffffff" : null,
                    }}
                  >
                    We help companies enhance what they're offering customers
                    through their brands and products
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
        </Container>
      </Segment>
      <Segment
        as="section"
        vertical
        basic
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#100403" : "#ffffff",
          padding: "50px 0",
          // minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={7} mobile={16}>
                <WebContent darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column computer={3}></Grid.Column>
              <Grid.Column
                computer={6}
                mobile={16}
                style={{
                  paddingTop: "90px",
                  color: darkMode ? "#F4B400" : "#db4437",
                }}
              >
                <p>01. E-Commerce Development</p>
                <p>02. Responsive and Fluid Design</p>
                <p>03. Best Web Development Approach</p>
                <p>04. Optimized for SEO</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        vertical
        basic
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#210806" : "#FCFAF6",
          padding: "50px 0",
          // minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={7} mobile={16}>
                <AppContent darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column computer={3}></Grid.Column>
              <Grid.Column
                computer={6}
                mobile={16}
                style={{
                  paddingTop: "40px",
                  color: darkMode ? "#F4B400" : "#db4437",
                }}
              >
                <p>01. Software Applications</p>
                <p>02. Infrastructure</p>
                <p>03. Endpoint Management</p>
                <p>04. Optimized for SEO</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        vertical
        basic
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#210806" : "#FCFAF6",
          // minHeight: "calc(100vh - 85.38px)",
          padding: "50px 0",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={7} mobile={16}>
                <EnterpriseContent darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column computer={3}></Grid.Column>
              <Grid.Column
                computer={6}
                mobile={16}
                style={{
                  paddingTop: "40px",
                  color: darkMode ? "#F4B400" : "#db4437",
                }}
              >
                <p>01. Software Applications</p>
                <p>02. Infrastructure</p>
                <p>03. Endpoint Management</p>
                <p>04. Optimized for SEO</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        basic
        vertical
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#100403" : "#ffffff",
          padding: "50px 0",
          // minHeight: "100vh",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Header
            style={{
              paddingBottom: "32px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: darkMode ? "#F4B400" : "#db4437",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "32px",
                lineHeight: "38px",
              }}
            >
              Awesome technologies we used to build advanced enterprise systems,
              challenging and innovative products
            </h3>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} computer={5}>
                <FrontendSegment darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={5}>
                <BackendSegment darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={5}>
                <MobileSegment darkMode={darkMode} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        basic
        vertical
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#210806" : "#FCFAF6",
          // minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        <Container>
          <Header
            as="h3"
            style={{
              color: darkMode ? "#F4B400" : "#db4437",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "30px",
              lineHeight: "38px",
              paddingBottom: "30px",
            }}
          >
            Trusted By Household Names
          </Header>
          <Grid>
            {household &&
              household.length &&
              household.map((person, i) => {
                return <Household person={person} />;
              })}
          </Grid>
        </Container>
      </Segment>
    </main>
  );
}

Services.propTypes = {
  household: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.mode.darkMode,
    household: state.household.data,
  };
};

export default connect(mapStateToProps)(Services);
