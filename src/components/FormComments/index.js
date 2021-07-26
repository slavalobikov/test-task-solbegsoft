import React from 'react';
import {Formik, Field} from "formik";

import s from "./FormComments.module.css";


const FormComments = ({id, info, isFetchingSendComment, sendCommentThunk}) => {

        const nameValidate = (values) => {
            let err
            if (!values) {
                err = 'Вы не ввели имя!'
            } else if (values.length < 3) {
                err = 'Имя слишком короткое!'
            }
            return err
        }

        const commentValidate = (values) => {
            let err
            if (!values) {
                err = 'Вы не ввели коментарий!'
            } else if (values.length < 5) {
                err = 'Коментарий слишком короткий!'
            }
            return err
        }

        return (
            <div className={s.form}>

                <Formik
                    initialValues={{
                        name: '',
                        comment: '',
                    }}
                    validateOnBlur
                    onSubmit={(values, {resetForm}) => {
                        sendCommentThunk(id, values, {
                            "id": info.comments.length,
                            "text": values.comment,
                            "date": Date.now()
                        })
                        resetForm()
                    }}>
                    {(
                        {
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isValid,
                            validate,
                            handleSubmit,
                            dirty
                        }) => (<>
                            <Field
                                className={s.input}
                                placeholder="Ваше имя"
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                validate={nameValidate}
                                type="text"/>
                            {(touched.name && errors.name) && <span className={s.err}>{errors.name}</span>}
                            <Field
                                className={s.input}
                                placeholder="Ваш комментарий"
                                name='comment'
                                onBlur={handleBlur}
                                value={values.comment}
                                validate={commentValidate}
                                type="text"/>
                            {(touched.comment && errors.comment) && <span className={s.err}>{errors.comment}</span>}

                            {!isFetchingSendComment && <button
                                className={s.btn}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={`submit`}
                            >Оставить комментарий
                            </button>}
                            {isFetchingSendComment &&
                            <button disabled={true} className={`${s.btn} ${s.btnDisabled}`}></button>}
                        </>
                    )}
                </Formik>
            </div>
        );
    }
;

export default FormComments;