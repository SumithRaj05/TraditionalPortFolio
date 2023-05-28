import React from "react";
import "./SkillBar.css";

export default function SkillBar(props) {

    return (
        <React.Fragment>
            <h1 className="skillFont">{props.Skill}</h1>
            <div className="SkillLine">
                <div className={`point1 ${props.Points >= 1 ? "active" : ""}`}></div>
                <div className={`point2 ${props.Points >= 2 ? "active" : ""}`}></div>
                <div className={`point3 ${props.Points >= 3 ? "active" : ""}`}></div>
                <div className={`point4 ${props.Points >= 4 ? "active" : ""}`}></div>
                <div className={`point5 ${props.Points >= 5 ? "active" : ""}`}></div>
            </div>
        </React.Fragment>
    )
}