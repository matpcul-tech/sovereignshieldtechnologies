import { useState, useEffect } from "react";

const C = {
  void:"#040810",deep:"#070D18",surface:"#0A1220",panel:"#0D1828",card:"#101E30",
  border:"#182A3E",borderLight:"#243D58",forest:"#0A2E1E",green:"#156040",
  greenLight:"#1E8A60",greenGlow:"#0A3020",gold:"#B89010",goldLight:"#D4A820",
  goldBright:"#F0C840",bone:"#EEE0C0",boneDim:"#806A50",cream:"#FAF0DC",
  muted:"#304858",teal:"#0A6070",tealLight:"#1A90B0",tealBright:"#22B8D8",
  amber:"#C87020",amberLight:"#E89040",
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
  @keyframes rcw{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes rccw{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
  @keyframes dash{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}
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
  .btn-sovereign{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1A0A30,#4A1A90);color:#FAF0DC;border:1px solid #6A3AB050;padding:14px 28px;border-radius:10px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all 0.25s;box-shadow:0 0 20px #4A1A9040}
  .btn-sovereign:hover{transform:translateY(-2px);box-shadow:0 0 32px #4A1A9070}
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
  input,textarea,select{background:#0A1220;border:1px solid #182A3E;border-radius:8px;color:#EEE0C0;padding:12px 14px;font-family:'Cormorant Garamond',serif;font-size:14px;width:100%;outline:none;transition:border-color 0.2s}
  input:focus,textarea:focus,select:focus{border-color:#D4A820}
  input::placeholder,textarea::placeholder{color:#304858}
  .rcw{transform-origin:center;animation:rcw 40s linear infinite}
  .rccw{transform-origin:center;animation:rccw 26s linear infinite}
  .aflow{stroke-dasharray:4 5;animation:dash 2s linear infinite}
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
        {[["Mission","#mission"],["Technology","#technology"],["Partners","#partners"],["Invest","#invest"],["Founder","#founder"]].map(([label,href])=>(
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
        <button onClick={()=>scrollTo('chikasha')} style={{padding:"7px 18px",borderRadius:24,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s",background:activeTab==='chikasha'?`linear-gradient(135deg,${C.forest},${C.green})`:"transparent",color:activeTab==='chikasha'?C.cream:C.greenLight,border:`1px solid ${C.greenLight}50`}}>
          ◈ Chikasha AI
        </button>
        <button onClick={()=>scrollTo('care')} style={{padding:"7px 18px",borderRadius:24,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.2s",background:activeTab==='care'?`linear-gradient(135deg,${C.teal},${C.tealLight})`:"transparent",color:activeTab==='care'?C.cream:C.tealLight,border:`1px solid ${C.tealLight}50`}}>
          ⊕ Care AI
        </button>
        <a href="/onboard" className="btn-primary" style={{padding:"8px 18px",fontSize:11}}>Enter SovereignOne ↗</a>
      </div>
    </nav>
  );
};

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
          <Pill label="Longevity Wellness Franchise" color={C.amberLight}/>
        </div>
        <h1 className="fade-up-2 glow-gold" style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(40px,7vw,76px)",fontWeight:300,lineHeight:1.1,color:C.goldBright,marginBottom:16,letterSpacing:-1}}>
          The AI Infrastructure<br/><em style={{fontStyle:"italic",color:C.bone}}>Communities Own.</em>
        </h1>
        <p className="fade-up-3" style={{fontSize:"clamp(15px,2.5vw,20px)",color:C.boneDim,lineHeight:1.85,marginBottom:16,fontWeight:300,maxWidth:660,margin:"0 auto 16px"}}>
          Sovereign Shield Technologies LLC builds sovereign AI health platforms, wellness infrastructure, and leadership technology — owned entirely by the communities they serve.
        </p>
        <p className="fade-up-3" style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(14px,2vw,18px)",color:C.goldLight,lineHeight:1.6,fontStyle:"italic",marginBottom:36,maxWidth:580,margin:"0 auto 36px"}}>
          "Luxury big-city longevity healthcare for the sovereign and the urban."
        </p>
        <div className="fade-up-4" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:40}}>
          <a href="/onboard" className="btn-sovereign" style={{fontSize:13}}>⬡ Enter SovereignOne</a>
          <button onClick={()=>scrollTo('chikasha')} className="btn-primary" style={{fontSize:13}}>◈ Chikasha AI Platform</button>
          <button onClick={()=>scrollTo('care')} className="btn-care" style={{fontSize:13}}>⊕ Care AI Platform</button>
          <a href="#contact" className="btn-secondary">Request Demo</a>
        </div>
        <div className="fade-up-4" style={{display:"flex",gap:32,justifyContent:"center",flexWrap:"wrap"}}>
          {[{v:"574",l:"Tribal Nations"},{v:"11",l:"Live Products"},{v:"100%",l:"Data Sovereignty"},{v:"$0",l:"Data Sold"},{v:"$3.4B+",l:"TAM"}].map((s,i)=>(
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

const HealthOSPreview = () => (
  <img src="/healthos.png" alt="Chikasha Health OS — patient risk dashboard with biomarkers, risk score, and AI health narrative" loading="lazy" style={{display:"block",width:"100%",height:"auto"}}/>
);

const CHIKASHA_PRODUCTS = [
  {icon:"◈",name:"CHIKASHA AI OS",sub:"Unified Sovereign Intelligence Platform",desc:"The command center. All sovereign systems unified under one interface — accessible to Nation Leadership, Healthcare providers, and Developers through distinct audience modes.",url:"https://chikasha-ai.vercel.app",color:C.goldLight,tags:["Nation Leadership Mode","Healthcare Mode","Developer Mode","6 Integrated Tabs","Shield Protected"],live:true,featured:true},
  {icon:"⊕",name:"CHIKASHA HEALTH OS",sub:"Sovereign Preventive Health Platform",desc:"Precision preventive diagnostics, longitudinal health records, and AI care coordination — all within sovereign data walls. Zero PHI transmitted externally. Wearable connected.",url:"https://sovereignhealthcareos.com",color:C.greenLight,tags:["7-Tab Dashboard","Biomarker Tracking","Risk Engine","Wearable Connected","ZK Protected"],live:true,preview:HealthOSPreview},
  {icon:"◉",name:"CHIKASHA FOUNDATIONAL MODEL",sub:"Sovereign AI — Four Modes",desc:"The Nation's own AI with four distinct modes: Citizen, Healthcare, Language, and Leadership. Shield-protected on every query. Built to be routed to sovereign infrastructure.",url:"https://chikashcfm.vercel.app",color:C.greenLight,tags:["Citizen Mode","Healthcare Mode","Language Mode","Leadership Mode","Shield Active"],live:true},
  {icon:"◎",name:"CHIKASHA LANGUAGE OS",sub:"Sovereign Language Preservation",desc:"AI-powered Chikashshanompa' dictionary, phrase learning, cultural knowledge, and oral history preservation — Shield-protected so the language never leaves sovereign control.",url:"https://chikashaailanguageos.vercel.app",color:C.goldBright,tags:["Dictionary AI","Phrase Builder","Cultural Knowledge","Oral History","ZK Protected"],live:true},
  {icon:"⬡",name:"SOVEREIGN PROMPT SHIELD",sub:"Data Protection Layer — USPTO Patent Pending",desc:"Intercepts every AI query before transmission. Detects PII, tribal enrollment data, and Chikashshanompa' terms — hashing them at the browser edge under tribal governance.",url:"https://chikashaai-promptshield12.vercel.app",color:C.goldLight,tags:["ZK Hash Layer","HIPAA Aligned","Real-time Detection","Tribal Governance","USPTO Patent Pending"],live:true},
  {icon:"◉",name:"CARECIRCLE SOVEREIGN EDITION",sub:"Family Elder Care — Tribal Health Connected",desc:"Family care coordination for Chickasaw elder households. Medication tracking, appointments, and care tasks — with the Sovereign Health OS clinical view built directly in for the family.",url:"https://carecircle-sovereign.vercel.app",color:C.greenLight,tags:["Medication Tracking","Appointment Sync","Health OS Connected","Shield Protected","Elder Care"],live:true},
];

const CARE_PRODUCTS = [
  {icon:"⊕",name:"CAREIQ",sub:"FQHC Community Health Intelligence",desc:"AI-powered preventive health intelligence for Federally Qualified Health Centers. Risk stratification, care gap identification, and patient health scoring — protecting 30M community health patients.",url:"https://care-iq-sable.vercel.app",color:C.tealLight,tags:["Risk Stratification","Care Gap Engine","UDS Reporting","HIPAA Aligned","Shield Protected"],live:true,featured:true},
  {icon:"◉",name:"CARECIRCLE FQHC EDITION",sub:"Family Elder Care — CareIQ Connected",desc:"Family care coordination for elder households served by FQHCs. Medication tracking, care tasks, and family coordination — with CareIQ clinical data shared directly to the family view.",url:"https://care-os-uo7x.vercel.app",color:C.tealLight,tags:["Medication Tracking","Care Tasks","CareIQ Built In","Shield Protected","Elder Care"],live:true},
  {icon:"◈",name:"EDUIQ",sub:"Child Mental Health Early Warning",desc:"A student-centered intelligence platform connecting school, home, healthcare, and community services — with parents at the center of every decision. Identifies early warning signals across domains before a crisis develops.",url:"https://eduiq-jmkr8enhq-matpcul-7370s-projects.vercel.app",color:C.tealBright,tags:["Parent Controlled","School Connected","Mental Health AI","Shield Protected","Early Warning"],live:true},
  {icon:"⬡",name:"SOVEREIGN PROMPT SHIELD",sub:"Shared Data Protection Layer",desc:"The same zero-knowledge cryptographic protection layer that powers Chikasha AI runs across every Care AI product. HIPAA-aligned, privacy-by-architecture, not just policy.",url:"https://chikashaai-promptshield12.vercel.app",color:C.tealLight,tags:["ZK Hash Layer","HIPAA Aligned","Browser Edge","PHI Protection","Shared Infrastructure"],live:true},
];

const LONGEVITY_PRODUCTS = [
  {icon:"🧬",name:"LONGEVITYIQ SPA",sub:"Sovereign Wellness Franchise — Rural Oklahoma + Indian Country",desc:"The first sovereign wellness franchise. Non-clinical launch: infrared sauna, cold plunge, red light therapy, breathwork, compression. $8K-$22K startup per location. Scales to 74 Oklahoma counties and 574 federally recognized tribes.",url:"https://longevityiq.vercel.app",color:C.amberLight,tags:["Franchise Model","Rural Oklahoma","No License Phase 1","574 Tribes TAM","$8K-$22K Startup"],live:true,featured:true},
  {icon:"💊",name:"LONGEVITYIQ PLATFORM",sub:"AI Bio Age Assessment + Protocol Engine",desc:"AI-powered biological age assessment, personalized longevity protocol recommendations, and daily sovereign health insights. Every client takes the bio age assessment on arrival. Protocol recommendations driven by the sovereign health LLM.",url:"https://longevityiq.vercel.app",color:C.amberLight,tags:["Bio Age Assessment","8 Protocols","Daily AI Insight","LLM Powered","Shield Protected"],live:true},
  {icon:"💉",name:"CLINICAL LICENSING",sub:"IV Therapy · NAD+ · Peptides · Hormone",desc:"Phase 2 clinical services licensed to existing medical spas, FQHCs, and tribal health clinics. Platform fee $1,000-$2,500/mo. 10-15% revenue share. Licensed NP or MD partner owns the clinical side entirely.",url:"#contact",color:C.goldLight,tags:["IV Drip","NAD+ Infusion","Peptide Therapy","NP/MD Partner","Zero Liability"],live:false},
];

const AILT_PRODUCTS = [
  {icon:"◈",name:"AILT LEADERSHIP OS",sub:"Adaptive Inclusive Leadership Theory — Published · Doctoral",desc:"The philosophical and governance foundation of everything Sovereign Shield builds. Six tools: Leadership Advisor, Self-Assessment, Meeting Architect, AI Readiness Scanner, Leadership Coach, 360 Feedback. 12-week course. Published on Amazon KDP.",url:"https://ailt-leadership.vercel.app",color:C.goldLight,tags:["IAC · PS · ECF","Doctoral Research","Amazon KDP","12-Week Course","6 Leadership Tools"],live:true,featured:true},
  {icon:"⬡",name:"SOVEREIGNTY TENSION CONSTRUCT",sub:"AILT Original Research — Cost of Consistency",desc:"Two new theoretical constructs developed within AILT: Sovereignty Tension — the cognitive and organizational friction that occurs when Indigenous leaders operate within non-sovereign systems. Cost of Consistency — the compounding toll of cultural code-switching.",url:"https://ailt-leadership.vercel.app",color:C.goldBright,tags:["Sovereignty Tension","Cost of Consistency","Original Constructs","Journal Submitted","N=39,948"],live:true},
  {icon:"◉",name:"AILT IN SOVEREIGNONE",sub:"Leadership Health Scores — Consumer Platform Integration",desc:"IAC, Psychological Safety, and ECF scores displayed alongside biometric vitals in SovereignOne. The AI leadership advisor connects high sovereignty tension to elevated stress biometrics and recommends recovery protocols.",url:"https://sovereignhealthcareos.com",color:C.greenLight,tags:["IAC Score","Psych Safety","ECF Score","SovereignOne Integration","Physical + Leadership"],live:true},
];

const ProductGrid = ({products}) => (
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
    {products.map((p,i)=>{
      const Preview = p.preview;
      return (
      <div key={i} className="product-card" style={{"--accent":p.color,gridColumn:p.featured?"1 / -1":"auto"}}>
        {Preview && (
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{display:"block",marginBottom:16,borderRadius:10,overflow:"hidden",border:`1px solid ${C.border}`,background:C.surface}}>
            <Preview/>
          </a>
        )}
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
              <Pill label={p.live?"Live":"Coming Soon"} color={p.live?p.color:C.muted}/>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">View Platform ↗</a>
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
            <Pill label={p.live?"Live":"Phase 2"} color={p.live?p.color:C.muted}/>
          </div>
        )}
        <p style={{color:C.boneDim,fontSize:p.featured?14:12,lineHeight:1.8,marginBottom:p.featured?14:12,maxWidth:p.featured?580:"none"}}>{p.desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:14}}>
          {p.tags.map((t,j)=>(
            <span key={j} style={{background:C.surface,border:`1px solid ${C.border}`,color:C.muted,padding:"3px 8px",borderRadius:5,fontSize:9,fontFamily:"Rajdhani,sans-serif",letterSpacing:0.5}}>{t}</span>
          ))}
        </div>
        {!p.featured&&<a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{fontSize:10,padding:"7px 14px"}}>View Live ↗</a>}
      </div>
      );
    })}
  </div>
);

const Products = ({activeTab,setActiveTab}) => (
  <section id="products" style={{padding:"80px 24px",background:`${C.surface}80`,position:"relative",zIndex:1}}>
    <div style={{maxWidth:1000,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:40}}>
        <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Live Platform</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>Four Sovereign Platforms. One Architecture.</h2>
        <p style={{color:C.boneDim,fontSize:16,maxWidth:580,margin:"0 auto 32px",lineHeight:1.8}}>Select a platform to explore the products built under it. All products share the Sovereign Prompt Shield data protection layer.</p>
        <div style={{display:"inline-flex",background:C.panel,border:`1px solid ${C.border}`,borderRadius:14,padding:6,gap:6,flexWrap:"wrap",justifyContent:"center"}}>
          {[
            {id:'chikasha',label:'◈ Chikasha AI',bg:`linear-gradient(135deg,${C.forest},${C.green})`,color:C.greenLight,activeColor:C.cream,glow:C.green},
            {id:'care',label:'⊕ Care AI',bg:`linear-gradient(135deg,${C.teal},${C.tealLight})`,color:C.tealLight,activeColor:C.cream,glow:C.teal},
            {id:'longevity',label:'🧬 LongevityIQ',bg:`linear-gradient(135deg,#3A1A00,${C.amber})`,color:C.amberLight,activeColor:C.cream,glow:C.amber},
            {id:'ailt',label:'◈ Leadership',bg:`linear-gradient(135deg,#1A1000,${C.gold})`,color:C.goldLight,activeColor:C.cream,glow:C.gold},
          ].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{padding:"10px 24px",borderRadius:10,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",transition:"all 0.25s",background:activeTab===tab.id?tab.bg:"transparent",color:activeTab===tab.id?tab.activeColor:C.boneDim,border:activeTab===tab.id?`1px solid ${tab.color}50`:"1px solid transparent",boxShadow:activeTab===tab.id?`0 0 16px ${tab.glow}40`:"none"}}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab==='chikasha'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,${C.greenGlow},${C.forest}30)`,border:`1px solid ${C.greenLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.goldBright,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>◈ Chikasha AI</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Sovereign AI infrastructure for tribal nations — cultural preservation, health intelligence, citizen services, and language protection. Built by an enrolled Chickasaw citizen for the 574 nations.</div>
            </div>
            <Pill label="6 Products · All Live" color={C.greenLight}/>
          </div>
          <ProductGrid products={CHIKASHA_PRODUCTS}/>
        </div>
      )}

      {activeTab==='care'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,${C.teal}20,${C.teal}10)`,border:`1px solid ${C.tealLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.tealBright,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>⊕ Care AI</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Community health intelligence for FQHCs, elder care families, and schools — protecting 30M patients with the same sovereign data architecture. Built for the communities that need it most.</div>
            </div>
            <Pill label="4 Products · All Live" color={C.tealLight}/>
          </div>
          <ProductGrid products={CARE_PRODUCTS}/>
        </div>
      )}

      {activeTab==='longevity'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,#1A0800,${C.amber}20)`,border:`1px solid ${C.amberLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.amberLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>🧬 LongevityIQ Spa</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Sovereign wellness franchise for rural Oklahoma and Indian Country. Two revenue streams: non-clinical franchise and clinical platform licensing. The physical proof of concept that the sovereign health stack works in the real world.</div>
            </div>
            <Pill label="Franchise Model" color={C.amberLight}/>
          </div>
          <ProductGrid products={LONGEVITY_PRODUCTS}/>
        </div>
      )}

      {activeTab==='ailt'&&(
        <div className="tab-content">
          <div style={{background:`linear-gradient(135deg,#100800,${C.gold}20)`,border:`1px solid ${C.goldLight}30`,borderRadius:14,padding:"16px 20px",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
            <div>
              <div style={{color:C.goldBright,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:1,marginBottom:4}}>◈ AILT Leadership</div>
              <div style={{color:C.boneDim,fontSize:13,lineHeight:1.6}}>Adaptive Inclusive Leadership Theory — the philosophical and governance foundation of everything Sovereign Shield builds. Doctoral research by Matthew Culwell, enrolled Chickasaw citizen. Published on Amazon KDP. Three constructs: IAC, Psychological Safety, ECF.</div>
            </div>
            <Pill label="Published · Live" color={C.goldLight}/>
          </div>
          <ProductGrid products={AILT_PRODUCTS}/>
        </div>
      )}
    </div>
  </section>
);

const Flywheel = ({setActiveTab}) => {
  const goTab = (tab) => {
    setActiveTab?.(tab);
    document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
  };
  return (
  <section id="flywheel" style={{padding:"80px 24px",position:"relative",zIndex:1,textAlign:"center"}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>The Business Model</div>
      <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>The Sovereign Flywheel</h2>
      <p style={{color:C.boneDim,fontSize:16,maxWidth:560,margin:"0 auto 48px",lineHeight:1.8}}>AILT governs the philosophy. Shield protects the data. The LLM gets smarter with every user. Revenue funds the next deployment. Every product makes every other product more valuable.</p>

      <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:20,padding:"40px 24px",position:"relative",overflow:"hidden",marginBottom:32}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)`}}/>
        <div style={{width:"min(380px,90%)",height:"min(380px,90vw)",margin:"0 auto"}}>
          <svg viewBox="0 0 380 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            <defs>
              <radialGradient id="fw-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4A820" stopOpacity="0.07"/>
                <stop offset="100%" stopColor="#1A90B0" stopOpacity="0.01"/>
              </radialGradient>
              <marker id="fw-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L0,5 L5,2.5 z" fill="#D4A820" opacity="0.8"/>
              </marker>
            </defs>
            <circle cx="190" cy="190" r="180" fill="url(#fw-bg)"/>
            <g className="rcw" style={{transformOrigin:"190px 190px"}}>
              <circle cx="190" cy="190" r="174" fill="none" stroke="#B89010" strokeWidth="0.5" strokeDasharray="3 9" opacity="0.4"/>
            </g>
            <g className="rccw" style={{transformOrigin:"190px 190px"}}>
              <circle cx="190" cy="190" r="108" fill="none" stroke="#1A6070" strokeWidth="0.4" strokeDasharray="2 8" opacity="0.3"/>
            </g>
            <circle cx="190" cy="190" r="132" fill="none" stroke="#182A3E" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="190" cy="190" r="80" fill="none" stroke="#182A3E" strokeWidth="0.6" opacity="0.5"/>
            {/* Arc flows */}
            <path d="M 190 58 Q 286 72 310 162" fill="none" stroke="#D4A820" strokeWidth="1" opacity="0.22" strokeDasharray="4 5" markerEnd="url(#fw-arrow)" className="aflow" style={{animationDelay:"0s"}}/>
            <path d="M 310 162 Q 326 244 258 302" fill="none" stroke="#D4A820" strokeWidth="1" opacity="0.22" strokeDasharray="4 5" markerEnd="url(#fw-arrow)" className="aflow" style={{animationDelay:"0.4s"}}/>
            <path d="M 258 302 Q 190 336 118 300" fill="none" stroke="#D4A820" strokeWidth="1" opacity="0.22" strokeDasharray="4 5" markerEnd="url(#fw-arrow)" className="aflow" style={{animationDelay:"0.8s"}}/>
            <path d="M 118 300 Q 56 244 70 162" fill="none" stroke="#D4A820" strokeWidth="1" opacity="0.22" strokeDasharray="4 5" markerEnd="url(#fw-arrow)" className="aflow" style={{animationDelay:"1.2s"}}/>
            <path d="M 70 162 Q 90 76 190 58" fill="none" stroke="#D4A820" strokeWidth="1" opacity="0.22" strokeDasharray="4 5" markerEnd="url(#fw-arrow)" className="aflow" style={{animationDelay:"1.6s"}}/>
            {/* Spokes */}
            {[[190,58],[310,162],[258,302],[118,300],[70,162]].map(([x,y],i)=>(
              <line key={i} x1={190+((x-190)*0.62)} y1={190+((y-190)*0.62)} x2={190+((x-190)*0.94)} y2={190+((y-190)*0.94)} stroke="#182A3E" strokeWidth="0.7" strokeDasharray="2 5" opacity="0.4"/>
            ))}
            {/* Outer nodes */}
            {[
              {cx:190,cy:58,label:"HEALTH OS",color:"#1A90B0",tab:"chikasha"},
              {cx:310,cy:162,label:"CAREIQ OS",color:"#1A90B0",tab:"care"},
              {cx:258,cy:302,label:"LONGEVITYIQ",color:"#C87020",tab:"longevity"},
              {cx:118,cy:300,label:"CARECIRCLE",color:"#1E8A60",tab:"chikasha"},
              {cx:70,cy:162,label:"CHIKASHA AI",color:"#D4A820",tab:"chikasha"},
            ].map((n,i)=>(
              <g key={i} onClick={()=>goTab(n.tab)} style={{cursor:"pointer"}}>
                <circle cx={n.cx} cy={n.cy} r="30" fill="#0D1828" stroke={n.color} strokeWidth="1.2"/>
                <text x={n.cx} y={n.cy+4} textAnchor="middle" fontSize="7.5" fill={n.color} fontFamily="Rajdhani,sans-serif" fontWeight="600">{n.label}</text>
              </g>
            ))}
            {/* Inner nodes */}
            {[
              {cx:190,cy:110,label:"SHIELD",color:"#D4A820"},
              {cx:248,cy:190,label:"LLM",color:"#1A90B0"},
              {cx:190,cy:252,label:"CFM",color:"#C87020"},
              {cx:132,cy:190,label:"AILT",color:"#1E8A60"},
            ].map((n,i)=>(
              <g key={i}>
                <circle cx={n.cx} cy={n.cy} r="22" fill="#0D1828" stroke={n.color} strokeWidth="1"/>
                <text x={n.cx} y={n.cy+4} textAnchor="middle" fontSize="8" fill={n.color} fontFamily="Rajdhani,sans-serif" fontWeight="700">{n.label}</text>
              </g>
            ))}
            {/* Center AILT */}
            <circle cx="190" cy="190" r="46" fill="#070D18" stroke="#D4A820" strokeWidth="2"/>
            <text x="190" y="184" textAnchor="middle" fontSize="10" fill="#D4A820" fontFamily="Cormorant Garamond,serif" fontWeight="700">AILT</text>
            <text x="190" y="197" textAnchor="middle" fontSize="7" fill="#D4A820" fontFamily="Rajdhani,sans-serif" fontWeight="600">GOVERNANCE</text>
            <text x="190" y="208" textAnchor="middle" fontSize="6.5" fill="#B89010" fontFamily="Rajdhani,sans-serif">Sovereignty Core</text>
          </svg>
        </div>
        <p style={{color:C.boneDim,fontSize:13,maxWidth:480,margin:"20px auto 0",lineHeight:1.8}}>AILT governance at the core. Sovereign Prompt Shield as the technical expression. Every product feeds training data, revenue, and patient relationships back into the center.</p>
        <p style={{color:C.muted,fontSize:11,marginTop:14,fontFamily:"Rajdhani,sans-serif",letterSpacing:1,textTransform:"uppercase"}}>Click any outer node to jump to its platform ↓</p>
      </div>
    </div>
  </section>
  );
};

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
          {name:"Raven Indigenous Capital",sub:"Impact Investment",desc:"Canada's first Indigenous-led social finance intermediary. Active investor conversations for the $1.5M seed bridge round.",status:"Active",color:C.goldLight},
          {name:"OCAST",sub:"Oklahoma Center for the Advancement of Science and Technology",desc:"Warm contact established via CNSBDC. SBIR Phase 1 application in progress for up to $275K in non-dilutive R&D funding.",status:"Pipeline",color:C.tealLight},
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

// ── NEW: INVESTOR SECTION ──────────────────────────────────────
const Invest = () => (
  <section id="invest" style={{padding:"80px 24px",position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Investment Opportunity</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone,marginBottom:14}}>Seed Bridge Round</h2>
        <p style={{color:C.boneDim,fontSize:16,maxWidth:560,margin:"0 auto",lineHeight:1.8}}>Raising $1.5M at a $4M-$5M pre-money valuation. Four live platforms. USPTO provisional patent. Sovereign health LLM at 97.78% accuracy. TAM $3.4B+.</p>
      </div>

      {/* Key numbers */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:14,marginBottom:32}}>
        {[
          {val:"$1.5M",label:"Current Ask"},
          {val:"$4M–$5M",label:"Pre-Money Valuation"},
          {val:"20–30%",label:"Equity Offered"},
          {val:"$25K",label:"Minimum Check"},
          {val:"60–90",label:"Days to Close"},
          {val:"$335K",label:"Year 1 Target"},
        ].map((s,i)=>(
          <div key={i} style={{background:C.panel,border:`1px solid ${C.border}`,borderTop:`2px solid ${C.goldLight}`,borderRadius:12,padding:"18px 14px",textAlign:"center"}}>
            <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:24,marginBottom:4,letterSpacing:-0.5}}>{s.val}</div>
            <div style={{color:C.muted,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",textTransform:"uppercase"}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue projections */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:32}}>
        {[
          {yr:"Year 1",val:"$335K",items:["1 FQHC contract: $48K","RPM revenue: $12K","NSF SBIR Phase 1: $275K"],color:C.tealLight},
          {yr:"Year 2",val:"$1.916M",items:["3-5 FQHC contracts","RPM expansion","Shield enterprise licensing"],color:C.goldLight},
          {yr:"Year 3",val:"$4.06M",items:["10+ FQHC contracts","Tribal nation contracts","Series A positioning"],color:C.greenLight},
        ].map((y,i)=>(
          <div key={i} style={{background:C.panel,border:`1px solid ${C.border}`,borderTop:`2px solid ${y.color}`,borderRadius:12,padding:"20px"}}>
            <div style={{color:y.color,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{y.yr}</div>
            <div style={{fontFamily:"Cormorant Garamond,serif",fontSize:28,color:C.bone,marginBottom:12}}>{y.val}</div>
            {y.items.map((item,j)=>(
              <div key={j} style={{color:C.boneDim,fontSize:11,marginBottom:5}}>+ {item}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Use of funds */}
      <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:14,padding:"28px 32px",marginBottom:24}}>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Use of Funds — $1.5M</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
          {[
            ["Founder Salary","$120K"],["Clinical Sales Hire","$100K"],["Sovereign Data Center","$120K"],
            ["Product Dev + LLM","$80K"],["Sales and Marketing","$60K"],["CFM Compute","$50K"],
            ["HIPAA Certification","$20K"],["Healthcare Attorney","$25K"],["Full Patent","$15K"],
            ["Office Space Ada OK","$15K"],["Infrastructure","$20K"],["Working Capital + Reserve","$95K"],
          ].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:C.card,borderRadius:8,border:`1px solid ${C.border}`}}>
              <span style={{color:C.boneDim,fontSize:12}}>{k}</span>
              <span style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12}}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{textAlign:"center"}}>
        <a href="mailto:matpcul@gmail.com?subject=Sovereign Shield Investment Inquiry" className="btn-secondary">Contact for Investment Deck ↗</a>
      </div>
    </div>
  </section>
);

// ── NEW: FOUNDER SECTION ──────────────────────────────────────
const Founder = () => (
  <section id="founder" style={{padding:"80px 24px",background:`${C.surface}80`,position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>The Founder</div>
        <h2 style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:300,color:C.bone}}>Built From Ada, Oklahoma.</h2>
      </div>

      <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:16,padding:"36px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C.green},${C.goldLight},${C.green},transparent)`}}/>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start"}}>
          <div>
            <div style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:300,color:C.goldLight,marginBottom:6}}>Matthew Culwell</div>
            <div style={{color:C.muted,fontFamily:"Rajdhani,sans-serif",fontSize:11,letterSpacing:1.5,textTransform:"uppercase",marginBottom:20}}>Founder and CEO · Sovereign Shield Technologies LLC</div>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:24}}>
              {[
                "Enrolled citizen of the Chickasaw Nation",
                "USPS Postmaster, Ada, Oklahoma",
                "Casino Supervisor, Chickasaw Nation",
                "Doctoral Candidate, Strategic Leadership — Liberty University",
                "MS Human Resources — East Central University (2019)",
                "BS Criminal Justice — Northeastern State University (2017)",
                "Author: AILT: Leading Sovereign (Amazon KDP)",
                "No-code founder — built entirely from a phone",
                "11 live production deployments, zero venture capital",
              ].map((c,i)=>(
                <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                  <span style={{color:C.goldLight,fontWeight:700,flexShrink:0}}>+</span>
                  <span style={{color:i<2?C.bone:C.boneDim,fontSize:13,lineHeight:1.5}}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href="mailto:matpcul@gmail.com" className="btn-primary" style={{fontSize:11,padding:"10px 18px"}}>Contact Matthew</a>
              <a href="https://ailt-leadership.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{fontSize:11,padding:"10px 18px"}}>AILT Platform ↗</a>
            </div>
          </div>

          <div>
            <blockquote style={{fontFamily:"Cormorant Garamond,serif",fontSize:"clamp(16px,2.5vw,22px)",fontStyle:"italic",color:C.bone,lineHeight:1.6,borderLeft:`3px solid ${C.goldLight}`,paddingLeft:20,marginBottom:24}}>
              "I build luxury big-city longevity healthcare for the sovereign and urban communities."
            </blockquote>
            <p style={{color:C.boneDim,fontSize:14,lineHeight:1.9,marginBottom:16}}>
              Sovereign Shield Technologies exists because tribal nations and FQHCs deserve AI health infrastructure that was built for them — not extracted from them. Every product in this stack is governed by AILT principles, protected by Sovereign Prompt Shield, and designed to keep tribal member data sovereign from the moment it enters the system.
            </p>
            <p style={{color:C.boneDim,fontSize:14,lineHeight:1.9,marginBottom:20}}>
              This is not a concept. Everything is live, accessible, and operational today. Built from Ada, Oklahoma. Owned by the Chickasaw Nation community. Designed for Indian Country and everyone who believes health data belongs to the person it came from.
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <Pill label="Enrolled Chickasaw Nation" color={C.goldLight}/>
              <Pill label="Ada, Oklahoma" color={C.greenLight}/>
              <Pill label="SOS #76084490002" color={C.boneDim}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
          <p style={{color:C.boneDim,fontSize:16,lineHeight:1.8}}>Whether you represent a tribal nation, an FQHC, a school district, a franchise investor, or a potential partner — we want to hear from you.</p>
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
                  {["Tribal Nation","FQHC / Community Health","School District","Indigenous Organization","Government Agency","Investor / Funder","Franchise Inquiry","Research Institution","Other"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div style={{marginBottom:20}}>
              <div style={{color:C.boneDim,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif",marginBottom:6}}>MESSAGE</div>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your community's AI needs, franchise interest, or investment inquiry..." rows={4} style={{resize:"vertical"}}/>
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

const Footer = () => (
  <footer style={{borderTop:`1px solid ${C.border}`,padding:"32px 24px",position:"relative",zIndex:1}}>
    <div style={{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
      <div>
        <div style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,letterSpacing:2,marginBottom:4}}>SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
        <div style={{color:C.muted,fontSize:10,letterSpacing:1.5,fontFamily:"Rajdhani,sans-serif"}}>OKLAHOMA · CHICKASAW NATION · YAKOKE</div>
      </div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
        <span style={{color:C.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",marginRight:8}}>◈ Chikasha AI</span>
        {[["Health OS","https://sovereignhealthcareos.com"],["Language OS","https://chikashaailanguageos.vercel.app"],["Shield","https://chikashaai-promptshield12.vercel.app"],["CFM","https://chikashcfm.vercel.app"],["CareCircle","https://carecircle-sovereign.vercel.app"]].map(([label,url])=>(
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{color:C.muted,textDecoration:"none",fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.goldLight} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
        ))}
        <span style={{color:C.tealLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",margin:"0 8px"}}>⊕ Care AI</span>
        {[["CareIQ","https://care-iq-sable.vercel.app"],["CareCircle FQHC","https://care-os-uo7x.vercel.app"],["EduIQ","https://eduiq-jmkr8enhq-matpcul-7370s-projects.vercel.app"]].map(([label,url])=>(
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{color:C.muted,textDecoration:"none",fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.tealLight} onMouseLeave={e=>e.target.style.color=C.muted}>{label}</a>
        ))}
        <span style={{color:C.amberLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",margin:"0 8px"}}>🧬 LongevityIQ</span>
        <span style={{color:C.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",margin:"0 8px"}}>◈ AILT</span>
        <a href="https://ailt-leadership.vercel.app" target="_blank" rel="noopener noreferrer" style={{color:C.muted,textDecoration:"none",fontFamily:"Rajdhani,sans-serif",fontSize:10,letterSpacing:1,textTransform:"uppercase",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.goldLight} onMouseLeave={e=>e.target.style.color=C.muted}>Leadership OS</a>
      </div>
      <div style={{color:C.muted,fontSize:10,fontFamily:"Rajdhani,sans-serif",letterSpacing:1}}>© 2026 SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
    </div>
  </footer>
);

// ── SOVEREIGNONE ONBOARDING FLOW ─────────────────────────────
const OB_STEPS = [
  {id:"email",q:"Create your sovereign health identity",sub:"Your data is encrypted from the moment you enter. Never reaches a commercial AI server in readable form.",type:"email"},
  {id:"tribal",q:"Are you a citizen of a tribal nation?",sub:"This unlocks your cultural sovereignty layer -- language tools, governance resources, and culturally grounded health insights.",type:"choice",opts:[{icon:"🦅",label:"Yes -- Chickasaw Nation"},{icon:"🌿",label:"Yes -- other tribal nation"},{icon:"🌎",label:"No -- general public"}]},
  {id:"wearable",q:"Do you have a wearable device?",sub:"SovereignOne connects to any wearable that syncs to Apple Health or Google Fit -- Apple Watch, Oura Ring, Fitbit, Garmin, Whoop, Samsung Galaxy Watch, and more.",type:"choice",opts:[{icon:"⌚",label:"Yes -- Apple Health compatible"},{icon:"🤖",label:"Yes -- Google Fit compatible"},{icon:"💍",label:"Yes -- Oura Ring or Whoop"},{icon:"❌",label:"No wearable yet"}]},
  {id:"care",q:"Do you have a primary care provider or FQHC?",sub:"If your clinic uses CareIQ your clinical records will sync securely to your dashboard.",type:"choice",opts:[{icon:"🏥",label:"Yes -- sync my clinical records"},{icon:"👤",label:"No -- self-directed health only"}]},
];

const obCss = `
  .ob-wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;background:#040810;position:relative}
  .ob-wrap::before{content:'';position:fixed;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#D4A820,#1A90B0,#D4A820);z-index:10}
  .ob-card{background:#0D1828;border:1px solid #182A3E;border-radius:20px;padding:28px 24px;width:100%;max-width:420px;position:relative;overflow:hidden}
  .ob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#D4A820,#1A90B0)}
  .ob-prog{height:3px;background:#182A3E;border-radius:2px;margin-bottom:20px;overflow:hidden}
  .ob-prog-fill{height:100%;background:linear-gradient(90deg,#D4A820,#1A90B0);transition:width .4s ease}
  .ob-step{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#304858;margin-bottom:10px;font-family:Rajdhani,sans-serif;font-weight:600}
  .ob-q{font-family:'Cormorant Garamond',serif;font-size:18px;color:#EEE0C0;margin-bottom:5px;line-height:1.4}
  .ob-sub{font-size:12px;color:#304858;margin-bottom:18px;line-height:1.5}
  .ob-input{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #182A3E;background:#070D18;color:#EEE0C0;font-family:'Cormorant Garamond',serif;font-size:14px;outline:none;margin-bottom:12px;transition:border-color .2s}
  .ob-input:focus{border-color:#D4A82080}
  .ob-input::placeholder{color:#304858}
  .ob-opt{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:10px;border:1px solid #182A3E;background:#070D18;font-size:13px;color:#806A50;margin-bottom:8px;cursor:pointer;transition:all .15s;font-family:'Cormorant Garamond',serif}
  .ob-opt:hover{border-color:#D4A82050;color:#D4A820}
  .ob-opt.sel{background:rgba(212,168,32,0.08);border-color:#D4A820;color:#D4A820}
  .ob-btn{width:100%;padding:14px;border-radius:10px;border:none;background:#D4A820;color:#040810;font-family:Rajdhani,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;margin-top:4px;transition:opacity .2s}
  .ob-btn:hover{opacity:.9}
  .ob-btn:disabled{opacity:.4;cursor:not-allowed}
  .ob-enc{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px}
  .ob-enc-dot{width:5px;height:5px;border-radius:50%;background:#1A90B0;animation:obpulse 2s ease infinite}
  .ob-enc-text{font-size:9px;color:#0A6070;letter-spacing:1px;text-transform:uppercase;font-family:Rajdhani,sans-serif}
  @keyframes obpulse{0%,100%{opacity:1}50%{opacity:.35}}
  .dash-card{background:#0D1828;border:1px solid #182A3E;border-radius:14px;padding:18px;margin-bottom:10px;position:relative;overflow:hidden}
  .dash-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px}
  .dash-card.gold::before{background:linear-gradient(90deg,#D4A820,#1A90B0)}
  .vital-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
  .vital-card{background:#101E30;border:1px solid #182A3E;border-radius:10px;padding:12px;text-align:center}
`;

function SovereignOneOnboard() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const current = OB_STEPS[step];
  const pct = (step / OB_STEPS.length) * 100;

  function next() {
    if (current.type === "email" && !email.includes("@")) return;
    if (current.type === "choice" && selected === null) return;
    const newA = { ...answers, [current.id]: current.type === "email" ? email : current.opts[selected].label };
    setAnswers(newA);
    setSelected(null);
    if (step + 1 >= OB_STEPS.length) { setDone(true); }
    else { setStep(step + 1); }
  }

  if (done) return (
    <div className="ob-wrap">
      <style>{obCss}</style>
      <div style={{fontFamily:"Cormorant Garamond,serif",fontSize:28,color:"#D4A820",textAlign:"center",marginBottom:8}}>Sovereign<span style={{color:"#1A90B0"}}>One</span></div>
      <div style={{fontSize:11,color:"#304858",letterSpacing:1,marginBottom:32,textAlign:"center",fontFamily:"Rajdhani,sans-serif",textTransform:"uppercase"}}>Your health. Your data. Your sovereignty.</div>
      <div className="ob-card" style={{textAlign:"center"}}>
        <div style={{fontSize:48,marginBottom:16}}>⬡</div>
        <div style={{fontFamily:"Cormorant Garamond,serif",fontSize:22,color:"#EEE0C0",marginBottom:10}}>Yakoke. Identity created.</div>
        <div style={{fontSize:13,color:"#806A50",lineHeight:1.7,marginBottom:24}}>Your sovereign health identity is live. Your data is encrypted and sovereign from this moment forward.</div>
        <a href="https://sovereignhealthcareos.com" className="ob-btn" style={{display:"block",textDecoration:"none",textAlign:"center",padding:"14px",borderRadius:10,background:"#D4A820",color:"#040810",fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:"uppercase"}}>
          Enter Your Dashboard →
        </a>
        <div style={{marginTop:12}}><a href="/" style={{color:"#304858",fontSize:11,fontFamily:"Rajdhani,sans-serif",letterSpacing:1,textTransform:"uppercase",textDecoration:"none"}}>← Back to Sovereign Shield</a></div>
      </div>
    </div>
  );

  return (
    <div className="ob-wrap">
      <style>{obCss}</style>
      <div style={{fontFamily:"Cormorant Garamond,serif",fontSize:28,color:"#D4A820",textAlign:"center",marginBottom:4}}>Sovereign<span style={{color:"#1A90B0"}}>One</span></div>
      <div style={{fontSize:11,color:"#304858",letterSpacing:1,marginBottom:28,textAlign:"center",fontFamily:"Rajdhani,sans-serif",textTransform:"uppercase"}}>Your health. Your data. Your sovereignty.</div>
      <div className="ob-card">
        <div className="ob-prog"><div className="ob-prog-fill" style={{width:`${pct}%`}}/></div>
        <div className="ob-step">Step {step+1} of {OB_STEPS.length}</div>
        <div className="ob-q">{current.q}</div>
        <div className="ob-sub">{current.sub}</div>
        {current.type === "email" && (
          <input className="ob-input" type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&next()}/>
        )}
        {current.type === "choice" && current.opts.map((opt,i)=>(
          <div key={opt.label} className={`ob-opt${selected===i?" sel":""}`} onClick={()=>setSelected(i)}>
            <span style={{fontSize:18}}>{opt.icon}</span> {opt.label}
          </div>
        ))}
        <button className="ob-btn" onClick={next} disabled={current.type==="email"?!email.includes("@"):selected===null}>
          {step+1>=OB_STEPS.length ? "Enter My Sovereign Dashboard" : "Continue"}
        </button>
      </div>
      <div className="ob-enc"><div className="ob-enc-dot"/><span className="ob-enc-text">AES-256-GCM · Zero-Knowledge · Sovereign Prompt Shield v5</span></div>
      <div style={{marginTop:10}}><a href="/" style={{color:"#304858",fontSize:11,fontFamily:"Rajdhani,sans-serif",letterSpacing:1,textTransform:"uppercase",textDecoration:"none"}}>← Back to Sovereign Shield</a></div>
    </div>
  );
}

export default function SovereignShieldSite() {
  const [activeTab,setActiveTab]=useState('chikasha');
  const path = window.location.pathname;

  if (path === '/onboard') return <SovereignOneOnboard/>;

  return (
    <div style={{background:C.void,minHeight:"100vh",position:"relative",overflow:"hidden"}}>
      <style>{css}</style>
      <HexBg/>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Hero setActiveTab={setActiveTab}/>
      <Mission/>
      <Products activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Flywheel setActiveTab={setActiveTab}/>
      <Technology/>
      <Partners/>
      <Invest/>
      <Founder/>
      <Contact/>
      <Footer/>
    </div>
  );
}
