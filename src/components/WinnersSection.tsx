import { Trophy, Medal, Award } from "lucide-react";

const winners = [
  {
    place: "Winner",
    team: "Team Alpha",
    project: "AI Innovation Project",
    icon: Trophy,
    color: "text-secondary",
    borderColor: "border-secondary/40",
  },
  {
    place: "Runner-up",
    team: "Team Beta",
    project: "Smart Solutions Hub",
    icon: Medal,
    color: "text-muted-foreground",
    borderColor: "border-muted-foreground/40",
  },
  {
    place: "Second Runner-up",
    team: "Team Gamma",
    project: "Next Gen Platform",
    icon: Award,
    color: "text-orange-400",
    borderColor: "border-orange-400/40",
  },
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Winners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {winners.map((winner, index) => (
            <div
              key={winner.place}
              className={`group relative flex flex-col items-center p-8 bg-card border ${winner.borderColor} rounded-xl transition-all duration-300 hover:scale-105 hover-glow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <winner.icon size={40} className={`${winner.color} mb-4`} />
              <span className={`text-xl font-bold ${winner.color}`}>
                {winner.place}
              </span>
              <span className="text-foreground font-semibold mt-3">
                {winner.team}
              </span>
              <span className="text-sm text-muted-foreground mt-1 text-center">
                {winner.project}
              </span>
              
              {/* Decorative elements */}
              <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r ${winner.borderColor} rounded-tr-xl`} />
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l ${winner.borderColor} rounded-bl-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
