import { Check, X } from "lucide-react";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const comparisonData = [
  {
    feature: "Real-Time Traffic Data",
    googleMaps: true,
    waze: true,
    mmdaNavigator: true,
    hereTraffic: true,
    tomtomTraffic: true,
    intelliTraffic: true,
  },
  {
    feature: "Predictive Analytics",
    googleMaps: false,
    waze: false,
    mmdaNavigator: false,
    hereTraffic: true,
    tomtomTraffic: true,
    intelliTraffic: true,
  },
  {
    feature: "Weather Data Integration",
    googleMaps: false,
    waze: false,
    mmdaNavigator: false,
    hereTraffic: false,
    tomtomTraffic: false,
    intelliTraffic: true,
  },
  {
    feature: "Congestion Alerts",
    googleMaps: true,
    waze: true,
    mmdaNavigator: true,
    hereTraffic: true,
    tomtomTraffic: true,
    intelliTraffic: true,
  },
  {
    feature: "Alternative Routes",
    googleMaps: true,
    waze: true,
    mmdaNavigator: false,
    hereTraffic: true,
    tomtomTraffic: true,
    intelliTraffic: true,
  },
  {
    feature: "Local Context Focus",
    googleMaps: false,
    waze: false,
    mmdaNavigator: true,
    hereTraffic: false,
    tomtomTraffic: false,
    intelliTraffic: true,
  },
];

const systems = [
  { key: "googleMaps", name: "Google Maps", country: "USA" },
  { key: "waze", name: "Waze", country: "Global" },
  { key: "mmdaNavigator", name: "MMDA Navigator", country: "Philippines" },
  { key: "hereTraffic", name: "HERE Traffic", country: "EU/US" },
  { key: "tomtomTraffic", name: "TomTom", country: "Global" },
  { key: "intelliTraffic", name: "IntelliTraffic", country: "Philippines", highlight: true },
];

export function GapAnalysis() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Competitive Analysis
          </div>
          <h2 className="text-4xl sm:text-5xl text-slate-900 mb-4">
            How IntelliTraffic Stands Out
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive comparison with existing traffic management systems
          </p>
        </div>

        {/* Comparison table - Desktop */}
        <Card className="hidden lg:block overflow-hidden border-slate-200">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-[250px]">Feature</TableHead>
                  {systems.map((system) => (
                    <TableHead
                      key={system.key}
                      className={`text-center ${
                        system.highlight ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="space-y-1">
                        <div>{system.name}</div>
                        <div className="text-xs text-slate-500">{system.country}</div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.feature}</TableCell>
                    {systems.map((system) => {
                      const hasFeature = row[system.key as keyof typeof row];
                      return (
                        <TableCell
                          key={system.key}
                          className={`text-center ${
                            system.highlight ? "bg-blue-50/50" : ""
                          }`}
                        >
                          {hasFeature ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Mobile view - Cards */}
        <div className="lg:hidden space-y-6">
          {systems.map((system) => (
            <Card
              key={system.key}
              className={`p-6 ${
                system.highlight
                  ? "border-blue-500 border-2 bg-blue-50/30"
                  : "border-slate-200"
              }`}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-slate-900">{system.name}</h3>
                  {system.highlight && (
                    <span className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
                      Our Solution
                    </span>
                  )}
                </div>
                <p className="text-slate-600">{system.country}</p>
              </div>
              <div className="space-y-2">
                {comparisonData.map((row, index) => {
                  const hasFeature = row[system.key as keyof typeof row];
                  return (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-700">{row.feature}</span>
                      {hasFeature ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
