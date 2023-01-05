import Head from "next/head";

import ProfileColumn from "../components/profile/ProfileColumn";
import Sections from "../components/sections/Sections";

export default function Home() {
    return (
        <>
            <Head>
                <title>Zoclhas | Web Dev | Material Artist</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Hello, I am Zoclhas and I design websites and textures. This is my personal site containing my works and others."
                />
                <meta
                    name="keywords"
                    content="zoclhas, zaura, webdev, material"
                />
                <meta name="language" content="English" />
                <meta name="author" content="Zoclhas" />
                <meta
                    property="og:title"
                    content="Zoclhas | Web Dev | Material Artist"
                />
                <meta
                    property="og:description"
                    content="Hello, I am Zoclhas and I design websites and textures. This is my personal site containing my works and others."
                />
                <meta property="og:url" content="https://zoclhas.com/" />
                <meta
                    property="og:image"
                    content="https://zoclhas.com/meta-img.png"
                />
                <meta name="theme-color" content="#131313" />
            </Head>
            <main>
                <div className="container">
                    <ProfileColumn />
                    <Sections />
                </div>
            </main>
        </>
    );
}
