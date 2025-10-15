import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, MapPin, Navigation, BarChart3, AlertTriangle, Home } from "lucide-react";
import logo from "figma:asset/1941717026069efc744c037d45d24f7adc96a286.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "traffic-map", label: "Traffic Map", icon: MapPin },
  { id: "route-planner", label: "Route Planner", icon: Navigation },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "incident-reporter", label: "Report Incident", icon: AlertTriangle },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => handleNavigate("home")}
          >
            <img
              src={logo}
              alt="IntelliTraffic Logo"
              className="h-10 w-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#1a3a52]">
                Intelli<span className="text-[#06b6d4]">traffic</span>
              </span>
              <span className="text-[10px] text-[#06b6d4] tracking-wider uppercase">Predictive Urban Flow</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => handleNavigate(item.id)}
                  className={isActive ? "bg-[#06b6d4] hover:bg-[#0891b2] text-white" : "hover:bg-slate-100 hover:text-[#06b6d4]"}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-cyan-50 active:bg-cyan-100 transition-colors touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1a3a52]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a3a52]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-200/50">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors touch-manipulation active:scale-95 ${
                      isActive
                        ? "bg-[#06b6d4] text-white"
                        : "text-[#1a3a52] hover:bg-cyan-50 active:bg-cyan-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
