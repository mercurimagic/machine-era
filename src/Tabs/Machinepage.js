import React, { useEffect } from 'react';
import '../styles/machine.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Machinepage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', '//www.instagram.com/embed.js');
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />

      <section className="bootup">
        <h1 className="glitch-text"></h1>
        <p className="subtext">tHE MACHINEEEE</p>
      </section>


      <section className="mixtape">
        <p>(A mixtape I have yet to finish)</p>
      </section>

      <section className="intro">
        <p>7 songs, Killer tech, Orchestrated chaos</p>
      </section>

     

      <section className="music-players">
       



        {/* Apple Music Embed */}
        <iframe
  allow="autoplay *; encrypted-media *;"
  frameBorder="0"
  height="152"
  className="music-embed"
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/dark-night-ep/1779810115"
  title="Apple Music Player"
/>


        {/* Spotify Embed */}
        <iframe
  className="music-embed"
  src="https://open.spotify.com/embed/artist/7JrI4cP2zMiCgRjFZIN9P0?utm_source=generator"
  height="152"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  allowFullScreen
  title="Spotify Player"
/>

      </section>

      <section className="social-icons">
  <a href="https://www.twitch.tv/mercurimagic" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitch"></i></a>
  <a href="https://www.instagram.com/mercurimagic" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
  <a href="https://x.com/mercurimagc" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
  <a href="https://open.spotify.com/artist/7JrI4cP2zMiCgRjFZIN9P0" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
  <a href="https://www.reddit.com/user/mercurimagic" target="_blank" rel="noopener noreferrer"><i className="fab fa-reddit-alien"></i></a>
  <a href="https://on.soundcloud.com/QGFzovYXTPcCgNQbrP" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
  <a href="https://www.youtube.com/@MercuriMagic" target="_blank" rel="noopener noreferrer"> <i className="fab fa-youtube"></i></a>

</section>


      <Footer />
    </>
  );
};

export default Machinepage;
