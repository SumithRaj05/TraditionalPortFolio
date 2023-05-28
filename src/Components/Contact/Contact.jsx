import "./Contact.css";
import krishna from "./krishna.png";
import water from "./bg2.jpg";
import MidLayer from "./ContactLayer2.png";
import { useEffect } from "react";
import TextBox from "./TextBox/TextBox";

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
        </section>
    )
}