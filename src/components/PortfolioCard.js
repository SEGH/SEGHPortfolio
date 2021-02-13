import React, { useState } from "react";
import { Card, CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faHtml5, faJsSquare, faCss3Alt, faBootstrap, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import { DiMaterializecss } from "react-icons/di";

export default function PortfolioCard({image, svg, alt, title, description, deployedLink, repoLink, tools}) {
    const [imageSource, setSource] = useState(svg);
    const img = new Image();
    img.src = image;
    img.onload = () => {
        setSource(image)
    }

    return (
        <Card className="col-sm-6 col-lg-4 bg-light border-0 text-light py-3">
            <img src={imageSource} className="card-img rounded-top" alt={alt} />
            <CardFooter className="rounded-bottom">
                <div className="d-flex justify-content-between pb-1">
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer" title="Deployed App" className="btn"><FontAwesomeIcon icon={faExternalLinkAlt} size="2x" /></a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" title="GitHub Repo" className="btn"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a>
                </div>
                <h4 className="card-title text-center">{title}</h4>
                <p>{description}</p>
                <div id="toolBox" className="d-flex justify-content-between">
                    {tools ? tools.map(tool => {
                        switch (tool) {
                            case "node":
                                return <FontAwesomeIcon icon={faNode} size="2x" title="Node.JS" key={title + tool} />
                            case "html":
                                return <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" key={title + tool} />
                            case "css":
                                return <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" key={title + tool} />
                            case "javaScript":
                                return <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" key={title + tool} />
                            case "bootstrap":
                                return <FontAwesomeIcon icon={faBootstrap} size="2x" title="Bootstrap" key={title + tool} />
                            case "react":
                                return <FontAwesomeIcon icon={faReact} size="2x" title="React" key={title + tool} />
                            case "mongodb":
                                return <i className="fab icon-mongodb" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="MongoDB" key={title + tool}></i>
                            case "express":
                                return <i className="devicon-express-original" style={{ fontSize: "2em" }} title="Express" key={title + tool}></i>
                            case "handlebars":
                                return <i className="devicon-handlebars-plain" style={{ fontSize: "2em" }} title="Handlebars" key={title + tool}></i>
                            case "sequelize":
                                return <i className="devicon-sequelize-plain" style={{ fontSize: "2em" }} title="Sequelize" key={title + tool}></i>
                            case "mySql":
                                return <i className="fab icon-mysql" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="MySQL" key={title + tool}></i>
                            case "materialize":
                                return <DiMaterializecss style={{ fontSize: "2.5em"}} title="Materialize" key={title + tool} />
                            case "jquery":
                                return <i className="fab icon-jquery" style={{ fontSize: "2em", position: "relative", top: "-7px" }} title="jQuery" key={title + tool}></i>
                            default:
                                return <FontAwesomeIcon icon={faCode} style={{ fontSize: "1.5em", position:"relative", top: "3px" }} title={tool} key={title + tool} />;
                        }
                    }) : <FontAwesomeIcon icon={faGithubAlt} size="2x" />}
                </div>
            </CardFooter>
        </Card>
    );
}
