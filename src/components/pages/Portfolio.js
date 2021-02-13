import React from "react";
import { Jumbotron, Row } from "reactstrap";
import PortfolioCard from "../PortfolioCard";
import returnSafeSVG from "../../assets/returnSafe.svg";
import bookNookSVG from "../../assets/booknook.svg";
import daySchedulerSVG from "../../assets/dayscheduler.svg";
import notesSVG from "../../assets/notes.svg";
import lyricDashSVG from "../../assets/lyricDash.svg";
import weatherSVG from "../../assets/weather.svg";
import burgerSVG from "../../assets/burger.svg";
import searchBooksSVG from "../../assets/searchBooks.svg";
import bookNook from "../../assets/booknook.png";
import dayScheduler from "../../assets/dayscheduler.png";
import notes from "../../assets/notes.png";
import lyricDash from "../../assets/lyricDash.png";
import weather from "../../assets/weather.png";
import burger from "../../assets/burger.png";
import returnSafe from "../../assets/returnSafe.png";
import searchBooks from "../../assets/searchBooks.png";

export default function Portfolio() {

    return (
        <Jumbotron id="portfolio" className="bg-light shadow-lg rounded mt-5 p-4">

            <h2 className="display-5">Portfolio</h2>
            <hr className="my-4" />
            <Row>
                <PortfolioCard image={returnSafe} svg={returnSafeSVG} alt={"Return Safe"} title={"Return Safe"} description={"Allows schools and businesses to track users' locations and symptoms for contact tracing"} deployedLink={"https://return-safe.herokuapp.com/"} repoLink={"https://github.com/SEGH/Return-Safe"} tools={["mongodb", "express", "react", "node", "materialize", "React-Calender", "Google-Maps-React"]} />
                <PortfolioCard image={searchBooks} svg={searchBooksSVG} alt={"Book Search"} title={"Book Search"} description={"Search for books and save to a list"} deployedLink={"https://book-srch.herokuapp.com/"} repoLink={"https://github.com/SEGH/bookSearch"} tools={["mongodb", "express", "react", "node", "materialize", "GoogleBooks API"]} />
                <PortfolioCard image={lyricDash} svg={lyricDashSVG} alt={"Lyric Dash"} title={"Lyric Dash"} description={"Make playlists of your favorite songs and quickly access the lyrics"} deployedLink={"https://lyric-dash.herokuapp.com/"} repoLink={"https://github.com/SEGH/lyricDash"} tools={["mySql", "express", "sequelize", "node", "handlebars", "jquery", "Bulma CSS"]} />
                <PortfolioCard image={burger} svg={burgerSVG} alt={"BurgerApp project"} title={"Burger App"} description={"Enter burger orders and note when they are completed"} deployedLink={"https://enthousiaste-choucroute-00740.herokuapp.com/"} repoLink={"https://github.com/SEGH/burger"} tools={["mySql", "express", "node", "handlebars", "jquery", "bootstrap"]} />
                <PortfolioCard image={notes} svg={notesSVG} alt={"takeNotes project"} title={"Note Taker"} description={"Create, save, and delete notes"} deployedLink={"https://takenotes-22639.herokuapp.com"} repoLink={"https://github.com/SEGH/takeNotes"} tools={["express", "node", "javaScript", "jquery", "html", "css", "bootstrap"]} />
                <PortfolioCard image={dayScheduler} svg={daySchedulerSVG} alt={"Scheduler project"} title={"Day Scheduler"} description={"Schedule tasks and events for multiple days"} deployedLink={"https://segh.github.io/DayScheduler/"} repoLink={"https://github.com/SEGH/DayScheduler"} tools={["javaScript", "jquery", "html", "css", "bootstrap", "Moment.js"]} />
                <PortfolioCard image={weather} svg={weatherSVG} alt={"Weather dashboard"} title={"Weather Dashboard"} description={"Search for weather in your selected cities"} deployedLink={"https://segh.github.io/WeatherDashboard/"} repoLink={"https://github.com/SEGH/WeatherDashboard"} tools={["javaScript", "jquery", "html", "css", "bootstrap", "OpenWeather API", "Moment.js"]} />
                <PortfolioCard image={bookNook} svg={bookNookSVG} alt={"Book Nook"} title={"Book Nook"} description={"Get book suggestions based on your favorite movies"} deployedLink={"https://segh.github.io/Book-Nook/"} repoLink={"https://github.com/SEGH/Book-Nook"} tools={["javaScript", "jquery", "html", "css", "Foundation CSS", "OMDB, iTunes, Bing APIs"]} />
            </Row>

        </Jumbotron>
    );
}
