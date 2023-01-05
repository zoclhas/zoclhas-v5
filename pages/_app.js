import "../styles/main.css";
import { Analytics } from "@vercel/analytics/react";

import { useRef } from "react";
import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function App({ Component, pageProps }) {
    const containerRef = useRef(null)
    
    return (
        <SmoothScrollProvider containerRef={containerRef}>
            <main data-scroll-container>
                <Component {...pageProps} />
                <Analytics />
            </main>
        </SmoothScrollProvider>
    );
}
