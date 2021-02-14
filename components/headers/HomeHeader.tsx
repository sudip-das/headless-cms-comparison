import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import illustration from "../../styles/images/illustration.svg";
import {Arrow} from '../Arrow';
import Image from "next/image";

const HomeHeader = () => {

  return (
      <header>
        <Container>
          <Row>
            <Col className="col-6 align-self-center">
              <h1>Welcome to the Headless CMS Comparison Website</h1>
              <h3>Find the perfect headless CMS for your requirements!</h3>
            </Col>
            <Col className="col-6 align-self-center hero">
                <Image src={illustration} width={500} height={500} layout={"responsive"}/>
            </Col>
          </Row>

        </Container>
         <Arrow />
      </header>
  );
};

export default HomeHeader;
