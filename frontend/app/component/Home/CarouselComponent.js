"use client";
// CarouselComponent.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Function to handle video play
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  // Function to handle video pause
  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section
      aria-label="Banner Slider"
      style={{ width: '100%', overflow: 'hidden', maxHeight: '600px' }} // Optional: Set a max height for the section
      className="px-8 pt-6 shadow-md"
    >
      <Slider
        dots={true}
        infinite={true}
        speed={500} // Set transition speed to 500ms for smooth transition
        slidesToShow={1}
        slidesToScroll={1}
        draggable={true}
        swipe={true}
        swipeToSlide={true}
        touchThreshold={10}
        autoplay={!isVideoPlaying} // Disable autoplay if video is playing
        autoplaySpeed={4000} // Autoplay every 4 seconds
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {/* Slide 1 */}
        <article className="bg-red-600 h-[400px] md:h-[600px] w-full relative"> {/* Set a fixed height for the slide */}
          <figure className="h-full w-full overflow-hidden"> {/* Ensure the figure takes full height */}
            <video
              src="/videoCarousel.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover" // Make sure the video covers the slide
              loading="lazy"
              onPlay={handleVideoPlay} // Handle video play event
              onPause={handleVideoPause} // Handle video pause event
            >
              Your browser does not support the video tag.
            </video>
            <figcaption className="sr-only">
              Overview of Export Management Companies
            </figcaption>
          </figure>
        </article>

        {/* Slide 2 */}
        <article className="bg-red-600 h-[400px] md:h-[600px] w-full relative"> {/* Set a fixed height for the slide */}
          <figure className="h-full w-full overflow-hidden"> {/* Ensure the figure takes full height */}
            <img
              src="/tyres-1920x774px.jpg"
              alt="Global Trade Banner"
              className="w-full h-full object-cover" // Make sure the image covers the slide
              loading="lazy"
            />
            <figcaption className="sr-only">
              Global Trade Services Banner Image
            </figcaption>
          </figure>
        </article>

        {/* Slide 3 */}
        <article className="bg-red-600 h-[400px] md:h-[600px] w-full relative"> {/* Set a fixed height for the slide */}
          <figure className="h-full w-full overflow-hidden"> {/* Ensure the figure takes full height */}
            <img
              src="/car-tires-options-Aug102020-1-min.jpg"
              alt="About Our Company"
              className="w-full h-full object-cover" // Make sure the image covers the slide
              loading="lazy"
            />
            <figcaption className="sr-only">
              About Our Company - Company Introduction
            </figcaption>
          </figure>
        </article>
      </Slider>
    </section>
  );
};

export default BannerSlider;
