import React, { useEffect } from "react";
import { Segment, Container, Grid, Image, Header } from "semantic-ui-react";
import { ApproachSegment } from "../components/Approach";
import { AboutSegment } from "../components/About";
import {
  Developers,
  DevelopersImg,
  // DevelopersImg2,
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
// import Square from "../assets/icons/squircle.svg";
// import Square2 from "../assets/icons/squircle2.svg";
// import AngleUp from "../assets/icons/angle-up.svg";
// import AngleDown from "../assets/icons/angle-down.svg";

const Home = ({
  darkMode,
  approachData,
  clientsData,
  innovationData,
  productsData,
}) => {
  useEffect(() => window.scrollTo(0, 0), []);

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
          // display: "flex",
          // flexFlow: "column wrap",
          // justifyContent: "center",
          // alignContents: "stretch",
        }}
        className="mainSegment"
      >
        <Container>
          <Grid
            columns={2}
            doubling
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid.Column mobile={16} computer={8}>
              <h1
              // style={{ fontSize: "46px" }}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              >
                {/* We build{" "}
                <span
                  style={{
                    color: darkMode ? "#F4B400" : "#db4437",
                    textDecoration: "underline",
                  }}
                >
                  Websites.{" "}
                </span> */}
                {/* <br /> */}
                We develop functional processes that improve products and
                services
              </h1>
              <br />
              {/* <Image
                src={darkMode ? Square2 : Square}
                alt="square"
                inline
                style={{ color: darkMode ? "#F4B400" : null }}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
              /> */}
              <span
                style={{
                  // paddingLeft: 10,
                  lineHeight: 1,
                  color: darkMode ? "#ffffff" : "#474646",
                }}
                className="span-text"
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-delay="1000"
                // data-aos-easing="ease-in-out"
              >
                We help great companies simplify and grow their businesses by
                designing and building beautiful products
              </span>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Image
                // style={{ marginTop: "-100px" }}
                src={Space}
                alt="space"
                inline
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
                id="intro-image"
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
        // data-aos="fade-left"
        // data-aos-offset="200"
        // data-aos-duration="1000"
        >
          <Header
            style={{
              color: !darkMode && "#474646",
              // marginBottom: "32px",
              // fontWeight: "600",
            }}
          >
            <h2
              style={{
                color: darkMode ? "#ffffff" : null,
                // fontFamily: "Archivo",
                // fontSize: "17px",
                // lineHeight: "24px",
                // fontWeight: 600,
                // fontSize: "4.5rem",
                // fontFamily: "Source Sans Pro",
              }}
            >
              Our approach
            </h2>
          </Header>
          <Header
            style={{
              color: !darkMode && "#db4437",
              marginBottom: "32px",
            }}
          >
            <span
              style={{ color: darkMode ? "#F4B400" : null }}
              className="span-text"
            >
              Analyze. Design. Build. Evolve
            </span>
          </Header>
          <Grid centered>
            <Grid.Row>
              {approachData &&
                approachData.length &&
                approachData.map((single, i) => {
                  return (
                    <Grid.Column key={i} computer={4} mobile={16}>
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-duration="1000"
        >
          <Header>
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} computer={16}>
                  <h2
                    style={{
                      textAlign: "left",
                      color: darkMode ? "#F4B400" : "black",
                    }}
                    className="what-we-do"
                  >
                    {" "}
                    We build innovative solutions for companies, enterprises and
                    startups.
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid>
            <Grid.Row>
              {innovationData &&
                innovationData.length &&
                innovationData.map((data, i) => {
                  return (
                    <Grid.Column key={i} mobile={16} computer={8}>
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          {/* <Image
            src={AngleUp}
            size="mini"
            floated="right"
            style={{ margin: "-70px 0 20px 0" }}
            className="angle-up-img"
          /> */}
          <Grid className="dev-team-grid">
            <Grid.Row className="dev-team">
              <Grid.Column mobile={16} computer={10}>
                <Developers darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <DevelopersImg />
              </Grid.Column>
              <Grid.Column mobile={1} computer={8}></Grid.Column>
              {/* <Grid.Column mobile={6} computer={5}>
                <DevelopersImg2 />
              </Grid.Column> */}
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          {/* <Image
            src={AngleDown}
            style={{ margin: "-70px 0 0 0" }}
            size="mini"
            floated="left"
            className="angle-down-img"
          /> */}
          <Header
            style={{
              paddingBottom: "32px",
              paddingTop: "10px",
            }}
            className="technologies"
          >
            <h3
              style={{
                color: darkMode ? "white" : null,
                // fontSize: "1.8rem",
                fontWeight: "600",
              }}
            >
              {/* We make use of awesome technologies to build advanced enterprise
              systems, challenging and innovative produts. We are proud of our
              technical skills. */}
              We are proud of our technical skills.
            </h3>
          </Header>
          <Grid>
            <Grid.Row
            // style={{
            //   left: "-4rem",
            // }}
            >
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container className="alignLeft">
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <h2
              style={{
                color: darkMode ? "#F4B400" : "black",
                // marginLeft: "10px",
              }}
            >
              Our services
            </h2>
          </Header>
          <Grid>
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
        // data-aos="fade-right"
        // data-aos-offset="200"
        // data-aos-duration="1000"
        >
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} computer={8}>
                  <h2
                    style={{
                      color: darkMode ? "#F4B400" : "black",
                    }}
                    className="amazing-products"
                  >
                    Here are some of our amazing products
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Header>
          <Grid>
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
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-duration="1000"
        >
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <Grid computer={16}>
              <Grid.Row>
                <Grid.Column mobile={16} computer={7}>
                  <h3
                    style={{
                      color: darkMode ? "#F4B400" : "black",
                      // width: "430px",
                      // height: "92px",
                    }}
                  >
                    Clients We've Worked With.
                  </h3>
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
