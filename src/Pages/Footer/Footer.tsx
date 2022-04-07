import React from "react";
import  {Container, Row, Col } from "react-bootstrap";
import { Div } from  './styles';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
      <Div>
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vasco Eti</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} creative Power Dev</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Vasco21"
                style={{ color: "#ff5823" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Qvary34"
                style={{ color: "#ff5823" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vasco-motlalepule-eti-154259193/"
                style={{ color: "#ff5823"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/vascoeti123/?hl=en"
                style={{ color: "#ff5823" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
      </Div>
  );
}
