import { Card } from "./ui/card";
import { Code, Database, Smartphone, Cloud, Brain, BarChart } from "lucide-react";

const techCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    technologies: [
      "TensorFlow / PyTorch",
      "LSTM Networks",
      "XGBoost",
      "scikit-learn",
      "Prophet",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Backend",
    technologies: [
      "Python (FastAPI/Flask)",
      "Node.js (Express)",
      "Docker & Kubernetes",
      "Redis Cache",
      "Kafka Streams",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Data Storage",
    technologies: [
      "PostgreSQL + PostGIS",
      "TimescaleDB / InfluxDB",
      "S3 Object Storage",
      "Feature Store",
      "SQLite (Mobile)",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Web Frontend",
    technologies: [
      "React + TypeScript",
      "Mapbox / Leaflet",
      "Recharts",
      "WebSocket",
      "Tailwind CSS",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    technologies: [
      "Kotlin (Native Android)",
      "Flutter (Cross-platform)",
      "Firebase FCM",
      "TensorFlow Lite",
      "Google Maps SDK",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart,
    title: "DevOps & Monitoring",
    technologies: [
      "GitHub Actions CI/CD",
      "Prometheus & Grafana",
      "Nginx",
      "ELK Stack",
      "AWS / GCP / Azure",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

export function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-4">
            Technology Stack
          </div>
          <h2 className="text-4xl sm:text-5xl text-slate-900 mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leveraging industry-leading tools and frameworks for a robust, scalable solution
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-700 py-1.5 px-3 bg-slate-50 rounded-md"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center border-blue-200 bg-blue-50/50">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-slate-900 mb-2">High Performance</h4>
            <p className="text-slate-600">Sub-500ms API response times</p>
          </Card>
          <Card className="p-6 text-center border-green-200 bg-green-50/50">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="text-slate-900 mb-2">Secure by Design</h4>
            <p className="text-slate-600">End-to-end encryption & privacy-first</p>
          </Card>
          <Card className="p-6 text-center border-purple-200 bg-purple-50/50">
            <div className="text-3xl mb-2">📈</div>
            <h4 className="text-slate-900 mb-2">Scalable Architecture</h4>
            <p className="text-slate-600">Auto-scaling cloud infrastructure</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
