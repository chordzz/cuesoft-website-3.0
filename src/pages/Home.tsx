import { useEffect } from "react";
import PropTypes from "prop-types";
import { Segment, Container, Grid, Image, Header } from "semantic-ui-react";
import { ApproachSegment } from "../components/Approach";
import { AboutSegment } from "../components/About";
import { Developers, DevelopersImg } from "../components/Developers";
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
import { Client } from "../components/Clients";
import { connect } from "react-redux";
import Space from "../assets/illustrations/Functional_processes.svg";
import { HomeProps } from "../types/pagesTypes";


const Home = ({
  darkMode,
  approachData,
  clientsData,
  innovationData,
  productsData,
}: HomeProps) => {
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
        }}
        className="mainSegment"
      >
        <Container className="custom-container">
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
              <h1>
                We develop functional processes that improve products and
                services
              </h1>
              <br />

              <span
                style={{
                  lineHeight: 1,
                  color: darkMode ? "#ffffff" : "#474646",
                }}
                className="span-text"
              >
                We help great companies simplify and grow their businesses by
                designing and building beautiful products
              </span>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Image
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
        <Container className="custom-container">
          <Header
            style={{
              color: !darkMode && "#474646",
            }}
          >
            <h2
              style={{
                color: darkMode ? "#ffffff" : (null as any),
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
              style={{ color: darkMode ? "#F4B400" : (null as any) }}
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
        <Container className="custom-container">
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
        <Container className="custom-container">
          <Grid className="dev-team-grid">
            <Grid.Row className="dev-team">
              <Grid.Column mobile={16} computer={10}>
                <Developers darkMode={darkMode} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <DevelopersImg />
              </Grid.Column>
              <Grid.Column mobile={1} computer={8}></Grid.Column>
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
        <Container className="custom-container">
          <Header
            style={{
              paddingBottom: "32px",
              paddingTop: "10px",
            }}
            className="technologies"
          >
            <h3
              style={{
                color: darkMode ? "white" : (null as any),
                fontWeight: "600",
              }}
            >
              We are proud of our technical skills.
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
          padding: "50px 0",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <Container className="alignLeft custom-container">
          <Header
            style={{
              color: !darkMode && "#db4437",
              paddingBottom: "32px",
            }}
          >
            <h2
              style={{
                color: darkMode ? "#F4B400" : "black",
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
        <Container className="custom-container">
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
                    <Grid.Column key={i} mobile={16} computer={5} tablet={10}>
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
        <Container className="custom-container">
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

const mapStateToProps = (state: any) => {
  return {
    darkMode: state.mode.darkMode,
    approachData: state.approach.data,
    innovationData: state.about.data,
    clientsData: state.clients.data,
    productsData: state.products.data,
  };
};

export default connect(mapStateToProps)(Home);
