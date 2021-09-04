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
        <p className="mb-2 font-style-italic">"Curiousity is the fuel for discovery, inquiry and learning."</p>

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
          My curiousity drives my energy for all things data. The constant learning and journey through data fascinates me. 
          There is infinite discovery, insights and innovation waiting to be found. 
          That being said, data science is not always a walk in the park. It will never just fall in your lap and work out perfectly. 
          It is not like accounting where eventually everything should eventually balance. 
          It is not like law where there's ultimately only one outcome. 
          But I enjoy a good challenge and every data is different. 
          The challenging elements of data science offers opportunity to continuously improve and expand skills and knowledge which I believe is important. 
        </p> 

      </section>
    </Layout>
  );
}
