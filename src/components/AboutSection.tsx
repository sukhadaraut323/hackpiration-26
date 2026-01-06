import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const step = 1;
    const maxScroll = slider.scrollWidth / 2;

    const scroll = () => {
      scrollAmount += step;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const placeholderImages = Array(8).fill(null);

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>About Us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="text-primary font-semibold">MLSC, VIT Pune</span> is a dynamic tech community operating under the aegis of{" "}
            <span className="text-foreground font-semibold">Microsoft</span>. Guided by the non-campus Microsoft Learn Student Ambassador program, we are dedicated to empowering students by offering a platform to develop both technical and non-technical skills, with a strong focus on fostering a culture of{" "}
            <span className="text-primary">open-source collaboration</span> and{" "}
            <span className="text-primary">skill development</span>. MLSC Pune drives innovation through events, projects, and hackathons.
          </p>
        </div>

        {/* Image slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...placeholderImages, ...placeholderImages].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-40 bg-card border border-border/50 rounded-lg overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 font-mono text-sm bg-gradient-to-br from-muted/20 to-muted/5">
                  Event {(index % 8) + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
