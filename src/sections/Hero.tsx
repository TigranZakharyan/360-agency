import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    // Defines the responsive styles for the Hero section.
    return (
        // Set the overall background to white and ensure minimum screen height for positioning
        <section className="relative bg-white min-h-screen pt-16 pb-24 md:p-0" id='hero'>
            {/* Main Container: Uses h-[90vh] to give the relative elements a tall canvas to work with. */}
            <div className="container h-[90vh] mx-auto flex items-center justify-center relative">

                {/* Responsive Image Container: 
                  Scales from w-64/h-64 on small screens up to w-[500px]/h-[500px] on medium screens and above.
                  It remains centered using -translate-x-1/2 -translate-y-1/2.
                */}
                <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10'>
                    {/* The Image component uses fill=true and object-cover to maintain aspect ratio and fill the container */}
                    <Image
                        src={"https://thumbs.dreamstime.com/b/photo-cheerful-toothy-beaming-cute-nice-pretty-woman-holding-telephone-browsing-social-media-working-as-smm-manager-photo-166564427.jpg"}
                        alt="smm"
                        className='object-cover'
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 50vw" // Optimizes image loading
                    />
                </div>

                {/* Background SVG Shape: 
                  The SVG is set to cover the container area (100% width/height of its parent 'container' div).
                  The preserveAspectRatio setting helps it scale gracefully.
                */}
                <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" className='m-auto absolute top-0 left-0 w-full h-full'>
                    <path
                        fill="#FFD6E8"
                        d="M28.8,-46.1C38.2,-44.5,47.4,-38.5,53.8,-30.1C60.2,-21.7,63.9,-10.9,59.9,-2.3C56,6.3,44.3,12.6,36.9,19.3C29.5,26,26.3,33,20.9,43.9C15.4,54.7,7.7,69.3,-0.8,70.7C-9.3,72.1,-18.7,60.3,-31.4,53.6C-44.1,47,-60.1,45.5,-64.7,37.4C-69.3,29.3,-62.5,14.7,-62.6,-0.1C-62.8,-14.8,-69.9,-29.7,-65.9,-38.8C-61.9,-47.9,-46.7,-51.3,-33.9,-50.9C-21,-50.5,-10.5,-46.3,-0.4,-45.6C9.7,-44.9,19.4,-47.6,28.8,-46.1Z"
                        transform="scale(1.4) translate(75 55)"
                    />
                    <circle cx="140" cy="150" r="20" className='fill-pink-300' />
                </svg>

                {/* Responsive Text Box:
                  On mobile: centered horizontally at the bottom, reduced padding, and smaller text.
                  On desktop (md:): positioned left-bottom, larger padding, and larger text.
                */}
                <ScrollReveal className="absolute bottom-4 left-1/2 -translate-x-1/2 
                               md:bottom-12 md:left-12 md:translate-x-0 
                               bg-white p-6 md:p-12 rounded-xl shadow-2xl z-20
                               max-w-lg w-11/12 mx-auto" direction='bottom'> 
                    <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-700 mb-4 md:mb-6">
                        OUR TEAM
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                        Meet our stylists
                    </h2>
                    <p className="text-xs text-gray-500 mb-6">
                        Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500">Freepik</a>
                    </p>
                    <button
                        className="px-6 py-2 border border-pink-500 text-pink-500 font-semibold rounded-full 
                         hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
                    >
                        LEARN MORE
                    </button>
                 </ScrollReveal>

            </div>
        </section>
    );
};

export default Hero;
