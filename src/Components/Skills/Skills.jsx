import "./Skills.css";
import SkillBar from "./SkillBar/SkillBar";
import { useEffect } from "react";

export default function Skills() {

    useEffect(() => {
        const Container = document.querySelector(".Containers");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("showSkills")
                }else{
                    entry.target.classList.remove("showSkills")
                }
            })
        })

        observer.observe(Container);

        return () => observer.unobserve(Container)
    },[])

    return (
        <section className="SkillsSection" id="Skills">
            <h3 className="SkillsHeader">My Skills</h3>
            <div className="Containers">
                <div className="SkillsContainer1">
                    <SkillBar
                        Points={4}
                        Skill="HTML5"
                    />
                    <SkillBar
                        Points={4}
                        Skill="CSS3"
                    />
                    <SkillBar
                        Points={4}
                        Skill="JavaScript"
                    />
                    <SkillBar
                        Points={3}
                        Skill="GIMP"
                    />
                    <SkillBar
                        Points={3}
                        Skill="Git"
                    />
                </div>
                <div className="SkillsContainer2">
                    <SkillBar
                        Points={2}
                        Skill="MongoDB"
                    />
                    <SkillBar
                        Points={3}
                        Skill="Express js"
                    />
                    <SkillBar
                        Points={3}
                        Skill="React js"
                    />
                    <SkillBar
                        Points={3}
                        Skill="Node js"
                    />
                    <SkillBar
                        Points={3}
                        Skill="Linux"
                    />
                </div>
            </div>
        </section>
    )
}