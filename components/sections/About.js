import { SpotifyNowPlaying } from "./spotify-current/SpotifyNowPlaying";

export default function About() {
    return (
        <section id="about">
            <div className="card">
                <div className="card-header">
                    <h1>ABOUT</h1>
                </div>
                <div className="card-body">
                    <p>
                        Hello! I am Zoclhas or Zoc. I design websites and
                        textures. It has been over two years since I've start my
                        work on both of these. I play
                    </p>
                </div>
            </div>
            <div className="spacer"></div>
            <SpotifyNowPlaying />
        </section>
    );
}
