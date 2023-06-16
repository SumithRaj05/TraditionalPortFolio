import React, { useEffect, useState } from "react";
import "./Scroll.css";

export default function Scroll() {
    const [scrollY, setScrollY] = useState(0);
    const [content, setContent] = useState("");
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const contentElement = document.querySelector(".ScrollContent");
        const handleListener = () => {
            setScrollY(Math.round((window.scrollY * 100) / scrollHeight));
            if (contentElement) {
                if (scrollY >= 15 && scrollY <= 40) {
                    setTimeout(() => {
                        setContent(
                            <React.Fragment>
                                Hi, I'm <strong> Sumith</strong>, a <strong>B.Tech</strong> student with a keen interest in <strong>web development</strong>. I am passionate about creating visually appealing and interactive websites using modern technologies. During my studies, I have gained a solid foundation in programming languages such as <strong>HTML, CSS and JavaScript</strong>. I have also acquired experience in front-end development frameworks like <strong>React</strong>, which I utilize to build dynamic and responsive web applications. I am a <strong>quick learner</strong>, always eager to explore new technologies and stay updated with the latest trends in web development. Currently, I am actively seeking opportunities to apply my knowledge and skills in real-world projects. I would love to contribute and grow as a web developer.
                            </React.Fragment>
                        );
                    }, 2000);
                    setScrolled(true);
                } else {
                    setContent("");
                    setScrolled(false);
                }
            }
        }
        const TotalHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const scrollHeight = TotalHeight - window.innerHeight;

        setScrollY(Math.round((window.scrollY * 100) / scrollHeight));

        document.addEventListener("scroll", handleListener);

        return () => document.removeEventListener("scroll", handleListener);
    }, [scrollY]);

    return <div className={`ScrollContainer ${isScrolled ? "open" : ""}`}>
        <div className="ScrollLeft Edge">
            <div className="TopStick Stick"></div>
            <div className="BottomStick Stick"></div>
        </div>
        <div className="ContentBox" style={{
            opacity: content !== "" ? 1 : 0,
            transition: "opacity 1s ease-in"
        }}>
            <p className="ScrollContent">{content}</p>
        </div>
        <div className="ScrollRight Edge">
            <div className="TopStick Stick"></div>
            <div className="BottomStick Stick"></div>
        </div>
    </div>
}