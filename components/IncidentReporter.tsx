import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  AlertTriangle, 
  Car, 
  Construction, 
  CloudRain, 
  MapPin, 
  Camera, 
  Send,
  CheckCircle2
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const incidentTypes = [
  { value: "accident", label: "Accident", icon: Car, color: "text-red-600" },
  { value: "roadwork", label: "Roadwork", icon: Construction, color: "text-orange-600" },
  { value: "hazard", label: "Road Hazard", icon: AlertTriangle, color: "text-yellow-600" },
  { value: "weather", label: "Weather Condition", icon: CloudRain, color: "text-blue-600" },
];

const recentReports = [
  { 
    id: 1, 
    type: "accident", 
    location: "EDSA-Shaw Boulevard", 
    time: "5 min ago",
    status: "verified",
    severity: "high"
  },
  { 
    id: 2, 
    type: "roadwork", 
    location: "C5-Ortigas Avenue", 
    time: "18 min ago",
    status: "verified",
    severity: "medium"
  },
  { 
    id: 3, 
    type: "hazard", 
    location: "Commonwealth Ave", 
    time: "32 min ago",
    status: "pending",
    severity: "low"
  },
];

export function IncidentReporter() {
  const [incidentType, setIncidentType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIncidentType("");
      setLocation("");
      setDescription("");
    }, 3000);
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
            Community Reporting
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#1a3a52] mb-4">
            Report Traffic Incidents
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Help other commuters by reporting accidents, roadwork, and hazards in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-slate-200">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-slate-900 mb-2">Report Submitted Successfully!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for helping the community. Your report is being verified.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Report Another Incident
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="incident-type">Incident Type</Label>
                    <Select value={incidentType} onValueChange={setIncidentType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        {incidentTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <Icon className={`w-4 h-4 ${type.color}`} />
                                {type.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                        placeholder="Enter location or use current location"
                        required
                      />
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Use My Current Location
                    </Button>
                  </div>

                  <div>
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-2 min-h-[120px]"
                      placeholder="Provide additional details about the incident..."
                    />
                  </div>

                  <div>
                    <Label>Add Photo (Optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors cursor-pointer">
                      <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">Click to upload or drag and drop</p>
                      <p className="text-slate-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Report
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Recent Reports */}
          <div className="space-y-6">
            <Card className="p-6 border-slate-200">
              <h3 className="text-slate-900 mb-4">Recent Community Reports</h3>
              <div className="space-y-4">
                {recentReports.map((report) => {
                  const type = incidentTypes.find(t => t.value === report.type);
                  const Icon = type?.icon || AlertTriangle;
                  
                  return (
                    <div key={report.id} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon className={`w-5 h-5 ${type?.color} flex-shrink-0 mt-0.5`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-slate-900">{type?.label}</span>
                            <Badge 
                              variant="outline" 
                              className={
                                report.severity === "high" 
                                  ? "border-red-200 text-red-700" 
                                  : report.severity === "medium"
                                  ? "border-yellow-200 text-yellow-700"
                                  : "border-green-200 text-green-700"
                              }
                            >
                              {report.severity}
                            </Badge>
                          </div>
                          <p className="text-slate-600 break-words">{report.location}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-slate-500">{report.time}</span>
                            {report.status === "verified" && (
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 border-slate-200 bg-blue-50">
              <h4 className="text-slate-900 mb-3">Why Report?</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Help other commuters avoid delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Improve traffic prediction accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Assist traffic authorities in response</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
