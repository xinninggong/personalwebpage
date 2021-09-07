import Head from "next/head";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout, { siteTitle } from "../components/layout";
import SocialLinks from "../components/social-links";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkShowcase() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <SocialLinks />
        <h1 className="mb-4 mt-3 font-weight-bold">My Projects</h1>
        <Container>
          <Row>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/procrastinya.png" />
                <Card.Body>
                  <Card.Title>Procrastinya</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    At the WDCC x SESA Hackathon the theme for this year was procrastination. 
                    To aid you in openly procrastinating in front of your boss, my team decided to create a webpage that looks very similar to Visual Studio Code. 
                    If you look closely at the code, you will notice that it is actually populated with reddit posts. 
                    It was my first time building a chrome extension and using typescript. 
                    I am very proud of my group for working hard together and achieving the best design award. 
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://github.com/Nyaaaaaaaaaaa"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Procrastinya
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/stats330.png" />
                <Card.Body>
                  <Card.Title>Statistical Modelling</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Last semester, I completed a statistical modelling paper aimed to broaden understanding of generalised linear modles and related methods. 
                    My research was on the effect of insulin on laboratory mice and predicting oxygen consumption in a person. 
                    I used simulation-based procedures, such as bootstrapping and cross-validation, 
                    to provide robust inference, investigate consequences of assumption violations, and to solve goodness-of-fit and model-selection problems.

                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://github.com/xinninggong/Statistical-Computing"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    View Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/job.png" />
                <Card.Body>
                  <Card.Title>Career Web Portal</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    This project was to create a job protal prototype.
                    We had to first write a proposal to seek approval by the project manager consisting of the identified problems, use case model, functions outline and visual preview. 
                    The second part was designing the mobile and desktop GUI of the main use cases. We focused on the Microsoft user centred design principles. 
                    The final deliverable consists of system architecture, prototype documentation with functionalities, data outline, demonstration and test plan. 

                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://github.com/xinninggong/Job-search-web-portal"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Career Portal 
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/bike.png" />
                <Card.Body>
                  <Card.Title>Citi Bikes Analysis</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Citibike is an electric bike rental company in New York City. 
                    My research was based on the 2018 Citi Bike trip data in New York City. 
                    I performed web scraping to retrieve information from their website. 
                    I polished and tidied the data to be ready for analysis and produced visualisations using ggplot2. 
                    We were tasked to find new relationships that weren't already used in the previous reports so it was very difficult to find anything new and interesting. 


                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://github.com/xinninggong/Data-Technologies"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Citi Bikes Research
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
