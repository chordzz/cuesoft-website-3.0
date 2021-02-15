import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Container, Header, Grid, Image } from "semantic-ui-react";
import { Mission, Technical } from "../components/Mission";
import slider from "../assets/images/about.png";
import slider_webp from "../assets/images/about.webp";
import { ApproachTwo } from "../components/Approach";
import { Info, Members } from "../components/Team";
import Smiley from "../assets/icons/smiley.svg";
import Smiley2 from "../assets/icons/smiley2.svg";
import { Client } from "../components/Clients";

function About({ darkMode, approachTwo, teamMembers, clientsData }) {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

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
          padding: "100px 0",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={13} mobile={16}>
                <Mission darkMode={darkMode} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column computer={16} mobile={16}>
                <picture>
                  <source srcSet={slider_webp} type="images/webp" />
                  <source srcSet={slider} type="images/png" />
                  <Image src={slider_webp} alt="about image" />
                </picture>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingTop: "60px",
            }}
          >
            <h2
              style={{ color: darkMode ? "#F4B400" : null }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
            >
              We are the Kubernetes for technical teams
            </h2>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={10} mobile={16}>
                <Technical darkMode={darkMode} />
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
          padding: "50px 0",
          minHeight: "100vh",
        }}
      >
        <Container
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Header
            style={{
              color: !darkMode && "#474646",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                color: darkMode ? "#ffffff" : null,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Our approach
            </p>
          </Header>
          <Header
            style={{
              color: !darkMode && "#db4437",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                color: darkMode ? "#F4B400" : null,
                textAlign: "center",
              }}
            >
              Analyze. Design. Build. Evolve
            </h2>
          </Header>
          <Grid>
            <Grid.Row>
              {approachTwo &&
                approachTwo.length &&
                approachTwo.map((single, i) => {
                  return (
                    <Grid.Column key={i} computer={8} mobile={16}>
                      <ApproachTwo single={single} darkMode={darkMode} />
                    </Grid.Column>
                  );
                })}
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
          padding: "60px 0",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#db4437",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{ color: darkMode ? "#F4B400" : null }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Our incredible team
            </h2>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={8} mobile={16}>
                <Info darkMode={darkMode} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="1000"
            >
              {teamMembers &&
                teamMembers.length &&
                teamMembers.map((member, i) => {
                  return (
                    <Grid.Column key={i} computer={5} mobile={8}>
                      <Members member={member} darkMode={darkMode} />
                    </Grid.Column>
                  );
                })}
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
          padding: "100px 0",
          minHeight: "100vh",
        }}
      >
        <Container
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <Header
            style={{
              color: !darkMode && "#db4437",
              marginBottom: "32px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column
                  computer={12}
                  mobile={16}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <h2
                    style={{
                      color: darkMode ? "#F4B400" : null,
                      marginRight: "30px",
                    }}
                  >
                    We've worked with lovely clients and all we did was put a
                    smile on their faces.
                  </h2>
                  <Image
                    src={darkMode ? Smiley2 : Smiley}
                    size="small"
                    centered
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid>
            <Grid.Row>
              {clientsData &&
                clientsData.length &&
                clientsData.map((client, i) => {
                  return (
                    <Grid.Column
                      key={i}
                      mobile={16}
                      computer={5}
                      style={{ padding: "30px 10px" }}
                    >
                      <Client client={client} darkMode={darkMode} />
                    </Grid.Column>
                  );
                })}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </main>
  );
}

About.prototypes = {
  approachTwo: PropTypes.array.isRequired,
  teamMembers: PropTypes.array.isRequired,
  clientsData: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    darkMode: state.mode.darkMode,
    approachTwo: state.approach.data,
    teamMembers: state.team.data,
    clientsData: state.clients.data,
  };
};

export default connect(mapStateToProps)(About);
