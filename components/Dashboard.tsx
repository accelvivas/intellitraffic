import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BarChart3, TrendingUp, TrendingDown, Activity, AlertCircle, CheckCircle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const trafficFlowData = [
  { time: "6 AM", actual: 45, predicted: 42 },
  { time: "7 AM", actual: 72, predicted: 75 },
  { time: "8 AM", actual: 88, predicted: 85 },
  { time: "9 AM", actual: 95, predicted: 92 },
  { time: "10 AM", actual: 68, predicted: 70 },
  { time: "11 AM", actual: 55, predicted: 58 },
  { time: "12 PM", actual: 62, predicted: 60 },
];

const congestionByArea = [
  { area: "EDSA", level: 85, incidents: 12 },
  { area: "C5", level: 62, incidents: 5 },
  { area: "España", level: 78, incidents: 8 },
  { area: "Ortigas", level: 45, incidents: 3 },
  { area: "Roxas Blvd", level: 55, incidents: 4 },
];

const weeklyTrends = [
  { day: "Mon", congestion: 75 },
  { day: "Tue", congestion: 80 },
  { day: "Wed", congestion: 82 },
  { day: "Thu", congestion: 78 },
  { day: "Fri", congestion: 92 },
  { day: "Sat", congestion: 45 },
  { day: "Sun", congestion: 35 },
];

export function Dashboard() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 text-[#a855f7] rounded-full mb-4">
            Analytics Dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#1a3a52] mb-4">
            Traffic Intelligence & Analytics
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Real-time insights and predictive analytics for data-driven traffic management
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">+12%</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">95.2%</div>
            <p className="text-slate-600">Prediction Accuracy</p>
          </Card>

          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <Badge className="bg-red-100 text-red-700">-5%</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">32</div>
            <p className="text-slate-600">Active Incidents</p>
          </Card>

          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">-18min</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">18 min</div>
            <p className="text-slate-600">Avg. Time Saved</p>
          </Card>

          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <Badge className="bg-blue-100 text-blue-700">Live</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">156K</div>
            <p className="text-slate-600">Active Users</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Traffic Flow Prediction */}
          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900">Traffic Flow: Actual vs Predicted</h3>
              <Badge variant="outline">Today</Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Actual Traffic"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="AI Prediction"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Weekly Trends */}
          <Card className="p-6 border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900">Weekly Congestion Trends</h3>
              <Badge variant="outline">This Week</Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="congestion" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Congestion by Area */}
        <Card className="p-6 border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900">Congestion Levels by Major Corridor</h3>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">Live Data</span>
            </div>
          </div>
          <div className="space-y-4">
            {congestionByArea.map((area, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-900">{area.area}</span>
                    <Badge variant="outline" className="text-xs">
                      {area.incidents} incidents
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {area.level > 80 ? (
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    ) : area.level > 60 ? (
                      <Activity className="w-4 h-4 text-yellow-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-green-600" />
                    )}
                    <span className="text-slate-900 min-w-[3rem] text-right">{area.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      area.level > 80
                        ? "bg-red-500"
                        : area.level > 60
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${area.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
