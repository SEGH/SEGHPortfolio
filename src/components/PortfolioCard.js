import React from "react";
import { Card, CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard(props) {
    return (
        <Card className="col-sm-6 col-lg-4 bg-light border-0 text-light py-3">
            <img src={props.image} className="card-img rounded-top" alt={props.alt} />
            <CardFooter className="bg-warning rounded-bottom">
                <h4 className="card-title text-center">{props.title}</h4>
                <div className="d-flex justify-content-around">
                    <a href={props.deployedLink} target="_blank" className="btn"><FontAwesomeIcon icon={faExternalLinkAlt} size="3x" /></a>
                    <a href={props.repoLink} target="_blank" className="btn"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
                </div>
            </CardFooter>
        </Card>
    );
}
