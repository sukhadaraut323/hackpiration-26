import { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-31T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-radial opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Logo badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">MLSC VIT Pune</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">HACK</span>
            <span className="text-primary text-glow ml-2 sm:ml-4">ASPIRE</span>
            <span className="text-muted-foreground font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-2 sm:ml-4">
              '26
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
            Build. Innovate. <span className="text-primary">Transform.</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={handleRegister}
            className="group relative inline-flex items-center gap-3 px-8 py-4 mt-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            <span className="relative z-10">Register Now</span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
          </button>

          {/* Event date */}
          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Event Date
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-foreground">
              31st January
            </span>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Registration closes in
            </span>
            <div className="flex gap-3 sm:gap-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-card border border-primary/30 rounded-lg glow-primary">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-foreground">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground mt-2 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
