import { useEffect, useState } from "react";

export default function DesktopTextBox(props) {

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const DataHandler = (e) => {
        e.preventDefault();
        setShow(!show);
        props.UserData({
            name: name,
            email: email,
            message: message
        })
        setName("");
        setEmail("");
        setMessage("");
    }


    useEffect(() => {
        const TextContainer = document.querySelector(".TextContainer");

        const ContactObserver = new IntersectionObserver((entities) => {
            entities.forEach((entity) => {
                if (entity.isIntersecting) {
                    entity.target.classList.add("showContactForm");
                } else {
                    entity.target.classList.remove("showContactForm");
                }
            })
        })
        ContactObserver.observe(TextContainer);

        TextContainer.addEventListener("click", () => {
            setShow(true);
        })

        return () => TextContainer.removeEventListener("click", () => {
            setShow(true);
        })
    })

    return <form onSubmit={DataHandler}>
        <div className={`TextContainer  ${show ? "showTextContainer" : ""}`}>
            <div className={`Down-left Down ${show ? "HideDown" : ""}`}></div>
            <h1 className="ContactHeader">Get in touch</h1>
            <div className={`Down-right Down ${show ? "HideDown" : ""}`}></div>
            <div className={`MobileBox ${show ? "showMobileBox" : ""}`}>
                <label className="ContactLabel">Name</label>
                <input
                    className="Name"
                    placeholder="Enter your Name"
                    type="text"
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /> <br />
                <label className="ContactLabel">Email</label>
                <input
                    className="Email"
                    placeholder="Enter your Email"
                    type="email"
                    maxLength={50}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /> <br />
                <label className="ContactLabel">Message</label><br />
                <textarea
                    className="Message"
                    placeholder="Enter your message here"
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                /> <br />
                <button
                    className="ContactSubmit"
                    type="submit"
                >Send</button>
            </div>
        </div>
    </form>
}