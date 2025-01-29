"use client";
import React, { useEffect } from 'react';

const BannerSlider = () => {
  useEffect(() => {
    // Dynamically load the Vimeo player script
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      aria-label="Banner"
      className="relative shadow-md w-full"
    >
      <article className="h-full w-full">
        <figure className="h-full w-full overflow-hidden">
          {/* Overlay */}
          <div className="inset-0 bg-black bg-opacity-10 z-10"></div>

          {/* Vimeo Embed */}
          <div className="h-[500px] overflow-hidden md:hidden">
            <div style={{ padding: '180.27% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1051170649?autoplay=1&loop=1&muted=1&controls=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="crc treads"
              ></iframe>
            </div>
          </div>

          <div className="h-[600px] lg:h-[1000px] overflow-hidden hidden md:block">
            <div style={{ padding: '86.27% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1051568333?h=b7dea7afc6&autoplay=1&loop=1&muted=1&controls=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="crc treads"
              ></iframe>
            </div>
          </div>
        </figure>
      </article>
    </section>
  );
};

export default BannerSlider;
