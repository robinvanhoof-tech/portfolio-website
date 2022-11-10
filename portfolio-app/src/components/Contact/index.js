import React from "react";
import { Card, CardMedia, CardActions, CardContent, Typography, Button, TextField } from "@mui/material";
import emailjs from '@emailjs/browser';

import './contact.scss';

import SelfPortrait from '../../assets/images/portrait.jpeg'

const SendEmail = async (e) => { 
    let target = e.currentTarget;
    var data = {
        'from_name': target.elements.name.value,
        'correspondence_email': target.elements.email.value,
        'message': target.elements.message.value
    };

    e.preventDefault();
    document.getElementsByName("MUIsubmitButton")[0].innerHTML = "Sending...";

    await emailjs.send('service_onpqodc', 'template_dev4t4j', data, 'Fodo5tcKjHXheQU7N').then(
        function (response) {
            document.getElementsByName("MUIsubmitButton")[0].innerHTML = "Message sent!";
            target.elements.name.value = "";
            target.elements.email.value = "";
            target.elements.message.value= "";
        },
        function (error) {
            document.getElementsByName("MUIsubmitButton")[0].innerHTML = "Couln't send message";
        }
    );   
}

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="email-wrapper">                
                <div className="email-section">
                    <div className="email-card">
                        <div className="email-title"><center>Send me a message!</center></div>
                        <form onSubmit={SendEmail} >
                            <label>Name</label><br />
                            <input name="name" label="Name" type="text" className="textbox" required/>                            
                            <br /><br />

                            <label>Correspondence email</label><br/>
                            <input name="email" label="Email" type="text" className="textbox" />
                            <br /><br />

                            <label>Message</label><br/>
                            <textarea name="message" label="Message" className="textbox message-textbox" required/>
                            <br /><br />

                            <Button name="MUIsubmitButton" type="submit" variant="contained" className="submit-button" value="Test">Send message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <center>
                <h1>
                    Under construction!
                </h1>
            </center>
        </div>
    )
}

export default Contact;