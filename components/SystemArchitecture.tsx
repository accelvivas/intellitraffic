import { Database, Cpu, Cloud, Monitor, Smartphone, Activity } from "lucide-react";
import { Card } from "./ui/card";

const architectureComponents = [
  {
    icon: Database,
    title: "Data Layer",
    items: ["PostgreSQL + PostGIS", "InfluxDB / TimescaleDB", "Redis Cache", "S3 Object Storage"],
    color: "bg-blue-500",
  },
  {
    icon: Activity,
    title: "Ingestion Layer",
    items: ["Traffic APIs", "Weather Data", "Incident Reports", "Real-time Streams"],
    color: "bg-green-500",
  },
  {
    icon: Cpu,
    title: "ML/Analytics",
    items: ["LSTM Networks", "Ensemble Models", "TensorFlow/PyTorch", "Feature Engineering"],
    color: "bg-purple-500",
  },
  {
    icon: Cloud,
    title: "Backend Services",
    items: ["FastAPI / Flask", "Model Serving", "REST APIs", "WebSocket Streams"],
    color: "bg-orange-500",
  },
  {
    icon: Monitor,
    title: "Web Dashboard",
    items: ["React + TypeScript", "Real-time Maps", "Admin Console", "Data Visualization"],
    color: "bg-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    items: ["Native Android/Kotlin", "Push Notifications", "Offline Mode", "Route Planning"],
    color: "bg-pink-500",
  },
];

export function SystemArchitecture() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full mb-4">
            System Design
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Technical Architecture
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A scalable, modular architecture designed for real-time traffic prediction and analysis
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {architectureComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${component.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white">{component.title}</h3>
                </div>
                <ul className="space-y-2">
                  {component.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Flow diagram */}
        <div className="mt-16">
          <Card className="p-8 bg-slate-800 border-slate-700">
            <h3 className="text-white mb-6 text-center">Data Flow Pipeline</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 flex-wrap">
              {["Data Collection", "Preprocessing", "Model Training", "Inference", "User Interface"].map((step, index, array) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center min-w-[160px]">
                    {step}
                  </div>
                  {index < array.length - 1 && (
                    <div className="hidden lg:block text-slate-600">→</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
