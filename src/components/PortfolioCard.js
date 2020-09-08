import React from "react";
import { Card, CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard(props) {
    return (
        <Card className="col-sm-6 col-lg-4 bg-light border-0 text-light py-3">
            <img src={props.image} className="card-img rounded-top" alt={props.alt} />
            <CardFooter className="rounded-bottom">
                <div className="d-flex justify-content-between pb-1">
                    <a href={props.deployedLink} target="_blank" rel="noopener noreferrer" title="Deployed App" className="btn"><FontAwesomeIcon icon={faExternalLinkAlt} size="2x" /></a>
                    <a href={props.repoLink} target="_blank" rel="noopener noreferrer" title="GitHub Repo" className="btn"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a>
                </div>
                <h4 className="card-title text-center">{props.title}</h4>
                <p>{props.description}</p>
            </CardFooter>
        </Card>
    );
}
