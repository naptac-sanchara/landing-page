"use client";
import { motion } from "framer-motion";
import { Plane, MapPin, Users, Route } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-1/2 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-green-50/30">
      {/* Full-screen Indian Flag SVG Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="flagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9933" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#138808" stopOpacity="0.08" />
            </linearGradient>
            
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff9933" stopOpacity="0.6" />
              <stop offset="33%" stopColor="#ff9933" stopOpacity="0.6" />
              <stop offset="33%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="66%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="66%" stopColor="#138808" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#138808" stopOpacity="0.6" />
            </linearGradient>

            <radialGradient id="chakraGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000080" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000080" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Flag background */}
          <rect width="1920" height="1080" fill="url(#flagGradient)" />
          
          {/* Large flowing flag representation */}
          <g transform="translate(200, 300)">
            {/* Saffron section with wave effect */}
            <motion.path 
              d="M0,0 Q400,40 800,20 Q1200,60 1520,0 L1520,120 Q1200,100 800,140 Q400,160 0,120 Z" 
              fill="#ff9933" 
              opacity="0.12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* White section */}
            <motion.path 
              d="M0,120 Q400,160 800,140 Q1200,100 1520,120 L1520,240 Q1200,220 800,260 Q400,280 0,240 Z" 
              fill="#ffffff" 
              opacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            
            {/* Green section */}
            <motion.path 
              d="M0,240 Q400,280 800,260 Q1200,220 1520,240 L1520,360 Q1200,340 800,380 Q400,400 0,360 Z" 
              fill="#138808" 
              opacity="0.12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
            
            {/* Ashoka Chakra - Center piece */}
            <g transform="translate(760, 180)">
              <motion.circle 
                cx="0" cy="0" r="80" 
                fill="url(#chakraGlow)"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 3, delay: 1.2 }}
              />
              <motion.circle 
                cx="0" cy="0" r="60" 
                fill="none" 
                stroke="#000080" 
                strokeWidth="3" 
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.circle 
                cx="0" cy="0" r="8" 
                fill="#000080" 
                opacity="0.4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
              
              {/* 24 spokes with staggered animation */}
              {Array.from({ length: 24 }, (_, i) => (
                <motion.g 
                  key={i} 
                  transform={`rotate(${i * 15})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.3, delay: 1.8 + (i * 0.05) }}
                >
                  <line x1="0" y1="-55" x2="0" y2="-15" stroke="#000080" strokeWidth="2" />
                  <line x1="0" y1="55" x2="0" y2="15" stroke="#000080" strokeWidth="2" />
                </motion.g>
              ))}
            </g>
          </g>
          
          {/* Decorative flowing ribbons */}
          <g opacity="0.2">
            <motion.path 
              d="M100,700 Q500,650 900,700 Q1300,750 1700,700 Q1800,720 1820,700" 
              fill="none" 
              stroke="url(#waveGradient)" 
              strokeWidth="20" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
            
            <motion.path 
              d="M200,800 Q600,750 1000,800 Q1400,850 1800,800" 
              fill="none" 
              stroke="url(#waveGradient)" 
              strokeWidth="15" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.8 }}
            />
          </g>
          
          {/* Travel-themed decorative elements */}
          <g opacity="0.3">
            {/* Floating travel icons */}
            <motion.g 
              transform="translate(1400, 200)"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <path d="M0,0 L20,5 L30,0 L20,-5 Z M20,5 L20,20 M20,-5 L20,-20" 
                    stroke="#000080" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round" />
            </motion.g>
            
            <motion.g 
              transform="translate(300, 600)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <circle cx="0" cy="0" r="12" fill="none" stroke="#ff9933" strokeWidth="4" />
              <path d="M0,-20 Q-8,-8 0,0 Q8,-8 0,-20" fill="none" stroke="#ff9933" strokeWidth="4" />
            </motion.g>
            
            <motion.g 
              transform="translate(1600, 800)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
            >
              <circle cx="0" cy="0" r="8" fill="#138808" opacity="0.6" />
              <circle cx="-15" cy="0" r="6" fill="#138808" opacity="0.4" />
              <circle cx="15" cy="0" r="6" fill="#138808" opacity="0.4" />
            </motion.g>
          </g>
          
          {/* Subtle mandala patterns */}
          <g opacity="0.15">
            <motion.g transform="translate(150, 150)">
              <circle cx="0" cy="0" r="60" fill="none" stroke="#ff9933" strokeWidth="2" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#ff9933" strokeWidth="1" />
              {Array.from({ length: 8 }, (_, i) => (
                <motion.line 
                  key={i}
                  x1="0" y1="-60" x2="0" y2="-30" 
                  stroke="#ff9933" 
                  strokeWidth="1"
                  transform={`rotate(${i * 45})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3 + (i * 0.1) }}
                />
              ))}
            </motion.g>
            
            <motion.g transform="translate(1700, 900)">
              <circle cx="0" cy="0" r="80" fill="none" stroke="#138808" strokeWidth="2" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="#138808" strokeWidth="1" />
              {Array.from({ length: 12 }, (_, i) => (
                <motion.line 
                  key={i}
                  x1="0" y1="-80" x2="0" y2="-40" 
                  stroke="#138808" 
                  strokeWidth="1"
                  transform={`rotate(${i * 30})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.5 + (i * 0.08) }}
                />
              ))}
            </motion.g>
          </g>
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with patriotic styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-orange-800">Made in India • स्वदेशी</span>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-orange-600 via-blue-800 to-green-700 bg-clip-text text-transparent">
              संचार
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              Sanchara
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-700 font-medium mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Consent-first trip logging for <b>NATPAC</b>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Capture trip chains with origin, mode, destination and companions—
            passively detected, user-verified, and synced for planners across भारत
          </motion.p>

          {/* Call to action buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#download"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-white to-green-600 text-blue-900 px-8 py-4 font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-800/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plane className="h-5 w-5" /> 
              <span>Download App</span>
              <span className="text-sm opacity-80">• ऐप डाउनलोड करें</span>
            </motion.a>
          
          </motion.div> */}

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 text-sm text-gray-500 font-medium"
          >
            Empowering transportation planning • परिवहन योजना को सशक्त बनाना
          </motion.p>
        </div>
      </div>
    </section>
  );
}