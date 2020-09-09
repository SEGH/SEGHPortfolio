import React from "react";
import { Card, CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faHtml5, faJsSquare, faCss3Alt, faBootstrap, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import { DiMaterializecss } from "react-icons/di";

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
                <div id="toolBox" className="d-flex justify-content-between">
                    {props.tools ? props.tools.map(tool => {
                        switch (tool) {
                            case "node":
                                return <FontAwesomeIcon icon={faNode} size="2x" title="Node.JS" />
                            case "html":
                                return <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
                            case "css":
                                return <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" />
                            case "javaScript":
                                return <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" />
                            case "bootstrap":
                                return <FontAwesomeIcon icon={faBootstrap} size="2x" title="Bootstrap" />
                            case "react":
                                return <FontAwesomeIcon icon={faReact} size="2x" title="React" />
                            case "mongodb":
                                return <i className="fab icon-mongodb" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="MongoDB"></i>
                            case "express":
                                return <i className="devicon-express-original" style={{ fontSize: "2em" }} title="Express"></i>
                            case "handlebars":
                                return <i className="devicon-handlebars-plain" style={{ fontSize: "2em" }} title="Handlebars"></i>
                            case "sequelize":
                                return <i className="devicon-sequelize-plain" style={{ fontSize: "2em" }} title="Sequelize"></i>
                            case "mySql":
                                return <i className="fab icon-mysql" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="MySQL"></i>
                            case "materialize":
                                return <DiMaterializecss style={{ fontSize: "2.5em"}} title="Materialize" />
                            case "jquery":
                                return <i className="fab icon-jquery" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="jQuery"></i>
                            default:
                                return <FontAwesomeIcon icon={faCode} style={{ fontSize: "1.5em", position:"relative", top: "3px" }} title={tool} />;
                        }
                    }) : <FontAwesomeIcon icon={faGithubAlt} size="2x" />}
                </div>
            </CardFooter>
        </Card>
    );
}
