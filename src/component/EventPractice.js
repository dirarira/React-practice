import { React, Component, useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({userName:'', message:''});
    const {userName, message} = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(userName + ' : ' + message);
        setForm({userName:'', message:''});
    }

    return (
        <div>
            <input type="text" name="userName" placeholder="Name" 
                    value={userName} onChange={onChange}/>
            <input type="text" name="message" placeholder="message" 
                    value={message} onChange={onChange}/>
            <div>
                <button onClick={onClick}>Click</button>
            </div>
        </div>
    )
};

export default EventPractice;