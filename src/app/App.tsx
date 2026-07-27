import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import dancePhoto from "@/imports/Gemini_Generated_Image_4hzw894hzw894hzw.png";

const NAVY = "#1a2a4a";
const GOLD  = "#C8A84B";
const CREAM = "#fdf8f0";

// Ornamental border — A5 portrait viewBox (0 0 500 707)
function OrnamentalBorder({ thin = false }: { thin?: boolean }) {
  const sw = thin ? 1.0 : 1.6;
  const fs = thin ? 15 : 19;

  const CornerFlower = ({ x, y, r = 0 }: { x: number; y: number; r?: number }) => (
    <g transform={`translate(${x},${y}) rotate(${r})`}>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <ellipse key={i}
          cx={Math.cos(a*Math.PI/180)*fs*0.55}
          cy={Math.sin(a*Math.PI/180)*fs*0.55}
          rx={fs*0.17} ry={fs*0.31}
          transform={`rotate(${a},${Math.cos(a*Math.PI/180)*fs*0.55},${Math.sin(a*Math.PI/180)*fs*0.55})`}
          fill={GOLD} opacity="0.88"
        />
      ))}
      <circle cx={0} cy={0} r={fs*0.22} fill={NAVY}/>
      <circle cx={0} cy={0} r={fs*0.12} fill={GOLD}/>
    </g>
  );

  const D = ({x,y,s=6}:{x:number;y:number;s?:number}) => (
    <polygon points={`${x},${y-s} ${x+s*0.6},${y} ${x},${y+s} ${x-s*0.6},${y}`}
      fill="none" stroke={GOLD} strokeWidth={sw*0.75}/>
  );

  const hCh = Array.from({length:10},(_,i)=>62+i*40);
  const vCh = Array.from({length:14},(_,i)=>62+i*44);

  return (
    <svg viewBox="0 0 500 707" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{position:"absolute",inset:0,width:"100%",height:"100%",
              pointerEvents:"none",display:"block",overflow:"hidden"}}>
      <rect x="7"  y="7"  width="486" height="693" fill="none" stroke={NAVY} strokeWidth={sw*2.0}/>
      <rect x="14" y="14" width="472" height="679" fill="none" stroke={GOLD} strokeWidth={sw*0.65}/>
      <rect x="21" y="21" width="458" height="665" fill="none" stroke={NAVY} strokeWidth={sw*0.38}/>

      {hCh.map((x,i)=>(
        <g key={`ht${i}`}>
          <D x={x} y={34} s={thin?5:6}/>
          {i<hCh.length-1&&<><line x1={x+10} y1={34} x2={x+30} y2={34} stroke={GOLD} strokeWidth={sw*0.5}/><circle cx={x+20} cy={34} r={1.2} fill={GOLD}/></>}
        </g>
      ))}
      {hCh.map((x,i)=>(
        <g key={`hb${i}`}>
          <D x={x} y={673} s={thin?5:6}/>
          {i<hCh.length-1&&<><line x1={x+10} y1={673} x2={x+30} y2={673} stroke={GOLD} strokeWidth={sw*0.5}/><circle cx={x+20} cy={673} r={1.2} fill={GOLD}/></>}
        </g>
      ))}
      {vCh.map((y,i)=>(
        <g key={`vl${i}`}>
          <D x={34} y={y} s={thin?5:6}/>
          {i<vCh.length-1&&<><line x1={34} y1={y+10} x2={34} y2={y+34} stroke={GOLD} strokeWidth={sw*0.5}/><circle cx={34} cy={y+22} r={1.2} fill={GOLD}/></>}
        </g>
      ))}
      {vCh.map((y,i)=>(
        <g key={`vr${i}`}>
          <D x={466} y={y} s={thin?5:6}/>
          {i<vCh.length-1&&<><line x1={466} y1={y+10} x2={466} y2={y+34} stroke={GOLD} strokeWidth={sw*0.5}/><circle cx={466} cy={y+22} r={1.2} fill={GOLD}/></>}
        </g>
      ))}

      <CornerFlower x={36}  y={36}  r={0}/>
      <CornerFlower x={464} y={36}  r={90}/>
      <CornerFlower x={36}  y={671} r={270}/>
      <CornerFlower x={464} y={671} r={180}/>

      <polygon points="250,7 259,17 250,27 241,17"      fill={GOLD} opacity="0.85"/>
      <polygon points="250,680 259,690 250,700 241,690"  fill={GOLD} opacity="0.85"/>
      <polygon points="7,353 17,343 27,353 17,363"       fill={GOLD} opacity="0.85"/>
      <polygon points="473,353 483,343 493,353 483,363"  fill={GOLD} opacity="0.85"/>

      {[[54,54],[446,54],[54,653],[446,653]].map(([cx,cy],i)=>(
        <g key={i}>
          <line x1={cx-7} y1={cy} x2={cx+7} y2={cy} stroke={GOLD} strokeWidth={sw*0.85}/>
          <line x1={cx} y1={cy-7} x2={cx} y2={cy+7} stroke={GOLD} strokeWidth={sw*0.85}/>
          <circle cx={cx} cy={cy} r={2} fill={GOLD}/>
        </g>
      ))}
    </svg>
  );
}

function RainbowWatermark() {
  return (
    <svg viewBox="0 0 500 707" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{position:"absolute",inset:0,width:"100%",height:"100%",
              pointerEvents:"none",opacity:0.065,display:"block"}}>
      <defs>
        <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#e63946"/>
          <stop offset="16%"  stopColor="#f4a261"/>
          <stop offset="33%"  stopColor="#f9c74f"/>
          <stop offset="50%"  stopColor="#52b788"/>
          <stop offset="66%"  stopColor="#4361ee"/>
          <stop offset="83%"  stopColor="#7209b7"/>
          <stop offset="100%" stopColor="#e63946"/>
        </linearGradient>
      </defs>
      {[0,1,2,3,4,5].map(i=>(
        <path key={i} d={`M ${18+i*14} 690 Q 250 ${-50+i*18} ${482-i*14} 690`}
          fill="none" stroke="url(#rg)" strokeWidth={28}/>
      ))}
    </svg>
  );
}

function PhotoFrame() {
  return (
    <svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg"
      style={{position:"absolute",inset:"-10px",width:"calc(100% + 20px)",
              height:"calc(100% + 20px)",pointerEvents:"none",overflow:"visible"}}>
      <rect x="4" y="4" width="292" height="412" fill="none" stroke={GOLD} strokeWidth="2.6"/>
      <rect x="10" y="10" width="280" height="400" fill="none" stroke={GOLD} strokeWidth="0.9" opacity="0.5"/>
      {([[4,4,0],[288,4,90],[4,408,270],[288,408,180]] as [number,number,number][]).map(([cx,cy,rot],i)=>(
        <g key={i} transform={`translate(${cx},${cy}) rotate(${rot})`}>
          <line x1="0" y1="0" x2="26" y2="0" stroke={GOLD} strokeWidth="2.6"/>
          <line x1="0" y1="0" x2="0" y2="26" stroke={GOLD} strokeWidth="2.6"/>
          <circle cx="9" cy="9" r="3.5" fill={GOLD}/>
        </g>
      ))}
      {([[148,4],[148,412],[4,210],[292,210]] as [number,number][]).map(([cx,cy],i)=>(
        <polygon key={i} points={`${cx},${cy-7} ${cx+5},${cy} ${cx},${cy+7} ${cx-5},${cy}`} fill={GOLD}/>
      ))}
    </svg>
  );
}

export default function App() {
  const [spread, setSpread] = useState<"outer"|"inner">("outer");

  // Each A5 half is exactly 50% of an A4 landscape sheet
  const half: React.CSSProperties = {
    position: "absolute",
    top: 0, bottom: 0,
    width: "50%",
    overflow: "hidden",
    boxSizing: "border-box",
    margin: 0, padding: 0,
  };

  return (
    <>
      <style>{`
        @media print {
          /* One A4 landscape page per sheet */
          @page { size: 297mm 210mm; margin: 0; }
          html, body { margin: 0; padding: 0; background: ${CREAM}; }
          .no-print  { display: none !important; }
          /* The sheet fills the entire A4 page exactly */
          .a4-sheet  {
            width: 297mm !important;
            height: 210mm !important;
            padding-top: 0 !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* ── Screen chrome (hidden in print) ── */}
      <div className="no-print" style={{
        minHeight:"100vh", backgroundColor:"#1a1a1a",
        display:"flex", flexDirection:"column", alignItems:"center",
        padding:"28px 16px 44px", gap:"18px",
      }}>

        {/* Download button */}
        <button
          onClick={()=>window.print()}
          style={{
            display:"flex", alignItems:"center", gap:"8px",
            padding:"10px 28px", backgroundColor:GOLD, color:NAVY,
            border:"none", borderRadius:"4px", fontSize:"12px", fontWeight:700,
            letterSpacing:"0.13em", textTransform:"uppercase",
            fontFamily:"sans-serif", cursor:"pointer",
            boxShadow:"0 4px 18px rgba(200,168,75,0.35)",
          }}
          onMouseEnter={e=>(e.currentTarget.style.opacity="0.82")}
          onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Скачати PDF
        </button>

        {/* Toggle */}
        <div style={{display:"flex",gap:"2px",background:"#111",borderRadius:"5px",padding:"3px"}}>
          {(["outer","inner"] as const).map(s=>(
            <button key={s} onClick={()=>setSpread(s)} style={{
              padding:"7px 22px", fontSize:"11px", letterSpacing:"0.11em",
              textTransform:"uppercase", fontFamily:"sans-serif",
              border:"none", borderRadius:"3px", cursor:"pointer",
              backgroundColor: spread===s ? GOLD : "transparent",
              color: spread===s ? NAVY : "#777",
              fontWeight: spread===s ? 700 : 400,
              transition:"all 0.18s",
            }}>
              {s==="outer" ? "Аркуш 1 · Зовнішній" : "Аркуш 2 · Внутрішній"}
            </button>
          ))}
        </div>

        {/* Info */}
        <p style={{color:"#555",fontSize:"10px",letterSpacing:"0.1em",fontFamily:"sans-serif",margin:0,textAlign:"center"}}>
          {spread==="outer"
            ? "Ліво (148×210мм) = задня обкладинка  ·  Право (148×210мм) = лицьова обкладинка"
            : "Ліво (148×210мм) = фото  ·  Право (148×210мм) = текст свідоцтва"}
        </p>

        {/* ── A4 landscape preview ── */}
        {/* paddingTop 70.71% = 210/297 — enforces exact A4 landscape ratio on screen */}
        <div style={{
          width:"min(96vw, 980px)", position:"relative",
          paddingTop:"min(70.71%, 693px)", /* A4 ratio cap */
          boxShadow:"0 12px 48px rgba(0,0,0,0.7)",
        }}>
          <div className="a4-sheet" style={{
            position:"absolute", inset:0,
            backgroundColor:CREAM,
            fontFamily:"'Lora', Georgia, serif",
            overflow:"hidden",
          }}>

            {/* Fold crease */}
            <div style={{
              position:"absolute", top:0, bottom:0, left:"50%",
              width:"1px",
              background:"linear-gradient(to bottom,transparent,rgba(0,0,0,0.15) 20%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.15) 80%,transparent)",
              zIndex:20, transform:"translateX(-50%)",
            }}/>

            {/* ══ OUTER ══ */}
            {spread==="outer" && <>
              {/* LEFT — blank back cover */}
              <div style={{...half, left:0, backgroundColor:CREAM}}/>

              {/* RIGHT — front cover */}
              <div style={{...half, left:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <OrnamentalBorder/>
                <div style={{
                  position:"relative", zIndex:2,
                  display:"flex", flexDirection:"column", alignItems:"center",
                  gap:"clamp(4px,0.9vw,13px)",
                  padding:"0 10%", width:"100%", textAlign:"center",
                }}>
                  <svg width="clamp(44px,6vw,86px)" viewBox="0 0 120 32" style={{opacity:0.85}}>
                    <line x1="0" y1="16" x2="42" y2="16" stroke={GOLD} strokeWidth="1.5"/>
                    <polygon points="48,6 54,16 48,26 42,16" fill="none" stroke={GOLD} strokeWidth="1.2"/>
                    <polygon points="60,9 66,16 60,23 54,16" fill={GOLD}/>
                    <polygon points="72,6 78,16 72,26 66,16" fill="none" stroke={GOLD} strokeWidth="1.2"/>
                    <line x1="78" y1="16" x2="120" y2="16" stroke={GOLD} strokeWidth="1.5"/>
                  </svg>
                  <p style={{fontSize:"clamp(5px,0.78vw,9px)",color:NAVY,letterSpacing:"0.15em",textTransform:"uppercase",margin:0,fontFamily:"'IM Fell English',Georgia,serif",opacity:0.68,lineHeight:1.55}}>
                    Національна Хореографічна спілка України
                  </p>
                  <h1 style={{fontFamily:"'Great Vibes',cursive",fontSize:"clamp(22px,4.8vw,66px)",color:NAVY,margin:0,lineHeight:1.1,textShadow:`1px 1px 0 ${GOLD}40`}}>
                    Свідоцтво
                  </h1>
                  <svg width="clamp(40px,5.5vw,80px)" viewBox="0 0 110 12" style={{opacity:0.7}}>
                    <line x1="0" y1="6" x2="44" y2="6" stroke={GOLD} strokeWidth="1"/>
                    <circle cx="55" cy="6" r="4" fill={GOLD}/>
                    <line x1="66" y1="6" x2="110" y2="6" stroke={GOLD} strokeWidth="1"/>
                  </svg>
                  <p style={{fontSize:"clamp(4px,0.6vw,7px)",color:NAVY,letterSpacing:"0.2em",textTransform:"uppercase",margin:0,opacity:0.5,fontFamily:"sans-serif"}}>
                    про проходження повного курсу навчання
                  </p>
                  <svg width="clamp(36px,5vw,72px)" viewBox="0 0 100 22" style={{opacity:0.75}}>
                    {[0,1,2,3,4].map(i=><ellipse key={i} cx={10+i*20} cy={11} rx={5.5} ry={2.8} fill={GOLD} opacity={0.72-i*0.04}/>)}
                  </svg>
                </div>
              </div>
            </>}

            {/* ══ INNER ══ */}
            {spread==="inner" && <>
              {/* LEFT — photo */}
              <div style={{...half, left:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <OrnamentalBorder thin/>
                <div style={{position:"relative",zIndex:2,width:"54%",paddingTop:"76%",backgroundColor:CREAM,flexShrink:0}}>
                  <ImageWithFallback
                    src={dancePhoto}
                    alt="Пара у вишиванках танцює під веселкою — ансамбль «Веселка»"
                    style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",display:"block",filter:"contrast(1.05) saturate(1.1) brightness(1.02)"}}
                  />
                  <PhotoFrame/>
                </div>
              </div>

              {/* RIGHT — certificate text */}
              <div style={{...half, left:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <RainbowWatermark/>
                <OrnamentalBorder thin/>
                <div style={{position:"relative",zIndex:2,width:"76%",height:"80%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",textAlign:"center"}}>

                  {/* Header */}
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"clamp(3px,0.48vw,6px)"}}>
                    <svg width="clamp(32px,4vw,56px)" viewBox="0 0 70 10">
                      <line x1="0" y1="5" x2="27" y2="5" stroke={GOLD} strokeWidth="1"/>
                      <circle cx="35" cy="5" r="3" fill={GOLD}/>
                      <line x1="43" y1="5" x2="70" y2="5" stroke={GOLD} strokeWidth="1"/>
                    </svg>
                    <p style={{fontSize:"clamp(4.5px,0.66vw,7.5px)",color:NAVY,lineHeight:1.65,margin:0,fontFamily:"'IM Fell English',Georgia,serif",opacity:0.8,letterSpacing:"0.04em"}}>
                      Закарпатський обласний осередок<br/>
                      Національної Хореографічної спілки України<br/>
                      ГО «Школа хореографічного мистецтва ім. М. Суслікова»
                    </p>
                    <svg width="clamp(40px,6vw,86px)" viewBox="0 0 110 16">
                      <line x1="0" y1="8" x2="36" y2="8" stroke={GOLD} strokeWidth="1"/>
                      <polygon points="44,4 50,8 44,12 38,8" fill={GOLD} opacity="0.65"/>
                      <polygon points="58,4 64,8 58,12 52,8" fill={GOLD}/>
                      <polygon points="72,4 78,8 72,12 66,8" fill={GOLD} opacity="0.65"/>
                      <line x1="74" y1="8" x2="110" y2="8" stroke={GOLD} strokeWidth="1"/>
                    </svg>
                  </div>

                  {/* Body */}
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"clamp(3px,0.54vw,7px)"}}>
                    <p style={{fontSize:"clamp(4.5px,0.68vw,8px)",color:NAVY,letterSpacing:"0.14em",textTransform:"uppercase",margin:0,opacity:0.57,fontFamily:"sans-serif"}}>видано</p>
                    <h2 style={{fontFamily:"'Great Vibes',cursive",fontSize:"clamp(14px,2.3vw,32px)",color:NAVY,margin:0,lineHeight:1.15}}>
                      Іванову Івану Івановичу
                    </h2>
                    <svg width="clamp(32px,4.5vw,62px)" viewBox="0 0 80 10">
                      <line x1="0" y1="5" x2="32" y2="5" stroke={GOLD} strokeWidth="0.8"/>
                      <circle cx="40" cy="5" r="2.5" fill={GOLD}/>
                      <line x1="48" y1="5" x2="80" y2="5" stroke={GOLD} strokeWidth="0.8"/>
                    </svg>
                    <p style={{fontSize:"clamp(4.5px,0.67vw,7.5px)",color:NAVY,lineHeight:1.75,margin:0,fontFamily:"'Lora',Georgia,serif",fontStyle:"italic",opacity:0.82}}>
                      про проходження повного курсу навчання<br/>
                      у Зразковому художньому колективі України<br/>
                      ансамблі танцю
                    </p>
                    <p style={{fontFamily:"'Great Vibes',cursive",fontSize:"clamp(12px,1.85vw,25px)",color:GOLD,margin:0,lineHeight:1.2}}>
                      «Веселка»
                    </p>
                  </div>

                  {/* Footer */}
                  <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"clamp(3px,0.52vw,7px)"}}>
                    <svg width="100%" viewBox="0 0 300 12">
                      <line x1="0" y1="6" x2="118" y2="6" stroke={GOLD} strokeWidth="0.7" opacity="0.4"/>
                      <polygon points="132,3 138,6 132,9 126,6" fill={GOLD} opacity="0.5"/>
                      <polygon points="150,3 156,6 150,9 144,6" fill={GOLD}/>
                      <polygon points="168,3 174,6 168,9 162,6" fill={GOLD} opacity="0.5"/>
                      <line x1="182" y1="6" x2="300" y2="6" stroke={GOLD} strokeWidth="0.7" opacity="0.4"/>
                    </svg>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"clamp(4px,0.59vw,6.5px)",color:NAVY,fontFamily:"'Lora',Georgia,serif",opacity:0.75}}>
                      <span>м. Ужгород</span>
                      <span>Дата <span style={{display:"inline-block",width:"clamp(18px,2.6vw,38px)",borderBottom:`1px solid ${NAVY}60`}}/></span>
                      <span>Реєстр. № <span style={{display:"inline-block",width:"clamp(14px,2vw,30px)",borderBottom:`1px solid ${NAVY}60`}}/></span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"clamp(2px,0.28vw,3px)"}}>
                      <span style={{display:"block",width:"70%",borderBottom:`1px solid ${NAVY}58`,marginBottom:"2px"}}/>
                      <span style={{fontSize:"clamp(3.5px,0.54vw,6px)",color:NAVY,opacity:0.68,fontFamily:"'Lora',Georgia,serif",lineHeight:1.5}}>
                        Голова ГО / Керівник ансамблю
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>
    </>
  );
}
