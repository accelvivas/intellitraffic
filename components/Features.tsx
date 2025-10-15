import { Brain, Cloud, Bell, Map, BarChart3, Shield, Smartphone, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { FloatingCard } from "./FloatingCard";
import { motion } from "motion/react";

const features = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Machine learning models using LSTM and ensemble learning to forecast traffic conditions with high accuracy.",
    color: "from-[#06b6d4] to-[#22d3ee]",
  },
  {
    icon: Cloud,
    title: "Real-time Data Integration",
    description: "Combines historical traffic data, weather conditions, and incident reports for comprehensive predictions.",
    color: "from-[#a855f7] to-[#c084fc]",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Proactive notifications for predicted congestion hotspots and alternative route suggestions.",
    color: "from-[#10b981] to-[#34d399]",
  },
  {
    icon: Map,
    title: "Interactive Mapping",
    description: "Visual heatmaps and route planning with predicted travel times for commuters.",
    color: "from-[#06b6d4] to-[#10b981]",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Comprehensive dashboards for traffic managers with historical charts and analytics.",
    color: "from-[#1a3a52] to-[#06b6d4]",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description: "Anonymized data processing with secure, encrypted communications throughout the system.",
    color: "from-[#1e3a5f] to-[#64748b]",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Seamless experience across web and mobile platforms with offline caching capabilities.",
    color: "from-[#22d3ee] to-[#06b6d4]",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized inference with sub-500ms response times for real-time traffic predictions.",
    color: "from-[#10b981] to-[#22d3ee]",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-[#1a3a52] rounded-full mb-4">
            Core Features
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#1a3a52] mb-4">
            Intelligent Traffic Solutions
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            A comprehensive system combining cutting-edge technology with practical urban traffic management
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FloatingCard key={index} delay={index * 0.05}>
                <Card className="p-4 sm:p-6 border-slate-200 bg-white hover:shadow-xl hover:border-cyan-300 transition-all duration-300 h-full group touch-manipulation active:scale-[0.98]">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <h3 className="text-[#1a3a52] mb-2 text-base sm:text-lg">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm sm:text-base">{feature.description}</p>
                </Card>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
