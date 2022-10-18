import React, { useState, useEffect } from 'react'

import { submitComment } from '../services';


export default function CommentsForm({ slug }) {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

    useEffect(() => {
        setLocalStorage(window.localStorage);
        const initalFormData = {
            name: window.localStorage.getItem('name'),
            email: window.localStorage.getItem('email'),
            storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
        };
        setFormData(initalFormData);
    }, []);

    const onInputChange = (e) => {
        const { target } = e;
        if (target.type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.checked,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
            }));
        }
    };

    const handlePostSubmission = () => {
        setError(false);
        const { name, email, comment, storeData } = formData;
        if (!name || !email || !comment) {
            setError(true);
            return;
        }
        const commentObj = { name, email, comment, slug };

        if (storeData) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
        }

        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {
                    if (!storeData) {
                        formData.name = '';
                        formData.email = '';
                    }
                    formData.comment = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    };


    return (
        <div>CommentsForm</div>
    )
}
