import { Target, CheckCircle2, Globe, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const specificObjectives = [
  "Collect and preprocess datasets including traffic flow data, weather conditions, and historical congestion patterns",
  "Develop predictive models using machine learning algorithms (RNN, LSTM, ensemble learning)",
  "Design and implement web and mobile applications for visualizing predicted traffic conditions",
  "Integrate alert mechanisms for congestion hotspots and alternative routes",
  "Conduct comprehensive system evaluation to assess prediction accuracy, usability, and performance",
];

const sdgGoals = [
  {
    icon: Globe,
    number: "11",
    title: "Sustainable Cities",
    description: "Improving urban mobility and reducing congestion",
  },
  {
    icon: TrendingUp,
    number: "9",
    title: "Innovation & Infrastructure",
    description: "Promoting innovative transportation solutions",
  },
  {
    icon: Users,
    number: "13",
    title: "Climate Action",
    description: "Reducing emissions through optimized traffic flow",
  },
];

export function Objectives() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* General Objective */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            Project Objectives
          </div>
          <h2 className="text-4xl sm:text-5xl text-slate-900 mb-8">
            Our Mission
          </h2>
          <Card className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 border-0 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white mb-3">General Objective</h3>
                <p className="text-white/90 text-lg">
                  To design and develop a Traffic Predictive Analytics System that leverages 
                  machine learning and data visualization to provide accurate and scalable 
                  traffic forecasts for urban areas.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Specific Objectives */}
        <div className="mb-16">
          <h3 className="text-3xl text-slate-900 mb-8 text-center">
            Specific Objectives
          </h3>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {specificObjectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-700">{objective}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SDG Alignment */}
        <div>
          <h3 className="text-3xl text-slate-900 mb-8 text-center">
            Aligned with UN Sustainable Development Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="mb-2 text-slate-500">SDG {goal.number}</div>
                  <h4 className="text-slate-900 mb-3">{goal.title}</h4>
                  <p className="text-slate-600">{goal.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <div className="text-4xl text-blue-600 mb-2">₱3.5B</div>
            <p className="text-slate-700">Daily productivity losses in Metro Manila</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <div className="text-4xl text-purple-600 mb-2">Real-time</div>
            <p className="text-slate-700">Predictive analytics and forecasting</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-white border-green-200">
            <div className="text-4xl text-green-600 mb-2">Multi-platform</div>
            <p className="text-slate-700">Web and mobile accessibility</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
