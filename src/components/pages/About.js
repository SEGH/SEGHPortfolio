import React from "react";
import image from "../../assets/bioimage.jpeg";
import { Jumbotron, Card, CardText, CardBody, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGitAlt, faNode, faHtml5, faJsSquare, faCss3Alt, faBootstrap } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
        <Jumbotron id="main-bio" className="bg-light shadow-lg rounded mt-5 p-4">

            <h2 className="display-5">About Me</h2>
            <hr className="my-4" />

            <Card className="border-0">

                <Row className="no-gutters bg-light">

                    <Col md="4">
                        <img src={image} class="card-img pb-4 rounded-0"
                            alt="Susan Holland profile" />
                    </Col>

                    <Col md="8">
                        <CardBody className="p-0 px-md-4 mt-n1">
                            <CardText>
                                Now a web developer based in Philadelphia, I previously worked for fifteen years in the
                                coffee industry, most recently for a small local coffee roaster. I first started my
                                coding journey as a hobby when I came across the game Code Combat and was hooked. I also
                                enjoy other hobbies that help to strengthen my problem-solving muscles, including
                                sewing, home DIY projects, and playing piano.
                            </CardText>

                            <Row id="skillIcons">
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faReact} spin size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faGitAlt} size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faNode} size="3x" />
                                </Col>
                                <Col  xs="4" md="3">
                                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faJsSquare} size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <FontAwesomeIcon icon={faBootstrap} size="3x" />
                                </Col>
                                <Col xs="4" md="3">
                                    <i className="fab icon-mysql" style={{ fontSize: "3em", position: "relative", top: "-10px"}}></i>
                                </Col>
                                <Col xs="4" md="3">
                                    <i className="fab icon-mongodb" style={{ fontSize: "3em", position: "relative", top: "-10px"}}></i>
                                </Col>
                                <Col xs="4" md="3">
                                    <i className="fab icon-heroku" style={{ fontSize: "3em", position: "relative", top: "-10px"}}></i>
                                </Col>
                                <Col xs="4" md="3">
                                    <i className="fab icon-jquery" style={{ fontSize: "3em", position: "relative", top: "-10px"}}></i>
                                </Col>
                            </Row>

                        </CardBody>
                    </Col>

                </Row>

            </Card>

        </Jumbotron>
    );
}
