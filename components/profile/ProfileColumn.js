import Image from "next/image";
import Link from "next/link";
import Scrollspy from "react-scrollspy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

import profile from "../../styles/profile.module.css";
import profilePicutre from "../../public/about-pfp.webp";

export default function ProfileColumn() {
    return (
        <div className={profile.wrapper}>
            <div className={profile.card}>
                <Image
                    src={profilePicutre}
                    height={200}
                    width={200}
                    alt="Profile Picture"
                />
                <h1>Zoclhas</h1>
                <p>Web Dev | Material Artist</p>
                <div className="spacer"></div>
                <div className={profile.links}>
                    <Link
                        href="https://github.com/zoclhas"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link
                        href="https://twitter.com/zoclhas"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link
                        href="mailto:hi@zoclhas.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link
                        href="https://zochy.xyz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} />
                    </Link>
                </div>
                <div className={profile.links} style={{ marginTop: "5px" }}>
                    <Link
                        href="https://zocs.space"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Blog
                    </Link>
                    <Link
                        href="https://zaura.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Zaura
                    </Link>
                </div>
                <div className="spacer"></div>
                <Scrollspy
                    items={["about", "work", "contact"]}
                    currentClassName="active"
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </Scrollspy>
            </div>
        </div>
    );
}
