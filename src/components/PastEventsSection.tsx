const PastEventsSection = () => {
  const placeholderEvents = Array(6).fill(null);

  return (
    <section id="past-events" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Past Events</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholderEvents.map((_, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-card border border-border/50 rounded-xl overflow-hidden hover-glow transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/5">
                <span className="text-muted-foreground/40 font-mono text-sm">
                  Event {index + 1}
                </span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
