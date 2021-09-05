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
        <h1 className="mb-4 mt-3 font-weight-bold">My Work</h1>
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
                <Card.Img variant="top" src="/images/template.jpg" />
                <Card.Body>
                  <Card.Title>SoT Dev Demo</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    This is an SoT dev demo project.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://trademe.co.nz"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Trade Me
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/template.jpg" />
                <Card.Body>
                  <Card.Title>SoT Dev Demo</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    This is an SoT dev demo project. Hi everyone.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://trademe.co.nz"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Aorthi is awesome
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-light text-left mb-4">
                <Card.Img variant="top" src="/images/template.jpg" />
                <Card.Body>
                  <Card.Title>SoT Dev Demo</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    This is an SoT dev demo project. Hi everyone.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://trademe.co.nz"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    Aorthi is awesome
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
