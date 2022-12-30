import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const send = document.querySelector("[type='submit']");
        const name = document.querySelector("[name='user_name']");
        const mail = document.querySelector("[name='email']");
        const text = document.querySelector("[name='message']");

        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            (result) => {
                console.log(result.text);
                send.innerHTML = "Sent!";
                name.value = "";
                mail.value = "";
                text.value = "";
            },
            (error) => {
                console.log(error.text);
                send.innerHTML = `Couldn't Send. ${error.text}`;
            }
        );
    };

    return (
        <section id="contact">
            <div className="card">
                <div
                    className="card-header"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1>Contact</h1>
                    <div className="contact-methods">
                        <a
                            href="https://twitter.com/zoclhas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            href="mailto:hi@zoclhas.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="card">
                <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="user_name">Name</label> <br />
                            <input
                                type="name"
                                name="user_name"
                                placeholder="John Doe"
                                required
                            />
                            <br />
                            <div className="spacer"></div>
                            <label for="email">Email</label> <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="johndoe@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Write your thoughts..."
                            />
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
