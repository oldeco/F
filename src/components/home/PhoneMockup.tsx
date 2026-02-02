import { useState, useEffect } from "react";
import { Activity, Check, AlertTriangle } from "lucide-react";

export function PhoneMockup() {
  const [repCount, setRepCount] = useState(0);
  const [phase, setPhase] = useState<"down" | "up">("down");
  const [formScore, setFormScore] = useState(94);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev === "down") {
          return "up";
        } else {
          setRepCount((r) => (r + 1) % 10);
          setFormScore(Math.floor(Math.random() * 10) + 90);
          return "down";
        }
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Phone glow */}
      <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
      
      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-muted/80 to-muted/40 rounded-[3rem] p-2 shadow-medium border border-border/50 backdrop-blur-sm">
        {/* Coming Soon overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[3rem]">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-[3rem]" />
          <div className="relative px-6 py-3 bg-accent-gradient rounded-full shadow-accent">
            <span className="text-accent-foreground font-bold text-lg tracking-wide">Coming Soon</span>
          </div>
        </div>
        
        {/* Inner bezel */}
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-muted rounded-full" />
          </div>

          {/* Status bar */}
          <div className="absolute top-2 left-6 right-6 flex items-center justify-between text-[10px] text-muted-foreground z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-muted-foreground rounded-sm">
                <div className="w-3/4 h-full bg-accent rounded-sm" />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="absolute inset-0 pt-10 px-4 pb-8">
            {/* App header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-accent-gradient flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xs">FS</span>
                </div>
                <span className="text-xs font-semibold text-foreground">
                  Live Analysis
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] text-red-400 font-medium">REC</span>
              </div>
            </div>

            {/* Exercise video area with stick figure */}
            <div className="relative h-44 rounded-xl bg-muted/50 border border-border/50 overflow-hidden mb-3">
              {/* Animated stick figure doing squat */}
              <svg 
                viewBox="0 0 100 120" 
                className="absolute inset-0 w-full h-full p-4"
              >
                {/* Head */}
                <circle 
                  cx="50" 
                  cy="20" 
                  r="10" 
                  fill="none" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                />
                
                {/* Body */}
                <line 
                  x1="50" 
                  y1="30" 
                  x2="50" 
                  y2={phase === "down" ? "60" : "65"} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Left arm */}
                <line 
                  x1="50" 
                  y1="35" 
                  x2={phase === "down" ? "30" : "25"} 
                  y2={phase === "down" ? "55" : "45"} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Right arm */}
                <line 
                  x1="50" 
                  y1="35" 
                  x2={phase === "down" ? "70" : "75"} 
                  y2={phase === "down" ? "55" : "45"} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Left upper leg */}
                <line 
                  x1="50" 
                  y1={phase === "down" ? "60" : "65"} 
                  x2={phase === "down" ? "35" : "40"} 
                  y2={phase === "down" ? "80" : "90"} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Left lower leg */}
                <line 
                  x1={phase === "down" ? "35" : "40"} 
                  y1={phase === "down" ? "80" : "90"} 
                  x2={phase === "down" ? "30" : "40"} 
                  y2="110" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Right upper leg */}
                <line 
                  x1="50" 
                  y1={phase === "down" ? "60" : "65"} 
                  x2={phase === "down" ? "65" : "60"} 
                  y2={phase === "down" ? "80" : "90"} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Right lower leg */}
                <line 
                  x1={phase === "down" ? "65" : "60"} 
                  y1={phase === "down" ? "80" : "90"} 
                  x2={phase === "down" ? "70" : "60"} 
                  y2="110" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2"
                  className="transition-all duration-500"
                />

                {/* Joint indicators */}
                <circle cx="50" cy="35" r="3" fill="hsl(var(--accent))" className="opacity-60" />
                <circle cx={phase === "down" ? "35" : "40"} cy={phase === "down" ? "80" : "90"} r="3" fill="hsl(142, 76%, 36%)" className="transition-all duration-500" />
                <circle cx={phase === "down" ? "65" : "60"} cy={phase === "down" ? "80" : "90"} r="3" fill="hsl(142, 76%, 36%)" className="transition-all duration-500" />
              </svg>

              {/* Analysis overlay */}
              <div className="absolute top-2 left-2 right-2 flex justify-between">
                <div className="px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border/50">
                  <span className="text-[9px] text-muted-foreground">Knee Angle</span>
                  <p className="text-xs font-semibold text-accent">{phase === "down" ? "92°" : "175°"}</p>
                </div>
                <div className="px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border/50">
                  <span className="text-[9px] text-muted-foreground">Hip Depth</span>
                  <p className="text-xs font-semibold text-green-400">{phase === "down" ? "Parallel" : "Standing"}</p>
                </div>
              </div>

              {/* Exercise label */}
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border/50">
                <span className="text-[10px] font-medium text-foreground">Barbell Squat</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-card border border-border/50 text-center">
                <p className="text-[9px] text-muted-foreground">Reps</p>
                <p className="text-lg font-bold text-foreground">{repCount}</p>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/50 text-center">
                <p className="text-[9px] text-muted-foreground">Form</p>
                <p className="text-lg font-bold text-accent">{formScore}%</p>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/50 text-center">
                <p className="text-[9px] text-muted-foreground">Tempo</p>
                <p className="text-lg font-bold text-foreground">2:1</p>
              </div>
            </div>

            {/* Form feedback */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-[10px] text-green-400">Depth is on target</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-[10px] text-yellow-400">Keep chest more upright</span>
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-card/80 backdrop-blur-sm border-t border-border/50 flex items-center justify-around px-6">
            <button className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-accent" />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            </button>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-accent-gradient text-accent-foreground text-xs font-medium shadow-accent animate-float">
        Live Demo
      </div>
      <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs text-foreground shadow-soft animate-float" style={{ animationDelay: "-3s" }}>
        <span className="text-accent">✓</span> AI Form Analysis
      </div>
    </div>
  );
}
