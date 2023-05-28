import "./Projects.css";
import Card from "./Card/Card";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

import nodejs from "./icons/nodejs.png";
import expo from "./icons/expo.jpg";
import cpp from "./icons/cpp.png";
import mongo from "./icons/mongo.png";
import react from "./icons/react.png";
import json from "./icons/json.png";

export default function Projects() {

    const [middleCard, setMiddleCard] = useState(0);

    useEffect(() => {
        const handleScroll = debounce(() => {
            const container = document.querySelector(".horizontal-scroll-container");
            const containerRect = container.getBoundingClientRect();
            const cards = container.querySelectorAll(".card");

            let minDistance = Infinity;
            let middleCard = cards[0];

            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const distance = Math.abs(
                    containerRect.left +
                    containerRect.width / 2 -
                    (cardRect.left + cardRect.width / 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    middleCard = index;
                }
            });

            setMiddleCard(middleCard);
        }, 100);

        const container = document.querySelector(".horizontal-scroll-container");
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scrollend", handleScroll);
        };
    }, []);

    const leftHandler = () => {
        const ProjectContainer = document.querySelector(".horizontal-scroll-container")
        ProjectContainer.scrollBy(-150, 0)
    }

    const rightHandler = () => {
        const ProjectContainer = document.querySelector(".horizontal-scroll-container")
        ProjectContainer.scrollBy(150, 0)
    }

    useEffect(() => {
        const container = document.querySelector(".horizontal-scroll-container");
        if (container) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                })
            })
            observer.observe(container);
        }
    }, [])

    return (
        <section className="ProjectsSection" id="Projects">
            <h1 className="ProjectHeader">Projects</h1>
            <div 
                className="LeftNavigator"
                style={middleCard === 0 ?
                    { opacity: 0, pointerEvents: "none" }
                    :
                    { opacity: 0.8 }}
                onClick={leftHandler}
            >
                <h1 className="leftArrow">&#60;</h1>
            </div>
            <div className="horizontal-scroll-container">
                <div className="content">
                    <Card
                        Title="Registration System"
                        Tools={
                            <React.Fragment>
                                <img src={cpp} alt="" className="ProjectIcons" />
                                <img src={json} alt="" className="ProjectIcons" />
                            </React.Fragment>
                        }
                        Description={
                            <React.Fragment>
                                A simple project to demonstrate <br />
                                how DataBase actually works.<br />
                                In this project, JSON format <br />
                                is used in order to store <br />
                                the data.
                            </React.Fragment>
                        }
                        demo={false}
                        GitLink="https://github.com/SumithRaj05/Registration-System-CPP"
                        isActive={middleCard === 0}
                    />
                    <Card
                        Title="Todo App"
                        Tools={
                            <React.Fragment>
                                <img src={react} alt="" className="ProjectIcons" />
                                <img src={mongo} alt="" className="ProjectIcons" style={{ height: "45px", width: "80px" }} />
                                <img src={nodejs} alt="" className="ProjectIcons" />
                            </React.Fragment>
                        }
                        Description={
                            <React.Fragment>
                                The project is MERN based.<br />
                                Showcase of MongoDB's CRUD <br />
                                operations to create, read, update<br />
                                and delete the todo list data.
                            </React.Fragment>
                        }
                        demo={true}
                        GitLink="https://github.com/SumithRaj05/TodoApp_MERN"
                        DemoLink="https://srtaskmanager.netlify.app/"
                        isActive={middleCard === 1}
                    />
                    <Card
                        Title="HappyBirthday"
                        Tools={
                            <React.Fragment>
                                <img src={react} alt="" className="ProjectIcons" />
                                <img src={expo} alt="" className="ProjectIcons" />
                            </React.Fragment>
                        }
                        Description={
                            <React.Fragment>
                                Android app using Expo React<br />
                                Native. This Project showcase my <br />
                                first experience with React Native, <br />
                                demonstrates my ability to quickly <br />
                                learn new technologies.
                            </React.Fragment>
                        }
                        demo={false}
                        GitLink="https://github.com/SumithRaj05/HappyBirthday-ExpoReactNative"
                        isActive={middleCard === 2}
                    />
                    <Card
                        Title="Portfolio"
                        Tools={
                            <React.Fragment>
                                <img src={react} alt="" className="ProjectIcons" />
                            </React.Fragment>
                        }
                        Description={
                            <React.Fragment>
                                My portfolio website, where <br />
                                I showcase my exceptional skills <br />
                                in React and demonstrate my <br />
                                boundless creativity.
                            </React.Fragment>
                        }
                        demo={true}
                        GitLink=""
                        DemoLink=""
                        isActive={middleCard === 3}
                    />
                    <div className="spacer"></div>
                </div>
            </div>
            <div 
                className="RightNavigator"
                style={middleCard === 3 ?
                    { opacity: 0, pointerEvents: "none" }
                    :
                    { opacity: 0.8 }}
                onClick={rightHandler}
            >
                <h1 className="rightArrow">&#62;</h1>
            </div>
        </section >
    )
}