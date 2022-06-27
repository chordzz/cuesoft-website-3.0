import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Segment, Container, Header, Grid } from "semantic-ui-react";
import { ContactForm } from "../components/Form";
import { ContactProps } from "../types/pagesTypes";

function Contact({ darkMode, locationData }: ContactProps) {
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
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#474646",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column computer={12} mobile={16}>
                  <h1
                    style={{
                      color: darkMode ? "#ffffff" : (null as any),
                    }}
                    className="contact-h1"
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
    </main>
  );
}

Contact.propType = {
  locationData: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any) => {
  return {
    darkMode: state.mode.darkMode,
    locationData: state.contact.data,
  };
};

export default connect(mapStateToProps)(Contact);
