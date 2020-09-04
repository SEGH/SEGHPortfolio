import React from "react";
import image from "../../assets/bioimage.jpeg";
import { Jumbotron, Card, CardText, CardBody, Row, Col } from "reactstrap";
import SkillBox from "../SkillBox";

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
                                Full Stack Web Developer with a passion for balancing form and function to create efficient, enjoyable applications. Recently earned a Full Stack Coding Certificate from the University of Pennsylvania. Proven skills from experience running small businesses include problem-solving in fast-paced environments, organization, and ability to quickly adapt to changing circumstances. Reputation among supervisors and peers for clear communication, attention to detail, and enthusiastic collaboration.
                            </CardText>

                            <SkillBox />

                        </CardBody>
                    </Col>

                </Row>

            </Card>

        </Jumbotron>
    );
}
