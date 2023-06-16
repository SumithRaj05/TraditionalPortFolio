import "./Contact.css";
import krishna from "./krishna.png";
import water from "./bg2.jpg";
import MidLayer from "./ContactLayer2.png";
import { useEffect } from "react";
import TextBox from "./TextBox/TextBox";

import github from "./github.png"
import insta from "./insta.jpg"
import lin from "./linkedin.png"

export default function Contact() {

    useEffect(() => {
        
        const createAnimation = (element, classname) => {    
            const ContactObserver = new IntersectionObserver((entities) => {
                entities.forEach((entity) => {
                    if (entity.isIntersecting) {
                        entity.target.classList.add(classname);
                    } else {
                        entity.target.classList.remove(classname);
                    }
                })
            })
            ContactObserver.observe(element);
        }

        const KrishnaImage = document.querySelector(".KrishnaImage");
        const LotusImage = document.querySelectorAll(".Lotus");

        createAnimation(KrishnaImage, "KrishnaAnimate");
        
        LotusImage.forEach((ele) => createAnimation(ele, "LotusImageAnimate"))
        
    }, []);

    return (
        <section className="ContactSection" id="Contact">
            <TextBox />
            <div className="KrishnaLayer">
                <img className="KrishnaImage" src={krishna} alt="" />
                <img className="LotusImage1 Lotus" src={MidLayer} alt="" />
                <img className="WaterImage" src={water} alt="" />
                <img className="LotusImage2 Lotus" src={MidLayer} alt="" />
            </div>
            <div className="OtherOptions">
                <a href="https://github.com/SumithRaj05/" target="_blank" rel="noreferrer"><img src={github} alt="" className="ContactLogo" /></a>
                <a href="https://www.instagram.com/sumithraj05/" target="_blank" rel="noreferrer"><img src={insta} alt="" className="ContactLogo" /></a>
                <a href="https://www.linkedin.com/in/sumith-d-41b50322b/" target="_blank" rel="noreferrer"><img src={lin} alt="" className="ContactLogo" /></a>
            </div>
        </section>
    )
}