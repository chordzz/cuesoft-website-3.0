import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Segment, Container, Header, Grid, Image } from "semantic-ui-react";
import { Mission, Technical, Vision } from "../components/Mission";

import { Info, Members } from "../components/Team";

import Kubernetes from "../assets/illustrations/Analyse.svg";

function About({ darkMode, approachTwo, teamMembers, clientsData }) {
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
          overflowX: "hidden",
        }}
      >
        <Grid>
          <Grid.Row
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#100403" : "whitesmoke",
            }}
            centered
          >
            <Grid.Column computer={7} mobile={16}>
              <Vision darkMode={darkMode} />
            </Grid.Column>
            <Grid.Column computer={7} mobile={16}>
              <Mission darkMode={darkMode} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container className="custom-container">
          <Grid>
            <Grid.Row>
              <Grid.Column computer={8} mobile={16}>
                <Header
                  style={{
                    color: !darkMode && "#db4437",
                    paddingTop: "60px",
                  }}
                >
                  <h2
                    style={{ color: darkMode ? "#F4B400" : "rgb(71, 70, 70)" }}
                    className="kubernetes"
                  >
                    We are the Kubernetes for technical teams
                  </h2>
                </Header>
                <Technical darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column
                computer={8}
                mobile={16}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src={Kubernetes}
                  alt="Kubernetes Image"
                  className="kubernetes-img"
                />
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
          backgroundColor: darkMode ? "#100403" : "#fcfaf6",
          padding: "60px 0",
        }}
      >
        <Container className="custom-container">
          <Header
            style={{
              color: !darkMode ? "black" : "#F4B400",
              marginBottom: "32px",
            }}
          >
            <h2>Our incredible team</h2>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={8} mobile={16}>
                <Info darkMode={darkMode} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>
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
    </main>
  );
}

About.propTypes = {
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
