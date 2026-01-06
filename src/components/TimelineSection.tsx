import { Circle, CheckCircle2 } from "lucide-react";

const timelineEvents = [
  {
    title: "Registrations Open",
    description: "till 15th Jan",
    active: true,
  },
  {
    title: "Round 1",
    description: "Idea Submission",
    active: false,
  },
  {
    title: "Shortlisted Teams",
    description: "Announced",
    active: false,
  },
  {
    title: "Day 1",
    description: "Build Phase Begins",
    active: false,
  },
  {
    title: "Day 2",
    description: "Build Phase Ends",
    active: false,
  },
  {
    title: "31st Jan",
    description: "Judging & Winner Announcement",
    active: false,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Timeline</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Main line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-border" />
            <div className="absolute top-6 left-0 w-1/6 h-px bg-gradient-to-r from-primary to-transparent" />

            <div className="grid grid-cols-6 gap-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Node */}
                  <div
                    className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      event.active
                        ? "bg-primary/20 border-primary text-primary glow-primary"
                        : "bg-card border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {event.active ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <Circle size={16} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-4 text-center">
                    <h4
                      className={`font-semibold text-sm ${
                        event.active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {event.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-6 w-px bg-border" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Node */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all ${
                      event.active
                        ? "bg-primary/20 border-primary text-primary glow-primary"
                        : "bg-card border-border text-muted-foreground"
                    }`}
                  >
                    {event.active ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <Circle size={16} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h4
                      className={`font-semibold ${
                        event.active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
