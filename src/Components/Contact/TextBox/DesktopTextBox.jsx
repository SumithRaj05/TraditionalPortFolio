import { useEffect, useState } from "react";

export default function DesktopTextBox(props) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const DataHandler = (e) => {
        e.preventDefault();
        props.UserData({target: e.target})
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
    })

    return <form onSubmit={DataHandler}>
        <div className="TextContainer">
            <h1 className="ContactHeader">Get in touch</h1>
            <label className="ContactLabel">Name</label>
            <input
                className="Name"
                name="name"
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
                name="email"
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
                name="message"
                placeholder="Enter your message here"
                rows={5}
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
    </form>
}