import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";

export const SpotifyNowPlaying = (props) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
        });
    });

    console.log(result);
    return (
        <div>
            {result.title !== undefined && result.isPlaying ? (
                <div className="card card-spotify">
                    <div className="card-body">
                        <img
                            src={result.albumImageUrl}
                            alt={`${result.title}'s Album Cover`}
                        />
                        <div className="card-spotify-info">
                            <a
                                href={result.songUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="no-underline"
                            >
                                <h2>{result.title}</h2>
                            </a>
                            <p>{result.artist}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card card-spotify">
                    <div className="card-body">
                        <div className="card-spotify-info">
                            <p style={{ fontSize: "9pt" }}>Spotify</p>
                            <h2>Currently Offline :(</h2>
                            <p>Come back later?</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
