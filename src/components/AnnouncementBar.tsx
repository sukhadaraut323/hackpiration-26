import { AlertTriangle } from "lucide-react";

const AnnouncementBar = () => {
  const content = "Registration Closing Soon • Hack Aspire '26 • Register Yourself Now";
  
  return (
    <div className="fixed top-[60px] left-0 right-0 z-40 bg-primary/10 border-y border-primary/20 overflow-hidden">
      <div className="py-2 flex">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-mono text-primary">
              <AlertTriangle size={14} className="animate-pulse-glow" />
              {content}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-mono text-primary">
              <AlertTriangle size={14} className="animate-pulse-glow" />
              {content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
