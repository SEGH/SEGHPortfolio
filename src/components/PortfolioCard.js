import React from "react";
import { Card, CardFooter } from "reactstrap";

export default function PortfolioCard(props) {
    return (
        <Card className="col-sm-6 col-lg-4 bg-light border-0 text-light py-3">
            <img src={props.image} className="card-img rounded-top" alt={props.alt} />
            <CardFooter className="bg-warning rounded-bottom">
                <h4 className="card-title text-center">{props.title}</h4>
                <div className="d-flex justify-content-around">
                    <a href={props.deployedLink} target="_blank" className="btn bg-light text-warning rounded m-2">Deployed App</a>
                    <a href={props.repoLink} target="_blank" className="btn bg-light text-warning rounded m-2">Repository</a>
                </div>
            </CardFooter>
        </Card>
    );
}
