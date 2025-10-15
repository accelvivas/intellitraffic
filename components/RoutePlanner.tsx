import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { MapPin, Navigation, Clock, TrendingDown, Calendar, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const sampleRoutes = [
  {
    id: 1,
    name: "Fastest Route",
    distance: "18.5 km",
    duration: "35 min",
    predictedDuration: "42 min",
    savings: "15 min vs usual",
    congestion: "medium",
    roads: ["EDSA", "C5", "Ortigas Ave"],
  },
  {
    id: 2,
    name: "Least Congested",
    distance: "21.2 km",
    duration: "38 min",
    predictedDuration: "38 min",
    savings: "20 min vs usual",
    congestion: "low",
    roads: ["Commonwealth", "España", "Quezon Ave"],
  },
  {
    id: 3,
    name: "Shortest Distance",
    distance: "16.8 km",
    duration: "45 min",
    predictedDuration: "52 min",
    savings: "5 min vs usual",
    congestion: "high",
    roads: ["EDSA", "Shaw Blvd", "Pioneer"],
  },
];

export function RoutePlanner() {
  const [origin, setOrigin] = useState("Quezon City Hall");
  const [destination, setDestination] = useState("Makati CBD");
  const [departureTime, setDepartureTime] = useState("now");
  const [showResults, setShowResults] = useState(false);

  const getCongestionColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a3a52] via-[#1e3a5f] to-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-4 py-2 bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/30 rounded-full mb-4 text-sm sm:text-base">
            Smart Route Planning
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-4">
            AI-Powered Route Optimization
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-200/80 max-w-3xl mx-auto px-4">
            Get the best route with predicted travel times based on historical data and real-time conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Form */}
          <Card className="p-6 bg-slate-800 border-slate-700">
            <h3 className="text-white mb-6">Plan Your Route</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="origin" className="text-slate-300">Starting Point</Label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-600 text-white"
                    placeholder="Enter origin"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="destination" className="text-slate-300">Destination</Label>
                <div className="relative mt-2">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-600 text-white"
                    placeholder="Enter destination"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="time" className="text-slate-300">Departure Time</Label>
                <Select value={departureTime} onValueChange={setDepartureTime}>
                  <SelectTrigger className="mt-2 bg-slate-900 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Leave Now</SelectItem>
                    <SelectItem value="30min">In 30 minutes</SelectItem>
                    <SelectItem value="1hr">In 1 hour</SelectItem>
                    <SelectItem value="2hr">In 2 hours</SelectItem>
                    <SelectItem value="custom">Custom Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full bg-[#06b6d4] hover:bg-[#0891b2]"
                onClick={() => setShowResults(true)}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Find Best Routes
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl text-white">95%</div>
                  <div className="text-slate-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl text-white">-18min</div>
                  <div className="text-slate-400">Avg. Savings</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Route Results */}
          <div className="lg:col-span-2 space-y-4">
            {showResults ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white">Recommended Routes</h3>
                  <Badge className="bg-blue-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    {departureTime === "now" ? "Now" : departureTime}
                  </Badge>
                </div>

                {sampleRoutes.map((route, index) => (
                  <Card key={route.id} className="p-6 bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-white">{route.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 rounded text-xs border ${getCongestionColor(route.congestion)}`}>
                              {route.congestion.toUpperCase()}
                            </span>
                            {index === 0 && (
                              <Badge className="bg-green-600">Recommended</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Navigation className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-slate-400 mb-1">Distance</div>
                        <div className="text-white">{route.distance}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 mb-1">Current</div>
                        <div className="text-white">{route.duration}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 mb-1">Predicted</div>
                        <div className="text-blue-400">{route.predictedDuration}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 mb-1">Savings</div>
                        <div className="text-green-400 flex items-center gap-1">
                          <TrendingDown className="w-4 h-4" />
                          {route.savings}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-400">Via:</span>
                      {route.roads.map((road, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <span className="text-slate-300">{road}</span>
                          {i < route.roads.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-600" />
                          )}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </>
            ) : (
              <Card className="p-12 bg-slate-800 border-slate-700 text-center">
                <Navigation className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-slate-400 mb-2">Enter your route details</h3>
                <p className="text-slate-500">
                  Fill in the origin and destination to get AI-powered route recommendations
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
