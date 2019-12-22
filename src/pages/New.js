import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import api from "../services/api";

import "./New.css";

const New = () => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                image: null,
                author: "",
                place: "",
                description: "",
                hashtags: ""
            }}
            onSubmit={async values => {
                const data = new FormData();
                data.append("image", values.image);
                data.append("author", values.author);
                data.append("place", values.place);
                data.append("description", values.description);
                data.append("hashtags", values.hashtags);

                await api.post("/posts", data);

                history.push("/");
            }}
        >
            {props => (
                <Form id="new-post">
                    <input
                        type="file"
                        name="image"
                        onChange={e => {
                            props.values.image = e.currentTarget.files[0];
                        }}
                    />

                    <Field
                        type="text"
                        name="author"
                        placeholder="Autor do post"
                    />
                    <Field
                        type="text"
                        name="place"
                        placeholder="Local do post"
                    />
                    <Field
                        type="text"
                        name="description"
                        placeholder="Descrição do post"
                    />
                    <Field
                        type="text"
                        name="hashtags"
                        placeholder="Hashatgs do post"
                    />

                    <button type="submit">Enviar</button>
                </Form>
            )}
        </Formik>
    );
};

export default New;
