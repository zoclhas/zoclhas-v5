import About from "./About";
import Work from "./Work";
// import Contact from "./Contact";

import React, { lazy, Suspense } from "react";

const Contact = lazy(() => import("./Contact"));

import Footer from "../footer/Footer";

export default function Sections() {
    return (
        <>
            <section className="info-col">
                <About />
                <div className="spacer-2xl"></div>
                <Work />
                <div className="spacer-2xl"></div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                </Suspense>
                <div className="spacer-2xl"></div>
                <Footer />
            </section>
        </>
    );
}
