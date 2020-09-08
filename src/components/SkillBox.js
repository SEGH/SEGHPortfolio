import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGitAlt, faNode, faHtml5, faJsSquare, faCss3Alt, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { DiMaterializecss } from "react-icons/di";

export default function SkillBox() {
    return (
        <Row id="skillIcons">

            <Col xs="4" md="3" lg={{ size: 2, offset: 1 }}>
                <FontAwesomeIcon icon={faNode} size="3x" />
                <p>Node.js</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="devicon-express-original" style={{ fontSize: "3em" }}></i>
                <p>Express</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="devicon-handlebars-plain" style={{ fontSize: "3em" }}></i>
                <p>Handlebars</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="devicon-sequelize-plain" style={{ fontSize: "3em" }}></i>
                <p>Sequelize</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="fab icon-mysql" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
                <p style={{ marginTop: "-10px" }}>MySQL</p>
            </Col>

            <Col xs="4" md="3" lg={{ size: 2, offset: 1 }}>
                <i className="fab icon-mongodb" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
                <p style={{ marginTop: "-10px" }}>MongoDB</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="fab icon-heroku" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
                <p style={{ marginTop: "-10px" }}>Heroku</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <FontAwesomeIcon icon={faGitAlt} size="3x" />
                <p>Git</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <p>HTML 5</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <p>CSS 3</p>
            </Col>
            <Col xs="4" md="3" lg={{ size: 2, offset: 1 }}>
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <p>Bootstrap</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <DiMaterializecss width="3em" style={{ fontSize: "3.5em"}} />
                <p style={{ marginTop: "5px" }}>Materialize</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <FontAwesomeIcon icon={faJsSquare} size="3x" />
                <p>JavaScript</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <i className="fab icon-jquery" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
                <p style={{ marginTop: "-10px" }}>jQuery</p>
            </Col>
            <Col xs="4" md="3" lg="2">
                <FontAwesomeIcon icon={faReact} spin size="3x" />
                <p>React</p>
            </Col>
        </Row>
    )
}