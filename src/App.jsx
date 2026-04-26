import { useState, useEffect } from "react";

const C = {
  void:"#040810",deep:"#070D18",surface:"#0A1220",panel:"#0D1828",card:"#101E30",
  border:"#182A3E",borderLight:"#243D58",forest:"#0A2E1E",green:"#156040",
  greenLight:"#1E8A60",greenGlow:"#0A3020",gold:"#B89010",goldLight:"#D4A820",
  goldBright:"#F0C840",bone:"#EEE0C0",boneDim:"#806A50",cream:"#FAF0DC",
  muted:"#304858",teal:"#0A6070",tealLight:"#1A90B0",tealBright:"#22B8D8",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Rajdhani:wght@400;500;600;700&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#040810;color:#EEE0C0;font-family:'Cormorant Garamond',Georgia,serif}
  @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{text-shadow:0 0 20px #D4A82060}50%{text-shadow:0 0 40px #D4A820A0,0 0 80px #D4A82040}}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes tabSlide{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
  .fade-up{animation:fadeUp 0.7s ease forwards}
  .fade-up-2{animation:fadeUp 0.7s 0.15s ease forwards;opacity:0}
  .fade-up-3{animation:fadeUp 0.7s 0.3s ease forwards;opacity:0}
  .fade-up-4{animation:fadeUp 0.7s 0.45s ease forwards;opacity:0}
  .glow-gold{animation:glow 3s ease-in-out infinite}
  .tab-content{animation:tabSlide 0.35s ease forwards}
  .btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#0A2E1E,#156040);color:#FAF0DC;border:1px solid #1E8A6050;padding:14px 28px;border-radius:10px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all 0.25s;box-shadow:0 0 20px #15604040}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 32px #15604070}
  .btn-care{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#0A3050,#1A90B0);color:#FAF0DC;border:1px solid #1A90B050;padding:14px 28px;border-radius:10px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all 0.25s;box-shadow:0 0 20px #1A90B040}
  .btn-care:hover{transform:translateY(-2px);box-shadow:0 0 32px #1A90B070}
  .btn-secondary{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#D4A820;border:1px solid #D4A82050;padding:13px 28px;border-radius:10px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all 0.25s}
  .btn-secondary:hover{background:#D4A82012;border-color:#D4A820;transform:translateY(-2px)}
  .btn-ghost{display:inline-flex;align-items:center;gap:6px;background:transparent;color:#806A50;border:1px solid #182A3E;padding:10px 20px;border-radius:8px;font-family:'Rajdhani',sans-serif;font-weight:600;font-size:12px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all 0.2s}
  .btn-ghost:hover{color:#EEE0C0;border-color:#243D58}
  .product-card{background:#101E30;border:1px solid #182A3E;border-radius:16px;padding:28px;transition:all 0.3s;position:relative;overflow:hidden}
  .product-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:0;transition:opacity 0.3s}
  .product-card:hover{transform:translateY(-4px);border-color:#243D58}
  .product-card:hover::before{opacity:1}
  .nav-link{color:#806A50;text-decoration:none;font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;transition:color 0.2s;cursor:pointer}
  .nav-link:hover{color:#D4A820}
  section{scroll-margin-top:70px}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:#040810}
  ::-webkit-scrollbar-thumb{background:#182A3E;border-radius:2px}
  input,textarea{background:#0A1220;border:1px solid #182A3E;border-radius:8px;color:#EEE0C0;padding:12px 14px;font-family:'Cormorant Garamond',serif;font-size:14px;width:100%;outline:none;transition:border-color 0.2s}
  input:focus,textarea:focus{border-color:#D4A820}
  input::placeholder,textarea::placeholder{color:#304858}
`;

const HexBg = () => (
  <svg style={{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:0.03}} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="hex" x="0" y="0" width="50" height="44" patternUnits="userSpaceOnUse">
      <polygon points="25,2 48,14 48,38 25,50 2,38 2,14" fill="none" stroke="#D4A820" strokeWidth="0.6"/>
      <circle cx="25" cy="26" r="1.5" fill="#D4A820"/>
    </pattern></defs>
    <rect width="600" height="600" fill="url(#hex)"/>
  </svg>
);

const Pill = ({label,color=C.greenLight}) => (
  <span style={{display:"inline-flex",alignItems:"center",gap:5,background:`${color}18`,border:`1px solid ${color}40`,color,padding:"3px 10px",borderRadius:20,fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"Rajdhani,sans-serif"}}>
    <span style={{width:5,height:5,borderRadius:"50%",background:color,boxShadow:`0 0 6px ${color}`}}/>
    {label}
  </span>
);

// ── NAV ───────────────────────────────────────────────────────────────────────
const Nav = ({activeTab,setActiveTab}) => {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
  const scrollTo = (tab) => { setActiveTab(tab); document.getElementById('products')?.scrollIntoView({behavior:'smooth'}); };
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:scrolled?`${C.deep}F0`:"transparent",borderBottom:scrolled?`1px solid ${C.border}`:"1px solid transparent",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.3s"}}>
      {scrolled&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)`}}/>}
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:34,height:34,background:`linear-gradient(135deg,${C.forest},${C.green})`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,boxShadow:`0 0 14px ${C.green}50`}}>⬡</div>
        <div>
          <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:14,letterSpacing:2}}>SOVEREIGN SHIELD</div>
          <div style={{color:C.muted,fontSize:8,letterSpacing:2,fontFamily:"Rajdhani,sans-serif"}}>TECHNOLOGIES LLC</div>
        </div>
      </div>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        {[["Mission","#mission"],["Technology","#technology"],["Partners","#partners"]].map(([label,href])=>(
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
        <button onClick={()=>scrollTo('chikasha')} style={{padding:"7px 18px",borderRadius:24,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s",background:activeTab==='chikasha'?`linear-gradient(135deg,${C.forest},${C.green})`:"transparent",color:activeTab==='chikasha'?C.cream:C.greenLight,border:`1px solid ${C.greenLight}50`}}>
          ◈ Chikasha AI
        </button>
        <button onClick={()=>scrollTo('care')} style={{padding:"7px 18px",borderRadius:24,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s",background:activeTab==='care'?`linear-gradient(135deg,${C.teal},${C.tealLight})`:"transparent",color:activeTab==='care'?C.cream:C.tealLight,border:`1px solid ${C.tealLight}50`}}>
          ⊕ Care AI
        </button>
        <a href="#contact" className="btn-primary" style={{padding:"8px 18px",fontSize:11}}>Request Demo</a>
      </div>
    </nav>
  );
};

// ── HERO ──────────────────────────────────────────────────────────────────────
const Hero = ({setActiveTab}) => {
  const scrollTo = (tab) => { setActiveTab(tab); document.getElementById('products')?.scrollIntoView({behavior:'smooth'}); };
  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"100px 24px 60px",position:"relative",textAlign:"center"}}>
      <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:600,background:`radial-gradient(circle,${C.green}15 0%,transparent 70%)`,pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:400,height:400,background:`radial-gradient(circle,${C.teal}08 0%,transparent 70%)`,pointerEvents:"none"}}/>
      <div style={{maxWidth:860,position:"relative",zIndex:1}}>
        <div className="fade-up" style={{marginBottom:20,display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
          <Pill label="Sovereign AI Infrastructure" color={C.greenLight}/>
          <Pill label="Community Health Intelligence" color={C.tealLight}/>
        </div>
        <h1 className="fade-up-2 glow-gold" style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(40px,7vw,76px)",fontWeight:300,lineHeight:1.1,color:C.goldBright,marginBottom:16,letterSpacing:-1}}>
          The AI Infrastructure<br/><em style={{fontStyle:"italic",color:C.bone}}>Communities Own.</em>
        </h1>
        <p className="fade-up-3" style={{fontSize:"clamp(15px,2.5vw,20px)",color:C.boneDim,lineHeight:1.85,marginBottom:36,fontWeight:300,maxWidth:660,margin:"0 auto 36px"}}>
          Sovereign Shield Technologies LLC builds two sovereign platforms — Chikasha AI for tribal nations and Care AI for community health — both protected by the same data sovereignty architecture and owned entirely by the communities they serve.
        </p>

        {/* Two platform CTAs */}
        <div className="fade-up-4" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:40}}>
          <button onClick={()=>scrollTo('chikasha')} className="btn-primary" style={{fontSize:13}}>◈ Chikasha AI Platform</button>
          <button onClick={()=>scrollTo('care')} className="btn-care" style={{fontSize:13}}>⊕ Care AI Platform</button>
          <a href="#contact" className="btn-secondary">Request Demo</a>
        </div>

        <div className="fade-up-4" style={{display:"flex",gap:32,justifyContent:"center",flexWrap:"wrap"}}>
          {[{v:"574",l:"Tribal Nations"},{v:"7",l:"Live Products"},{v:"100%",l:"Data Sovereignty"},{v:"$0",l:"Data Sold"}].map((s,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:28,fontWeight:700,letterSpacing:-1}}>{s.v}</div>
              <div style={{color:C.muted,fontSize:10,letterSpacing:2,fontFamily:"Rajdhani,sans-serif",textTransform:"uppercase"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── MISSION ───────────────────────────────────────────────────────────────────
const Mission = () => (
  <section id="mission" style={{padding:"80px 24px",position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>
        <div>
          <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:16}}>Our Mission</div>
          <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,lineHeight:1.2,color:C.bone,marginBottom:20}}>
            Every community deserves AI infrastructure they <em style={{color:C.goldLight}}>actually own.</em>
          </h2>
          <p style={{color:C.boneDim,fontSize:16,lineHeight:1.9,marginBottom:16}}>
            Today, every time a tribal employee opens ChatGPT and types a patient name, an enrollment number, or a word in their sacred language — that data goes to a commercial server. Every time an FQHC patient queries a health AI, their clinical data flows to infrastructure they do not control.
          </p>
          <p style={{color:C.boneDim,fontSize:16,lineHeight:1.9,marginBottom:24}}>
            We built the answer. Two sovereign platforms, one protection architecture, zero compromises on who owns the data, the model, and the infrastructure.
          </p>
          <Pill label="Enrolled Chickasaw Citizen · Founded in Indian Country" color={C.goldLight}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {[
            {icon:"⬡",title:"Data Sovereignty",desc:"Zero data transmitted to external servers without tribal consent and governance",color:C.greenLight},
            {icon:"◎",title:"Language Protection",desc:"Chikashshanompa' terms hashed at browser edge before any AI processing",color:C.goldLight},
            {icon:"⊕",title:"Community Health",desc:"FQHC-grade preventive intelligence protecting 30M community health patients",color:C.tealLight},
            {icon:"◈",title:"Owned Infrastructure",desc:"Models, data, and deployments owned by the institution — not licensed from outside vendors",color:C.goldLight},
          ].map((item,i)=>(
            <div key={i} className="product-card" style={{"--accent":item.color,padding:"20px"}}>
              <div style={{color:item.color,fontSize:22,marginBottom:10}}>{item.icon}</div>
              <div style={{color:C.bone,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,letterSpacing:0.5,marginBottom:6}}>{item.title}</div>
              <div style={{color:C.boneDim,fontSize:12,lineHeight:1.6}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── PRODUCTS ──────────────────────────────────────────────────────────────────
const CHIKASHA_PRODUCTS = [
  {icon:"◈",name:"CHIKASHA AI OS",sub:"Unified Sovereign Intelligence Platform",desc:"The command center. All sovereign systems unified under one interface — accessible to Nation Leadership, Healthcare providers, and Developers through distinct audience modes.",url:"https://chikasha-ai.vercel.app",color:C.goldLight,tags:["Nation Leadership Mode","Healthcare Mode","Developer Mode","6 Integrated Tabs","Shield Protected"],live:true,featured:true},
  {icon:"⊕",name:"CHIKASHA HEALTH OS",sub:"Sovereign Preventive Health Platform",desc:"Precision preventive diagnostics, longitudinal health records, and AI care coordination — all within sovereign data walls. Zero PHI transmitted externally. Wearable connected.",url:"https://sovereignhealthcareos.com",color:C.greenLight,tags:["7-Tab Dashboard","Biomarker Tracking","Risk Engine","Wearable Connected","ZK Protected"],live:true},
  {icon:"◉",name:"CHIKASHA FOUNDATIONAL MODEL",sub:"Sovereign AI — Four Modes",desc:"The Nation's own AI with four distinct modes: Citizen, Healthcare, Language, and Leadership. Shield-protected on every query. Built to be routed to sovereign infrastructure.",url:"https://chikashcfm.vercel.app",color:C.greenLight,tags:["Citizen Mode","Healthcare Mode","Language Mode","Leadership Mode","Shield Active"],live:true},
  {icon:"◎",name:"CHIKASHA LANGUAGE OS",sub:"Sovereign Language Preservation",desc:"AI-powered Chikashshanompa' dictionary, phrase learning, cultural knowledge, and oral history preservation — Shield-protected so the language never leaves sovereign control.",url:"https://chikashaailanguageos.vercel.app",color:C.goldBright,tags:["Dictionary AI","Phrase Builder","Cultural Knowledge","Oral History","ZK Protected"],live:true},
  {icon:"⬡",name:"SOVEREIGN PROMPT SHIELD",sub:"Data Protection Layer",desc:"Intercepts every AI query before transmission. Detects PII, tribal enrollment data, and Chikashshanompa' terms — hashing them at the browser edge under tribal governance.",url:"https://chikashaai-promptshield12.vercel.app",color:C.goldLight,tags:["ZK Hash Layer","HIPAA Compliant","Real-time Detection","Tribal Governance","Browser Edge"],live:true},
  {icon:"◉",name:"CARECIRCLE SOVEREIGN EDITION",sub:"Family Elder Care — Tribal Health Connected",desc:"Family care coordination for Chickasaw elder households. Medication tracking, appointments, and care tasks — with the Sovereign Health OS clinical view built directly in for the family.",url:"#",color:C.greenLight,tags:["Medication Tracking","Appointment Sync","Health OS Connected","Shield Protected","Elder Care"],live:false,soon:true},
];

const CARE_PRODUCTS = [
  {icon:"⊕",name:"CAREIQ",sub:"FQHC Community Health Intelligence",desc:"AI-powered preventive health intelligence for Federally Qualified Health Centers. Risk stratification, care gap identification, and patient health scoring — protecting 30M community health patients.",url:"#",color:C.tealLight,tags:["Risk Stratification","Care Gap Engine","UDS Reporting","HIPAA Aligned","Shield Protected"],live:true,featured:true},
  {icon:"◉",name:"CARECIRCLE FQHC EDITION",sub:"Family Elder Care — CareIQ Connected",desc:"Family care coordination for elder households served by FQHCs. Medication tracking, care tasks, and family coordination — with CareIQ clinical data shared directly to the family view.",url:"#",color:C.tealLight,tags:["Medication Tracking","Care Tasks","CareIQ Built In","Shield Protected","Elder Care"],live:true},
  {icon:"◈",name:"EDUIQ",sub:"Child Mental Health Early Warning",desc:"A student-centered intelligence platform connecting school, home, healthcare, and community services — with parents at the center of every decision. Identifies early warning signals across domains before a crisis develops.",url:"https://eduiq.vercel.app",color:C.tealBright,tags:["Parent Controlled","School Connected","Mental Health AI","Shield Protected","Early Warning"],live:true},
  {icon:"⬡",name:"SOVEREIGN PROMPT SHIELD",sub:"Shared Data Protection Layer",desc:"The same zero-knowledge cryptographic protection layer that powers Chikasha AI runs across every Care AI product. HIPAA-aligned, privacy-by-architecture, not just policy.",url:"https://chikashaai-promptshield12.vercel.app",color:C.tealLight,tags:["ZK Hash Layer","HIPAA Aligned","Browser Edge","PHI Protection","Shared Infrastructure"],live:true},
];

const ProductGrid = ({products,accentColor}) => (
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
    {products.map((p,i)=>(
      <div key={i} className="product-card" style={{"--accent":p.color,gridColumn:p.featured?"1 / -1":"auto"}}>
        {p.featured && (
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16,marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{color:p.color,fontSize:28}}>{p.icon}</span>
              <div>
                <div style={{color:p.color,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:18,letterSpacing:1}}>{p.name}</div>
                <div style={{color:C.muted,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif"}}>{p.sub}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"}}>
              <Pill label={p.soon?"Coming Soon":"Live"} color={p.soon?C.goldLight:p.color}/>
              {!p.soon&&<a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">View Platform ↗</a>}
            </div>
          </div>
        )}
        {!p.featured && (
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{color:p.color,fontSize:24}}>{p.icon}</span>
              <div>
                <div style={{color:p.color,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:14,letterSpacing:1}}>{p.name}</div>
                <div style={{color:C.muted,fontSize:9,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif"}}>{p.sub}</div>
              </div>
            </div>
            <Pill label={p.soon?"Coming Soon":"Live"} color={p.soon?C.goldLight:p.color}/>
          </div>
        )}
        <p style={{color:C.boneDim,fontSize:p.featured?14:12,lineHeight:1.8,marginBottom:p.featured?14:12,maxWidth:p.featured?580:"none"}}>{p.desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:14}}>
          {p.tags.map((t,j)=>(
            <span key={j} style={{background:C.surface,border:`1px solid ${C.border}`,color:C.muted,padding:"3px 8px",borderRadius:5,fontSize:9,fontFamily:"Rajdhani,sans-serif",letterSpacing:0.5}}>{t}</span>
          ))}
        </div>
        {!p.featured&&!p.soon&&<a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{fontSize:10,padding:"7px 14px"}}>View Live ↗</a>}
        {p.soon&&<span style={{fontFamily:"Rajdhani,sans-serif",fontSize:10,color:C.goldLight,letterSpacing:1}}>In Development</span>}
      </div>
    ))}
  </div>
);

const Products = ({activeTab,setActiveTab}) => (
  <section id="products" style={{padding:"80px 24px",background:`${C.surface}80`,position:"relative",zIndex:1}}>
    <div style={{maxWidth:1000,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:40}}>
        <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Live Platform</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>Two Sovereign Platforms. One Architecture.</h2>
        <p style={{color:C.boneDim,fontSize:16,maxWidth:580,margin:"0 auto 32px",lineHeight:1.8}}>Select a platform to explore the products built under it. All products share the Sovereign Prompt Shield data protection layer.</p>

        {/* TAB SWITCHER */}
        <div style={{display:"inline-flex",background:C.panel,border:`1px solid ${C.border}`,borderRadius:14,padding:6,gap:6}}>
          <button onClick={()=>setActiveTab('chikasha')} style={{padding:"10px 24px",borderRadius:10,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.25s",background:activeTab==='chikasha'?`linear-gradient(135deg,${C.forest},${C.green})`:"transparent",color:activeTab==='chikasha'?C.cream:C.boneDim,border:activeTab==='chikasha'?`1px solid ${C.greenLight}50`:"1px solid transparent",boxShadow:activeTab==='chikasha'?`0 0 16px ${C.green}40`:"none"}}>
            ◈ Chikasha AI
          </button>
          <button onClick={()=>setActiveTab('care')} style={{padding:"10px 24px",borderRadius:10,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.25s",background:activeTab==='care'?`linear-gradient(135deg,${C.teal},${C.tealLight})`:"transparent",color:activeTab==='care'?C.cream:C.boneDim,border:activeTab==='care'?`1px solid ${C.tealLight}50`:"1px solid transparent",boxShadow:activeTab==='care'?`0 0 16px ${C.teal}50`:"none"}}>
            ⊕ Care AI
          </button>
        </div>
      </div>

      {/* CHIKASHA AI TAB */}
      {activeTab==='chikasha'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,${C.greenGlow},${C.forest}30)`,border:`1px solid ${C.greenLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.goldBright,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>◈ Chikasha AI</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Sovereign AI infrastructure for tribal nations — cultural preservation, health intelligence, citizen services, and language protection. Built by an enrolled Chickasaw citizen for the 574 nations.</div>
            </div>
            <Pill label="6 Products · 5 Live" color={C.greenLight}/>
          </div>
          <ProductGrid products={CHIKASHA_PRODUCTS} accentColor={C.greenLight}/>
        </div>
      )}

      {/* CARE AI TAB */}
      {activeTab==='care'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,${C.teal}20,${C.teal}10)`,border:`1px solid ${C.tealLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.tealBright,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>⊕ Care AI</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Community health intelligence for FQHCs, elder care families, and schools — protecting 30M patients with the same sovereign data architecture. Built for the communities that need it most.</div>
            </div>
            <Pill label="4 Products · 2 Live" color={C.tealLight}/>
          </div>
          <ProductGrid products={CARE_PRODUCTS} accentColor={C.tealLight}/>
        </div>
      )}
    </div>
  </section>
);

// ── TECHNOLOGY ────────────────────────────────────────────────────────────────
const Technology = () => (
  <section id="technology" style={{padding:"80px 24px",position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>The Architecture</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>Sovereignty is <em style={{color:C.goldLight}}>architectural,</em> not cosmetic.</h2>
        <p style={{color:C.boneDim,fontSize:16,maxWidth:560,margin:"0 auto",lineHeight:1.8}}>The Shield doesn't just brand queries as sovereign. It structurally prevents unauthorized data transmission at the browser edge — before any server ever sees the data.</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:3,maxWidth:600,margin:"0 auto 48px",position:"relative"}}>
        {[
          {layer:"Citizen / Patient / Family",desc:"Types query on any device — phone, tablet, or desktop",color:C.boneDim,bg:C.panel},
          {layer:"Sovereign Prompt Shield",desc:"ZK hashes sensitive terms at browser edge — PHI, tribal language, and PII never transmit in plain text",color:C.goldLight,bg:`${C.gold}12`},
          {layer:"Platform AI Engine",desc:"Protected query processed by Chikasha AI or CareIQ — culturally grounded, clinically accurate, sovereignty-first",color:C.greenLight,bg:`${C.green}12`},
          {layer:"Sovereign Infrastructure",desc:"Trace Fiber Network · FQHC-controlled servers · Tribal law · Zero external cloud dependency",color:C.goldBright,bg:`${C.gold}08`},
        ].map((item,i)=>(
          <div key={i} style={{background:item.bg,border:`1px solid ${item.color}30`,borderRadius:10,padding:"16px 20px",display:"flex",alignItems:"center",gap:16}}>
            <div style={{color:item.color,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:0.5,minWidth:180}}>{item.layer}</div>
            <div style={{color:C.boneDim,fontSize:12,lineHeight:1.5}}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{background:C.panel,border:`1px solid ${C.border}`,borderLeft:`3px solid ${C.goldLight}`,borderRadius:12,padding:"24px 28px"}}>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>On Sovereignty and Open Source Models</div>
        <p style={{color:C.boneDim,fontSize:14,lineHeight:1.9,marginBottom:12}}>The Chikasha Foundational Model is built on Llama 3.1 — Meta's open source model. This is a deliberate architectural choice, not a compromise of sovereignty.</p>
        <p style={{color:C.boneDim,fontSize:14,lineHeight:1.9}}>Llama is the engine. Chikashshanompa' is the soul. Once fine-tuned on tribal language and cultural data, the model weights run on sovereign infrastructure. Meta has no ongoing access, no data rights, no kill switch. The sovereignty comes from where it runs, what it's trained on, who governs it, and who owns the deployment.</p>
      </div>
    </div>
  </section>
);

// ── PARTNERS ──────────────────────────────────────────────────────────────────
const Partners = () => (
  <section id="partners" style={{padding:"80px 24px",background:`${C.surface}80`,position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Strategic Relationships</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone}}>Built in Indian Country. <em style={{color:C.goldLight}}>For Indian Country.</em></h2>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:16,marginBottom:48}}>
        {[
          {name:"Open Sovereignty Lab",sub:"580 Strategies",desc:"Partnership development for tribal AI governance frameworks and Nation-to-Nation technology deployment.",status:"Active",color:C.greenLight},
          {name:"Chickasaw Nation",sub:"Department of Language",desc:"Language preservation technology built around Chikashshanompa' — the living language corpus at CFM's cultural core.",status:"Engaged",color:C.goldLight},
          {name:"Trace Fiber Networks",sub:"Sovereign Infrastructure",desc:"$50M NTIA Tribal Broadband award. The physical sovereign network that will carry CFM traffic within tribal data walls.",status:"Foundation",color:C.greenLight},
          {name:"574 Tribal Nations",sub:"Addressable Market",desc:"Every federally recognized tribe faces the same data sovereignty challenge. Sovereign Shield is built to scale across all of them.",status:"Pipeline",color:C.boneDim},
        ].map((p,i)=>(
          <div key={i} className="product-card" style={{"--accent":p.color}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
              <div>
                <div style={{color:C.bone,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:14,letterSpacing:0.5}}>{p.name}</div>
                <div style={{color:C.muted,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif"}}>{p.sub}</div>
              </div>
              <Pill label={p.status} color={p.color}/>
            </div>
            <p style={{color:C.boneDim,fontSize:12,lineHeight:1.7}}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:14,padding:"28px 32px"}}>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Grant and Funding Landscape</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:14}}>
          {[
            {name:"NSF SBIR Phase 1",amount:"$275,000",note:"No equity · R&D designation"},
            {name:"NEH Digital Humanities",amount:"$150,000",note:"Language preservation technology"},
            {name:"NTIA Tribal Broadband",amount:"Partnership",note:"Via Trace Fiber Networks"},
            {name:"BIA Living Languages",amount:"$100,000+",note:"Indigenous language technology"},
          ].map((g,i)=>(
            <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"14px 16px"}}>
              <div style={{color:C.bone,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,marginBottom:4}}>{g.name}</div>
              <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,marginBottom:4}}>{g.amount}</div>
              <div style={{color:C.muted,fontSize:10,lineHeight:1.5}}>{g.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── CONTACT ───────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form,setForm]=useState({name:"",org:"",email:"",type:"Tribal Nation",message:""});
  const [sent,setSent]=useState(false);
  const submit=async(e)=>{
    e.preventDefault();
    try{await fetch("https://formspree.io/f/xeevodzl",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({name:form.name,organization:form.org,email:form.email,type:form.type,message:form.message})})}catch(e){console.error(e)}
    setSent(true);
  };
  return (
    <section id="contact" style={{padding:"80px 24px",position:"relative",zIndex:1}}>
      <div style={{maxWidth:700,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Get In Touch</div>
          <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>Ready to bring sovereign AI<br/><em style={{color:C.goldLight}}>to your community?</em></h2>
          <p style={{color:C.boneDim,fontSize:16,lineHeight:1.8}}>Whether you represent a tribal nation, an FQHC, a school district, or a potential partner — we want to hear from you.</p>
        </div>
        {!sent?(
          <form onSubmit={submit} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:16,padding:"32px",position:"relative"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)`,borderRadius:"16px 16px 0 0"}}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
              <div><div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>YOUR NAME</div><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" required/></div>
              <div><div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>ORGANIZATION</div><input value={form.org} onChange={e=>setForm({...form,org:e.target.value})} placeholder="Nation, FQHC, School, or Organization"/></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
              <div><div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>EMAIL</div><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="your@email.com" required/></div>
              <div>
                <div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>I REPRESENT</div>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:8,color:C.bone,padding:"12px 14px",width:"100%",fontFamily:"Cormorant Garamond,serif",fontSize:14,cursor:"pointer"}}>
                  {["Tribal Nation","FQHC / Community Health","School District","Indigenous Organization","Government Agency","Investor / Funder","Research Institution","Other"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div style={{marginBottom:20}}>
              <div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>MESSAGE</div>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your community's AI needs or what you'd like to see demonstrated..." rows={4} style={{resize:"vertical"}}/>
            </div>
            <button type="submit" className="btn-primary" style={{width:"100%",justifyContent:"center",fontSize:13}}>Send Message ◈</button>
          </form>
        ):(
          <div style={{background:C.panel,border:`1px solid ${C.greenLight}40`,borderRadius:16,padding:"48px 32px",textAlign:"center"}}>
            <div style={{color:C.greenLight,fontSize:48,marginBottom:16}}>⬡</div>
            <div style={{color:C.bone,fontFamily:"Cormorant Garamond,serif",fontSize:24,marginBottom:10}}>Yakoke. We'll be in touch.</div>
            <div style={{color:C.boneDim,fontSize:14,lineHeight:1.8}}>Your message has been received. We respond to all inquiries within 24 hours.</div>
          </div>
        )}
      </div>
    </section>
  );
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{borderTop:`1px solid ${C.border}`,padding:"32px 24px",position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
      <div>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,letterSpacing:2,marginBottom:4}}>SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
        <div style={{color:C.muted,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif"}}>OKLAHOMA · CHICKASAW NATION · YAKOKE</div>
      </div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
        <span style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",marginRight:8}}>◈ Chikasha AI</span>
        {[["Health OS","https://sovereignhealthcareos.com"],["Language OS","https://chikashaailanguageos.vercel.app"],["Shield","https://chikashaai-promptshield12.vercel.app"],["CFM","https://chikashcfm.vercel.app"]].map(([label,url])=>(
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{color:C.muted,textDecoration:"none",fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.goldLight} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
        ))}
        <span style={{color:C.tealLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",margin:"0 8px"}}>⊕ Care AI</span>
        {[["CareIQ","#"],["CareCircle","#"],["EduIQ","#"]].map(([label,url])=>(
          <a key={label} href={url} style={{color:C.muted,textDecoration:"none",fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.tealLight} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
        ))}
      </div>
      <div style={{color:C.muted,fontSize:10,fontFamily:"Rajdhani,sans-serif",letterSpacing:1}}>© 2026 SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
    </div>
  </footer>
);

// ── APP ───────────────────────────────────────────────────────────────────────
export default function SovereignShieldSite() {
  const [activeTab,setActiveTab]=useState('chikasha');
  return (
    <div style={{background:C.void,minHeight:"100vh",position:"relative",overflow:"hidden"}}>
      <style>{css}</style>
      <HexBg/>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Hero setActiveTab={setActiveTab}/>
      <Mission/>
      <Products activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Technology/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  );
   }
