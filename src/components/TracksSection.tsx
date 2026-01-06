import { useState } from "react";
import { Brain, Shield, Gamepad2, Globe, Lightbulb } from "lucide-react";

const tracks = [
  {
    id: "ai",
    name: "AI / ML",
    icon: Brain,
    description: "Build intelligent solutions using machine learning and AI",
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    description: "Secure systems and protect digital infrastructure",
  },
  {
    id: "gaming",
    name: "Game Development",
    icon: Gamepad2,
    description: "Create immersive gaming experiences",
  },
  {
    id: "web",
    name: "Web Development",
    icon: Globe,
    description: "Build modern web applications and platforms",
  },
  {
    id: "open",
    name: "Open Innovation",
    icon: Lightbulb,
    description: "Bring your unique ideas to life",
  },
];

const TracksSection = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  return (
    <section id="tracks" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Tracks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
              className={`group relative flex flex-col items-center p-6 rounded-xl border transition-all duration-300 ${
                selectedTrack === track.id
                  ? "bg-primary/10 border-primary/50 glow-primary"
                  : "bg-card border-border/50 hover:border-primary/30 hover-glow"
              }`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-colors ${
                  selectedTrack === track.id
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                }`}
              >
                <track.icon size={28} />
              </div>
              <span
                className={`font-semibold text-center transition-colors ${
                  selectedTrack === track.id ? "text-primary" : "text-foreground"
                }`}
              >
                {track.name}
              </span>
              <p className="text-xs text-muted-foreground text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {track.description}
              </p>
              
              {/* Selection indicator */}
              {selectedTrack === track.id && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
