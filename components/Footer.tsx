import { Mail, Github, FileText, Calendar } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">
              Intelli<span className="text-[#22d3ee]">traffic</span>
            </h3>
            <p className="text-cyan-200/60 mb-4">
              A capstone project leveraging predictive analytics and machine learning 
              for smarter urban traffic management.
            </p>
            <div className="flex items-center gap-2 text-cyan-200/60">
              <Calendar className="w-4 h-4" />
              <span>September 2025</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4">Features</h4>
            <ul className="space-y-3">
              <li>
                <a href="#demo" className="text-cyan-200/60 hover:text-[#22d3ee] transition-colors">
                  Traffic Map
                </a>
              </li>
              <li>
                <a href="#route-planner" className="text-cyan-200/60 hover:text-[#22d3ee] transition-colors">
                  Route Planner
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-cyan-200/60 hover:text-[#22d3ee] transition-colors">
                  Analytics Dashboard
                </a>
              </li>
              <li>
                <a href="#incident-reporter" className="text-cyan-200/60 hover:text-[#22d3ee] transition-colors">
                  Incident Reporter
                </a>
              </li>
            </ul>
          </div>

          {/* Institution */}
          <div>
            <h4 className="mb-4">Institution</h4>
            <ul className="space-y-3 text-cyan-200/60">
              <li>National University</li>
              <li>College of Computing and Information Technologies</li>
              <li>BS Information Technology</li>
              <li>Mobile & Web Application</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:intellitraffic@nu.edu.ph"
                className="flex items-center gap-2 text-cyan-200/60 hover:text-[#22d3ee] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>intellitraffic@nu.edu.ph</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-cyan-200/60 hover:text-[#22d3ee] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-cyan-200/60 hover:text-[#22d3ee] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-[#1a3a52]/50 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyan-200/60 text-center md:text-left">
            © 2025 Intelli<span className="text-[#22d3ee]">traffic</span>. A National University Capstone Project.
          </p>
          <div className="text-cyan-200/60 text-center md:text-right">
            <p>Alcantara • Hernandez • Tan • Viray</p>
            <p className="text-sm">Adviser: Irene Balmes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
