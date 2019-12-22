import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

const Feed = () => {
    const [feed, setFeed] = useState([]);

    const registerToSocket = () => {
        const socket = io("http://localhost:3333");

        socket.on("post", newPost => {
            setFeed([newPost, ...feed]);
        });

        socket.on("like", likedPost => {
            setFeed([
                feed.map(post => (post._id === likedPost.id ? likedPost : post))
            ]);
        });
    };

    useEffect(() => {
        registerToSocket();

        async function getData() {
            const response = await api.get("posts");

            setFeed(response.data);
        }

        getData();
    }, [feed, registerToSocket]);

    const handleLike = id => {
        api.post(`/posts/${id}/like`);
    };

    return (
        <section id="post-list">
            {feed.length === 0 ? (
                <p className="message">
                    Empty. <br /> Please{" "}
                    <Link className="link" to="/new">
                        create a post
                    </Link>
                    .
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
                                <button
                                    type="button"
                                    onClick={() => handleLike(post._id)}
                                >
                                    <img
                                        src={like}
                                        alt="Like"
                                        className="like"
                                    />
                                </button>
                                <img src={comment} alt="Comment" />
                                <img src={send} alt="Send" />
                            </div>

                            <strong>{post.likes} likes</strong>
                            <p>
                                <span className="author">{post.author}</span>{" "}
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
