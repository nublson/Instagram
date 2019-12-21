import React from "react";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

const Feed = () => {
    return (
        <section id="post-list">
            <article>
                <header>
                    <div className="user-info">
                        <span>Nubelson Fernandes</span>
                        <span className="place">Porto</span>
                    </div>

                    <img src={more} alt="Mais" />
                </header>
                <img
                    src="http://localhost:3333/files/roman-synkevych-vXInUOv1n84-unsplash.jpg"
                    alt="Post"
                />

                <footer>
                    <div className="actions">
                        <img src={like} alt="Like" />
                        <img src={comment} alt="Comment" />
                        <img src={send} alt="Send" />
                    </div>

                    <strong>900 likes</strong>
                    <p>
                        Roadmap for a All Developer!{" "}
                        <span>
                            #self-taugth #buildupdevs #selflearning
                            #fullstackdeveloper
                        </span>
                    </p>
                </footer>
            </article>
            <article>
                <header>
                    <div className="user-info">
                        <span>Nubelson Fernandes</span>
                        <span className="place">Porto</span>
                    </div>

                    <img src={more} alt="Mais" />
                </header>
                <img
                    src="http://localhost:3333/files/roman-synkevych-vXInUOv1n84-unsplash.jpg"
                    alt="Post"
                />

                <footer>
                    <div className="actions">
                        <img src={like} alt="Like" />
                        <img src={comment} alt="Comment" />
                        <img src={send} alt="Send" />
                    </div>

                    <strong>900 likes</strong>
                    <p>
                        Roadmap for a All Developer!{" "}
                        <span>
                            #self-taugth #buildupdevs #selflearning
                            #fullstackdeveloper
                        </span>
                    </p>
                </footer>
            </article>
            <article>
                <header>
                    <div className="user-info">
                        <span>Nubelson Fernandes</span>
                        <span className="place">Porto</span>
                    </div>

                    <img src={more} alt="Mais" />
                </header>
                <img
                    src="http://localhost:3333/files/roman-synkevych-vXInUOv1n84-unsplash.jpg"
                    alt="Post"
                />

                <footer>
                    <div className="actions">
                        <img src={like} alt="Like" />
                        <img src={comment} alt="Comment" />
                        <img src={send} alt="Send" />
                    </div>

                    <strong>900 likes</strong>
                    <p>
                        Roadmap for a All Developer!{" "}
                        <span>
                            #self-taugth #buildupdevs #selflearning
                            #fullstackdeveloper
                        </span>
                    </p>
                </footer>
            </article>
        </section>
    );
};

export default Feed;
