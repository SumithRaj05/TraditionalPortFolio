import React from "react";
import "./TextBox.css";
import DesktopTextBox from "./DesktopTextBox";
import MobiltTextBox from "./MobileTextBox";
import emailjs from 'emailjs-com';

export default function TextBox() {

    const width = window.innerWidth;

    const SendEmailHandler = (e) => {

        emailjs.sendForm('service_po45yzs', 'template_8pt1g0g', e.target, '5v3z3E-0_Q4STSCwM')
            .then((result) => {
                alert("Email Sent")
            }, (error) => {
                alert("invalid email")
            });
    }

    return <React.Fragment>
        {
            width > 1000 ?
                <DesktopTextBox UserData={SendEmailHandler} />
                :
                <MobiltTextBox UserData={SendEmailHandler} />
        }
    </React.Fragment>
}