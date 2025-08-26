'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Mouse } from 'lucide-react';

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
  {
    id: 'Ep.4',
    title: 'Revenge of the Sith',
    description: 'Three years since the Clone Wars began...',
    image: 'https://placehold.co/600x400',
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const springFill = useSpring(fillHeight, { stiffness: 100, damping: 20 });
  const springArrowY = useSpring(arrowY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = ['bg-red-600', 'bg-green-600', 'bg-blue-600'];

  function TimelineItem({ item, index, colorClass }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    
    <li
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-10 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
        <div
          className={`${colorClass} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg`}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full md:w-1/2 rounded shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <motion.div
        className="bg-[#282727] p-6 rounded text-white md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-300 mt-2">{item.description}</p>
      </motion.div>
    </li>
  );
}


  return (
    <div ref={containerRef} className="relative container mx-auto py-16 px-4">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2 z-10">
        <motion.div
          className="absolute left-0 top-0 w-full bg-blue-500"
          style={{ height: springFill }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-30 text-white"
          style={{
            top: springArrowY,
            translateY: '-60%',
            filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.7))',
            width: 30,
            height: 30,
          }}
        >
          <Mouse size={30} />
        </motion.div>
      </div>

      {/* Timeline items */}
     <ol className="space-y-32 relative z-20">
  {timelineData.map((item, index) => (
    <TimelineItem
      key={item.id}
      item={item}
      index={index}
      colorClass={colors[index] || 'bg-gray-600'}
    />
  ))}
</ol>

    </div>
  );
}
