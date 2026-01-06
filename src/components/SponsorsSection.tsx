import { Plus } from "lucide-react";

const sponsors = [
  "CapEx.club",
  "BlockOn",
  "SolidityScan.xyz",
  "WebWire",
  "Actual One Protocol",
  "Quill Audits",
  "Devfolio",
  "Polygon",
  "AppWorld",
  "Stack",
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Sponsors</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor}
              className="group flex items-center justify-center h-20 px-4 bg-card border border-border/50 rounded-lg hover-glow transition-all duration-300 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {sponsor}
              </span>
            </div>
          ))}

          {/* Become a sponsor card */}
          <div className="group flex flex-col items-center justify-center h-20 px-4 bg-primary/5 border border-primary/30 border-dashed rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer">
            <Plus size={20} className="text-primary mb-1" />
            <span className="text-xs font-medium text-primary">
              Become a Sponsor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
