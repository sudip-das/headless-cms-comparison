import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const year = new Date().getFullYear();

export const Footer = (): JSX.Element => {

    return (

        <footer>
            <Container>
                <Row>
                    <Col>
                        <p>
                            CMS Comparison is maintained by{" "}
                            <a href={'#'} target="_blank" rel="noopener noreferrer">
                                Gentics
                            </a>
                            .
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        ©{" "}
                        <a href={'#'} target="_blank" rel="noopener noreferrer">
                            Gentics
                        </a>
                        , 2020{year > 2020 ? `-${year}` : null}.

                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
