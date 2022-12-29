import Head from "next/head";

import ProfileColumn from "../components/profile/ProfileColumn";
import Sections from "../components/sections/Sections";

export default function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <ProfileColumn />
                    <Sections />
                </div>
            </main>
        </>
    );
}
