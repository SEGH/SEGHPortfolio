import React, { useState } from "react";
import image from "../../assets/bioimage.jpeg";
import svg from "../../assets/bioimage.svg";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
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

            <Card className="border-0 bg-transparent">

                <Row className="no-gutters bg-transparent">

                    <Col md="4" className="pb-4">
                        <img src={source} className="card-img rounded-circle"
                            alt="Susan Holland profile" onLoad={() => { setLoaded(true) }} />
                    </Col>

                    <Col md="8">
                        <h2 className="display-3 px-md-4">Hello World! I'm Susan</h2>
                        <CardBody className="p-0 px-md-4 lead">
                            <CardText>
                                A purpose-driven Full Stack Web Developer with a passion for balancing form and function to create efficient, enjoyable applications. Proven skills from a career in the foodservice industry include problem-solving in fast-paced environments, organization, and the ability to quickly adapt to changing circumstances. Reputation among supervisors, clients, and peers for clear communication, attention to detail, and enthusiastic collaboration. Eager to combine teamwork experience with technical skills to help find creative solutions when implementing new features and products.
                            </CardText>

                        </CardBody>
                    </Col>

                </Row>

            </Card>

            <SkillBox />

        </main>
    );
}
