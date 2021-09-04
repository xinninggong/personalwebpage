import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../styles/utils.module.css";

export default function SocialLinks() {
  return (
    <ButtonToolbar
      aria-label="Toolbar with links"
      className="justify-content-center"
    >
      <ButtonGroup aria-label="Social Links" className="mb-4 mr-1">
        <Button variant="secondary" aria-label="Call" href="tel:0800838383">
          <FontAwesomeIcon icon="phone" className={utilStyles.socialIcon} />
        </Button>
        <Button variant="secondary" aria-label="Text" href="sms:0800838383">
          <FontAwesomeIcon icon="sms" className={utilStyles.socialIcon} />
        </Button>
        <Button
          variant="secondary"
          aria-label="Email"
          href="mailto:example@gmail.com"
        >
          <FontAwesomeIcon icon="envelope" className={utilStyles.socialIcon} />
        </Button>
        <Button
          variant="secondary"
          aria-label="GitHub Profile"
          href="https://github.com/example"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={utilStyles.socialIcon}
          />
        </Button>
        <Button
          variant="secondary"
          aria-label="Linked In"
          href="https://www.linkedin.com/in/williamhgates"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={utilStyles.socialIcon}
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Download CV Button" className="ml-1 mb-4">
        <Button
          variant="secondary"
          className={utilStyles.downloadButton}
          href="/files/cv.pdf"
        >
          <FontAwesomeIcon
            icon="file-download"
            className={utilStyles.downloadIcon}
          />
          <div className={utilStyles.downloadText}>Download CV</div>
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
