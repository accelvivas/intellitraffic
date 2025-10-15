import { Hero } from "./Hero";
import { Features } from "./Features";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a3a52] via-[#1e3a5f] to-[#0f172a]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4 px-4"
          >
            Explore Intelli<span className="text-[#22d3ee]">traffic</span> Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-cyan-200/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            Navigate through our interactive prototype to experience the full capabilities of the system
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto"
          >
            <button
              onClick={() => onNavigate("traffic-map")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#06b6d4] hover:bg-[#0891b2] active:bg-[#0e7490] text-white rounded-xl shadow-lg hover:shadow-xl transition-all touch-manipulation active:scale-95"
            >
              View Traffic Map
            </button>
            <button
              onClick={() => onNavigate("route-planner")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#a855f7] hover:bg-[#9333ea] active:bg-[#7e22ce] text-white rounded-xl shadow-lg hover:shadow-xl transition-all touch-manipulation active:scale-95"
            >
              Plan a Route
            </button>
            <button
              onClick={() => onNavigate("analytics")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#10b981] hover:bg-[#059669] active:bg-[#047857] text-white rounded-xl shadow-lg hover:shadow-xl transition-all touch-manipulation active:scale-95"
            >
              View Analytics
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
