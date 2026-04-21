import { useState, useEffect, useRef } from "react";

// ── PALETTE ───────────────────────────────────────────────────────────────────
const C = {
  void:        "#040810",
  deep:        "#070D18",
  surface:     "#0A1220",
  panel:       "#0D1828",
  card:        "#101E30",
  border:      "#182A3E",
  borderLight: "#243D58",
  forest:      "#0A2E1E",
  green:       "#156040",
  greenLight:  "#1E8A60",
  greenGlow:   "#0A3020",
  gold:        "#B89010",
  goldLight:   "#D4A820",
  goldBright:  "#F0C840",
  bone:        "#EEE0C0",
  boneDim:     "#806A50",
  cream:       "#FAF0DC",
  ochre:       "#A06808",
  muted:       "#304858",
  white:       "#FFFFFF",
};

// ── STYLES ────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Rajdhani:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #040810; color: #EEE0C0; font-family: 'Cormorant Garamond', Georgia, serif; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes float    { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) } }
  @keyframes glow     { 0%,100% { text-shadow:0 0 20px #D4A82060 } 50% { text-shadow:0 0 40px #D4A820A0, 0 0 80px #D4A82040 } }
  @keyframes shimmer  { 0% { background-position:-200% 0 } 100% { background-position:200% 0 } }
  @keyframes spin     { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }
  @keyframes pulse    { 0%,100% { opacity:0.5; transform:scale(1) } 50% { opacity:1; transform:scale(1.05) } }
  @keyframes scanline { 0% { transform:translateY(-100%) } 100% { transform:translateY(100vh) } }

  .fade-up   { animation: fadeUp 0.7s ease forwards; }
  .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity:0; }
  .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity:0; }
  .fade-up-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity:0; }
  .float     { animation: float 4s ease-in-out infinite; }
  .glow-gold { animation: glow 3s ease-in-out infinite; }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, ${C.forest}, ${C.green});
    color: ${C.cream}; border: 1px solid ${C.greenLight}50;
    padding: 14px 28px; border-radius: 10px;
    font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 13px;
    letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;
    text-decoration: none; transition: all 0.25s ease;
    box-shadow: 0 0 20px ${C.green}40;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 32px ${C.green}70; }

  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: ${C.goldLight};
    border: 1px solid ${C.goldLight}50;
    padding: 13px 28px; border-radius: 10px;
    font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 13px;
    letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;
    text-decoration: none; transition: all 0.25s ease;
  }
  .btn-secondary:hover { background: ${C.goldLight}12; border-color: ${C.goldLight}; transform: translateY(-2px); }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 6px;
    background: transparent; color: ${C.boneDim};
    border: 1px solid ${C.border};
    padding: 10px 20px; border-radius: 8px;
    font-family: 'Rajdhani', sans-serif; font-weight: 600; font-size: 12px;
    letter-spacing: 1px; text-transform: uppercase; cursor: pointer;
    text-decoration: none; transition: all 0.2s ease;
  }
  .btn-ghost:hover { color: ${C.bone}; border-color: ${C.borderLight}; }

  .product-card {
    background: ${C.card}; border: 1px solid ${C.border};
    border-radius: 16px; padding: 28px; transition: all 0.3s ease;
    position: relative; overflow: hidden;
  }
  .product-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .product-card:hover { transform: translateY(-4px); border-color: ${C.borderLight}; }
  .product-card:hover::before { opacity: 1; }

  .stat-card {
    background: ${C.panel}; border: 1px solid ${C.border};
    border-top: 2px solid var(--color);
    border-radius: 12px; padding: 20px 22px; text-align: center;
  }

  .nav-link {
    color: ${C.boneDim}; text-decoration: none;
    font-family: 'Rajdhani', sans-serif; font-size: 12px;
    font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    transition: color 0.2s; cursor: pointer;
  }
  .nav-link:hover { color: ${C.goldLight}; }

  section { scroll-margin-top: 70px; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${C.void}; }
  ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }

  input, textarea {
    background: ${C.surface}; border: 1px solid ${C.border};
    border-radius: 8px; color: ${C.bone}; padding: 12px 14px;
    font-family: 'Cormorant Garamond', serif; font-size: 14px;
    width: 100%; outline: none; transition: border-color 0.2s;
  }
  input:focus, textarea:focus { border-color: ${C.goldLight}; }
  input::placeholder, textarea::placeholder { color: ${C.muted}; }
`;

// ── GEOMETRIC SVG ─────────────────────────────────────────────────────────────
const HexBg = () => (
  <svg style={{ position:"fixed", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0, opacity:0.03 }} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="hex" x="0" y="0" width="50" height="44" patternUnits="userSpaceOnUse">
        <polygon points="25,2 48,14 48,38 25,50 2,38 2,14" fill="none" stroke="#D4A820" strokeWidth="0.6"/>
        <circle cx="25" cy="26" r="1.5" fill="#D4A820"/>
      </pattern>
    </defs>
    <rect width="600" height="600" fill="url(#hex)"/>
  </svg>
);

// ── PILL ──────────────────────────────────────────────────────────────────────
const Pill = ({ label, color = C.greenLight }) => (
  <span style={{ display:"inline-flex", alignItems:"center", gap:5, background:`${color}18`, border:`1px solid ${color}40`, color, padding:"3px 10px", borderRadius:20, fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", fontFamily:"Rajdhani,sans-serif" }}>
    <span style={{ width:5, height:5, borderRadius:"50%", background:color, boxShadow:`0 0 6px ${color}` }}/>
    {label}
  </span>
);

// ── NAV ───────────────────────────────────────────────────────────────────────
const Nav = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background: scrolled ? `${C.deep}F0` : "transparent", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between", backdropFilter: scrolled ? "blur(12px)" : "none", transition:"all 0.3s ease" }}>
      {scrolled && <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)` }}/>}
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:34, height:34, background:`linear-gradient(135deg,${C.forest},${C.green})`, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, boxShadow:`0 0 14px ${C.green}50` }}>⬡</div>
        <div>
          <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:14, letterSpacing:2 }}>SOVEREIGN SHIELD</div>
          <div style={{ color:C.muted, fontSize:8, letterSpacing:2, fontFamily:"Rajdhani,sans-serif" }}>TECHNOLOGIES LLC</div>
        </div>
      </div>
      <div style={{ display:"flex", gap:28, alignItems:"center" }}>
        {[["Mission","#mission"],["Products","#products"],["Technology","#technology"],["Partners","#partners"]].map(([label, href]) => (
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding:"8px 18px", fontSize:11 }}>Request Demo</a>
      </div>
    </nav>
  );
};

// ── HERO ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"100px 24px 60px", position:"relative", textAlign:"center" }}>
    {/* Radial glow */}
    <div style={{ position:"absolute", top:"40%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, background:`radial-gradient(circle, ${C.green}15 0%, transparent 70%)`, pointerEvents:"none" }}/>
    <div style={{ position:"absolute", top:"40%", left:"50%", transform:"translate(-50%,-50%)", width:400, height:400, background:`radial-gradient(circle, ${C.gold}08 0%, transparent 70%)`, pointerEvents:"none" }}/>

    <div style={{ maxWidth:800, position:"relative", zIndex:1 }}>
      <div className="fade-up" style={{ marginBottom:20 }}>
        <Pill label="Sovereign AI Infrastructure" color={C.greenLight}/>
      </div>

      <h1 className="fade-up-2 glow-gold" style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(42px,7vw,80px)", fontWeight:300, lineHeight:1.1, color:C.goldBright, marginBottom:16, letterSpacing:-1 }}>
        The AI Infrastructure<br/>
        <em style={{ fontStyle:"italic", color:C.bone }}>Tribal Nations Own.</em>
      </h1>

      <p className="fade-up-3" style={{ fontSize:"clamp(16px,2.5vw,22px)", color:C.boneDim, lineHeight:1.8, marginBottom:36, fontWeight:300, maxWidth:620, margin:"0 auto 36px" }}>
        Sovereign Shield Technologies LLC builds AI platforms, data protection layers, and language preservation infrastructure for the 574 federally recognized tribal nations of the United States — infrastructure they own, govern, and control.
      </p>

      <div className="fade-up-4" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
        <a href="#contact" className="btn-primary">Request a Demo</a>
        <a href="#products" className="btn-secondary">Explore the Platform</a>
      </div>

      <div className="fade-up-4" style={{ marginTop:48, display:"flex", gap:32, justifyContent:"center", flexWrap:"wrap" }}>
        {[
          { v:"574", l:"Tribal Nations" },
          { v:"5", l:"Live Deployments" },
          { v:"100%", l:"Data Sovereignty" },
          { v:"$0", l:"Data Sold" },
        ].map((s,i) => (
          <div key={i} style={{ textAlign:"center" }}>
            <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontSize:28, fontWeight:700, letterSpacing:-1 }}>{s.v}</div>
            <div style={{ color:C.muted, fontSize:10, letterSpacing:2, fontFamily:"Rajdhani,sans-serif", textTransform:"uppercase" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── MISSION ───────────────────────────────────────────────────────────────────
const Mission = () => (
  <section id="mission" style={{ padding:"80px 24px", position:"relative", zIndex:1 }}>
    <div style={{ maxWidth:900, margin:"0 auto" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
        <div>
          <div style={{ color:C.greenLight, fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:16 }}>Our Mission</div>
          <h2 style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:300, lineHeight:1.2, color:C.bone, marginBottom:20 }}>
            Every tribe deserves AI infrastructure they <em style={{ color:C.goldLight }}>actually own.</em>
          </h2>
          <p style={{ color:C.boneDim, fontSize:16, lineHeight:1.9, marginBottom:16 }}>
            Today, every time a tribal employee opens ChatGPT or Copilot and types a patient name, an enrollment number, or a word in their sacred language — that data goes to a commercial server. There is no tribal consent mechanism. No tribal data governance. The terms of service were written by corporate attorneys in Silicon Valley, not by tribal councils.
          </p>
          <p style={{ color:C.boneDim, fontSize:16, lineHeight:1.9, marginBottom:24 }}>
            We built the answer. Sovereign AI infrastructure — protected by our Shield layer, powered by the Chikasha Foundational Model, and governed entirely by tribal law.
          </p>
          <Pill label="Enrolled Chickasaw Citizen · Founded in Indian Country" color={C.goldLight}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          {[
            { icon:"⬡", title:"Data Sovereignty", desc:"Zero data transmitted to external servers without tribal consent and governance", color:C.greenLight },
            { icon:"◎", title:"Language Protection", desc:"Chickasaw and tribal language terms hashed at the browser edge before any AI processing", color:C.goldLight },
            { icon:"◉", title:"Tribal Governance", desc:"Every AI interaction governed by tribal law, not Silicon Valley terms of service", color:C.greenLight },
            { icon:"◈", title:"Owned Infrastructure", desc:"Models, data, and deployments owned by the Nation — not licensed from outside vendors", color:C.goldLight },
          ].map((item,i) => (
            <div key={i} className="product-card" style={{ "--accent":item.color, padding:"20px" }}>
              <div style={{ color:item.color, fontSize:22, marginBottom:10 }}>{item.icon}</div>
              <div style={{ color:C.bone, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:13, letterSpacing:0.5, marginBottom:6 }}>{item.title}</div>
              <div style={{ color:C.boneDim, fontSize:12, lineHeight:1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── PRODUCTS ──────────────────────────────────────────────────────────────────
const Products = () => (
  <section id="products" style={{ padding:"80px 24px", background:`${C.surface}80`, position:"relative", zIndex:1 }}>
    <div style={{ maxWidth:960, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:48 }}>
        <div style={{ color:C.greenLight, fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>Live Platform</div>
        <h2 style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:300, color:C.bone, marginBottom:14 }}>Five Sovereign Systems. One Platform.</h2>
        <p style={{ color:C.boneDim, fontSize:16, maxWidth:560, margin:"0 auto", lineHeight:1.8 }}>Every component is live, deployed, and sovereign. Not a prototype. Not a deck. A working platform built from Indian Country.</p>
      </div>

      {/* Hero product — Chikasha AI OS */}
      <div className="product-card" style={{ "--accent":C.goldLight, marginBottom:20, background:`linear-gradient(135deg,${C.card},${C.panel})`, borderColor:C.borderLight }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:16, marginBottom:16 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <span style={{ color:C.goldBright, fontSize:24 }}>◈</span>
              <div>
                <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:18, letterSpacing:1 }}>CHIKASHA AI OS</div>
                <div style={{ color:C.muted, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif" }}>Unified Sovereign Intelligence Platform</div>
              </div>
            </div>
            <p style={{ color:C.boneDim, fontSize:14, lineHeight:1.8, maxWidth:520 }}>The command center. All five sovereign systems unified under one interface — accessible to Nation Leadership, Healthcare providers, and Developers through distinct audience modes.</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8, alignItems:"flex-end" }}>
            <Pill label="Live" color={C.greenLight}/>
            <a href="https://chikashaaiplatform.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ghost">View Platform ↗</a>
          </div>
        </div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {["Nation Leadership Mode","Healthcare Mode","Developer Mode","6 Integrated Tabs","Shield Protected"].map((t,i) => (
            <span key={i} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.boneDim, padding:"4px 10px", borderRadius:6, fontSize:10, fontFamily:"Rajdhani,sans-serif", letterSpacing:0.5 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
        {[
          {
            icon:"⊕", name:"CHIKASHA HEALTH OS", sub:"Sovereign Preventive Health Platform",
            desc:"Fountain Life-grade diagnostics, longitudinal health records, and AI care coordination — all within sovereign data walls. Zero PHI transmitted externally.",
            url:"https://sovereignhealthcareos.com", color:C.greenLight,
            tags:["7-Tab Dashboard","Biomarker Tracking","Risk Engine","ZK Protected"],
          },
          {
            icon:"⬡", name:"SOVEREIGN PROMPT SHIELD", sub:"Data Protection Layer",
            desc:"Intercepts every AI query before transmission. Detects PII, tribal enrollment data, and Chikashshanompa' terms — hashing them at the browser edge under tribal governance.",
            url:"https://chikashaai-promptshield12.vercel.app", color:C.goldLight,
            tags:["ZK Hash Layer","HIPAA Compliant","Real-time Detection","Tribal Governance"],
          },
          {
            icon:"◎", name:"CHIKASHA LANGUAGE OS", sub:"Sovereign Language Preservation",
            desc:"AI-powered Chikashshanompa' dictionary, phrase learning, cultural knowledge, and oral history preservation — Shield-protected so the language never leaves sovereign control.",
            url:"https://chikashaailanguageos.vercel.app", color:C.goldBright,
            tags:["Dictionary AI","Phrase Builder","Cultural Knowledge","Oral History"],
          },
          {
            icon:"◉", name:"CHIKASHA FOUNDATIONAL MODEL", sub:"Sovereign AI — Four Modes",
            desc:"The Nation's own AI with four distinct modes: Citizen, Healthcare, Language, and Leadership. Shield-protected on every query. Built to be routed to sovereign infrastructure.",
            url:"https://chikashcfm.vercel.app", color:C.greenLight,
            tags:["4 Audience Modes","Shield Active","Cultural Grounding","Sovereign Voice"],
          },
        ].map((p,i) => (
          <div key={i} className="product-card" style={{ "--accent":p.color }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
              <span style={{ color:p.color, fontSize:24 }}>{p.icon}</span>
              <Pill label="Live" color={p.color}/>
            </div>
            <div style={{ color:p.color, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:13, letterSpacing:0.8, marginBottom:4 }}>{p.name}</div>
            <div style={{ color:C.muted, fontSize:9, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:10 }}>{p.sub}</div>
            <p style={{ color:C.boneDim, fontSize:12, lineHeight:1.7, marginBottom:14 }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:14 }}>
              {p.tags.map((t,j) => (
                <span key={j} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.muted, padding:"3px 8px", borderRadius:5, fontSize:9, fontFamily:"Rajdhani,sans-serif", letterSpacing:0.5 }}>{t}</span>
              ))}
            </div>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize:10, padding:"7px 14px" }}>View Live ↗</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── TECHNOLOGY ────────────────────────────────────────────────────────────────
const Technology = () => (
  <section id="technology" style={{ padding:"80px 24px", position:"relative", zIndex:1 }}>
    <div style={{ maxWidth:900, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:48 }}>
        <div style={{ color:C.greenLight, fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>The Architecture</div>
        <h2 style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:300, color:C.bone, marginBottom:14 }}>Sovereignty is <em style={{ color:C.goldLight }}>architectural,</em> not cosmetic.</h2>
        <p style={{ color:C.boneDim, fontSize:16, maxWidth:560, margin:"0 auto", lineHeight:1.8 }}>The Shield doesn't just brand queries as sovereign. It structurally prevents unauthorized data transmission at the browser edge — before any server ever sees the data.</p>
      </div>

      {/* Stack diagram */}
      <div style={{ display:"flex", flexDirection:"column", gap:3, maxWidth:600, margin:"0 auto 48px", position:"relative" }}>
        {[
          { layer:"Citizen / User", desc:"Types query on any device", color:C.boneDim, bg:C.panel },
          { layer:"Sovereign Prompt Shield", desc:"ZK hashes tribal terms at browser edge — sovereign language never transmits in plain text", color:C.goldLight, bg:`${C.gold}12` },
          { layer:"Chikasha Foundational Model", desc:"Protected query processed by Nation-owned model — cultural, sovereign, governed", color:C.greenLight, bg:`${C.green}12` },
          { layer:"Sovereign Infrastructure", desc:"Trace Fiber Network · Tribal land · Tribal law · Zero external cloud dependency", color:C.goldBright, bg:`${C.gold}08` },
        ].map((item,i) => (
          <div key={i} style={{ background:item.bg, border:`1px solid ${item.color}30`, borderRadius:10, padding:"16px 20px", display:"flex", alignItems:"center", gap:16 }}>
            <div style={{ color:item.color, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:12, letterSpacing:0.5, minWidth:180 }}>{item.layer}</div>
            <div style={{ color:C.boneDim, fontSize:12, lineHeight:1.5 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Why Llama */}
      <div style={{ background:C.panel, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.goldLight}`, borderRadius:12, padding:"24px 28px" }}>
        <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:11, letterSpacing:2, textTransform:"uppercase", marginBottom:12 }}>On Sovereignty & Open Source Models</div>
        <p style={{ color:C.boneDim, fontSize:14, lineHeight:1.9, marginBottom:12 }}>
          The Chikasha Foundational Model is built on Llama 3.1 — Meta's open source model. This is a deliberate architectural choice, not a compromise of sovereignty.
        </p>
        <p style={{ color:C.boneDim, fontSize:14, lineHeight:1.9 }}>
          Llama is the engine. Chikashshanompa' is the soul. Once fine-tuned on tribal language and cultural data, the model weights are downloaded once and run on sovereign infrastructure. Meta has no ongoing access, no data rights, no kill switch. The sovereignty comes from where it runs, what it's trained on, who governs it, and who owns the deployment. Just as the Nation didn't manufacture the roads to their enterprises — they own what runs on them.
        </p>
      </div>
    </div>
  </section>
);

// ── PARTNERS ──────────────────────────────────────────────────────────────────
const Partners = () => (
  <section id="partners" style={{ padding:"80px 24px", background:`${C.surface}80`, position:"relative", zIndex:1 }}>
    <div style={{ maxWidth:900, margin:"0 auto" }}>
      <div style={{ textAlign:"center", marginBottom:48 }}>
        <div style={{ color:C.greenLight, fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>Strategic Relationships</div>
        <h2 style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:300, color:C.bone }}>Built in Indian Country. <em style={{ color:C.goldLight }}>For Indian Country.</em></h2>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:16, marginBottom:48 }}>
        {[
          { name:"Open Sovereignty Lab", sub:"580 Strategies", desc:"Partnership development for tribal AI governance frameworks and Nation-to-Nation technology deployment.", status:"Active", color:C.greenLight },
          { name:"Chickasaw Nation", sub:"Department of Language", desc:"Language preservation technology built around Chikashshanompa' — the living language corpus at CFM's cultural core.", status:"Engaged", color:C.goldLight },
          { name:"Trace Fiber Networks", sub:"Sovereign Infrastructure", desc:"$50M NTIA Tribal Broadband award. The physical sovereign network that will carry CFM traffic within tribal data walls.", status:"Foundation", color:C.greenLight },
          { name:"574 Tribal Nations", sub:"Addressable Market", desc:"Every federally recognized tribe faces the same data sovereignty challenge. Sovereign Shield is built to scale across all of them.", status:"Pipeline", color:C.boneDim },
        ].map((p,i) => (
          <div key={i} className="product-card" style={{ "--accent":p.color }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
              <div>
                <div style={{ color:C.bone, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:14, letterSpacing:0.5 }}>{p.name}</div>
                <div style={{ color:C.muted, fontSize:10, letterSpacing:1, fontFamily:"Rajdhani,sans-serif" }}>{p.sub}</div>
              </div>
              <Pill label={p.status} color={p.color}/>
            </div>
            <p style={{ color:C.boneDim, fontSize:12, lineHeight:1.7 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Funding */}
      <div style={{ background:C.panel, border:`1px solid ${C.border}`, borderRadius:14, padding:"28px 32px" }}>
        <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:11, letterSpacing:2, textTransform:"uppercase", marginBottom:16 }}>Grant & Funding Landscape</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:14 }}>
          {[
            { name:"NSF SBIR Phase 1", amount:"$275,000", note:"No equity · R&D designation" },
            { name:"NEH Digital Humanities", amount:"$150,000", note:"Language preservation technology" },
            { name:"NTIA Tribal Broadband", amount:"Partnership", note:"Via Trace Fiber Networks" },
            { name:"BIA Living Languages", amount:"$100,000+", note:"Indigenous language technology" },
          ].map((g,i) => (
            <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, padding:"14px 16px" }}>
              <div style={{ color:C.bone, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:12, marginBottom:4 }}>{g.name}</div>
              <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:16, marginBottom:4 }}>{g.amount}</div>
              <div style={{ color:C.muted, fontSize:10, lineHeight:1.5 }}>{g.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── CONTACT ───────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name:"", org:"", email:"", type:"Tribal Nation", message:"" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding:"80px 24px", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <div style={{ color:C.greenLight, fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>Get In Touch</div>
          <h2 style={{ fontFamily:"Cormorant Garamond,serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:300, color:C.bone, marginBottom:14 }}>Ready to bring sovereign AI<br/><em style={{ color:C.goldLight }}>to your Nation?</em></h2>
          <p style={{ color:C.boneDim, fontSize:16, lineHeight:1.8 }}>Whether you represent a tribal nation, an Indigenous-focused organization, or a potential partner — we want to hear from you.</p>
        </div>

        {!sent ? (
          <form onSubmit={submit} style={{ background:C.panel, border:`1px solid ${C.border}`, borderRadius:16, padding:"32px 32px" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)`, borderRadius:"16px 16px 0 0" }}/>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
              <div>
                <div style={{ color:C.boneDim, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:6 }}>YOUR NAME</div>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" required/>
              </div>
              <div>
                <div style={{ color:C.boneDim, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:6 }}>ORGANIZATION</div>
                <input value={form.org} onChange={e=>setForm({...form,org:e.target.value})} placeholder="Tribal Nation or Organization"/>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
              <div>
                <div style={{ color:C.boneDim, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:6 }}>EMAIL</div>
                <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="your@email.com" required/>
              </div>
              <div>
                <div style={{ color:C.boneDim, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:6 }}>I REPRESENT</div>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, color:C.bone, padding:"12px 14px", width:"100%", fontFamily:"Cormorant Garamond,serif", fontSize:14, cursor:"pointer" }}>
                  {["Tribal Nation","Indigenous Organization","Government Agency","Investor / Funder","Research Institution","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ color:C.boneDim, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif", marginBottom:6 }}>MESSAGE</div>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your Nation's AI needs or what you'd like to see demonstrated..." rows={4} style={{ resize:"vertical" }}/>
            </div>
            <button type="submit" className="btn-primary" style={{ width:"100%", justifyContent:"center", fontSize:13 }}>Send Message ◈</button>
          </form>
        ) : (
          <div style={{ background:C.panel, border:`1px solid ${C.greenLight}40`, borderRadius:16, padding:"48px 32px", textAlign:"center" }}>
            <div style={{ color:C.greenLight, fontSize:48, marginBottom:16 }}>⬡</div>
            <div style={{ color:C.bone, fontFamily:"Cormorant Garamond,serif", fontSize:24, marginBottom:10 }}>Yakoke. We'll be in touch.</div>
            <div style={{ color:C.boneDim, fontSize:14, lineHeight:1.8 }}>Your message has been received. We respond to all tribal nation inquiries within 24 hours.</div>
          </div>
        )}
      </div>
    </section>
  );
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop:`1px solid ${C.border}`, padding:"32px 24px", position:"relative", zIndex:1 }}>
    <div style={{ maxWidth:900, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
      <div>
        <div style={{ color:C.goldLight, fontFamily:"Rajdhani,sans-serif", fontWeight:700, fontSize:13, letterSpacing:2, marginBottom:4 }}>SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
        <div style={{ color:C.muted, fontSize:10, letterSpacing:1.5, fontFamily:"Rajdhani,sans-serif" }}>OKLAHOMA · CHICKASAW NATION · YAKOKE</div>
      </div>
      <div style={{ display:"flex", gap:24 }}>
        {[
          ["Health OS","https://sovereignhealthcareos.com"],
          ["Language OS","https://chikashaailanguageos.vercel.app"],
          ["Shield","https://chikashaai-promptshield12.vercel.app"],
          ["CFM","https://chikashcfm.vercel.app"],
        ].map(([label,url]) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ color:C.muted, textDecoration:"none", fontFamily:"Rajdhani,sans-serif", fontSize:10, letterSpacing:1, textTransform:"uppercase", transition:"color 0.2s" }}
            onMouseEnter={e=>e.target.style.color=C.goldLight}
            onMouseLeave={e=>e.target.style.color=C.muted}>
            {label}
          </a>
        ))}
      </div>
      <div style={{ color:C.muted, fontSize:10, fontFamily:"Rajdhani,sans-serif", letterSpacing:1 }}>© 2026 SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
    </div>
  </footer>
);

// ── APP ───────────────────────────────────────────────────────────────────────
export default function SovereignShieldSite() {
  return (
    <div style={{ background:C.void, minHeight:"100vh", position:"relative", overflow:"hidden" }}>
      <style>{css}</style>
      <HexBg/>
      <Nav/>
      <Hero/>
      <Mission/>
      <Products/>
      <Technology/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  );
}
