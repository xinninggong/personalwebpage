import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import SocialLinks from "../components/social-links";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <SocialLinks />

        <h1 className="mb-4 mt-3 font-weight-bold">About Me</h1>

        <CardColumns>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="mobile-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="CornflowerBlue"
                />
                Development Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="vial"
                  className={utilStyles.rightSpacedIcon}
                  color="LightGreen"
                />
                Testing Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="laptop"
                  className={utilStyles.rightSpacedIcon}
                  color="Coral"
                />
                Student Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="code-branch"
                  className={utilStyles.rightSpacedIcon}
                  color="Plum"
                />
                Other Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="code"
                  className={utilStyles.rightSpacedIcon}
                  color="PaleGoldenRod"
                />
                Another Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="sync-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="LightBlue"
                />
                More Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="user-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="BurlyWood"
                />
                Other Interests
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    </Layout>
  );
}
