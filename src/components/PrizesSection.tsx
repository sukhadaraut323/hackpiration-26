import { Trophy, Medal, Award } from "lucide-react";

const prizes = [
  {
    place: "First Prize",
    amount: "₹1,00,000",
    icon: Trophy,
    color: "text-secondary",
    borderColor: "border-secondary/40",
    glowColor: "hover:shadow-[0_0_30px_hsl(45_100%_55%/0.3)]",
  },
  {
    place: "Second Prize",
    amount: "₹50,000",
    icon: Medal,
    color: "text-muted-foreground",
    borderColor: "border-muted-foreground/40",
    glowColor: "hover:shadow-[0_0_20px_hsl(220_10%_55%/0.3)]",
  },
  {
    place: "Third Prize",
    amount: "₹25,000",
    icon: Award,
    color: "text-orange-400",
    borderColor: "border-orange-400/40",
    glowColor: "hover:shadow-[0_0_20px_hsl(25_100%_55%/0.3)]",
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Prizes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.place}
              className={`group relative flex flex-col items-center p-8 bg-card border ${prize.borderColor} rounded-xl transition-all duration-300 hover:scale-105 ${prize.glowColor} hover-glow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <prize.icon size={48} className={`${prize.color} mb-4`} />
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
                {prize.place}
              </span>
              <span className={`text-3xl sm:text-4xl font-bold ${prize.color}`}>
                {prize.amount}
              </span>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r ${prize.borderColor} rounded-tr-xl`} />
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l ${prize.borderColor} rounded-bl-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
