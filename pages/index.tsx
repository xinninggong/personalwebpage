import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import SocialLinks from "../components/social-links";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <p className="mb-2 font-weight-bold">Hardworking Student</p>

        <div className="mb-2">
          <Link href="/about-me">
            <Button
              variant="primary"
              className="px-4 mr-2 mt-2 font-weight-bold"
            >
              About Me
            </Button>
          </Link>
          <Link href="/work-showcase">
            <Button variant="primary" className="mt-2 px-4 font-weight-bold">
              Work Showcase
            </Button>
          </Link>
        </div>

        <SocialLinks />

        <p className={utilStyles.openingPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </Layout>
  );
}
