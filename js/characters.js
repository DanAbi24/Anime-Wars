/* ============================================
   ANIME BATTLE ARENA — characters.js
   50 Characters | 10 Series | Alphabetical by Series
   Image specs: 400x500px portrait, saved as images/{id}.jpg
   ============================================ */

const CHARACTERS = [

  // ═══════════════════════════════════════════
  // ATTACK ON TITAN (alphabetical first)
  // ═══════════════════════════════════════════
  {
    id:"eren", name:"Eren Yeager", alias:"The Founding Titan", series:"Attack on Titan",
    tier:"S", color:"#8B7355", emoji:"🌍",
    stats:{power:88,speed:78,durability:92,intelligence:93,technique:72,ki:0,haki:0,cursedEnergy:0,cosmicPower:80},
    powerScale:7500000,
    abilities:["Founding Titan","The Rumbling","Titan Shifting","Path Manipulation","Colossal Titan Army"],
    weakness:"Nape of neck, Eldian royal blood required",
    lore:"Awakened the Founding Titan and commanded thousands of Colossal Titans to crush the world. A plan millennia in the making, born from one boy's desire for freedom.",
    winQuotes:["I was born into this world.","Freedom — at any cost.","I never had a choice."],
    loseQuotes:["Then I'll keep fighting...","Was there another way?","I just wanted to be free."]
  },
  {
    id:"levi", name:"Levi Ackerman", alias:"Humanity's Strongest", series:"Attack on Titan",
    tier:"A+", color:"#AAAACC", emoji:"⚡",
    stats:{power:84,speed:96,durability:82,intelligence:90,technique:99,ki:0,haki:0,cursedEnergy:0,cosmicPower:20},
    powerScale:5200000,
    abilities:["ODM Mastery","Ackerman Power","Thunder Spears","360-Degree Combat","Anti-Titan Technique"],
    weakness:"Human durability, injuries accumulate",
    lore:"Humanity's Strongest Soldier. His Ackerman bloodline grants superhuman power — he killed more Titans than any soldier in Survey Corps history.",
    winQuotes:["Don't waste my time.","I've killed harder things than you.","Clean cuts — no hesitation."],
    loseQuotes:["...Tch.","I've lost too much already.","Get up, Levi."]
  },
  {
    id:"mikasa", name:"Mikasa Ackerman", alias:"The Last Ackerman", series:"Attack on Titan",
    tier:"A+", color:"#CC3333", emoji:"🧣",
    stats:{power:83,speed:95,durability:82,intelligence:85,technique:97,ki:0,haki:0,cursedEnergy:0,cosmicPower:18},
    powerScale:5000000,
    abilities:["Ackerman Bloodline","ODM Expert","Thunder Spears","Combat Instinct","Anti-Titan Blades"],
    weakness:"Emotional attachment to Eren",
    lore:"The last descendant of the Shogunate bloodline in Paradis. Scored top of her cadet class in every category. Her Ackerman awakening grants power beyond any normal human.",
    winQuotes:["I will protect what matters.","The blade remembers.","I've been forged by loss."],
    loseQuotes:["Eren...","I'm sorry — I failed.","I'll carry this."]
  },
  {
    id:"reiner", name:"Reiner Braun", alias:"Armored Titan", series:"Attack on Titan",
    tier:"A", color:"#AA8800", emoji:"🛡️",
    stats:{power:85,speed:72,durability:95,intelligence:80,technique:80,ki:0,haki:0,cursedEnergy:0,cosmicPower:15},
    powerScale:4500000,
    abilities:["Armored Titan","Titan Hardening","Warrior Training","Titan Shifting","Partial Hardening"],
    weakness:"Armored plates can be cracked, PTSD",
    lore:"The Armored Titan — a living fortress. Reiner's guilt over his mission consumed him, yet he kept fighting because he had no other identity left.",
    winQuotes:["I am a warrior of Marley!","My armor has never been broken.","Stand down."],
    loseQuotes:["Just... kill me.","I deserve this.","I'm a soldier — I keep moving."]
  },
  {
    id:"zeke", name:"Zeke Yeager", alias:"Beast Titan", series:"Attack on Titan",
    tier:"A+", color:"#888844", emoji:"🦍",
    stats:{power:87,speed:82,durability:88,intelligence:96,technique:84,ki:0,haki:0,cursedEnergy:0,cosmicPower:45},
    powerScale:5800000,
    abilities:["Beast Titan","Titan Control","Royal Blood Scream","Spinal Fluid Manipulation","Pitcher's Throw"],
    weakness:"Requires royal blood, body destroyed by Survey Corps",
    lore:"Son of Grisha Yeager and Dina Fritz. His royal blood allows him to control Titans with a scream. Planned to sterilize all Eldians with Eren to end their suffering.",
    winQuotes:["Euthanasia is mercy.","Royal blood commands all.","You cannot stop what is inevitable."],
    loseQuotes:["Father... I see now.","My plan... failed.","Eren... was I wrong?"]
  },

  // ═══════════════════════════════════════════
  // BLEACH
  // ═══════════════════════════════════════════
  {
    id:"yhwach", name:"Yhwach", alias:"The Almighty", series:"Bleach",
    tier:"GOD", color:"#AAAAAA", emoji:"🕊️",
    stats:{power:99,speed:97,durability:99,intelligence:98,technique:97,ki:0,haki:0,cursedEnergy:0,cosmicPower:98},
    powerScale:9900000,
    abilities:["The Almighty","Auswählen","Future Sight","Soul Absorption","Blut Vene"],
    weakness:"10 minutes after waking — brief window of vulnerability",
    lore:"Father of the Quincy. The Almighty allows him to see and rewrite all possible futures. Defeated Soul Society's greatest in seconds.",
    winQuotes:["The future belongs to me.","Did you see it coming? You couldn't.","All futures end with me victorious."],
    loseQuotes:["This future... I didn't see it.","Interesting... a blind spot.","Even the Almighty has its limits."]
  },
  {
    id:"ichigo", name:"Ichigo Kurosaki", alias:"True Substitute Soul Reaper", series:"Bleach",
    tier:"S+", color:"#FF8800", emoji:"⚔️",
    stats:{power:96,speed:97,durability:94,intelligence:80,technique:93,ki:0,haki:0,cursedEnergy:0,cosmicPower:75},
    powerScale:8800000,
    abilities:["Final Getsuga Tensho","True Bankai","Hollow Mask","Fullbring","Zangetsu"],
    weakness:"Protects allies above self, power fluctuates",
    lore:"The convergence of Soul Reaper, Quincy, Hollow and Fullbringer. His true Bankai was reforged in the final war — overwhelming even Yhwach briefly.",
    winQuotes:["I'll protect everyone!","My resolve won't break.","I didn't come this far to lose."],
    loseQuotes:["I'm not done...!","I have to get stronger.","Everyone's counting on me."]
  },
  {
    id:"aizen", name:"Sosuke Aizen", alias:"The Transcendent Being", series:"Bleach",
    tier:"S+", color:"#DDAA00", emoji:"🦋",
    stats:{power:95,speed:96,durability:95,intelligence:100,technique:97,ki:0,haki:0,cursedEnergy:0,cosmicPower:85},
    powerScale:9000000,
    abilities:["Kyoka Suigetsu","Hogyoku Fusion","Spiritual Pressure Mastery","Regeneration","Illusion Control"],
    weakness:"Overconfidence, sealed by Urahara's Kido",
    lore:"A genius who stood above Soul Society. Fused with the Hogyoku to transcend the boundary between Shinigami and Hollow. Even Yhwach respected his intellect.",
    winQuotes:["It was all according to my plan.","You should feel honored — I took you seriously.","Kneel."],
    loseQuotes:["...Interesting.","I see I miscalculated.","Even I bow to the unexpected."]
  },
  {
    id:"yamamoto", name:"Genryusai Yamamoto", alias:"Captain-Commander", series:"Bleach",
    tier:"S", color:"#FF4400", emoji:"🔥",
    stats:{power:95,speed:89,durability:94,intelligence:92,technique:96,ki:0,haki:0,cursedEnergy:0,cosmicPower:65},
    powerScale:8200000,
    abilities:["Zanka no Tachi","Ryujin Jakka","Yamamoto's Bankai","Ash Fire Creation","Bone Burning Flames"],
    weakness:"Age, unwilling to use full power near allies",
    lore:"Soul Society's supreme commander for 1000 years. His Bankai concentrates the heat of the sun into his blade — capable of burning everything to ash.",
    winQuotes:["I have defended Soul Society for a thousand years.","Your flames are nothing before mine.","This is the end."],
    loseQuotes:["Soul Society... I am sorry.","You have surpassed even my expectations.","The duty of protection falls to you now."]
  },
  {
    id:"kenpachi", name:"Kenpachi Zaraki", alias:"Nozarashi", series:"Bleach",
    tier:"S", color:"#FF0000", emoji:"🗡️",
    stats:{power:96,speed:88,durability:97,intelligence:60,technique:78,ki:0,haki:0,cursedEnergy:0,cosmicPower:50},
    powerScale:7900000,
    abilities:["Nozarashi Bankai","Eye Patch Release","Berserker Mode","Vast Spiritual Pressure","Bloodlust Amplification"],
    weakness:"No technique, only brute force",
    lore:"The only person born with the title Captain. He wore a spiritual pressure-sealing eye patch just to feel a fight. His Bankai turns him into a giant.",
    winQuotes:["More! Give me more!","Now THAT was a fight!","I was hoping you'd last longer."],
    loseQuotes:["Heh... not bad.","I got excited.","Don't die — I want a rematch."]
  },

  // ═══════════════════════════════════════════
  // DEMON SLAYER
  // ═══════════════════════════════════════════
  {
    id:"gyomei", name:"Gyomei Himejima", alias:"Stone Hashira", series:"Demon Slayer",
    tier:"S", color:"#888888", emoji:"🪨",
    stats:{power:95,speed:88,durability:95,intelligence:84,technique:95,ki:0,haki:0,cursedEnergy:0,cosmicPower:20},
    powerScale:7800000,
    abilities:["Stone Breathing","Demon Slayer Mark","Transparent World","Stone Hashira Techniques","Axe and Flail Combat"],
    weakness:"Blind, relies on hearing and sensing",
    lore:"The strongest Hashira alive. Even Kokushibo acknowledged Gyomei as the finest warrior he had faced in 300 years of battle.",
    winQuotes:["O Lord, grant strength to my blade.","I weep — not in defeat, but in devotion.","Your soul deserves peace."],
    loseQuotes:["Lord... forgive my weakness.","I must pray harder.","The children I protect — I cannot fail them."]
  },
  {
    id:"kokushibo", name:"Kokushibo", alias:"Upper Moon One", series:"Demon Slayer",
    tier:"S", color:"#AA0044", emoji:"🌙",
    stats:{power:94,speed:96,durability:94,intelligence:90,technique:97,ki:0,haki:0,cursedEnergy:0,cosmicPower:40},
    powerScale:8000000,
    abilities:["Moon Breathing","Crescent Moon Blades","Six-Eyed Form","Flesh Manipulation","Demon Blood Art"],
    weakness:"Jealousy of his brother drove him to darkness",
    lore:"Yoriichi's twin brother. Became a demon out of jealousy. The most powerful demon under Muzan — alive for over 400 years, his Moon Breathing surpasses all sword styles.",
    winQuotes:["Your breathing cannot match mine.","400 years of refinement — meet your end.","Moon Breathing: First Form."],
    loseQuotes:["Brother... was I always wrong?","Even now I cannot surpass you.","I wanted your power... not your path."]
  },
  {
    id:"muzan", name:"Muzan Kibutsuji", alias:"Demon King", series:"Demon Slayer",
    tier:"S+", color:"#CC0000", emoji:"🌑",
    stats:{power:96,speed:97,durability:98,intelligence:95,technique:93,ki:0,haki:0,cursedEnergy:0,cosmicPower:55},
    powerScale:8800000,
    abilities:["Infinite Regeneration","Demon Blood Art","Cellular Manipulation","Blood Demon Art","Twelve Kizuki Creation"],
    weakness:"Sunlight, Wisteria poison, Red Nichirin blades",
    lore:"The first and most powerful demon. Lived for over 1000 years. His blood created all other demons. The mere memory of Yoriichi was the only thing that ever made him feel fear.",
    winQuotes:["You were never a threat.","A demon has no equal.","Everything is mine — life and death alike."],
    loseQuotes:["This... cannot be.","I fear nothing!","I will not accept death — not now!"]
  },
  {
    id:"tanjiro", name:"Tanjiro Kamado", alias:"Demon Slayer", series:"Demon Slayer",
    tier:"A+", color:"#FF2200", emoji:"🔥",
    stats:{power:82,speed:88,durability:80,intelligence:84,technique:96,ki:0,haki:0,cursedEnergy:0,cosmicPower:20},
    powerScale:4200000,
    abilities:["Sun Breathing","Hinokami Kagura","Total Concentration","Demon Slayer Mark","Transparent World"],
    weakness:"Human durability limits",
    lore:"A kind-hearted boy who mastered the original Sun Breathing style. His empathy and technical refinement made him the successor to Yoriichi's legacy.",
    winQuotes:["I can smell your next move!","For Nezuko — and everyone I've lost.","The blade remembers every soul."],
    loseQuotes:["I'm sorry... I wasn't strong enough.","I'll keep getting up...","Please, give me one more chance."]
  },
  {
    id:"yoriichi", name:"Yoriichi Tsugikuni", alias:"The First Breath User", series:"Demon Slayer",
    tier:"S+", color:"#FF4400", emoji:"🌅",
    stats:{power:97,speed:99,durability:88,intelligence:90,technique:100,ki:0,haki:0,cursedEnergy:0,cosmicPower:60},
    powerScale:9200000,
    abilities:["Sun Breathing","Transparent World","Selfless State","Scar Mark","Thirteenth Form"],
    weakness:"Born with a weak heart (cured early), mourning his wife",
    lore:"The most gifted demon slayer in history. Reduced Muzan to near-death with a single assault. His memory alone haunted Muzan for 400 years.",
    winQuotes:["The sun rises — and demons fade.","I only wanted to live peacefully.","Forgive me."],
    loseQuotes:["...I see.","My technique was not enough.","Then protect those who remain."]
  },

  // ═══════════════════════════════════════════
  // DRAGON BALL Z
  // ═══════════════════════════════════════════
  {
    id:"beerus", name:"Beerus", alias:"God of Destruction", series:"Dragon Ball Z",
    tier:"GOD", color:"#9B00FF", emoji:"🐱",
    stats:{power:98,speed:98,durability:97,intelligence:85,technique:97,ki:99,haki:0,cursedEnergy:0,cosmicPower:95},
    powerScale:9600000,
    abilities:["Hakai","Destruction Energy","God of Destruction Mode","Ultra Instinct Partial","Pressure Point Attack"],
    weakness:"Lazy, sleeps for decades",
    lore:"God of Destruction of Universe 7. His Hakai can erase existence. Even Whis admitted Beerus at 100% is in a completely different dimension from anyone else.",
    winQuotes:["How boring.","Try to be more entertaining next time.","You should be honored I used 10%."],
    loseQuotes:["Impossible...","I wasn't serious.","Whis, take me home."]
  },
  {
    id:"goku", name:"Son Goku", alias:"The Legendary Super Saiyan", series:"Dragon Ball Z",
    tier:"GOD", color:"#FF8C00", emoji:"⚡",
    stats:{power:99,speed:99,durability:98,intelligence:65,technique:96,ki:100,haki:0,cursedEnergy:0,cosmicPower:90},
    powerScale:9700000,
    abilities:["Ultra Instinct","Super Saiyan Blue","Kamehameha","Spirit Bomb","God Ki"],
    weakness:"Lets enemies power up, trusts too freely",
    lore:"A pure-hearted Saiyan raised on Earth. Mastered Ultra Instinct — a technique even Gods of Destruction struggle to achieve. His power grows without limit.",
    winQuotes:["That was a great fight!","You pushed me to my limits!","I can always get stronger!"],
    loseQuotes:["You're incredible...","I'll train harder.","Next time I'll use Ultra Instinct from the start."]
  },
  {
    id:"jiren", name:"Jiren", alias:"The Gray", series:"Dragon Ball Z",
    tier:"S+", color:"#FF4444", emoji:"🔥",
    stats:{power:97,speed:96,durability:97,intelligence:88,technique:94,ki:98,haki:0,cursedEnergy:0,cosmicPower:80},
    powerScale:9300000,
    abilities:["Power Impact","Full Power","Meditation Powerup","Shockwave Fist","Omegaheat Magnetron"],
    weakness:"Relies on solitary strength, lost trust in others",
    lore:"The Pride Trooper who surpassed the Gods of Destruction. Born from tragedy, Jiren's sheer will and training pushed him to levels no mortal had reached before.",
    winQuotes:["Power is absolute.","Trust no one but yourself.","That is the difference between us."],
    loseQuotes:["You... you actually beat me.","I see now — bonds do have power.","I acknowledge you."]
  },
  {
    id:"vegeta", name:"Vegeta", alias:"Prince of All Saiyans", series:"Dragon Ball Z",
    tier:"GOD", color:"#0066FF", emoji:"👑",
    stats:{power:97,speed:97,durability:96,intelligence:88,technique:95,ki:98,haki:0,cursedEnergy:0,cosmicPower:85},
    powerScale:9400000,
    abilities:["Ultra Ego","Final Flash","Big Bang Attack","Super Saiyan Blue Evolved","Hakai"],
    weakness:"Pride overrides strategy",
    lore:"Prince of the fallen Saiyan race. Ultra Ego grows stronger the more damage he takes. His rivalry with Goku has pushed both beyond all known limits.",
    winQuotes:["I am the Prince of all Saiyans!","Kakarot couldn't have done this better.","Don't look down on Saiyan royal blood!"],
    loseQuotes:["Damn you...","I refuse to accept this.","This isn't over — I am a Saiyan prince!"]
  },
  {
    id:"zeno", name:"Zeno", alias:"Omni-King", series:"Dragon Ball Z",
    tier:"GOD", color:"#00FFFF", emoji:"👑",
    stats:{power:100,speed:100,durability:100,intelligence:60,technique:100,ki:100,haki:0,cursedEnergy:0,cosmicPower:100},
    powerScale:10000000,
    abilities:["Erase","Reality Deletion","Omnipotence","Universe Erasure","Super Dragon Balls"],
    weakness:"Childlike mind, needs Grand Priest",
    lore:"The Omni-King — ruler of all 12 universes. Zeno can erase entire universes from existence with a single thought. Even Gods of Destruction bow before him.",
    winQuotes:["Yay! That was fun!","Erase!","Want to play again?"],
    loseQuotes:["That's not fair!","Grand Priest!","I'll erase you next time!"]
  },

  // ═══════════════════════════════════════════
  // HUNTER x HUNTER
  // ═══════════════════════════════════════════
  {
    id:"chrollo", name:"Chrollo Lucilfer", alias:"Phantom Troupe Leader", series:"Hunter x Hunter",
    tier:"S", color:"#6600AA", emoji:"📖",
    stats:{power:88,speed:90,durability:85,intelligence:98,technique:96,ki:0,haki:0,cursedEnergy:0,cosmicPower:38},
    powerScale:7200000,
    abilities:["Skill Hunter","Double Exposure","Order Stamp","Indoor Fish","Black Voice"],
    weakness:"Requires specific conditions to use stolen abilities",
    lore:"Leader of the Phantom Troupe. His Skill Hunter book can steal any Nen ability. He fought two of Zoldyck's finest assassins simultaneously and won.",
    winQuotes:["Every ability in this book was earned.","I've already won — you just don't know it.","Art is a bang."],
    loseQuotes:["...Impressive.","The spider has many legs — it will endure.","I'll add your technique to my collection."]
  },
  {
    id:"gon", name:"Gon Freecss", alias:"The Unlicensed Hunter", series:"Hunter x Hunter",
    tier:"S", color:"#00CC44", emoji:"🌿",
    stats:{power:94,speed:90,durability:88,intelligence:70,technique:85,ki:0,haki:0,cursedEnergy:0,cosmicPower:55},
    powerScale:7800000,
    abilities:["Jajanken","Adult Gon Transform","Rock Paper Scissors Nen","Nen Release","Sacrifice Mode"],
    weakness:"Reckless, sacrifices future potential for present power",
    lore:"A boy with unmatched Nen potential. Adult Gon sacrificed all his potential to gain a one-time body of incomprehensible power, enough to threaten Neferpitou.",
    winQuotes:["I'll do whatever it takes!","This is for Kite!","I'm not stopping — ever!"],
    loseQuotes:["I'm not done...!","Killua...","I'll get stronger — for everyone."]
  },
  {
    id:"meruem", name:"Meruem", alias:"King of the Chimera Ants", series:"Hunter x Hunter",
    tier:"GOD", color:"#AACC00", emoji:"👑",
    stats:{power:99,speed:99,durability:98,intelligence:100,technique:98,ki:0,haki:0,cursedEnergy:0,cosmicPower:85},
    powerScale:9700000,
    abilities:["Nen Absorption","Photon","Rose Poison Immunity","Adaptation","Rage Blast"],
    weakness:"Rose radiation — fatal eventually",
    lore:"Born as the apex of Chimera Ant evolution. Within weeks of birth, he mastered board games that took humans lifetimes. His Nen power was incalculable.",
    winQuotes:["Your existence serves no purpose.","Entertain me — then fall.","I am the pinnacle of all life."],
    loseQuotes:["Komugi...","So this is what it means to lose.","...I'll stay by your side."]
  },
  {
    id:"netero", name:"Isaac Netero", alias:"Chairman of the Hunter Association", series:"Hunter x Hunter",
    tier:"S+", color:"#FF8800", emoji:"🙏",
    stats:{power:95,speed:99,durability:90,intelligence:97,technique:99,ki:0,haki:0,cursedEnergy:0,cosmicPower:70},
    powerScale:8900000,
    abilities:["100-Type Guanyin Bodhisattva","Zero Hand","Poor Man's Rose","Speed Beyond Vision","Nen Mastery"],
    weakness:"Age, forced to use final trump card against Meruem",
    lore:"At 110 years old, the strongest hunter alive. His 100-Type Guanyin was so fast even Meruem's eyes couldn't track it. His final act — the Poor Man's Rose — was his most powerful move.",
    winQuotes:["I've spent my entire life for this moment.","This is the result of a lifetime of prayer.","I still have one more move."],
    loseQuotes:["Heh... I've had a full life.","Use everything you have — leave nothing behind.","I'll go out with a bang."]
  },
  {
    id:"pitou", name:"Neferpitou", alias:"Royal Guard", series:"Hunter x Hunter",
    tier:"S", color:"#CC44AA", emoji:"🐱",
    stats:{power:92,speed:95,durability:90,intelligence:88,technique:92,ki:0,haki:0,cursedEnergy:0,cosmicPower:45},
    powerScale:7900000,
    abilities:["Doctor Blythe","Terpsichora","En","Puppet Master","Nen Healing"],
    weakness:"Absolute loyalty to Meruem overrides self-preservation",
    lore:"The most powerful of the Royal Guard. Her Nen En sphere covered entire cities. She healed herself after being killed — purely to protect the King one last moment.",
    winQuotes:["The King must not be disturbed.","Your Nen is nothing.","I serve only one master."],
    loseQuotes:["King...","I could not protect you.","Forgive me, Your Majesty."]
  },

  // ═══════════════════════════════════════════
  // INVINCIBLE
  // ═══════════════════════════════════════════
  {
    id:"battlebeast", name:"Battle Beast", alias:"Champion of Thraxa", series:"Invincible",
    tier:"S+", color:"#AA6600", emoji:"🦁",
    stats:{power:98,speed:94,durability:98,intelligence:75,technique:95,ki:0,haki:0,cursedEnergy:0,cosmicPower:60},
    powerScale:8800000,
    abilities:["Thraxan Physiology","Unbreakable Durability","Battle Rage","Combat Mastery","Warrior's Instinct"],
    weakness:"Seeks honorable death — will not retreat",
    lore:"Champion of planet Thraxa who craves only a worthy death in battle. Defeated the entire Guardians of the Globe alone. Only Thragg himself has truly pushed him.",
    winQuotes:["Finally! A worthy fight!","I seek a glorious death — you may provide it!","BATTLE!"],
    loseQuotes:["At last... a real battle.","Kill me — with honor.","You are worthy, warrior."]
  },
  {
    id:"conquest", name:"Conquest", alias:"Viltrumite Conqueror", series:"Invincible",
    tier:"S+", color:"#880000", emoji:"⚔️",
    stats:{power:97,speed:94,durability:96,intelligence:88,technique:93,ki:0,haki:0,cursedEnergy:0,cosmicPower:68},
    powerScale:8600000,
    abilities:["Viltrumite Physiology","Conquest Protocol","Superhuman Combat","Endurance Beyond Limits","Tactical Brutality"],
    weakness:"Severely injured arm from past battles",
    lore:"One of the oldest and most battle-hardened Viltrumites. Conquest takes pleasure in breaking opponents slowly. His fight with Invincible was one of the most brutal in Viltrumite history.",
    winQuotes:["Planets fall. Empires rise. This is conquest.","I've broken stronger than you.","Your resistance only prolongs the inevitable."],
    loseQuotes:["A Viltrumite does not beg.","The empire will finish what I started.","...Impressive, half-breed."]
  },
  {
    id:"invincible", name:"Mark Grayson", alias:"Invincible", series:"Invincible",
    tier:"S+", color:"#0088FF", emoji:"💙",
    stats:{power:95,speed:96,durability:94,intelligence:85,technique:88,ki:0,haki:0,cursedEnergy:0,cosmicPower:70},
    powerScale:8700000,
    abilities:["Viltrumite Physiology","Flight","Superhuman Strength","Rapid Healing","Combat Instinct"],
    weakness:"Still growing into full Viltrumite power",
    lore:"Son of Omni-Man. Half-Viltrumite whose power grows with every brutal battle. Survived fights that should have killed him — each time returning stronger.",
    winQuotes:["I'm not stopping — I can't!","Everyone I love is counting on me.","I'll find a way — I always do."],
    loseQuotes:["Not yet... I'm not done.","I'll heal — and I'll come back.","Dad... I'm trying."]
  },
  {
    id:"omniman", name:"Omni-Man", alias:"Nolan Grayson", series:"Invincible",
    tier:"S+", color:"#0044CC", emoji:"🦸",
    stats:{power:96,speed:97,durability:96,intelligence:88,technique:90,ki:0,haki:0,cursedEnergy:0,cosmicPower:72},
    powerScale:8900000,
    abilities:["Viltrumite Physiology","Flight at Mach 1000","Superhuman Strength","Enhanced Healing","Combat Experience"],
    weakness:"Love for his son and humanity",
    lore:"One of the most powerful Viltrumites alive. Spent years on Earth pretending to be a hero. His battle with his own son shook the planet — and his conscience.",
    winQuotes:["Think of what we could accomplish!","You're stronger than you know.","The empire demands victory."],
    loseQuotes:["Son...","I chose wrong for so long.","You're better than me — always were."]
  },
  {
    id:"thragg", name:"Thragg", alias:"Grand Regent", series:"Invincible",
    tier:"GOD", color:"#CC0000", emoji:"🩸",
    stats:{power:99,speed:98,durability:99,intelligence:95,technique:97,ki:0,haki:0,cursedEnergy:0,cosmicPower:80},
    powerScale:9800000,
    abilities:["Viltrumite Strength","Thraedus Maneuver","Superhuman Speed","Nigh-Invulnerability","Combat Mastery"],
    weakness:"Omega-3 Scourge Virus",
    lore:"The most powerful Viltrumite to ever live. Defeated Omni-Man and nearly killed Invincible simultaneously. Flew into the sun and survived.",
    winQuotes:["You never had a chance.","The Viltrum Empire is eternal.","Submit or be destroyed."],
    loseQuotes:["Impossible...","This changes nothing.","I underestimated you — a mistake I won't repeat."]
  },

  // ═══════════════════════════════════════════
  // JUJUTSU KAISEN
  // ═══════════════════════════════════════════
  {
    id:"gojo", name:"Gojo Satoru", alias:"The Honored One", series:"Jujutsu Kaisen",
    tier:"GOD", color:"#9B00FF", emoji:"♾️",
    stats:{power:95,speed:98,durability:90,intelligence:97,technique:99,ki:0,haki:0,cursedEnergy:100,cosmicPower:75},
    powerScale:9500000,
    abilities:["Infinity","Six Eyes","Domain Expansion: Unlimited Void","Hollow Purple","Red / Blue / Purple"],
    weakness:"Prison Realm seal, overconfidence",
    lore:"The strongest jujutsu sorcerer alive. His Infinity makes every attack infinitely slow. Domain Expansion: Unlimited Void bombards the mind with infinite information.",
    winQuotes:["Throughout Heaven and Earth, I alone am the honored one.","Too easy.","Don't be sad — you fought the strongest."],
    loseQuotes:["Interesting...","My Infinity had a gap?","I'll acknowledge that — well done."]
  },
  {
    id:"kenjaku", name:"Kenjaku", alias:"The Ancient Sorcerer", series:"Jujutsu Kaisen",
    tier:"S", color:"#666699", emoji:"🧠",
    stats:{power:88,speed:88,durability:88,intelligence:100,technique:95,ki:0,haki:0,cursedEnergy:90,cosmicPower:68},
    powerScale:7800000,
    abilities:["Body Possession","Multiple Technique Absorption","Barrier Mastery","Brain Transplant","Idle Transfiguration"],
    weakness:"Relies on vessels, cannot use all techniques simultaneously",
    lore:"An ancient sorcerer over 1000 years old who survives by transplanting his brain into new bodies. Orchestrated events across centuries to merge the Culling Game.",
    winQuotes:["History is merely the chess board I play on.","Every move was planned.","You're a piece, not a player."],
    loseQuotes:["A variable I hadn't calculated.","Even with centuries of planning...","The game... is not yet over."]
  },
  {
    id:"sukuna", name:"Ryomen Sukuna", alias:"King of Curses", series:"Jujutsu Kaisen",
    tier:"GOD", color:"#FF0000", emoji:"👹",
    stats:{power:99,speed:98,durability:97,intelligence:99,technique:100,ki:0,haki:0,cursedEnergy:99,cosmicPower:80},
    powerScale:9600000,
    abilities:["Malevolent Shrine","Cleave","Dismantle","Reverse Cursed Technique","World Slash"],
    weakness:"Exists in host body, occasional arrogance",
    lore:"The King of Curses — a sorcerer from 1000 years ago so powerful he was split into 20 fingers after death. His Domain: Malevolent Shrine has no barrier, making escape impossible.",
    winQuotes:["Entertain me.","This is the gap between us.","Bow, you monkey."],
    loseQuotes:["...Fascinating.","You're the first to push me.","I'll carve your name into eternity."]
  },
  {
    id:"toji", name:"Toji Fushiguro", alias:"The Sorcerer Killer", series:"Jujutsu Kaisen",
    tier:"S", color:"#AAAAAA", emoji:"🗡️",
    stats:{power:90,speed:97,durability:88,intelligence:92,technique:98,ki:0,haki:0,cursedEnergy:0,cosmicPower:20},
    powerScale:7500000,
    abilities:["Heavenly Restriction","Superhuman Body","Inventory Curse","Sorcerer Killer Technique","Zero Cursed Energy"],
    weakness:"No cursed energy — vulnerable to cursed techniques directly",
    lore:"Born with zero cursed energy. His Heavenly Restriction gave him a body that surpasses any sorcerer. He nearly killed Gojo Satoru.",
    winQuotes:["Cursed energy means nothing against me.","You were relying on the wrong thing.","Raw strength always wins."],
    loseQuotes:["Heh... I see.","Megumi... become strong.","That's enough from me."]
  },
  {
    id:"yuta", name:"Yuta Okkotsu", alias:"Special Grade Sorcerer", series:"Jujutsu Kaisen",
    tier:"S+", color:"#0088FF", emoji:"💙",
    stats:{power:94,speed:93,durability:90,intelligence:88,technique:93,ki:0,haki:0,cursedEnergy:96,cosmicPower:65},
    powerScale:8600000,
    abilities:["Rika","Reverse Cursed Technique","Cursed Energy Copy","Domain Expansion","Incarnation"],
    weakness:"Emotional, takes time to fully awaken Rika",
    lore:"Haunted by his cursed childhood love Rika, Yuta became a special grade sorcerer with more cursed energy than even Gojo had at his age. Gojo called him the only one who could surpass him.",
    winQuotes:["I fight to protect the people I love.","Rika — lend me your power.","I won't let anyone else get hurt."],
    loseQuotes:["I have to get stronger...","I'm sorry, Rika.","Not yet — not yet enough."]
  },

  // ═══════════════════════════════════════════
  // MY HERO ACADEMIA
  // ═══════════════════════════════════════════
  {
    id:"afo", name:"All For One", alias:"The Symbol of Evil", series:"My Hero Academia",
    tier:"S+", color:"#330033", emoji:"🕳️",
    stats:{power:97,speed:90,durability:95,intelligence:99,technique:95,ki:0,haki:0,cursedEnergy:0,cosmicPower:65},
    powerScale:8700000,
    abilities:["Quirk Theft","Shock Wave","Air Cannon","Search Quirk","Multiple Quirk Combination"],
    weakness:"Blind after battles with All Might, overconfidence",
    lore:"The ultimate villain who has stolen and stockpiled hundreds of Quirks over centuries. His battle with All Might destroyed a city.",
    winQuotes:["Your Quirk now belongs to me.","Strength is stolen, not earned.","This world was always mine."],
    loseQuotes:["Unexpected...","Another variable uncalculated.","I will return — I always return."]
  },
  {
    id:"allmight", name:"All Might", alias:"Symbol of Peace", series:"My Hero Academia",
    tier:"S", color:"#0044FF", emoji:"🦸",
    stats:{power:96,speed:94,durability:90,intelligence:85,technique:90,ki:0,haki:0,cursedEnergy:0,cosmicPower:55},
    powerScale:8100000,
    abilities:["One For All Peak","United States of Smash","Detroit Smash","Carolina Smash","Muscle Form"],
    weakness:"True form severely injured, limited time in muscle form",
    lore:"The Symbol of Peace. At his peak, All Might's One For All created tornadoes with a single punch. Crime dropped 40% during his era.",
    winQuotes:["Fear not! I am here!","SMASH!","Go beyond — PLUS ULTRA!"],
    loseQuotes:["I'm sorry... I am not the hero you needed.","Young Midoriya... it's your turn.","I entrust everything to you."]
  },
  {
    id:"deku", name:"Izuku Midoriya", alias:"The Inheritor", series:"My Hero Academia",
    tier:"S", color:"#00AA44", emoji:"💪",
    stats:{power:93,speed:94,durability:88,intelligence:94,technique:93,ki:0,haki:0,cursedEnergy:0,cosmicPower:50},
    powerScale:7800000,
    abilities:["One For All 100%","Blackwhip","Float","Smokescreen","Fa Jin"],
    weakness:"Body damage from overuse, emotional",
    lore:"Born Quirkless, he inherited One For All from All Might. Awakened all predecessor Quirks to become the ninth — and most powerful — wielder of One For All.",
    winQuotes:["Everyone has a path — I'll walk mine!","I'll save you — even if it breaks me!","I'm not giving up!"],
    loseQuotes:["I'm not finished yet...","All Might... I need to be stronger.","I'll stand back up — I always do."]
  },
  {
    id:"endeavor", name:"Endeavor", alias:"Flame Hero", series:"My Hero Academia",
    tier:"A+", color:"#FF4400", emoji:"🔥",
    stats:{power:88,speed:86,durability:86,intelligence:88,technique:90,ki:0,haki:0,cursedEnergy:0,cosmicPower:20},
    powerScale:5500000,
    abilities:["Hellflame","Flashfire Fist","Prominence Burn","Vanquish","Planetary Hellflame"],
    weakness:"Overheating, past emotional trauma",
    lore:"The No.1 Hero after All Might's retirement. Spent his life chasing perfection. His Prominence Burn could level city blocks.",
    winQuotes:["This is what No.1 looks like.","I'll show you the flames of justice.","Don't make me repeat myself."],
    loseQuotes:["...I accept this loss.","I still have more to prove.","I am a work in progress."]
  },
  {
    id:"shigaraki", name:"Tomura Shigaraki", alias:"All For One's Successor", series:"My Hero Academia",
    tier:"S+", color:"#AA0000", emoji:"💀",
    stats:{power:96,speed:88,durability:92,intelligence:85,technique:88,ki:0,haki:0,cursedEnergy:0,cosmicPower:62},
    powerScale:8600000,
    abilities:["Decay","All For One Partial","Hyper Regeneration","Destroy Everything","Spreading Disintegration"],
    weakness:"Requires concentration to control Decay",
    lore:"Raised from childhood to be All For One's perfect successor. After body modification, Shigaraki's Decay spread automatically — capable of erasing entire cities with a touch.",
    winQuotes:["Everything... crumbles.","I'll destroy it all — every symbol, every hero.","This world deserves to fall."],
    loseQuotes:["Not yet... not yet done.","I'll take everything from you.","Sensei... I failed."]
  },

  // ═══════════════════════════════════════════
  // NARUTO: SHIPPUDEN
  // ═══════════════════════════════════════════
  {
    id:"hashirama", name:"Hashirama Senju", alias:"God of Shinobi", series:"Naruto: Shippuden",
    tier:"S+", color:"#00AA44", emoji:"🌳",
    stats:{power:94,speed:90,durability:95,intelligence:92,technique:96,ki:0,haki:0,cursedEnergy:0,cosmicPower:70},
    powerScale:8600000,
    abilities:["Wood Style","Sage Mode","Thousand-Armed Kannon","Wood Dragon","Cell Regeneration"],
    weakness:"Too merciful, trusted Madara",
    lore:"First Hokage and founder of Konoha. His Wood Style could suppress Tailed Beasts. Even Madara admitted Hashirama was the only shinobi to ever match him.",
    winQuotes:["This is the will of fire!","I fight to protect those precious to me.","The village endures!"],
    loseQuotes:["You're truly strong...","I see... I still have much to learn.","The Will of Fire never dies."]
  },
  {
    id:"kaguya", name:"Kaguya Otsutsuki", alias:"The Rabbit Goddess", series:"Naruto: Shippuden",
    tier:"GOD", color:"#FFFFFF", emoji:"🌙",
    stats:{power:99,speed:97,durability:99,intelligence:90,technique:98,ki:0,haki:0,cursedEnergy:0,cosmicPower:99},
    powerScale:9800000,
    abilities:["All-Killing Ash Bones","Byakugan","Rinne Sharingan","Dimension Hopping","Infinite Tsukuyomi"],
    weakness:"Requires Ten-Tails host, overconfident",
    lore:"The original wielder of chakra. Mother of Hagoromo — the Sage of Six Paths. Her power predates all ninja history and she nearly enslaved all of humanity.",
    winQuotes:["You are nothing but chakra to be harvested.","Bow before the progenitor of chakra.","All will return to me."],
    loseQuotes:["Impossible... I am a god.","This chakra... how?","My sons... is this your doing?"]
  },
  {
    id:"madara", name:"Madara Uchiha", alias:"King of Hell", series:"Naruto: Shippuden",
    tier:"S+", color:"#FF0033", emoji:"🌀",
    stats:{power:96,speed:94,durability:95,intelligence:99,technique:98,ki:0,haki:0,cursedEnergy:0,cosmicPower:80},
    powerScale:9100000,
    abilities:["Rinnegan","Perfect Susanoo","Limbo Hengoku","Wood Style","Infinite Tsukuyomi"],
    weakness:"Required Hashirama cells, betrayed by Black Zetsu",
    lore:"The strongest Uchiha in history. As the Ten-Tails jinchuriki he became a god. Fought an entire shinobi alliance alone.",
    winQuotes:["Power is everything.","This is what it means to be a true shinobi.","Even your best wasn't enough."],
    loseQuotes:["Impossible... I am Madara Uchiha.","You have earned my acknowledgement.","This fight was worth having."]
  },
  {
    id:"naruto", name:"Naruto Uzumaki", alias:"Seventh Hokage", series:"Naruto: Shippuden",
    tier:"S+", color:"#FF6600", emoji:"🦊",
    stats:{power:95,speed:95,durability:93,intelligence:75,technique:90,ki:0,haki:0,cursedEnergy:0,cosmicPower:72},
    powerScale:8500000,
    abilities:["Six Paths Sage Mode","Baryon Mode","Rasenshuriken","Shadow Clone Jutsu","Kurama Chakra Mode"],
    weakness:"Emotional, self-sacrificing",
    lore:"From outcast to Hokage. Baryon Mode — his ultimate form — burns away life force to generate godlike power. His will to protect has pushed him past every limit.",
    winQuotes:["Believe it!","I never go back on my word — that's my nindo!","Dattebayo!"],
    loseQuotes:["I'm not giving up!","I'll get back up — that's what I do.","This just means I need to train harder!"]
  },
  {
    id:"sasuke", name:"Sasuke Uchiha", alias:"The Shadow Hokage", series:"Naruto: Shippuden",
    tier:"S+", color:"#CC00CC", emoji:"👁️",
    stats:{power:94,speed:96,durability:90,intelligence:97,technique:98,ki:0,haki:0,cursedEnergy:0,cosmicPower:70},
    powerScale:8400000,
    abilities:["Rinnegan","Eternal Mangekyo Sharingan","Amaterasu","Susanoo","Indra's Arrow"],
    weakness:"Rinnegan removed, emotional blind spots",
    lore:"The last Uchiha. Rivalled Naruto in every era. His Indra's Arrow — combining all his power into a single lightning bolt — is one of the most destructive techniques ever shown.",
    winQuotes:["Don't compare yourself to me.","I've walked through darkness you can't imagine.","Power comes from suffering."],
    loseQuotes:["...You've surpassed me.","Next time, I won't hold back.","Naruto..."]
  },

  // ═══════════════════════════════════════════
  // ONE PIECE
  // ═══════════════════════════════════════════
  {
    id:"kaido", name:"Kaido", alias:"King of the Beasts", series:"One Piece",
    tier:"S+", color:"#6600CC", emoji:"🐉",
    stats:{power:98,speed:88,durability:100,intelligence:88,technique:92,ki:0,haki:98,cursedEnergy:0,cosmicPower:70},
    powerScale:8800000,
    abilities:["Dragon Devil Fruit","Bajrang Gun","Boro Breath","Thunder Bagua","Togen Totsuka"],
    weakness:"Suicidal tendencies, wants to die in battle",
    lore:"The World's Strongest Creature. Kaido survived every execution attempt in history. His durability is unmatched — never truly defeated until Luffy's Gear 5.",
    winQuotes:["This world is trash — no good fights left!","Conquerors clash... and only one stands.","GUARARARA!"],
    loseQuotes:["...Finally.","A good fight...","You're worthy of the title."]
  },
  {
    id:"luffy", name:"Monkey D. Luffy", alias:"Sun God Nika", series:"One Piece",
    tier:"GOD", color:"#FF4400", emoji:"☀️",
    stats:{power:97,speed:96,durability:94,intelligence:72,technique:90,ki:0,haki:100,cursedEnergy:0,cosmicPower:88},
    powerScale:9200000,
    abilities:["Gear 5","Conqueror's Haki","Gomu Gomu Awakening","Sun God Nika","Advanced Armament"],
    weakness:"Needs to eat, weakened by sea water",
    lore:"King of the Pirates. Gear 5 unlocked the power of the Sun God Nika — his body moves like a cartoon and reality bends to his will and imagination.",
    winQuotes:["Shishishi! That was fun!","I'm gonna be King of the Pirates!","Meat! I need meat after that!"],
    loseQuotes:["I'm not done yet!","I'll get stronger and come back!","Zoro would've won that..."]
  },
  {
    id:"roger", name:"Gol D. Roger", alias:"Pirate King", series:"One Piece",
    tier:"S+", color:"#FFD700", emoji:"💀",
    stats:{power:96,speed:94,durability:95,intelligence:94,technique:97,ki:0,haki:99,cursedEnergy:0,cosmicPower:75},
    powerScale:9000000,
    abilities:["Conqueror's Haki","Voice of All Things","Advanced Haki","Supreme King","Awakened Swordsmanship"],
    weakness:"Terminal illness",
    lore:"The only man to conquer the Grand Line and claim the title of Pirate King. His Conqueror's Haki could knock out entire armies unconsciously.",
    winQuotes:["I won't run and I won't surrender!","Setting the world ablaze with my will!","That's what it means to be King!"],
    loseQuotes:["Ha! Not bad!","You've got the makings of a King.","The age of pirates has only just begun."]
  },
  {
    id:"shanks", name:"Shanks", alias:"Red-Haired Shanks", series:"One Piece",
    tier:"S+", color:"#CC0000", emoji:"⚔️",
    stats:{power:95,speed:95,durability:94,intelligence:96,technique:96,ki:0,haki:99,cursedEnergy:0,cosmicPower:72},
    powerScale:8900000,
    abilities:["Conqueror's Haki","Advanced Armament","Observation Haki","Supreme King Slash","Divine Departure"],
    weakness:"Missing arm",
    lore:"One of the Four Emperors. A single manifestation of his Conqueror's Haki was enough to stop a war between the Marines and Whitebeard's crew cold.",
    winQuotes:["Put that down — before you hurt yourself.","A good fight!","The sea is vast and full of powerful people."],
    loseQuotes:["Haha! You got me.","Not bad at all.","Let's share a drink after."]
  },
  {
    id:"whitebeard", name:"Edward Newgate", alias:"Whitebeard", series:"One Piece",
    tier:"S+", color:"#4488FF", emoji:"🌊",
    stats:{power:97,speed:85,durability:98,intelligence:90,technique:91,ki:0,haki:97,cursedEnergy:0,cosmicPower:75},
    powerScale:8700000,
    abilities:["Gura Gura no Mi","Earthquake Fists","Shockwave","Conqueror's Haki","Whitebeard's Naginata"],
    weakness:"Severe illness, sacrificed himself",
    lore:"The World's Strongest Man before Roger's era ended. His Devil Fruit could destroy the world. Even ill and near death he fought the entire Navy and never fell in battle.",
    winQuotes:["GURARARara! That tickled!","You fight with the spirit of a son.","The world trembles before Whitebeard!"],
    loseQuotes:["Grararara... impressive.","A father protects his family...","Marco..."]
  }
];

// ── SERIES LIST (alphabetical) ────────────────
const SERIES_LIST = [
  "All",
  "Attack on Titan",
  "Bleach",
  "Demon Slayer",
  "Dragon Ball Z",
  "Hunter x Hunter",
  "Invincible",
  "Jujutsu Kaisen",
  "My Hero Academia",
  "Naruto: Shippuden",
  "One Piece"
];

// ── POWER SCALE TIERS ─────────────────────────
const TIERS = {
  "GOD": { label:"GOD TIER",  color:"#FFD700", min:9400000 },
  "S+":  { label:"S+ TIER",   color:"#FF4444", min:8500000 },
  "S":   { label:"S TIER",    color:"#FF8800", min:7000000 },
  "A+":  { label:"A+ TIER",   color:"#00CCFF", min:4800000 },
  "A":   { label:"A TIER",    color:"#00FF88", min:3000000 },
  "B":   { label:"B TIER",    color:"#AAAAAA", min:0 }
};

// ── BATTLE ENGINE ─────────────────────────────
function calculateBattleResult(teams) {
  function getEffectivePower(char) {
    const s = char.stats;
    const bonus = (
      s.power*0.25 + s.speed*0.15 + s.durability*0.15 +
      s.intelligence*0.10 + s.technique*0.10 +
      (s.haki+s.ki+s.cursedEnergy)*0.15 + s.cosmicPower*0.10
    ) / 100;
    return Math.floor(char.powerScale * bonus * 1.2);
  }

  const scores = teams.map(team =>
    team.reduce((sum, c) => sum + getEffectivePower(c), 0)
  );

  const variance = 0.08;
  const randScores = scores.map(s => s * (1 + (Math.random()*variance*2 - variance)));

  let winnerIdx = 0;
  randScores.forEach((s, i) => { if (s > randScores[winnerIdx]) winnerIdx = i; });

  const maxScore = randScores[winnerIdx];
  const secondMax = Math.max(...randScores.filter((_, i) => i !== winnerIdx));
  const margin = (maxScore - secondMax) / maxScore;

  let battleType = "DECISIVE";
  if (margin < 0.03)      battleType = "PHOTO FINISH";
  else if (margin < 0.10) battleType = "CLOSE BATTLE";
  else if (margin < 0.25) battleType = "CLEAR WIN";
  else                    battleType = "TOTAL DOMINATION";

  const winningTeam = teams[winnerIdx];
  const mvp = winningTeam.reduce((best, c) =>
    getEffectivePower(c) > getEffectivePower(best) ? c : best
  );

  const total = randScores.reduce((a,b)=>a+b,0);
  const powerPcts = randScores.map(s => Math.round((s/total)*100));

  return {
    winnerIdx, winningTeam, scores: randScores.map(Math.floor),
    battleType, margin: (margin*100).toFixed(1), mvp, powerPcts
  };
}
