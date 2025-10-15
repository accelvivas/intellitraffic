import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Navigation, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import { FloatingCard } from "./FloatingCard";

const trafficData = [
  { id: 1, location: "EDSA-Shaw Blvd", severity: "high", delay: "25 min", x: 30, y: 40 },
  { id: 2, location: "C5-Ortigas Ave", severity: "medium", delay: "12 min", x: 60, y: 35 },
  { id: 3, location: "Quezon Ave-EDSA", severity: "low", delay: "5 min", x: 40, y: 25 },
  { id: 4, location: "España-Lacson", severity: "high", delay: "30 min", x: 45, y: 50 },
  { id: 5, location: "Roxas Blvd", severity: "medium", delay: "15 min", x: 25, y: 70 },
];

const predictions = [
  { time: "Now", congestion: 75 },
  { time: "30 min", congestion: 82 },
  { time: "1 hr", congestion: 90 },
  { time: "2 hr", congestion: 65 },
];

export function TrafficMap() {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"current" | "predicted">("current");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-[#1a3a52] rounded-full mb-4 text-sm sm:text-base">
            Live Traffic Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a3a52] mb-3 sm:mb-4 px-4">
            Real-Time Traffic Prediction Map
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-3xl mx-auto px-4">
            AI-powered predictions showing current and forecasted traffic conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map View */}
          <div className="lg:col-span-2">
            <FloatingCard>
              <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                <h3 className="text-base sm:text-lg text-slate-900">Metro Manila Traffic</h3>
                <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)}>
                  <TabsList className="grid w-full grid-cols-2 sm:w-auto">
                    <TabsTrigger value="current" className="text-xs sm:text-sm">Current</TabsTrigger>
                    <TabsTrigger value="predicted" className="text-xs sm:text-sm">Predicted</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Map Container */}
              <div className="relative bg-slate-100 rounded-lg h-64 sm:h-80 md:h-96 overflow-hidden touch-pan-y touch-pan-x">
                {/* Simulated map */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-slate-300/30" />
                    ))}
                  </div>

                  {/* Traffic points */}
                  {trafficData.map((point) => (
                    <div
                      key={point.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      onClick={() => setSelectedPoint(point.id)}
                    >
                      <div className={`w-6 h-6 rounded-full ${getSeverityColor(point.severity)} animate-pulse`} />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full ${getSeverityColor(point.severity)} opacity-30 animate-ping`} />
                    </div>
                  ))}

                  {/* Selected point info */}
                  {selectedPoint && (
                    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                      {trafficData
                        .filter((p) => p.id === selectedPoint)
                        .map((point) => (
                          <div key={point.id}>
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-blue-600" />
                              <span className="text-slate-900">{point.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                              <Clock className="w-4 h-4" />
                              <span>Expected delay: {point.delay}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-slate-700">High Congestion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="text-slate-700">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-slate-700">Low</span>
                    </div>
                  </div>
                </div>
              </div>
              </Card>
            </FloatingCard>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Predictions */}
            <FloatingCard delay={0.1}>
              <Card className="p-6 bg-white border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="text-slate-900">Traffic Forecast</h3>
              </div>
              <div className="space-y-3">
                {predictions.map((pred, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-600">{pred.time}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${
                            pred.congestion > 80
                              ? "bg-red-500"
                              : pred.congestion > 60
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${pred.congestion}%` }}
                        />
                      </div>
                      <span className="text-slate-900">{pred.congestion}%</span>
                    </div>
                  </div>
                ))}
              </div>
              </Card>
            </FloatingCard>

            {/* Active Alerts */}
            <FloatingCard delay={0.15}>
              <Card className="p-6 bg-white border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="text-slate-900">Active Alerts</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <Badge variant="destructive" className="mb-2">High Priority</Badge>
                  <p className="text-slate-700">EDSA northbound: Heavy congestion expected in 30 min</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Badge className="mb-2 bg-yellow-600">Medium</Badge>
                  <p className="text-slate-700">C5 roadwork causing delays near Ortigas</p>
                </div>
              </div>
              </Card>
            </FloatingCard>

            {/* Quick Actions */}
            <FloatingCard delay={0.2}>
              <Card className="p-6 bg-white border-slate-200 shadow-lg">
                <h3 className="text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  <Navigation className="w-4 h-4 mr-2" />
                  Plan Route
                </Button>
                <Button className="w-full" variant="outline">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Report Incident
                </Button>
              </div>
              </Card>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
