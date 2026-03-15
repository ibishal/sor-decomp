import React from 'react';

const App = () => {
  return (
    <div className="relative w-screen h-screen bg-[#2b2b29] overflow-hidden text-[#7b7d74] font-mono selection:bg-[#ff8c00] selection:text-white">
      {/* Grid Lines */}
      {/* Horizontal */}
      <div className="absolute top-[20vh] left-0 w-full h-[1px] bg-[#383835]" />
      <div className="absolute top-[42vh] left-0 w-full h-[1px] bg-[#383835]" />
      <div className="absolute top-[58vh] left-0 w-full h-[1px] bg-[#383835]" />
      <div className="absolute top-[80vh] left-0 w-full h-[1px] bg-[#383835]" />
      
      {/* Vertical */}
      <div className="absolute top-0 left-[15vw] w-[1px] h-full bg-[#383835]" />
      <div className="absolute top-0 left-[28vw] w-[1px] h-full bg-[#383835]" />
      <div className="absolute top-0 left-[72vw] w-[1px] h-full bg-[#383835]" />
      <div className="absolute top-0 left-[85vw] w-[1px] h-full bg-[#383835]" />

      {/* Wavy Pattern Boxes */}
      <div className="absolute top-[20vh] left-[15vw] w-[13vw] h-[22vh] wavy-bg" />
      <div className="absolute top-[58vh] left-[15vw] w-[13vw] h-[22vh] wavy-bg" />
      <div className="absolute top-[20vh] left-[72vw] w-[13vw] h-[22vh] wavy-bg" />
      <div className="absolute top-[58vh] left-[72vw] w-[13vw] h-[22vh] wavy-bg" />

      {/* Decorative Blocks */}
      <div className="absolute bottom-[80vh] left-[4vw] w-[24vw] h-[1.5vh] bg-[#78875b]" />
      <div className="absolute top-[20vh] left-[28vw] w-[4vw] h-[1.5vh] bg-[#454542]" />
      <div className="absolute bottom-[80vh] left-[72vw] w-[4vw] h-[1.5vh] bg-[#78875b]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2vw] h-[2vh] bg-[#ff8c00]" />
      <div className="absolute top-[82vh] right-0 w-[5vw] h-[2vh] bg-[#ff8c00]" />

      {/* Diamond Markers */}
      <Diamond top="15vh" left="28vw" />
      <Diamond top="25vh" left="28vw" />
      <Diamond top="75vh" left="28vw" />
      <Diamond top="85vh" left="28vw" />
      <Diamond top="15vh" left="72vw" />
      <Diamond top="85vh" left="72vw" />

      {/* Text Elements */}
      <div className="absolute top-[5vh] left-[3vw] flex items-start gap-4">
        <span className="text-5xl font-sans font-light tracking-tighter text-[#78875b]">05</span>
        <div className="text-xs tracking-[0.15em] leading-relaxed mt-1">
          UNDERSTANDING THE PULSE OF<br />
          INFORMATION ECOSYSTEMS
        </div>
      </div>

      <div className="absolute top-[5vh] right-[4vw] text-xs tracking-[0.15em] leading-relaxed text-right">
        SEEING PATTERNS<br />
        BEFORE THEY APPEAR
      </div>

      <div className="absolute bottom-[5vh] left-[3vw] text-xs tracking-[0.15em]">
        2026 {">>>"}
      </div>

      <div className="absolute bottom-[5vh] right-[4vw] text-xs tracking-[0.15em] leading-relaxed text-right">
        TRACKING<br />
        THE UNSEEN
      </div>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
        {/* Emblem */}
        <div className="relative w-28 h-28">
          <svg width="100%" height="100%" viewBox="0 0 120 120">
            <clipPath id="circle-clip">
              <circle cx="60" cy="60" r="58" />
            </clipPath>
            <g clipPath="url(#circle-clip)" fill="none" stroke="#d2d1c0" strokeWidth="6" strokeLinecap="round">
              <path d="M 17,-10 Q 32,15 17,40 T 17,90 T 17,140" />
              <path d="M 34,-10 Q 49,15 34,40 T 34,90 T 34,140" />
              <path d="M 51,-10 Q 66,15 51,40 T 51,90 T 51,140" />
              <path d="M 68,-10 Q 83,15 68,40 T 68,90 T 68,140" />
              <path d="M 85,-10 Q 100,15 85,40 T 85,90 T 85,140" />
              <path d="M 102,-10 Q 117,15 102,40 T 102,90 T 102,140" />
            </g>
            <rect x="42" y="35" width="36" height="50" fill="#2b2b29" />
            <text x="60" y="66" fill="#d2d1c0" fontFamily="'Playfair Display', serif" fontSize="24" textAnchor="middle">AI</text>
          </svg>
        </div>
        
        {/* Text */}
        <div className="relative flex items-start">
          <h1 className="text-8xl font-serif text-[#d2d1c0] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Noamix
          </h1>
          <span className="text-[#d2d1c0] text-2xl ml-2 mt-2 font-serif">®</span>
        </div>
      </div>
    </div>
  );
};

const Diamond = ({ top, left }: { top: string; left: string }) => (
  <div 
    className="absolute w-1 h-3 -translate-x-1/2 -translate-y-1/2"
    style={{ top, left }}
  >
    <svg width="100%" height="100%" viewBox="0 0 4 12">
      <polygon points="2,0 4,6 2,12 0,6" fill="#7b7d74" />
    </svg>
  </div>
);

export default App;
