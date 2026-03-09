import React from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  // User's selected Spotify Track
  const trackId = "1p2gLYTKWepMg5zA782o2T"; 
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

  return (
    <div className="music-player-container">
      <div className="player-glass spotify-mode">
        <iframe
          title="Spotify Player"
          src={embedUrl}
          width="100%"
          height="152" 
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MusicPlayer;
