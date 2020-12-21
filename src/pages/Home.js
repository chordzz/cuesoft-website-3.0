import React from "react";
import { Segment, Container, Grid, Image, Header } from "semantic-ui-react";
import { ApproachSegment } from "../components/Approach";
import { InnovationSegment, innovationData } from "../components/Innovation";
import {
  Developers,
  DevelopersImg,
  DevelopersImg2,
} from "../components/Developers";
import {
  FrontendSegment,
  BackendSegment,
  MobileSegment,
} from "../components/Tools";
import {
  WebSegment,
  MobileAppSegment,
  EnterpriseSegment,
} from "../components/Services";
// import { Apparule, Cueprise, Cuepay } from "../components/Products";
import { products, ProductSegment } from "../components/Products";
import { Client, clients } from "../components/Clients";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Space from "../assets/icons/space.svg";
import Square from "../assets/icons/squircle.svg";
import Square2 from "../assets/icons/squircle2.svg";
import AngleUp from "../assets/icons/angle-up.svg";
import AngleDown from "../assets/icons/angle-down.svg";
// import developers from '../assets/icons/developers.svg'
// import developers1 from '../assets/icons/developers1.svg'

const Home = ({ darkMode, approach }) => {
  return (
    <main>
      <Segment as="section" basic vertical inverted={darkMode}>
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column mobile={16} computer={8}>
                <h1 style={{ paddingTop: "150px" }}>
                  We build{" "}
                  <span
                    style={{
                      color: darkMode ? "#F4B400" : "#db4437",
                      textDecoration: "underline",
                    }}
                  >
                    Websites.{" "}
                  </span>
                  <br />
                  We develop functional processes that improve products and
                  services
                </h1>
                <br />
                <Image
                  src={darkMode ? Square2 : Square}
                  alt="square"
                  inline
                  style={{ color: darkMode ? "#F4B400" : null }}
                />
                <span
                  style={{
                    paddingLeft: "3px",
                    color: darkMode ? "#ffffff" : "#474646",
                  }}
                >
                  We help great companies simplify and grow their businesses by
                  designing and building beautiful products
                </span>
              </Grid.Column>
              <Grid.Column mobile={16} computer={8}>
                <Image src={Space} alt="space" inline />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        basic
        vertical
        inverted={{ darkMode }}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#474646",
              marginBottom: "32px",
            }}
          >
            <p style={{ color: darkMode ? "#ffffff" : null }}>Our approach</p>
          </Header>
          <Header
            style={{
              color: !darkMode && "#db4437",
              marginBottom: "32px",
            }}
          >
            <h2 style={{ color: darkMode ? "#F4B400" : null }}>
              Analyze. Design. Build. Evolve
            </h2>
          </Header>
          <Grid centered>
            <Grid.Row>
              {approach &&
                approach.length &&
                approach.map((single, i) => {
                  return (
                    <Grid.Column key={i} mobile={8} computer={4}>
                      <ApproachSegment single={single} darkMode={darkMode} />
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
        inverted={{ darkMode }}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header>
            <Grid centered>
              <Grid.Row>
                <Grid.Column mobile={8} computer={8}>
                  <h2
                    style={{
                      textAlign: "center",
                      color: darkMode ? "#F4B400" : "#db4437",
                    }}
                  >
                    {" "}
                    We build innovative solutions for companies, enterprises and
                    startups.
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid centered>
            <Grid.Row>
              {innovationData.data &&
                innovationData.data.length &&
                innovationData.data.map((data, i) => {
                  return (
                    <Grid.Column mobile={16} computer={7}>
                      <InnovationSegment data={data} darkMode={darkMode} />
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
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Image
            src={AngleUp}
            size="mini"
            floated="right"
            style={{ margin: "0 0 20px 0" }}
          />
          <Grid>
            <Grid.Row style={{ margin: "60px 0" }}>
              <Grid.Column mobile={16} computer={7}>
                <Developers darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column computer={4}></Grid.Column>
              <Grid.Column mobile={8} computer={5}>
                <DevelopersImg />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={8} computer={4}>
              <DevelopersImg2 />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container>
          <Image src={AngleDown} size="mini" floated="left" />
        </Container>
      </Segment>
      <Segment
        as="section"
        basic
        vertical
        inverted={darkMode}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header
            style={{
              paddingBottom: "32px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: darkMode ? "white" : null }}>
              We make use of awesome technologies to build advanced enterprise
              systems, challenging and innovative produts. We are proud of our
              technical skills
            </h3>
          </Header>
          <Grid centered>
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
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <h2 style={{ color: darkMode ? "#F4B400" : null }}>Our Services</h2>
          </Header>
          <Grid centered>
            <Grid.Row>
              <Grid.Column mobile={16} computer={5}>
                <WebSegment darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={5}>
                <MobileAppSegment darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={5}>
                <EnterpriseSegment darkMode={darkMode} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment
        as="section"
        basic
        vertical
        inverted={{ darkMode }}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={8} computer={4}>
                  <h2
                    style={{
                      color: darkMode ? "#F4B400" : null,
                      textAlign: "center",
                    }}
                  >
                    Here are some of our amazing products
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid centered>
            <Grid.Row>
              {products.data &&
                products.data.length &&
                products.data.map((product, i) => {
                  return (
                    <Grid.Column mobile={16} computer={5}>
                      <ProductSegment
                        key={i}
                        product={product}
                        darkMode={darkMode}
                      />
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
        inverted={{ darkMode }}
        style={{
          backgroundColor: !darkMode && "#ffffff",
          margin: "150px 0",
        }}
      >
        <Container>
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={8} computer={4}>
                  <h2 style={{ color: darkMode ? "#F4B400" : null }}>
                    Client We've Worked With
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid>
            <Grid.Row>
              {clients.data &&
                clients.data.length &&
                clients.data.map((client, i) => {
                  return (
                    <Grid.Column mobile={16} computer={5}>
                      <Client key={i} client={client} darkMode={darkMode} />
                    </Grid.Column>
                  );
                })}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </main>
  );
};
Home.propTypes = {
  approach: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
    approach: state.approach.data,
  };
};

export default connect(mapStateToProps)(Home);
