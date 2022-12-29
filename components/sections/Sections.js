import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

export default function Sections() {
    return (
        <section className="info-col">
            <About />
            <Work />
            <Contact />
        </section>
    );
}
