import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { TrafficMap } from "./components/TrafficMap";
import { RoutePlanner } from "./components/RoutePlanner";
import { Dashboard } from "./components/Dashboard";
import { IncidentReporter } from "./components/IncidentReporter";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "traffic-map":
        return <TrafficMap />;
      case "route-planner":
        return <RoutePlanner />;
      case "analytics":
        return <Dashboard />;
      case "incident-reporter":
        return <IncidentReporter />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="pt-16">
        <PageTransition pageKey={currentPage}>
          {renderPage()}
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
