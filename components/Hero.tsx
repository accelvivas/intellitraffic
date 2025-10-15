import { Button } from "./ui/button";
import { ArrowRight, TrendingDown, Zap, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646079670582-807db63b82a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhZmZpYyUyMGFlcmlhbHxlbnwxfHx8fDE3NjA1MTM1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City traffic aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52]/95 via-[#1e3a5f]/90 to-[#0f172a]/95" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#a855f7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#10b981]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-[#22d3ee]" />
          <span className="text-white/90">Capstone Project 2025</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 tracking-tight px-2"
        >
          Intelli<span className="text-[#22d3ee]">traffic</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-cyan-100 mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
        >
          Leveraging Past Traffic Data and Predictive Analytics for Smarter Congestion Control
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#34d399]" />
            </div>
            <div className="text-left">
              <div className="text-white text-xl sm:text-2xl">₱3.5B</div>
              <div className="text-white/60 text-sm sm:text-base">Daily losses reduced</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06b6d4]/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#22d3ee]" />
            </div>
            <div className="text-left">
              <div className="text-white text-xl sm:text-2xl">Real-time</div>
              <div className="text-white/60 text-sm sm:text-base">Traffic predictions</div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 max-w-md sm:max-w-none mx-auto"
        >
          <Button 
            size="lg" 
            className="bg-[#06b6d4] hover:bg-[#0891b2] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto touch-manipulation active:scale-95" 
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Features
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all w-full sm:w-auto touch-manipulation active:scale-95" 
            onClick={() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
