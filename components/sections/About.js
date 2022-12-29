import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { SpotifyNowPlaying } from "./spotify-current/SpotifyNowPlaying";

export default function About() {
    return (
        <section id="about">
            <div className="card">
                <div className="card-header">
                    <h1>ABOUT</h1>
                </div>
                <div className="card-body">
                    <div>
                        <p>
                            Hello! I am Zoclhas or Zoc. I design websites and
                            textures. It has been over two years since I've
                            start my work on both of these. I also do my own
                            designing for all of my projects.
                        </p>
                        <p>Technologies I've worked with:</p>
                        <div className="skills">
                            <ul>
                                <li>HTML, CSS, JS</li>
                                <li>NextJS</li>
                                <li>ReactJs</li>
                                <li>Django</li>
                            </ul>
                            <ul>
                                <li>Substance Designer</li>
                                <li>Adobe Photoshop</li>
                                <li>Figma</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </div>
                        <p>
                            In addition to that, I am also a talented material
                            artist. With an eye for detail and a strong sense of
                            aesthetics. I have created textures mainly for
                            Minecraft. You can view it here at &nbsp;
                            <a
                                href="https://zoclhas.artstation.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ArtStation
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#work">Scroll to view my work.</a>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="fun">
                <SpotifyNowPlaying />
                <div className="card">
                    <div className="card-header">
                        <a
                            href="https://zocs.space"
                            target="_blank"
                            rel="noreferrer"
                            className="no-underline"
                        >
                            <h2>
                                Blog &nbsp;
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                />
                            </h2>
                        </a>
                    </div>
                    <div
                        className="card-body"
                        style={{
                            height: "calc(103px - 1rem)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Read about my thoughts, and very random things.
                    </div>
                </div>
            </div>
        </section>
    );
}
