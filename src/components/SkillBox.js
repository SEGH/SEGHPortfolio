import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGitAlt, faNode, faHtml5, faJsSquare, faCss3Alt, faBootstrap } from "@fortawesome/free-brands-svg-icons";

export default function SkillBox() {
    return (
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
            <Col xs="4" md="3">
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
                <i className="fab icon-mysql" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
            </Col>
            <Col xs="4" md="3">
                <i className="fab icon-mongodb" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
            </Col>
            <Col xs="4" md="3">
                <i className="fab icon-heroku" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
            </Col>
            <Col xs="4" md="3">
                <i className="fab icon-jquery" style={{ fontSize: "3em", position: "relative", top: "-10px" }}></i>
            </Col>
        </Row>
    )
}