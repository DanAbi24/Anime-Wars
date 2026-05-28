/* ============================================
   ANIME BATTLE ARENA — app.js
   React Application | Multi-team | Settings
   ============================================ */

const { useState, useEffect, useRef, useCallback } = React;

const MAX_TEAMS = 4;
const TEAM_COLORS = ['#00d4ff','#ff2244','#ffd700','#00ff88'];
const TEAM_NAMES  = ['TEAM 1','TEAM 2','TEAM 3','TEAM 4'];
const TEAM_SEL_CLS = ['sel-0','sel-1','sel-2','sel-3'];

// ── HELPERS ──────────────────────────────────
function TierBadge({ tier }) {
  const cls = tier==='S+'?'tier-Sp':tier==='A+'?'tier-Ap':`tier-${tier}`;
  return React.createElement('span',{className:`tier-badge ${cls}`},tier);
}

function PowerBar({ value, color }) {
  const [w,setW] = useState(0);
  useEffect(()=>{const t=setTimeout(()=>setW(value),100);return()=>clearTimeout(t)},[value]);
  return React.createElement('div',{className:'pbar-wrap'},
    React.createElement('div',{className:'pbar',style:{width:`${w}%`,background:`linear-gradient(to right,#ff2244,${color||'#ffd700'})`}})
  );
}

function Toast({msg,type='red',onDone}){
  useEffect(()=>{const t=setTimeout(onDone,2600);return()=>clearTimeout(t)},[]);
  return React.createElement('div',{className:`toast ${type}`},msg);
}

// ── CHAR MODAL ────────────────────────────────
function CharModal({char,onClose,onAdd,teams,maxPerTeam,numTeams}){
  if(!char) return null;
  const inTeam = teams.findIndex(t=>t.some(c=>c.id===char.id));

  return React.createElement('div',{className:'char-modal-overlay',onClick:onClose},
    React.createElement('div',{className:'char-modal',onClick:e=>e.stopPropagation()},
      React.createElement('button',{className:'char-modal-close',onClick:onClose},'✕'),

      // Image header
      React.createElement('div',{className:'char-modal-img'},
        React.createElement('img',{src:`images/${char.id}.jpg`,alt:char.name,
          onError:e=>{e.target.style.display='none'}}),
        React.createElement('div',{className:'char-modal-img-overlay'}),
        React.createElement('span',{className:'char-modal-emoji'},char.emoji)
      ),

      // Info header
      React.createElement('div',{className:'char-modal-head'},
        React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'10px',flexWrap:'wrap',marginBottom:'4px'}},
          React.createElement('h2',{className:'char-modal-name'},char.name),
          React.createElement(TierBadge,{tier:char.tier})
        ),
        React.createElement('div',{className:'char-modal-alias'},`"${char.alias}" · ${char.series}`)
      ),

      // Body
      React.createElement('div',{className:'char-modal-body'},
        React.createElement('p',{className:'char-lore'},char.lore),

        // Stats
        React.createElement('div',{className:'mb-3'},
          React.createElement('div',{className:'sec-label mb-2'},'Power Stats'),
          Object.entries(char.stats).filter(([,v])=>v>0).map(([k,v])=>
            React.createElement('div',{key:k,className:'stat-row'},
              React.createElement('span',{className:'stat-lbl'},k.replace(/([A-Z])/g,' $1').trim()),
              React.createElement('div',{style:{flex:1}},
                React.createElement(PowerBar,{value:v,color:char.color})
              ),
              React.createElement('span',{className:'stat-val'},v)
            )
          )
        ),

        // Power scale
        React.createElement('div',{className:'mb-3',style:{display:'flex',alignItems:'center',gap:'12px'}},
          React.createElement('span',{className:'sec-label',style:{margin:0}},'Power Scale:'),
          React.createElement('span',{style:{fontFamily:'var(--font-hd)',fontSize:'22px',color:'var(--gold)'}},
            char.powerScale.toLocaleString()
          )
        ),

        // Abilities
        React.createElement('div',{className:'mb-3'},
          React.createElement('div',{className:'sec-label mb-2'},'Abilities'),
          char.abilities.map(a=>React.createElement('span',{key:a,className:'ability-tag'},a))
        ),

        // Weakness
        React.createElement('div',{className:'mb-4',className:'weakness-txt'},
          React.createElement('strong',null,'Weakness: '),
          char.weakness
        ),

        // Add buttons
        React.createElement('div',{style:{display:'flex',gap:'8px',flexWrap:'wrap'}},
          inTeam>=0
            ? React.createElement('span',{style:{fontFamily:'var(--font-hd)',fontSize:'18px',letterSpacing:'2px',color:TEAM_COLORS[inTeam]}},
                `✓ In ${TEAM_NAMES[inTeam]}`
              )
            : Array.from({length:numTeams},(_, ti)=>{
                const full = teams[ti].length >= maxPerTeam;
                return React.createElement('button',{
                  key:ti,
                  className:'btn-sm',
                  style:{borderColor:TEAM_COLORS[ti],color:TEAM_COLORS[ti],opacity:full?.4:1,cursor:full?'not-allowed':'pointer'},
                  disabled:full,
                  onClick:()=>{onAdd(char,ti);onClose();}
                }, full?`${TEAM_NAMES[ti]} Full`:`+ ${TEAM_NAMES[ti]}`)
              })
        )
      )
    )
  );
}

// ── SETTINGS PANEL ───────────────────────────
function SettingsPanel({open,onClose,maxPerTeam,setMaxPerTeam,numTeams,setNumTeams}){
  return React.createElement(React.Fragment,null,
    React.createElement('div',{className:`settings-overlay ${open?'open':''}`,onClick:onClose}),
    React.createElement('div',{className:`settings-panel ${open?'open':''}`},
      React.createElement('button',{className:'settings-close',onClick:onClose},'✕'),
      React.createElement('div',{className:'settings-title'},'⚙ Settings'),

      // Fighters per team
      React.createElement('div',{className:'setting-group'},
        React.createElement('span',{className:'setting-label'},'Fighters Per Team'),
        React.createElement('div',{className:'setting-options'},
          [1,2,3,4,5].map(n=>
            React.createElement('button',{
              key:n,className:`setting-opt ${maxPerTeam===n?'active':''}`,
              onClick:()=>setMaxPerTeam(n)
            },n)
          )
        ),
        React.createElement('p',{className:'setting-note'},'Max characters each team can have in a battle.')
      ),

      // Number of teams
      React.createElement('div',{className:'setting-group'},
        React.createElement('span',{className:'setting-label'},'Number of Teams'),
        React.createElement('div',{className:'setting-options'},
          [2,3,4].map(n=>
            React.createElement('button',{
              key:n,className:`setting-opt ${numTeams===n?'active':''}`,
              onClick:()=>setNumTeams(n)
            },n)
          )
        ),
        React.createElement('p',{className:'setting-note'},'Choose 2, 3 or 4 teams to battle. Combined power determines the winner.'),
        React.createElement('div',{className:'team-color-preview'},
          Array.from({length:numTeams},(_,i)=>
            React.createElement('div',{key:i,style:{display:'flex',alignItems:'center',gap:'6px',marginBottom:'4px',width:'100%'}},
              React.createElement('div',{className:'tcp',style:{background:TEAM_COLORS[i]}}),
              React.createElement('span',{style:{fontFamily:'var(--font-hd)',fontSize:'16px',letterSpacing:'2px',color:TEAM_COLORS[i]}},
                TEAM_NAMES[i]
              )
            )
          )
        )
      ),

      // Image spec info

    )
  );
}

// ── BATTLE ANIMATION ─────────────────────────
function BattleAnimation({teams,numTeams}){
  const allFighters = teams.slice(0,numTeams);
  const rows = [];
  allFighters.forEach((team,ti)=>{
    if(team.length===0) return;
    rows.push(
      React.createElement('div',{key:`label-${ti}`,className:'team-divider',style:{color:TEAM_COLORS[ti]}},
        TEAM_NAMES[ti]
      )
    );
    const cards = team.map(char=>
      React.createElement('div',{key:char.id,className:'battle-card',style:{borderColor:TEAM_COLORS[ti]}},
        React.createElement('div',{className:'bc-img'},
          React.createElement('img',{src:`images/${char.id}.jpg`,alt:char.name,onError:e=>e.target.style.display='none'}),
          React.createElement('span',{className:'bc-emoji'},char.emoji),
          React.createElement('div',{className:'bc-overlay'})
        ),
        React.createElement('div',{className:'bc-name'},char.name),
        React.createElement('div',{className:'bc-team',style:{color:TEAM_COLORS[ti]}},char.series)
      )
    );
    rows.push(React.createElement('div',{key:`row-${ti}`,className:'battle-cards-row'},cards));
    if(ti < numTeams-1){
      rows.push(React.createElement('div',{key:`vs-${ti}`,className:'vs-divider'},'VS'));
    }
  });

  return React.createElement('div',{className:'battle-overlay'},
    React.createElement('div',{style:{width:'100%',maxWidth:'960px',textAlign:'center'}},
      rows,
      React.createElement('div',{className:'battle-loading-txt'},
        '⚡ BATTLE IN PROGRESS',
        React.createElement('span',{className:'battle-loading-dots'},'...')
      )
    )
  );
}

// ── BATTLE RESULT ─────────────────────────────
function BattleResult({result,teams,numTeams,onReset}){
  const [log,setLog] = useState([]);
  const [showFull,setShowFull] = useState(false);
  const [pmW,setPmW] = useState(Array(numTeams).fill(0));
  const { winnerIdx, winningTeam, scores, battleType, margin, mvp, powerPcts } = result;

  useEffect(()=>{
    const lines=[];
    lines.push({t:'⚔ BATTLE COMMENCING...',c:'hl'});
    teams.slice(0,numTeams).forEach((team,ti)=>{
      team.forEach(ch=>lines.push({t:`▶ ${ch.name} enters for ${TEAM_NAMES[ti]}`,c:''}));
    });
    lines.push({t:'━━━━━━━━━━━━━━━━━━━━',c:''});

    const moves=['unleashes','strikes with','activates','channels','launches'];
    const all = teams.slice(0,numTeams).flatMap(t=>t).sort(()=>Math.random()-.5);
    all.forEach(ch=>{
      const ab = ch.abilities[Math.floor(Math.random()*ch.abilities.length)];
      const mv = moves[Math.floor(Math.random()*moves.length)];
      lines.push({t:`💥 ${ch.name} ${mv} ${ab}!`,c:'dmg'});
    });

    lines.push({t:'━━━━━━━━━━━━━━━━━━━━',c:''});
    teams.slice(0,numTeams).forEach((team,ti)=>{
      lines.push({t:`📊 ${TEAM_NAMES[ti]} Power: ${scores[ti].toLocaleString()}`,c:''});
    });
    lines.push({t:`🏆 WINNER: ${TEAM_NAMES[winnerIdx]} — ${battleType}!`,c:'win'});

    lines.forEach((l,i)=>setTimeout(()=>setLog(prev=>[...prev,l]),i*100));
    setTimeout(()=>{
      setPmW(powerPcts);
      setShowFull(true);
    }, lines.length*100+300);
  },[]);

  const winCls = `win-t${winnerIdx}`;

  return React.createElement('div',{className:'animate-in'},
    // Battle log
    React.createElement('div',{className:'battle-log mb-4'},
      log.map((l,i)=>React.createElement('span',{key:i,className:`blog-line ${l.c}`},l.t))
    ),

    showFull && React.createElement('div',{className:'result-panel animate-in'},

      // Winner title
      React.createElement('div',{className:'text-center mb-4'},
        React.createElement('div',{className:'sec-label mb-2'},'Battle Result'),
        React.createElement('div',{className:`result-winner-title ${winCls}`},
          `${TEAM_NAMES[winnerIdx]} WINS`
        ),
        React.createElement('div',{className:'mt-2'},
          React.createElement('span',{className:'battle-type-badge'},battleType)
        )
      ),

      // Power bars for each team
      React.createElement('div',{className:'power-meter-wrap'},
        React.createElement('div',{className:'power-meter-labels'},
          teams.slice(0,numTeams).map((_,ti)=>
            React.createElement('span',{key:ti,className:'pm-label',style:{color:TEAM_COLORS[ti]}},
              `${TEAM_NAMES[ti]} ${pmW[ti]||0}%`
            )
          )
        ),
        React.createElement('div',{className:'power-meter'},
          teams.slice(0,numTeams).map((_,ti)=>
            React.createElement('div',{key:ti,style:{
              width:`${pmW[ti]||0}%`,height:'100%',
              background:TEAM_COLORS[ti],
              transition:'width 1.5s var(--ease)',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:'11px',fontFamily:'var(--font-hd)',color:ti<2?'#000':'#000',
              overflow:'hidden'
            }}, pmW[ti]>8?`${pmW[ti]}%`:'')
          )
        )
      ),

      // Scores row
      React.createElement('div',{className:'row g-3 mb-4'},
        teams.slice(0,numTeams).map((_,ti)=>
          React.createElement('div',{key:ti,className:`col-${Math.floor(12/numTeams)} text-center`},
            React.createElement('div',{style:{fontFamily:'var(--font-ui)',fontSize:'10px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:TEAM_COLORS[ti],marginBottom:'4px'}},
              `${TEAM_NAMES[ti]} Score`
            ),
            React.createElement('div',{className:'score-display',style:{color:TEAM_COLORS[ti]}},
              scores[ti]?.toLocaleString()
            )
          )
        )
      ),

      // Winning team character cards with animations
      React.createElement('div',{className:'mb-4'},
        React.createElement('div',{className:'sec-label text-center mb-3'},`${TEAM_NAMES[winnerIdx]} — VICTORIOUS`),
        React.createElement('div',{className:'row g-2 justify-content-center'},
          winningTeam.map((char,i)=>
            React.createElement('div',{key:char.id,className:'col-6 col-sm-4 col-md-3'},
              React.createElement('div',{className:'winner-card',style:{borderColor:TEAM_COLORS[winnerIdx]}},
                char.id===mvp.id && React.createElement('div',{className:'mvp-crown'},'👑'),
                React.createElement('div',{className:'winner-card-img'},
                  React.createElement('img',{src:`images/${char.id}.jpg`,alt:char.name,onError:e=>e.target.style.display='none'}),
                  React.createElement('span',{className:'winner-card-emoji'},char.emoji),
                  React.createElement('div',{className:'winner-card-overlay'})
                ),
                React.createElement('div',{className:'winner-card-body'},
                  React.createElement('div',{className:'winner-card-name'},char.name),
                  React.createElement('div',{className:'winner-card-series'},char.series),
                  React.createElement('div',{className:'winner-quote'},
                    `"${char.winQuotes[Math.floor(Math.random()*char.winQuotes.length)]}"`
                  )
                )
              )
            )
          )
        )
      ),

      // Margin note + reset
      React.createElement('div',{className:'text-center mb-4',style:{color:'var(--gray)',fontSize:'13px',letterSpacing:'1px'}},
        `Winning margin: ${margin}%`
      ),
      React.createElement('div',{className:'text-center'},
        React.createElement('button',{className:'btn-battle',onClick:onReset},'⚔ NEW BATTLE')
      )
    )
  );
}

// ── POWER SCALE PAGE ─────────────────────────
function PowerScalePage(){
  const sorted=[...CHARACTERS].sort((a,b)=>b.powerScale-a.powerScale);
  return React.createElement('div',{className:'animate-in container-fluid py-4 px-3 px-md-4'},
    React.createElement('div',{className:'text-center mb-4'},
      React.createElement('div',{className:'sec-label'},'Official Rankings'),
      React.createElement('h2',{className:'sec-title'},'Power ',React.createElement('em',null,'Scale')),
      React.createElement('p',{className:'sec-sub'},'All 50 characters ranked by power score. The foundation of every battle.')
    ),
    React.createElement('div',{style:{overflowX:'auto'}},
      React.createElement('table',{className:'scale-table'},
        React.createElement('thead',null,
          React.createElement('tr',null,
            React.createElement('th',null,'#'),
            React.createElement('th',null,''),
            React.createElement('th',null,'Character'),
            React.createElement('th',null,'Series'),
            React.createElement('th',null,'Tier'),
            React.createElement('th',null,'Power Score'),
            React.createElement('th',null,'Signature Ability')
          )
        ),
        React.createElement('tbody',null,
          sorted.map((c,i)=>
            React.createElement('tr',{key:c.id},
              React.createElement('td',null,
                React.createElement('span',{className:`scale-rank ${i===0?'r1':i===1?'r2':i===2?'r3':''}`},
                  String(i+1).padStart(2,'0')
                )
              ),
              React.createElement('td',null,
                React.createElement('div',{className:'scale-char-img'},
                  React.createElement('img',{src:`images/${c.id}.jpg`,alt:c.name,onError:e=>e.target.style.display='none'}),
                  !true && React.createElement('span',{style:{fontSize:'22px',lineHeight:'40px',textAlign:'center',display:'block'}},c.emoji)
                )
              ),
              React.createElement('td',null,
                React.createElement('div',{className:'scale-name'},c.name),
                React.createElement('div',{className:'scale-series'},`"${c.alias}"`)
              ),
              React.createElement('td',null,React.createElement('span',{className:'scale-series'},c.series)),
              React.createElement('td',null,React.createElement(TierBadge,{tier:c.tier})),
              React.createElement('td',null,
                React.createElement('div',{style:{marginBottom:'4px'}},
                  React.createElement('span',{style:{fontFamily:'var(--font-hd)',fontSize:'18px',color:'var(--gold)'}},
                    c.powerScale.toLocaleString()
                  )
                ),
                React.createElement(PowerBar,{value:Math.round(c.powerScale/100000),color:c.color})
              ),
              React.createElement('td',null,
                React.createElement('span',{className:'ability-tag'},c.abilities[0])
              )
            )
          )
        )
      )
    )
  );
}

// ── CONFIRM PAGE ─────────────────────────────
function ConfirmPage({teams,numTeams,maxPerTeam,onBack,onBattle,onRemove,onView}){
  const canBattle = teams.slice(0,numTeams).some(t=>t.length>0);

  return React.createElement('div',{className:'animate-in container-fluid py-4 px-3 px-md-4'},

    React.createElement('div',{className:'row g-4 mb-4'},
      teams.slice(0,numTeams).map((team,ti)=>
        React.createElement('div',{key:ti,className:`col-12 col-md-${Math.floor(12/numTeams)}`},
          // Team header
          React.createElement('div',{style:{borderBottom:`2px solid ${TEAM_COLORS[ti]}`,marginBottom:'12px',paddingBottom:'8px',display:'flex',alignItems:'center',justifyContent:'space-between'}},
            React.createElement('span',{style:{fontFamily:'var(--font-hd)',fontSize:'22px',letterSpacing:'3px',color:TEAM_COLORS[ti]}},
              TEAM_NAMES[ti]
            ),
            React.createElement('span',{style:{fontFamily:'var(--font-ui)',fontSize:'12px',fontWeight:700,letterSpacing:'2px',color:'var(--gray)'}},
              `${team.length}/${maxPerTeam}`
            )
          ),

          // Slots
          Array.from({length:maxPerTeam},(_,i)=>{
            const char=team[i];
            return React.createElement('div',{key:i,className:`team-slot mb-2 ${char?'filled':''}`,style:char?{borderColor:TEAM_COLORS[ti]}:{}},
              char
                ? React.createElement(React.Fragment,null,
                    React.createElement('button',{className:'team-slot-remove',onClick:()=>onRemove(char.id,ti)},'×'),
                    React.createElement('div',{className:'team-slot-img',onClick:()=>onView(char),style:{cursor:'pointer'}},
                      React.createElement('img',{src:`images/${char.id}.jpg`,alt:char.name,onError:e=>e.target.innerHTML=`<span style="font-size:24px;line-height:44px;text-align:center;display:block">${char.emoji}</span>`})
                    ),
                    React.createElement('div',{className:'team-slot-info'},
                      React.createElement('div',{className:'team-slot-name'},char.name),
                      React.createElement('div',{className:'team-slot-series'},char.series)
                    )
                  )
                : React.createElement('span',{className:'slot-empty-txt'},`Slot ${i+1} Empty`)
            );
          }),

          // Team power total
          team.length>0 && React.createElement('div',{style:{marginTop:'10px',fontFamily:'var(--font-ui)',fontSize:'11px',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'var(--gray)'}},
            'Combined Power: ',
            React.createElement('span',{style:{color:TEAM_COLORS[ti],fontFamily:'var(--font-hd)',fontSize:'16px'}},
              team.reduce((s,c)=>s+c.powerScale,0).toLocaleString()
            )
          )
        )
      )
    ),

    React.createElement('div',{className:'text-center d-flex gap-3 justify-content-center flex-wrap'},
      React.createElement('button',{className:'btn-sm',onClick:onBack},'← Edit Teams'),
      React.createElement('button',{className:'btn-battle',onClick:onBattle,disabled:!canBattle},
        canBattle?'⚔ BEGIN BATTLE!':'Select At Least 1 Fighter'
      )
    )
  );
}

// ── MAIN APP ──────────────────────────────────
function App(){
  const [page,setPage]           = useState('battle');
  const [phase,setPhase]         = useState('select');
  const [numTeams,setNumTeams]   = useState(2);
  const [maxPerTeam,setMax]      = useState(3);
  const [teams,setTeams]         = useState([[],[],[],[]]);
  const [seriesFilter,setSF]     = useState('All');
  const [viewChar,setViewChar]   = useState(null);
  const [result,setResult]       = useState(null);
  const [battling,setBattling]   = useState(false);
  const [toast,setToast]         = useState(null);
  const [settings,setSettings]  = useState(false);
  const resultRef = useRef(null);

  function showToast(msg,type='red'){setToast({msg,type})}

  function addToTeam(char,ti){
    if(teams[ti].length>=maxPerTeam){showToast(`${TEAM_NAMES[ti]} is full!`);return}
    if(teams.some(t=>t.some(c=>c.id===char.id))){showToast('Already on a team!');return}
    setTeams(prev=>{
      const next=[...prev.map(t=>[...t])];
      next[ti]=[...next[ti],char];
      return next;
    });
    showToast(`${char.emoji} ${char.name} → ${TEAM_NAMES[ti]}`,ti===0?'cyan':'red');
  }

  function removeFromTeam(id,ti){
    setTeams(prev=>{
      const next=[...prev.map(t=>[...t])];
      next[ti]=next[ti].filter(c=>c.id!==id);
      return next;
    });
  }

  // Toggle: clicking the team button again removes the character
  function toggleTeam(char,ti){
    const inThisTeam = teams[ti].some(c=>c.id===char.id);
    if(inThisTeam){
      removeFromTeam(char.id,ti);
      showToast(`${char.emoji} ${char.name} removed from ${TEAM_NAMES[ti]}`);
    } else {
      addToTeam(char,ti);
    }
  }

  function randomize(){
    const shuffled=[...CHARACTERS].sort(()=>Math.random()-.5);
    const newTeams=[[],[],[],[]];
    let idx=0;
    for(let ti=0;ti<numTeams;ti++){
      for(let fi=0;fi<maxPerTeam;fi++){
        if(idx<shuffled.length) newTeams[ti].push(shuffled[idx++]);
      }
    }
    setTeams(newTeams);
    showToast('⚡ Teams randomized!','gold');
  }

  function clearTeams(){
    setTeams([[],[],[],[]]);
    showToast('Teams cleared');
  }

  function startBattle(){
    const activeTeams=teams.slice(0,numTeams);
    if(!activeTeams.some(t=>t.length>0)){showToast('Add fighters first!');return}
    setBattling(true);
    setPhase('result');
    setTimeout(()=>{
      const res=calculateBattleResult(activeTeams);
      setResult(res);
      setBattling(false);
      setTimeout(()=>resultRef.current?.scrollIntoView({behavior:'smooth',block:'start'}),200);
    },2800);
  }

  function resetBattle(){
    setPhase('select');
    setTeams([[],[],[],[]]);
    setResult(null);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // Filtered + alphabetical by series (already done in characters.js)
  const filtered = CHARACTERS.filter(c=>
    seriesFilter==='All' || c.series===seriesFilter
  );

  // Build series groups for the series filter
  const allSeries = SERIES_LIST;

  const canBattle = teams.slice(0,numTeams).some(t=>t.length>0);

  return React.createElement('div',null,

    // ── HEADER
    React.createElement('header',{className:'site-header'},
      React.createElement('div',{className:'header-inner'},
        React.createElement('div',{className:'site-logo'},
          'ANIME ',
          React.createElement('span',null,'BATTLE'),
          ' ARENA',
          React.createElement('small',null,'アニメ バトル アリーナ')
        ),
        React.createElement('div',{className:'header-nav'},
          React.createElement('button',{
            className:`btn-nav ${page==='battle'?'active':''}`,
            onClick:()=>setPage('battle')
          },'⚔ Battle'),
          React.createElement('button',{
            className:`btn-nav ${page==='scale'?'gold active':'gold'}`,
            onClick:()=>setPage('scale')
          },'📊 Scale'),
          React.createElement('button',{
            className:'btn-nav settings-btn',
            onClick:()=>setSettings(true),
            title:'Settings'
          },'⚙')
        )
      )
    ),

    // ── SETTINGS
    React.createElement(SettingsPanel,{
      open:settings,onClose:()=>setSettings(false),
      maxPerTeam,setMaxPerTeam:n=>{setMax(n);clearTeams()},
      numTeams,setNumTeams:n=>{setNumTeams(n);clearTeams()}
    }),

    // ── POWER SCALE PAGE
    page==='scale' && React.createElement(PowerScalePage),

    // ── BATTLE PAGE
    page==='battle' && React.createElement('div',null,

      // Hero banner
      React.createElement('div',{className:'hero-banner'},
        React.createElement('div',{className:'hero-banner-sword'},'⚔'),
        React.createElement('div',{className:'container-fluid px-3'},
          React.createElement('div',{className:'hero-title'},
            'BUILD YOUR ',React.createElement('span',null,'TEAM')
          ),
          React.createElement('p',{className:'hero-sub'},
            `Select up to ${maxPerTeam} fighter${maxPerTeam>1?'s':''} per team · ${numTeams} teams · Power scale decides the winner`
          ),
          React.createElement('div',{className:'hero-stats'},
            React.createElement('div',{className:'hstat'},React.createElement('span',{className:'hstat-n'},CHARACTERS.length),React.createElement('span',{className:'hstat-l'},'Characters')),
            React.createElement('div',{className:'hstat'},React.createElement('span',{className:'hstat-n'},maxPerTeam),React.createElement('span',{className:'hstat-l'},'Per Team')),
            React.createElement('div',{className:'hstat'},React.createElement('span',{className:'hstat-n'},numTeams),React.createElement('span',{className:'hstat-l'},'Teams')),
            React.createElement('div',{className:'hstat'},React.createElement('span',{className:'hstat-n'},'10'),React.createElement('span',{className:'hstat-l'},'Series')),
            React.createElement('div',{className:'hstat'},React.createElement('span',{className:'hstat-n'},'±8%'),React.createElement('span',{className:'hstat-l'},'Variance'))
          )
        )
      ),

      // Phase tabs
      React.createElement('div',{className:'phase-nav'},
        React.createElement('button',{
          className:`phase-tab ${phase==='select'?'active':phase!=='select'?'done':''}`,
          onClick:()=>phase!=='select'&&setPhase('select')
        },React.createElement('span',{className:'tnum'},'1'),'Select'),
        React.createElement('button',{
          className:`phase-tab ${phase==='confirm'?'active':phase==='result'?'done':''}`,
          onClick:()=>canBattle&&setPhase('confirm')
        },React.createElement('span',{className:'tnum'},'2'),'Confirm'),
        React.createElement('button',{
          className:`phase-tab ${phase==='result'?'active':''}`,
        },React.createElement('span',{className:'tnum'},'3'),'Result')
      ),

      // Team status bar (always visible in select phase)
      phase==='select' && React.createElement('div',{className:'team-status-bar'},
        teams.slice(0,numTeams).map((team,ti)=>
          React.createElement('div',{key:ti,className:'team-status-item'},
            React.createElement('div',{className:'tsi-bar',style:{width:`${(team.length/maxPerTeam)*100}%`,background:TEAM_COLORS[ti]}}),
            React.createElement('div',{className:'tsi-label',style:{color:TEAM_COLORS[ti]}},TEAM_NAMES[ti]),
            React.createElement('div',{className:'tsi-count'},`${team.length}/${maxPerTeam}`),
            React.createElement('div',{className:'tsi-emojis'},team.map(c=>c.emoji).join(' '))
          )
        )
      ),

      // Series filter bar (replaces search)
      phase==='select' && React.createElement('div',{className:'series-filter-bar'},
        allSeries.map(s=>
          React.createElement('button',{
            key:s,className:`sfbtn ${seriesFilter===s?'active':''}`,
            onClick:()=>setSF(s)
          }, s==='All'?'All':s)
        )
      ),

      // ── SELECT PHASE
      phase==='select' && React.createElement('div',{className:'animate-in'},

        // Top controls
        React.createElement('div',{style:{display:'flex',gap:'8px',padding:'12px 20px',borderBottom:'1px solid var(--border)',flexWrap:'wrap',alignItems:'center',justifyContent:'flex-end'}},
          React.createElement('button',{className:'btn-sm',onClick:randomize},'🎲 Random'),
          React.createElement('button',{className:'btn-sm',onClick:clearTeams},'🗑 Clear'),
          React.createElement('button',{
            className:'btn-sm cyan',
            disabled:!canBattle,
            style:{opacity:canBattle?1:.4},
            onClick:()=>canBattle&&setPhase('confirm')
          },'Confirm Teams →')
        ),

        // Character grid
        React.createElement('div',{className:'container-fluid py-3 px-3'},
          filtered.length===0
            ? React.createElement('div',{className:'text-center py-5',style:{color:'var(--gray)',fontFamily:'var(--font-hd)',fontSize:'24px',letterSpacing:'2px'}},'NO CHARACTERS FOUND')
            : React.createElement('div',{className:'row g-2'},
                filtered.map(char=>{
                  const inTeamIdx = teams.findIndex(t=>t.some(c=>c.id===char.id));
                  const allFull = teams.slice(0,numTeams).every(t=>t.length>=maxPerTeam);
                  const isDisabled = inTeamIdx<0 && allFull;
                  let cardCls = 'char-card h-100';
                  if(inTeamIdx>=0) cardCls+=` ${TEAM_SEL_CLS[inTeamIdx]}`;
                  else if(isDisabled) cardCls+=' disabled';

                  return React.createElement('div',{key:char.id,className:'col-6 col-sm-4 col-md-3 col-lg-2'},
                    React.createElement('div',{className:cardCls},
                      // Glow bar
                      React.createElement('div',{className:'char-glow-bar',style:{background:char.color}}),
                      // Selection badge
                      inTeamIdx>=0 && React.createElement('span',{
                        className:'char-sel-badge',
                        style:{display:'block',background:TEAM_COLORS[inTeamIdx],color:inTeamIdx===2?'#000':'#fff'}
                      },TEAM_NAMES[inTeamIdx].replace('TEAM ','')),

                      // Image + emoji overlay
                      React.createElement('div',{className:'char-img-wrap'},
                        React.createElement('img',{src:`images/${char.id}.jpg`,alt:char.name,onError:e=>e.target.style.display='none'}),
                        React.createElement('div',{className:'char-img-fallback'}),
                        React.createElement('span',{className:'char-emoji-overlay'},char.emoji),
                        React.createElement('div',{className:'char-img-overlay'})
                      ),

                      // Card body
                      React.createElement('div',{className:'char-body'},
                        React.createElement('div',{className:'char-series-lbl'},char.series),
                        React.createElement('div',{className:'char-name'},char.name),
                        React.createElement('div',{className:'char-meta'},
                          React.createElement(TierBadge,{tier:char.tier}),
                          React.createElement('span',{className:'char-score'},'⚡'+(char.powerScale/1000000).toFixed(1)+'M')
                        ),
                        React.createElement(PowerBar,{value:Math.round(char.powerScale/100000),color:char.color}),

                        // Action buttons
                        React.createElement('div',{className:'char-actions'},
                          React.createElement('button',{className:'btn-sm',onClick:()=>setViewChar(char)},'Info'),
                          // Team buttons — clicking selected team removes character
                          Array.from({length:numTeams},(_,ti)=>{
                            const inThis=teams[ti].some(c=>c.id===char.id);
                            const inOther=inTeamIdx>=0&&inTeamIdx!==ti;
                            const full=teams[ti].length>=maxPerTeam&&!inThis;
                            if(inOther) return null;
                            return React.createElement('button',{
                              key:ti,
                              className:'btn-sm',
                              style:{
                                borderColor:TEAM_COLORS[ti],
                                color:TEAM_COLORS[ti],
                                background:inThis?`${TEAM_COLORS[ti]}22`:'none',
                                opacity:(!inThis&&full)?.35:1,
                                cursor:(!inThis&&full)?'not-allowed':'pointer'
                              },
                              disabled:!inThis&&full,
                              onClick:()=>toggleTeam(char,ti)
                            }, inThis?`✓ T${ti+1}`:`T${ti+1}`)
                          })
                        )
                      )
                    )
                  );
                })
              )
        ),

        // Bottom proceed button
        React.createElement('div',{className:'text-center py-4'},
          React.createElement('button',{
            className:'btn-battle',
            disabled:!canBattle,
            onClick:()=>canBattle&&setPhase('confirm')
          }, canBattle?'⚔ CONFIRM TEAMS →':'Select Fighters First')
        )
      ),

      // ── CONFIRM PHASE
      phase==='confirm' && React.createElement(ConfirmPage,{
        teams,numTeams,maxPerTeam,
        onBack:()=>setPhase('select'),
        onBattle:startBattle,
        onRemove:removeFromTeam,
        onView:setViewChar
      }),

      // ── RESULT PHASE
      phase==='result' && React.createElement('div',{ref:resultRef,className:'container-fluid py-4 px-3 px-md-4'},
        battling
          ? React.createElement(BattleAnimation,{teams,numTeams})
          : result && React.createElement(BattleResult,{result,teams:teams.slice(0,numTeams),numTeams,onReset:resetBattle})
      )
    ),

    // ── MODAL
    viewChar && React.createElement(CharModal,{
      char:viewChar,onClose:()=>setViewChar(null),
      onAdd:addToTeam,teams,maxPerTeam,numTeams
    }),

    // ── TOAST
    toast && React.createElement(Toast,{msg:toast.msg,type:toast.type,onDone:()=>setToast(null)})
  );
}

// ── MOUNT ─────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
