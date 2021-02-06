import React from "react";
import { Segment, Container, Grid, Image, Header } from "semantic-ui-react";
import { ApproachSegment } from "../components/Approach";
import { AboutSegment } from "../components/About";
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
import { ProductSegment } from "../components/Products";
import PropTypes from "prop-types";
import { Client } from "../components/Clients";
import { connect } from "react-redux";
import Space from "../assets/icons/space.svg";
import Square from "../assets/icons/squircle.svg";
import Square2 from "../assets/icons/squircle2.svg";
import AngleUp from "../assets/icons/angle-up.svg";
import AngleDown from "../assets/icons/angle-down.svg";

const Home = ({
  darkMode,
  approachData,
  clientsData,
  innovationData,
  productsData,
}) => {
  return (
    <main>
      <Segment
        as="section"
        basic
        vertical
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#100403" : "#ffffff",
          padding: "50px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid columns={2}>
            <Grid.Column mobile={16} computer={8}>
              <h1
                style={{ fontSize: "46px" }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
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
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
              />
              <span
                style={{
                  paddingLeft: 10,
                  lineHeight: 1.5,
                  fontSize: "17px",
                  color: darkMode ? "#ffffff" : "#474646",
                }}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
              >
                We help great companies simplify and grow their businesses by
                designing and building beautiful products
              </span>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Image
                style={{ marginTop: "-100px" }}
                src={Space}
                alt="space"
                inline
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
              />
            </Grid.Column>
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
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <Header
            style={{
              color: !darkMode && "#474646",
              marginBottom: "32px",
              fontWeight: "600",
            }}
          >
            <p
              style={{
                color: darkMode ? "#ffffff" : null,
                fontSize: "17px",
                lineHeight: "24px",
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
            <h2 style={{ color: darkMode ? "#F4B400" : null }}>
              Analyze. Design. Build. Evolve
            </h2>
          </Header>
          <Grid centered>
            <Grid.Row>
              {approachData &&
                approachData.length &&
                approachData.map((single, i) => {
                  return (
                    <Grid.Column key={i} computer={4} mobile={8}>
                      <ApproachSegment
                        single={single}
                        key={i}
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
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#210806" : "#FCFAF6",
          padding: "50px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
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
              {innovationData &&
                innovationData.length &&
                innovationData.map((data, i) => {
                  return (
                    <Grid.Column key={i} mobile={16} computer={7}>
                      <AboutSegment data={data} darkMode={darkMode} />
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
          padding: "50px 0 100px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Image
            src={AngleUp}
            size="mini"
            floated="right"
            style={{ margin: "-70px 0 20px 0" }}
          />
          <Grid>
            <Grid.Row style={{ margin: "60px 0" }}>
              <Grid.Column mobile={16} computer={11}>
                <Developers darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={8} computer={5}>
                <DevelopersImg />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid centered>
            <Grid.Row>
              <Grid.Column mobile={8} computer={5}>
                <DevelopersImg2 />
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
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Image
            src={AngleDown}
            style={{ margin: "-200px 0 0 0" }}
            size="mini"
            floated="left"
          />
          <Header
            style={{
              paddingBottom: "32px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: darkMode ? "white" : null,
                fontWeight: "normal",
                fontSize: "32px",
                lineHeight: "38px",
                textAlign: "left",
              }}
            >
              We make use of awesome technologies to build advanced enterprise
              systems, challenging and innovative produts. We are proud of our
              technical skills.
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
          backgroundColor: darkMode ? "#210806" : "#FCFAF6",
          padding: "50px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
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
        inverted={darkMode}
        style={{
          backgroundColor: darkMode ? "#100403" : "#ffffff",
          padding: "50px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
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
                      width: "430px",
                      height: "92px",
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
              {productsData &&
                productsData.length &&
                productsData.map((product, i) => {
                  return (
                    <Grid.Column key={i} mobile={16} computer={5}>
                      <ProductSegment product={product} darkMode={darkMode} />
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
          padding: "50px 0",
          minHeight: "calc(100vh - 85.38px)",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
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
              paddingBottom: "32px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={8} computer={4}>
                  <h2
                    style={{
                      color: darkMode ? "#F4B400" : null,
                      width: "430px",
                      height: "92px",
                    }}
                  >
                    Clients We've Worked With.
                  </h2>
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
                    <Grid.Column key={i} mobile={16} computer={5}>
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
};

Home.propTypes = {
  approachData: PropTypes.array.isRequired,
  clientsData: PropTypes.array.isRequired,
  innovationData: PropTypes.array.isRequired,
  productsData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.mode.darkMode,
    approachData: state.approach.data,
    innovationData: state.about.data,
    clientsData: state.clients.data,
    productsData: state.products.data,
  };
};

export default connect(mapStateToProps)(Home);
