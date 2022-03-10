import { useState } from 'react';
// import '../../../src/App.css'; //
import validateEmail  from '../utils/helpers';


function Contact() {
    const [email, Email] = useState('');
    const [name, Name] = useState('');
    const [message, Message] = useState('');
    const [blurNameMessage, BlurNameMessage] = useState('');
    const [blurEmailMessage, BlurEmailMessage] = useState('');
    const [blurMessage, BlurMessage] = useState('');
    const [errorMessage, ErrorMessage] = useState('');

    const InputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            Name(inputValue);
        } else if (inputType === 'email') {
            Email(inputValue);
        } else {
            Message(inputValue);
        }
    };
    const BlurEmail= (event) => {
        event.preventDefault();
        BlurEmailMessage(`Email is required.`)
    };
    const BlurName= (event) => {
        event.preventDefault();
        BlurNameMessage(`Name is required.`)
    };
    const BlurText= (event) => {
        event.preventDefault();
        BlurMessage(`Message is required.`)
    };

    const formSubmit = (event) => {
        event.preventDefault();

        if(!validateEmail(email)) {
            ErrorMessage('Email address is invalid.');
            return;
        };
        Name('');
        Email('');
        Message('');
    };

    return (
    
        <div className="container-contact">
            <form className = "form">
            <h1 className="contact-header">Loading ... </h1>
                <p className="input-label">Name: </p>
                <input className="input-form"
                value={name}
                name="name"
                onChange={InputChange}
                onBlur={BlurName}
                type="name"
                placeholder="name"
            />
               {blurNameMessage && (
                    <div>
                        <p className="error-text">{blurNameMessage}</p>
                    </div>
                )}
                
                <p className="input-label">Email:</p>
                <input className="input-form"
                value={email}
                name="email"
                onBlur={BlurEmail}
                onChange={InputChange}
                type="email"
                placeholder="email"
            />

                {blurEmailMessage && (
                    <div>
                        <p className="error-text">{blurEmailMessage}</p>
                    </div>
                )}  

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                 
                <p className="input-label">Message me!</p>
                <textarea className="input-form"
                value={message}
                name="message"
                onBlur={BlurText}
                onChange={InputChange}
                type="message"
                placeholder="message"
            />

                {blurMessage && (
                    <div>
                        <p className="error-text">{blurMessage}</p>
                    </div>
                )}  
             
            <button className="btn" type="button" onClick={formSubmit}>
                Submit!
            </button>
            </form>
        </div>
        
    );

}

export default Contact