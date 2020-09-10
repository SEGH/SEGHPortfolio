import React from "react";
import { Jumbotron, Row } from "reactstrap";
import PortfolioCard from "../PortfolioCard";
import bookNook from "../../assets/768-booknook.png";
import dayScheduler from "../../assets/768-dayscheduler.png";
import notes from "../../assets/768-notes.png";
import plasma from "../../assets/768-plasma.png";
import weather from "../../assets/768-weather.png";
import burger from "../../assets/768alldone.png";
import returnSafe from "../../assets/returnSafe.png";
import searchBooks from "../../assets/searchBooks.png";

export default function Portfolio() {
    return (
        <Jumbotron id="portfolio" className="bg-light shadow-lg rounded mt-5 p-4">

            <h2 className="display-5">Portfolio</h2>
            <hr className="my-4" />
            <Row>
                <PortfolioCard image={returnSafe} alt={"Return Safe"} title={"Return Safe"} description={"Allows schools and businesses to track users' locations and symptoms for contact tracing"} deployedLink={"https://return-safe.herokuapp.com/"} repoLink={"https://github.com/SEGH/Return-Safe"} tools={["mongodb", "express", "react", "node", "materialize", "React-Calender", "Google-Maps-React"]} />
                <PortfolioCard image={searchBooks} alt={"Book Search"} title={"Book Search"} description={"Search for books and save to a list"} deployedLink={"https://googlebooks-80891.herokuapp.com/"} repoLink={"https://github.com/SEGH/bookSearch"} tools={["mongodb", "express", "react", "node", "materialize", "GoogleBooks API"]} />
                <PortfolioCard image={plasma} alt={"PLASMA project"} title={"PLASMA Dashboard"} description={"Make playlists of your favorite songs and quickly access the lyrics"} deployedLink={"https://plasma-playlistdashboard.herokuapp.com/"} repoLink={"https://github.com/SEGH/PLASMA"} tools={["mySql", "express", "sequelize", "node", "handlebars", "jquery", "Bulma CSS"]} />
                <PortfolioCard image={burger} alt={"BurgerApp project"} title={"Burger App"} description={"Enter burger orders and note when they are completed"} deployedLink={"https://enthousiaste-choucroute-00740.herokuapp.com/"} repoLink={"https://github.com/SEGH/burger"} tools={["mySql", "express", "node", "handlebars", "jquery", "bootstrap"]} />
                <PortfolioCard image={notes} alt={"takeNotes project"} title={"Note Taker"} description={"Create, save, and delete notes"} deployedLink={"https://takenotes-22639.herokuapp.com"} repoLink={"https://github.com/SEGH/takeNotes"} tools={["express", "node", "javaScript", "jquery", "html", "css", "bootstrap"]} />
                <PortfolioCard image={dayScheduler} alt={"Scheduler project"} title={"Day Scheduler"} description={"Schedule tasks and events for multiple days"} deployedLink={"https://segh.github.io/DayScheduler/"} repoLink={"https://github.com/SEGH/DayScheduler"} tools={["javaScript", "jquery", "html", "css", "bootstrap", "Moment.js"]} />
                <PortfolioCard image={weather} alt={"Weather dashboard"} title={"Weather Dashboard"} description={"Search for weather in your selected cities"} deployedLink={"https://segh.github.io/WeatherDashboard/"} repoLink={"https://github.com/SEGH/WeatherDashboard"} tools={["javaScript", "jquery", "html", "css", "bootstrap", "OpenWeather API", "Moment.js"]} />
                <PortfolioCard image={bookNook} alt={"Book Nook"} title={"Book Nook"} description={"Get book suggestions based on your favorite movies"} deployedLink={"https://segh.github.io/Book-Nook/"} repoLink={"https://github.com/SEGH/Book-Nook"} tools={["javaScript", "jquery", "html", "css", "Foundation CSS", "OMDB, iTunes, Bing APIs"]} />
            </Row>

        </Jumbotron>
    );
}
