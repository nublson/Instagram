import React, { useState, useEffect } from "react";

import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

const Feed = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await api.get("posts");

            setFeed(response.data);
        }

        getData();
    });

    return (
        <section id="post-list">
            {feed.length === 0 ? (
                <p className="message">
                    Empty. <br /> Please create a post.
                </p>
            ) : (
                feed.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>

                            <img src={more} alt="Mais" />
                        </header>
                        <img
                            src={`http://localhost:3333/files/${post.image}`}
                            alt="Post"
                        />

                        <footer>
                            <div className="actions">
                                <img src={like} alt="Like" />
                                <img src={comment} alt="Comment" />
                                <img src={send} alt="Send" />
                            </div>

                            <strong>{post.likes} likes</strong>
                            <p>
                                {post.description} <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                ))
            )}
        </section>
    );
};

export default Feed;
