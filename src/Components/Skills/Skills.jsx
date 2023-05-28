import "./Skills.css";
import SkillBar from "./SkillBar/SkillBar";

export default function Skills() {
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
                </div>
            </div>
        </section>
    )
}