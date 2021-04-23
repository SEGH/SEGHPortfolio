import React, { useState } from "react";
import image from "../../assets/bioimage.jpeg";
import svg from "../../assets/bioimage.svg";
import { Jumbotron, Card, CardText, CardBody, Row, Col } from "reactstrap";
import SkillBox from "../SkillBox";

export default function About() {
    const [loaded, setLoaded] = useState(false);
    const [source, setSource] = useState(svg);
    const img = new Image();
    img.src = image;

    img.onload = () => {
        setSource(image)
    }

    return (
        <main id="main-bio" style={{ opacity: loaded && 1 }}>

            <h2 className="display-5">About Me</h2>

            <Card className="border-0 bg-transparent">

                <Row className="no-gutters bg-transparent">

                    <Col md="4" className="pb-4">
                        <img src={source} className="card-img rounded-circle"
                            alt="Susan Holland profile" onLoad={() => {setLoaded(true)}} />
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

        </main>
    );
}
