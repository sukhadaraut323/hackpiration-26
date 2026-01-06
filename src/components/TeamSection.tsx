import { User } from "lucide-react";

const teamMembers = [
  {
    name: "President",
    role: "MLSC President",
    category: "Leadership",
  },
  {
    name: "Organizer",
    role: "Event Organizer",
    category: "Leadership",
  },
  {
    name: "Core Member 1",
    role: "Technical Lead",
    category: "Core Team",
  },
  {
    name: "Core Member 2",
    role: "Design Lead",
    category: "Core Team",
  },
  {
    name: "Coordinator 1",
    role: "Logistics",
    category: "Coordinators",
  },
  {
    name: "Coordinator 2",
    role: "Marketing",
    category: "Coordinators",
  },
  {
    name: "Coordinator 3",
    role: "Outreach",
    category: "Coordinators",
  },
  {
    name: "Coordinator 4",
    role: "Sponsorship",
    category: "Coordinators",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Meet The Team</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 font-mono text-sm">
          MLSC 2026 Panel
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-card border border-border/50 rounded-xl transition-all duration-300 hover:border-primary/30 hover-glow"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-muted/50 border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <User size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <span className="font-semibold text-foreground text-center text-sm">
                {member.name}
              </span>
              <span className="text-xs text-primary mt-1">
                {member.role}
              </span>
              <span className="text-xs text-muted-foreground mt-1 font-mono">
                {member.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
