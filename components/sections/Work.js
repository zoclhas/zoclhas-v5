"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { works } from "./work/works";
import workcss from "../../styles/work.module.css";

export default function About() {
    var projectCards;
    var showButton;
    var hideButton;
    if (typeof document !== "undefined") {
        projectCards = document.querySelector("[data-more]");
    }

    const showProjectCards = () => {
        projectCards.setAttribute("data-more", "show");
    };

    const hideProjectCards = () => {
        projectCards.setAttribute("data-more", "hide");
    };

    return (
        <section id="work">
            <div className="card">
                <div className="card-header">
                    <h1>Work</h1>
                </div>
            </div>
            <div className="spacer"></div>
            <div
                className={workcss["project-cards"]}
                id="project-cards"
                data-more="hide"
            >
                {works.map((work) => (
                    <div className="card" key={work.title}>
                        <div className={workcss["card-split"]}>
                            <img
                                src={`/${work.coverImage}`}
                                alt={`${work.title}'s image`}
                            />
                            <div>
                                <div
                                    className="card-header"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <a
                                        href={work.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="no-underline"
                                    >
                                        <h2>{work.title}</h2>
                                        {work.isExternal && (
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        )}
                                    </a>
                                    {work.github && (
                                        <h2>
                                            <a
                                                href={work.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="no-underline"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                />
                                            </a>
                                        </h2>
                                    )}
                                </div>
                                <div
                                    className="card-body"
                                    style={{
                                        height: "calc(100% - 120px)",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {work.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button id="show-more-btn" onClick={showProjectCards}>
                    Show More
                </button>
                <button id="show-less-btn" onClick={hideProjectCards}>
                    Show Less
                </button>
            </div>
        </section>
    );
}
