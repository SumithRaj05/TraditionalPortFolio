import "./NavBar.css";
import Icon from "./nav-icon.jpg";

export default function NavBar() {
    const showNav = () => {
        var nav = document.querySelector(".navbar-menu");
        var navIcon = document.querySelector(".navbar-icon");
        if (nav.style.width === "0px") {
            nav.style.width = "80%";
            navIcon.innerHTML = "X";
        } else {
            nav.style.width = "0px";
            navIcon.innerHTML = "&#9776;";
        }
        var anchor = document.querySelectorAll(".link");
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].addEventListener('click', () => {
                nav.style.width = "0px";
                navIcon.innerHTML = "&#9776;";
            })
        }
    }

    return (
        <nav className="navbar">
            <img src={Icon} alt="" className="NavIcon" />
            <div className="navbar-icon" onClick={showNav}>&#9776;</div>
            <div className="navbar-menu">
                <ul className="navbar-link">
                    <li><a className="link" href="/#Home">Home</a></li>
                    <li><a className="link" href="/#About">About</a></li>
                    <li><a className="link" href="/#Projects">Projects</a></li>
                    <li><a className="link" href="/#Skills">Skills</a></li>
                    <li><a className="link" href="/#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}