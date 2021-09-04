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
        <br></br>
        <p className={utilStyles.openingPara}>
          To aid my journey in conquering the world using data, I am currently a penultimate Bachelor of Science student at the University of Auckland. 
          I chose to study a double major in IT Management and Statistics to explore both the technical and practical sides of data in commerce and science. 
          This combination gave me more flexibility to learn a myriad of papers such as computer science, business analytics, statistics, information systems and operations management. 
          
        </p>
        <br></br>
        <p className={utilStyles.openingPara}>
          I was able to further develop my skills with python and front end web development that I had already learn for 3 years in high school. 
          I also learnt new skills such as using R to wrangle and analyse data, java programming to develop software applications through object oriented design principles and data modelling like SQL and ERD models. 
          To challenge myself and my skills, I have participated in hackathons and workshops. I also joined the Summer of Tech program and am currently a mentee at Cisco. You can view some of my projects through the work showcase button above. 

        </p>
        <br></br>
        <p className={utilStyles.openingPara}>
          That's enough about me for now. Yours Truly, Jennie. 
        </p>
      </section>
    </Layout>
  );
}
