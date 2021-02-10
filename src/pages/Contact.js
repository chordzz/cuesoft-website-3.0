import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Segment, Container, Header, Grid } from "semantic-ui-react";
import { ContactForm } from "../components/Form";
import { LocationSegment } from "../components/Location";

function Contact({ darkMode, locationData }) {
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
          minHeight: "100vh",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#474646",
              paddingTop: "60px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column computer={12} mobile={16}>
                  <h1
                    style={{
                      color: darkMode ? "#ffffff" : null,
                      fontWeight: "600",
                      fontSize: "50px",
                    }}
                  >
                    Interested in our services or need advice? Get in touch and
                    we'll be glad to help.
                  </h1>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <ContactForm darkMode={darkMode} />
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
          minHeight: "100vh",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#474646",
              paddingTop: "50px",
            }}
          >
            <h2 style={{ color: darkMode ? "#ffffff" : null }}>
              You can find us here
            </h2>
          </Header>
          <Grid centered>
            <Grid.Row>
              {locationData &&
                locationData.length &&
                locationData.map((data, i) => {
                  return (
                    <Grid.Column key={i} computer={4} mobile={16}>
                      <LocationSegment data={data} darkMode={darkMode} />
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

Contact.propType = {
  locationData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.mode.darkMode,
    locationData: state.contact.data,
  };
};

export default connect(mapStateToProps)(Contact);
