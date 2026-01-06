import { useState } from "react";
import { Send, Linkedin, Twitter, Trophy } from "lucide-react";

const ContestSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const [platform, setPlatform] = useState("linkedin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { postUrl, platform });
    setShowForm(false);
    setPostUrl("");
  };

  const placeholderWinners = [
    { name: "Participant 1", handle: "@user1" },
    { name: "Participant 2", handle: "@user2" },
    { name: "Participant 3", handle: "@user3" },
  ];

  return (
    <section id="contest" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <h2 className="section-title">
            <span>Social Media Contest</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            Participate in our social media challenges and win exclusive swags.
            <br />
            <span className="text-primary">Most viral posts on LinkedIn and X win.</span>
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <Send size={18} />
            Submit Entry
          </button>
        </div>

        {/* Entry Form */}
        {showForm && (
          <div className="max-w-md mx-auto mb-16 p-6 bg-card border border-primary/30 rounded-xl glow-primary animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Post URL
                </label>
                <input
                  type="url"
                  value={postUrl}
                  onChange={(e) => setPostUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="linkedin">LinkedIn</option>
                  <option value="x">X (Twitter)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Entry
              </button>
            </form>
          </div>
        )}

        {/* Winners Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LinkedIn Winners */}
          <div className="p-6 bg-card border border-border/50 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Linkedin size={24} className="text-primary" />
              <h3 className="font-semibold text-foreground">Top Winners from LinkedIn</h3>
            </div>
            <div className="space-y-3">
              {placeholderWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/30"
                >
                  <Trophy size={16} className={index === 0 ? "text-secondary" : "text-muted-foreground"} />
                  <div>
                    <span className="text-sm text-foreground">{winner.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">{winner.handle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* X Winners */}
          <div className="p-6 bg-card border border-border/50 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Twitter size={24} className="text-primary" />
              <h3 className="font-semibold text-foreground">Top Winners from X</h3>
            </div>
            <div className="space-y-3">
              {placeholderWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/30"
                >
                  <Trophy size={16} className={index === 0 ? "text-secondary" : "text-muted-foreground"} />
                  <div>
                    <span className="text-sm text-foreground">{winner.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">{winner.handle}</span>
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

export default ContestSection;
