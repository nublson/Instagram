import React from "react";
import { Formik, Form, Field } from "formik";

import "./New.css";

const New = () => {
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
                console.log(values);
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
