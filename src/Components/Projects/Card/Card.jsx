import "./Card.css";
import GitHub from "./github.png";
import Demo from "./demo.png";

export default function Card(props) {

    return <div
        className="card"
        style={props.isActive ?
            {
                height: "300px",
                width: "250px",
                opacity: 1
            }
            :
            {
                height: "250px",
                width: "200px",
                opacity: 0.25,
                pointerEvents: "none"
            }
        }>
        <h1
            className="CardHeader"
            style={props.isActive ?
                {
                    fontSize: "25px",
                }
                :
                {
                    fontSize: "20px",
                }
            }
        >{props.Title}</h1>
        <div className="ProjectTools">{props.Tools}</div>
        <p
            className="CardDesc"
            style={props.isActive ?
                {
                    fontSize: "18px",
                }
                :
                {
                    fontSize: "15px",
                }
            }
        >{props.Description}</p>
        <a href={props.GitLink} target="_blank" rel="noreferrer">
            <img
                src={GitHub}
                className="GitLogo"
                alt=""
            />
        </a>
        {
            props.demo ?
                <a href={props.DemoLink} target="_blank" rel="noreferrer">
                    <img
                        src={Demo}
                        className="DemoLogo"
                        alt=""
                    />
                </a>
                :
                undefined
        }
    </div >
}