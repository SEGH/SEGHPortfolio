import React from "react";

export default function About() {
    return (
        <section id="main-bio" className="jumbotron bg-light shadow-lg rounded mt-5 p-4">

            <h2 className="display-5">About Me</h2>
            <hr className="my-4" />
            <div className="card border-0">

                <div className="row no-gutters bg-light">

                    <div className="col-md-4">
                        <img src="assets/images/bioimage.jpeg" class="card-img pb-4 rounded-0"
                            alt="Susan Holland profile" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body p-0 px-md-4 mt-n1">
                            <p className="card-text">
                                Now a web developer based in Philadelphia, I previously worked for fifteen years in the
                                coffee industry, most recently for a small local coffee roaster. I first started my
                                coding journey as a hobby when I came across the game Code Combat and was hooked. I also
                                enjoy other hobbies that help to strengthen my problem-solving muscles, including
                                sewing, home DIY projects, and playing piano.
                        </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}
