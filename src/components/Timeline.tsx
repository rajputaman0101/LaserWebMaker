'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const timelineData = [
  {
    id: 'Ep.1',
    title: 'The Phantom Menace',
    description: 'Obi-Wan Kenobi is a young apprentice Jedi...',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 'Ep.2',
    title: 'Attack of the Clones',
    description: 'Set ten years after the events...',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 'Ep.3',
    title: 'Revenge of the Sith',
    description: 'Three years since the Clone Wars began...',
    image: 'https://placehold.co/600x400',
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');

  // Scroll progress (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const springFill = useSpring(fillHeight, { stiffness: 100, damping: 20 });
  const springArrowY = useSpring(arrowY, { stiffness: 100, damping: 20 });

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setScrollDir('down');
      } else if (currentY < lastScrollY) {
        setScrollDir('up');
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative container mx-auto py-24 px-4 ">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2">
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 w-full bg-blue-500"
          style={{ height: springFill }}
        />

        {/* Direction-aware Arrow */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl"
          style={{ top: springArrowY }}
        >
          {scrollDir === 'down' ? '⬇️' : '⬆️'}
        </motion.div>
      </div>

      {/* Timeline Entries */}
     <ol className="space-y-32 relative z-10">
  {timelineData.map((item, index) => {
  // Color array for dots
  const colors = ['bg-red-600', 'bg-green-600', 'bg-blue-600'];

  return (
    <li
      key={item.id}
      className={`relative flex flex-col md:flex-row items-center gap-10 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Step Number Dot with dynamic color */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
        <div
          className={`${colors[index] || 'bg-gray-600'} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg`}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full md:w-1/2 rounded shadow-lg"
      />

      {/* Content */}
      <div className="bg-[#282727] p-6 rounded text-white md:w-1/2">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-300 mt-2">{item.description}</p>
      </div>
    </li>
  );
})}

</ol>

    </div>
  );
}
