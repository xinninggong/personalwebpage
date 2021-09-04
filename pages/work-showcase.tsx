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
                <Card.Img variant="top" src="/images/template.jpg" />
                <Card.Body>
                  <Card.Title>Example work</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    This an example of some work that I did that I think others
                    would like to look at. I worked really hard on this and here
                    is some great info. It was cool, and I had fun.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    className="mb-1"
                    href="https://example.com"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    View on GitHub
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
