import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Mail, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Kristian Diether Alcantara",
    role: "Data Scientist",
    initials: "KA",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Gian Accel Hernandez",
    role: "Mobile Engineer / QA",
    initials: "GH",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Benedict James Tan",
    role: "Backend Engineer / ML Ops",
    initials: "BT",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Ranuel Glenn Viray",
    role: "Project Lead",
    initials: "RV",
    color: "from-green-500 to-emerald-500",
  },
];

const adviser = {
  name: "Irene Balmes",
  role: "Capstone Adviser",
  initials: "IB",
  color: "from-indigo-500 to-purple-500",
};

export function Team() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full mb-4">
            The Team
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Meet the Developers
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Bachelor of Science in Information Technology with Specialization in Mobile and Web Application
          </p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white text-xl`}>
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-white mb-2">{member.name}</h3>
              <p className="text-slate-400 mb-4">{member.role}</p>
              <div className="flex justify-center gap-2">
                <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Adviser */}
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-500" />
              <p className="text-slate-400">Capstone Adviser</p>
            </div>
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className={`bg-gradient-to-br ${adviser.color} text-white text-2xl`}>
                {adviser.initials}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-white mb-2">{adviser.name}</h3>
            <p className="text-slate-300">{adviser.role}</p>
          </Card>
        </div>

        {/* University info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h4 className="text-white mb-2">National University</h4>
            <p className="text-slate-400 mb-1">College of Computing and Information Technologies</p>
            <p className="text-slate-500">September 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
