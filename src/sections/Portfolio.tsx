'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
];

const item = {
  hidden: { opacity: 0, rotateY: 180 },
  show: { opacity: 1, rotateY: 0 },
};

const flexItemHover = {
  flexGrow: 2,
  transition: { duration: 0.2, ease: 'linear' },
};

interface ImageProps {
  src: string;
  index: number;
}

const PortfolioItem: React.FC<ImageProps> = ({ src, index }) => (
  <motion.div
    key={index}
    variants={item}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="h-full relative flex-1 min-w-0 overflow-hidden cursor-pointer shadow-lg"
    whileHover={flexItemHover}
    style={{ flexGrow: 1 }}
  >
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={`Portfolio ${index + 1}`}
        fill
        className="object-cover transition-all duration-400 ease-in-out"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-400 opacity-0 hover:opacity-0" />
    </div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  const row1Images = images.slice(0, 3);
  const row2Images = images.slice(3, 6);

  return (
    <section className="relative w-full py-6 md:py lg:py-12" id="portfolio">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row w-full h-[400px] md:h-[400px]">
        {row1Images.map((src, index) => (
          <PortfolioItem key={src} src={src} index={index} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row w-full h-[400px] md:h-[400px]">
        {row2Images.map((src, index) => (
          <PortfolioItem key={src} src={src} index={index + 3} />
        ))}
      </div>

      {/* Floating CTA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mx-4">
        <div className="bg-white/90 shadow-2xl rounded-3xl p-4 md:p-6 lg:p-8 max-w-sm md:max-w-md text-center pointer-events-auto backdrop-blur-sm">
          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 mb-2">
            We’ll help you become who you dream of being
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            A beautiful example of responsive, dynamic layout using Framer Motion and Flexbox.
          </p>
          <span className="text-gray-400 text-xs sm:text-sm">Images from Freepik</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
