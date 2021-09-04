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
                Data Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Data is an ever growing epidemic with the potential of infinite knowledge. 
                I learnt to wrangle and analyse data using R. 
                I especially enjoyed data mining and collecting data from websites to dissect and find patterns and trends. 
                I also enjoyed using ggplot to present my findings through data visualisation. 
                I have worked with databases using SQLite, DB browser, MySQL, Microsoft SQL Server and data modelling through ERD. 
                Currently, I am learning about amazon cloud services and the endless data amazon is able to store. 
                
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
                Alpha Tester
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Do you ever just start thinking about the craziest ides while taking a shower? 
                One day, while I was showering, I started thinking about creating an app to match students with peers of similar interests and studies using an algorithm based on their personality. 
                I quickly forgot and went on with my life until I saw on reddit that a group of UoA students had actually developed the app. 
                I became very invested in the app and offered to become an early adopter and alpha tester. You may even see some of my ideas becoming features on the app Fistbump. 
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
                Education
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
              To aid my journey in conquering the world using data, I am currently a penultimate Bachelor of Science student at the University of Auckland. 
          I chose to study a double major in IT Management and Statistics to explore both the technical and practical sides of data in commerce and science. 
          This combination gave me more flexibility to learn a myriad of papers such as computer science, business analytics, statistics, information systems and operations management. 
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
                Business
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Everything in life is a process and business is simply a system of processes. 
                Through information systems and business analysis, I was able to learn how to apply the knowledge and information from data to produce business value. 
                I learnt about project initiation and management, how to gather and prioritise requirements and also the agile methodology. 
                I really enjoyed working with my group to produce a project proposal and final deliverable for a job search web portal. 
                We all came from different backgrounds and brought different strengths to the group. 
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
                Continuous improvement
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                "Continuous improvement is better than delayed perfection". 
                In operations management, I learnt about the lean management and decided to adopt this philosophy in my everyday life. 
                To keep building and improving myself, I am actively attending hackathons and workshops. 
                I also joined the Summer of Tech program and am currently a mentee at Cisco.
                Through Cisco, I was able to attend many personal development workshops such as building your personal brand, identifying strengths and leadership. 
                
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
                Coding Journey
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Despite growing up in the small city of Palmerston North, I had the privilege of studying Computer Science since high school. 
                I have learnt python and front end web development for 5 years now. 
                At university, I am currently learning java programming to develop software applications through object oriented design principles.
                Through attending hackathons and workshops, I found that I was able to pick up coding quickly. Here, I was able to experiment with chrome extensions and typescript for React. 
       
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
                Me, Myself and I
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I am passionate about helping others and feel pride and joy from watching those who I have helped succeed. 
                This lead me to become a Teaching Assistant for the Department of Statistics at UoA. 
                I have found that I am able to grasp complex concepts quickly and explain these concepts simply. 


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
                New Year, New Me
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                This year my goal was to try something new and really put myself out there.
                Hence, I decided to join the Auckland Student Pool Association. 
                It was fascinating to meet different people and learn about their backgrounds while playing pool. 
                I have to admit that while my pool skills have been gradually improving, luck is usually what helps me to win. 
                
                

              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    </Layout>
  );
}
