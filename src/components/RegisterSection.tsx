import { ArrowRight } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 gradient-radial opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary text-glow">Innovate</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of developers, designers, and innovators at Hack Aspire '26.
            Limited spots available.
          </p>

          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            Register on Devfolio
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <p className="text-sm text-muted-foreground mt-6 font-mono">
            Registration closes on 15th January
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
