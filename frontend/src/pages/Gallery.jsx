'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Share2 } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingDonateButton from '../components/FloatingDonateButton';

/* ================= GALLERY DATA ================= */
const GALLERY_IMAGES = [
  { id: 1, image: '/gallery1.png' },
  { id: 2, image: '/gallery2.png' },
  { id: 3, image: '/gallery3.png' },
  { id: 4, image: '/gallery4.png' },
  { id: 5, image: '/gallery5.png' },
  { id: 6, image: '/children3.png' },
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredImages = GALLERY_IMAGES;

  const handleImageClick = (image) => {
    const actualIndex = GALLERY_IMAGES.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentIndex(actualIndex);
  };

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
    setCurrentIndex(prevIndex);
  }, [currentIndex]);

  const handleClose = () => setSelectedImage(null);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-[#fffdf9] selection:bg-[#ec7f3d]/30 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large blurred circles for premium feel */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 20, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-[#ec7f3d]/15 to-[#ea580c]/8 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-tl from-[#ec7f3d]/10 to-[#F5A044]/5 rounded-full blur-[160px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            y: [0, 40, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[#F5A044]/12 to-transparent rounded-full blur-[140px]" 
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-[#ec7f3d]/10 to-transparent"></div>
      </div>

      <SiteHeader />
      <FloatingDonateButton />

      {/* ================= PREMIUM HERO SECTION ================= */}
      <section className="relative flex items-center justify-center w-full min-h-[60vh] overflow-hidden bg-[#FFF8F3] z-10">
        
        {/* --- BACKGROUND COLLAGE: LEFT SIDE --- */}
<div 
  className="absolute top-0 bottom-0 left-0 w-[45%] md:w-[35%] flex flex-col opacity-80"
  style={{ 
    maskImage: 'linear-gradient(to right, black 40%, transparent 100%)', 
    WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)' 
  }}
>
  {/* Color Tint Overlay */}
  <div className="absolute inset-0 z-10 bg-[#DD6E3D] mix-blend-color"></div>
  <div className="absolute inset-0 z-10 bg-[#422214] mix-blend-multiply opacity-40"></div>
  
  {/* Left Images */}
  <img 
    src="/children5.png" 
    alt="Children learning" 
    className="object-cover w-full h-1/2 grayscale"
  />
  <img 
    src="/serve-institutions.jpg" 
    alt="Community kids" 
    className="object-cover w-full h-1/2 grayscale"
  />
</div>

{/* --- BACKGROUND COLLAGE: RIGHT SIDE --- */}
<div 
  className="absolute top-0 bottom-0 right-0 w-[45%] md:w-[35%] flex flex-col opacity-80"
  style={{ 
    maskImage: 'linear-gradient(to left, black 40%, transparent 100%)', 
    WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)' 
  }}
>
  {/* Color Tint Overlay */}
  <div className="absolute inset-0 z-10 bg-[#DD6E3D] mix-blend-color"></div>
  <div className="absolute inset-0 z-10 bg-[#422214] mix-blend-multiply opacity-40"></div>

  {/* Right Images */}
  <img 
    src="/children3.png" 
    alt="Happy children" 
    className="object-cover w-full h-1/2 grayscale"
  />
  <img 
    src="/children9.png" 
    alt="Group activity" 
    className="object-cover w-full h-1/2 grayscale"
  />
</div>

{/* --- CENTER GLOW / SWOOP EFFECT --- */}
<div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
  <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#FFF8F3] via-[#FFF8F3] to-transparent rounded-full blur-3xl opacity-90"></div>
</div>

        {/* --- MAIN CONTENT (Z-Index ensures it sits above images) --- */}
        <div className="relative z-20 flex flex-col items-center px-6 text-center max-w-4xl mx-auto py-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-6 py-2 mb-8 border border-[#E68A55]/40 rounded-full bg-[#FDFBF9]/80 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#E55A3D]"></span>
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#E55A3D]"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#D18260] uppercase">
              Live Visual Archive
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-5xl md:text-7xl tracking-tight text-[#3A1E11]" 
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="font-bold">Moments of</span>{' '}
            <span className="relative inline-block italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6E3D] to-[#F1A975] pr-2">
              Change
              
              {/* Swoosh SVG */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 text-[#DD6E3D]" 
                viewBox="0 0 100 15" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M 0,10 Q 50,20 100,0" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-[#5A4A42] max-w-2xl leading-relaxed font-medium"
          >
            A curated collection documenting our journey, the communities we
            serve, and the smiles that fuel our mission.
          </motion.p>

        </div>
      </section>

      {/* ================= PREMIUM GALLERY GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-max"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => {
              // Create varying sizes for masonry effect
              const isLarge = index % 5 === 0 || index % 5 === 3;
              const isMedium = index % 5 === 1 || index % 5 === 4;
              const isSmall = index % 5 === 2;
              
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                  onClick={() => handleImageClick(image)}
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-white shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 border border-slate-100 sm:border-slate-200 hover:border-[#ec7f3d]/60 ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2 h-[500px] sm:h-[550px]' : 
                    isMedium ? 'h-[420px] sm:h-[480px]' : 
                    'h-[360px] sm:h-[420px]'
                  }`}
                >
                  <motion.img
                    src={image.image}
                    alt="Gallery image"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Premium Overlay & Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Top Category Label - Hidden */}
                      
                      {/* Bottom Content - Hidden */}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={handleClose}
          >
            {/* Close UI */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 flex gap-4 z-50"
            >
                <button className="p-3 text-slate-600 hover:text-[#ea580c] transition-colors rounded-full hover:bg-slate-100 backdrop-blur-sm border border-slate-200"><Share2 size={20} /></button>
                <button onClick={handleClose} className="p-3 bg-gradient-to-br from-[#ec7f3d]/20 to-[#ea580c]/10 hover:from-[#ec7f3d]/30 hover:to-[#ea580c]/20 rounded-full text-slate-700 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] duration-300 border border-[#ec7f3d]/30 hover:rotate-90">
                    <X size={24} />
                </button>
            </motion.div>

            <div className="relative w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center" onClick={e => e.stopPropagation()}>
                {/* Main Image Area */}
                <div className="relative flex-1 group w-full">
                    <motion.div
                        key={selectedImage.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#ec7f3d]/20 bg-white backdrop-blur-sm"
                    >
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title}
                            className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                        />
                    </motion.div>

                    {/* Navigation Buttons */}
                    <>
                        <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 88, 12, 0.9)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-br from-[#ec7f3d]/40 to-[#ea580c]/30 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-[#ec7f3d]/50 hover:border-[#ec7f3d]/80 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)]"
                        >
                            <ChevronLeft size={28} />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 88, 12, 0.9)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-br from-[#ec7f3d]/40 to-[#ea580c]/30 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-[#ec7f3d]/50 hover:border-[#ec7f3d]/80 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)]"
                        >
                            <ChevronRight size={28} />
                        </motion.button>
                    </>
                </div>

                {/* Sidebar Info */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-full md:w-80 text-slate-900 space-y-6 p-2"
                >
                    {/* Mini Thumbnails */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex gap-2 pt-4"
                    >
                        {GALLERY_IMAGES.slice(0, 5).map((img, i) => {
                          const isActive = i === currentIndex % 5;
                          return (
                            <motion.div 
                                key={i}
                                animate={{ 
                                  width: isActive ? 32 : 8,
                                  backgroundColor: isActive ? '#ea580c' : 'rgba(100, 116, 139, 0.3)'
                                }}
                                className="h-1.5 rounded-full transition-all duration-500" 
                            />
                          );
                        })}
                    </motion.div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
};

export default Gallery;