import "./TextBox.css";
import DesktopTextBox from "./DesktopTextBox";
import MobiltTextBox from "./MobileTextBox";
import React from "react";

export default function TextBox() {

    const width = window.innerWidth;

    const SendEmailHandler = (e) => {
        console.log(e.name, e.email, e.message);
    }

    return <React.Fragment>
    {
        width > 1000?
        <DesktopTextBox UserData={SendEmailHandler} />
        :
        <MobiltTextBox UserData={SendEmailHandler} />
    }
    </React.Fragment>
}