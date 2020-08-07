import React from "react";
import PortfolioCard from "../PortfolioCard";
import bookNook from "../../assets/768-booknook.png";
import dayScheduler from "../../assets/768-dayscheduler.png";
import notes from "../../assets/768-notes.png";
import plasma from "../../assets/768-plasma.png";
import weather from "../../assets/768-weather.png";
import burger from "../../assets/768alldone.png";

export default function Portfolio() {
    return (
        <section id="portfolio" className="jumbotron bg-light shadow-lg rounded mt-5 p-4">

            <h2 className="display-5">Portfolio</h2>
            <hr className="my-4" />
            <div className="row">
                <PortfolioCard image={plasma} alt={"PLASMA project"} title={"PLASMA Dashboard"} deployedLink={"https://plasma-playlistdashboard.herokuapp.com/"} repoLink={"https://github.com/SEGH/PLASMA"}/>
                <PortfolioCard image={burger} alt={"BurgerApp project"} title={"Burger App"} deployedLink={"https://enthousiaste-choucroute-00740.herokuapp.com/"} repoLink={"https://github.com/SEGH/burger"}/>
                <PortfolioCard image={notes} alt={"takeNotes project"} title={"Note Taker"} deployedLink={"https://takenotes-22639.herokuapp.com"} repoLink={"https://github.com/SEGH/takeNotes"}/>
                <PortfolioCard image={dayScheduler} alt={"Scheduler project"} title={"Day Scheduler"} deployedLink={"https://segh.github.io/DayScheduler/"} repoLink={"https://github.com/SEGH/DayScheduler"}/>
                <PortfolioCard image={weather} alt={"Weather dashboard"} title={"Weather Dashboard"} deployedLink={"https://segh.github.io/WeatherDashboard/"} repoLink={"https://github.com/SEGH/WeatherDashboard"}/>
                <PortfolioCard image={bookNook} alt={"Book Nook"} title={"Book Nook"} deployedLink={"https://segh.github.io/Book-Nook/"} repoLink={"https://github.com/SEGH/Book-Nook"}/>
            </div>

        </section>
    );
}
