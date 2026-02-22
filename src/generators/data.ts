import type { SimpleGenerator, TableGenerator } from "@/lib/types";

//! Conventions:
// - "2Dh6" — roll 2D6, keep highest
// - "2Dl6" — roll 2D6, keep lowest

//#region Crew Type
const crewType: SimpleGenerator = {
  title: "Crew Type",
  dice: 100,
  table: [
    { roll: "1-60", result: "Baseline Human" },
    { roll: "61-80", result: "Primary Alien" },
    { roll: "81-90", result: "Bot" },
    { roll: "91-100", result: "Strange Character" },
  ],
};

const primaryAlien: SimpleGenerator = {
  title: "PrimaryAlien",
  dice: 100,
  table: [
    { roll: "1-20", result: "Engineer" },
    { roll: "21-40", result: "K'Erin" },
    { roll: "41-50", result: "Soulless" },
    { roll: "51-70", result: "Precursor" },
    { roll: "71-90", result: "Feral" },
    { roll: "91-100", result: "Swift" },
  ],
};

const strangeCharacter: SimpleGenerator = {
  title: "Strange Character",
  dice: 100,
  table: [
    { roll: "1-2", result: "De-converted" },
    { roll: "3-8", result: "Unity Agent" },
    { roll: "9-17", result: "Mysterious Past" },
    { roll: "18-22", result: "Hakshan" },
    { roll: "23-27", result: "Stalker" },
    { roll: "28-34", result: "Hulker" },
    { roll: "35-41", result: "Hopeful Rookie" },
    { roll: "42-47", result: "Genetic Uplift" },
    { roll: "48-53", result: "Mutant" },
    { roll: "54-58", result: "Assault Bot" },
    { roll: "59-62", result: "Manipulator" },
    { roll: "63-67", result: "Primitive" },
    { roll: "68-73", result: "Feeler" },
    { roll: "74-79", result: "Emo-suppressed" },
    { roll: "80-85", result: "Minor Alien" },
    { roll: "86-87", result: "Traveler" },
    { roll: "88-93", result: "Empath" },
    { roll: "94-100", result: "Bio-upgrade" },
  ],
};
//#endregion

//#region Background, motivation, class
const backgroundTable: TableGenerator = {
  title: "Background Table",
  dice: 100,
  table: [
    {
      roll: "1-4",
      columns: [
        { header: "Background", result: "Peaceful, High-Tech Colony" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "5-9",
      columns: [
        { header: "Background", result: "Giant, Overcrowded, Dystopian City" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "10-13",
      columns: [
        { header: "Background", result: "Low-Tech Colony" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "14-17",
      columns: [
        { header: "Background", result: "Mining Colony" },
        { header: "Effect", result: "+1 Toughness" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "18-21",
      columns: [
        { header: "Background", result: "Military Brat" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "22-25",
      columns: [
        { header: "Background", result: "Space Station" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "26-29",
      columns: [
        { header: "Background", result: "Military Outpost" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "30-34",
      columns: [
        { header: "Background", result: "Drifter" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "35-39",
      columns: [
        { header: "Background", result: "Lower Megacity Class" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "40-42",
      columns: [
        { header: "Background", result: "Wealthy Merchant Family" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+2D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "43-46",
      columns: [
        { header: "Background", result: "Frontier Gang" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "47-49",
      columns: [
        { header: "Background", result: "Religious Cult" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "50-52",
      columns: [
        { header: "Background", result: "War-Torn Hell-Hole" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Military Weapon" },
      ],
    },
    {
      roll: "53-55",
      columns: [
        { header: "Background", result: "Tech Guild" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "+1 High-tech Weapon" },
      ],
    },
    {
      roll: "56-59",
      columns: [
        { header: "Background", result: "Subjugated Colony on Alien World" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gadget" },
      ],
    },
    {
      roll: "60-64",
      columns: [
        { header: "Background", result: "Long-Term Space Mission" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "65-68",
      columns: [
        { header: "Background", result: "Research Outpost" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gadget" },
      ],
    },
    {
      roll: "69-72",
      columns: [
        { header: "Background", result: "Primitive or Regressed World" },
        { header: "Effect", result: "+1 Toughness" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "73-76",
      columns: [
        { header: "Background", result: "Orphan Utility Program" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "77-80",
      columns: [
        { header: "Background", result: "Isolationist Enclave" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "2 Quest Rumors" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "81-84",
      columns: [
        { header: "Background", result: "Comfortable Megacity Class" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "85-89",
      columns: [
        { header: "Background", result: "Industrial World" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "90-93",
      columns: [
        { header: "Background", result: "Bureaucrat" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "94-97",
      columns: [
        { header: "Background", result: "Wasteland Nomads" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "98-100",
      columns: [
        { header: "Background", result: "Alien Culture" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 High-tech Weapon" },
      ],
    },
  ],
};

const motivationTable: TableGenerator = {
  title: "Motivation Table",
  dice: 100,
  table: [
    {
      roll: "1-8",
      columns: [
        { header: "Motivation", result: "Wealth" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "9-14",
      columns: [
        { header: "Motivation", result: "Fame" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "15-19",
      columns: [
        { header: "Motivation", result: "Glory" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Military Weapon" },
      ],
    },
    {
      roll: "20-26",
      columns: [
        { header: "Motivation", result: "Survival" },
        { header: "Effect", result: "+1 Toughness" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "27-32",
      columns: [
        { header: "Motivation", result: "Escape" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "33-39",
      columns: [
        { header: "Motivation", result: "Adventure" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "40-44",
      columns: [
        { header: "Motivation", result: "Truth" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "1 Rumor, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "45-49",
      columns: [
        { header: "Motivation", result: "Technology" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gadget" },
      ],
    },
    {
      roll: "50-56",
      columns: [
        { header: "Motivation", result: "Discovery" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "57-63",
      columns: [
        { header: "Motivation", result: "Loyalty" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "64-69",
      columns: [
        { header: "Motivation", result: "Revenge" },
        { header: "Effect", result: "+2 XP" },
        { header: "Resources", result: "Rival" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "70-74",
      columns: [
        { header: "Motivation", result: "Romance" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "1 Rumor, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "75-79",
      columns: [
        { header: "Motivation", result: "Faith" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "1 Rumor, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "80-84",
      columns: [
        { header: "Motivation", result: "Political" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "85-90",
      columns: [
        { header: "Motivation", result: "Power" },
        { header: "Effect", result: "+2 XP" },
        { header: "Resources", result: "Rival" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "91-95",
      columns: [
        { header: "Motivation", result: "Order" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "96-100",
      columns: [
        { header: "Motivation", result: "Freedom" },
        { header: "Effect", result: "+2 XP" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
  ],
};

const classTable: TableGenerator = {
  title: "Class Table",
  dice: 100,
  table: [
    {
      roll: "1-5",
      columns: [
        { header: "Class", result: "Working Class" },
        { header: "Effect", result: "+1 Savvy, +1 Luck" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "6-9",
      columns: [
        { header: "Class", result: "Technician" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "10-13",
      columns: [
        { header: "Class", result: "Scientist" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gadget" },
      ],
    },
    {
      roll: "14-17",
      columns: [
        { header: "Class", result: "Hacker" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "Rival" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "18-22",
      columns: [
        { header: "Class", result: "Soldier" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "23-27",
      columns: [
        { header: "Class", result: "Mercenary" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Military Weapon" },
      ],
    },
    {
      roll: "28-32",
      columns: [
        { header: "Class", result: "Agitator" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Rival" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "33-36",
      columns: [
        { header: "Class", result: "Primitive" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "37-40",
      columns: [
        { header: "Class", result: "Artist" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+1D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "41-44",
      columns: [
        { header: "Class", result: "Negotiator" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "Patron, +1 story point" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "45-49",
      columns: [
        { header: "Class", result: "Trader" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "+2D6 credits" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "50-54",
      columns: [
        { header: "Class", result: "Starship Crew" },
        { header: "Effect", result: "+1 Savvy" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "55-58",
      columns: [
        { header: "Class", result: "Petty Criminal" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "59-63",
      columns: [
        { header: "Class", result: "Ganger" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "64-67",
      columns: [
        { header: "Class", result: "Scoundrel" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "68-71",
      columns: [
        { header: "Class", result: "Enforcer" },
        { header: "Effect", result: "+1 Combat Skill" },
        { header: "Resources", result: "Patron" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "72-75",
      columns: [
        { header: "Class", result: "Special Agent" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "Patron" },
        { header: "Starting Rolls", result: "+1 Gadget" },
      ],
    },
    {
      roll: "76-79",
      columns: [
        { header: "Class", result: "Troubleshooter" },
        { header: "Effect", result: "+1 Reactions" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "80-83",
      columns: [
        { header: "Class", result: "Bounty Hunter" },
        { header: "Effect", result: "+1 Speed" },
        { header: "Resources", result: "1 Rumor" },
        { header: "Starting Rolls", result: "+1 Low-tech Weapon" },
      ],
    },
    {
      roll: "84-88",
      columns: [
        { header: "Class", result: "Nomad" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "89-92",
      columns: [
        { header: "Class", result: "Explorer" },
        { header: "Effect", result: "+2 XP" },
        { header: "Resources", result: "-" },
        { header: "Starting Rolls", result: "+1 Gear" },
      ],
    },
    {
      roll: "93-96",
      columns: [
        { header: "Class", result: "Punk" },
        { header: "Effect", result: "+2 XP" },
        { header: "Resources", result: "Rival" },
        { header: "Starting Rolls", result: "-" },
      ],
    },
    {
      roll: "97-100",
      columns: [
        { header: "Class", result: "Scavenger" },
        { header: "Effect", result: "-" },
        { header: "Resources", result: "1 Rumor" },
        { header: "Starting Rolls", result: "+1 High-tech Weapon" },
      ],
    },
  ],
};
//#endregion

//#region Crew equipment
const lowTechWeapon: SimpleGenerator = {
  title: "Low Tech Weapon",
  dice: 100,
  table: [
    { roll: "1-15", result: "Handgun" },
    { roll: "16-35", result: "Scrap Pistol" },
    { roll: "36-40", result: "Machine Pistol" },
    { roll: "41-65", result: "Colony Rifle" },
    { roll: "66-75", result: "Shotgun" },
    { roll: "76-80", result: "Hunting Rifle" },
    { roll: "81-95", result: "Blade" },
    { roll: "96-100", result: "Brutal Melee Weapon" },
  ],
};

const miliaryWeapon: SimpleGenerator = {
  title: "Military Weapon",
  dice: 100,
  table: [
    { roll: "1-25", result: "Military Rifle" },
    { roll: "26-45", result: "Infantry Laser" },
    { roll: "46-50", result: "Marksman's Rifle" },
    { roll: "51-60", result: "Needle Rifle" },
    { roll: "61-75", result: "Auto Rifle" },
    { roll: "76-80", result: "Rattle Gun" },
    { roll: "81-95", result: "Boarding Saber" },
    { roll: "96-100", result: "Shatter Axe" },
  ],
};

const highTechWeapon: SimpleGenerator = {
  title: "High Tech Weapon",
  dice: 100,
  table: [
    { roll: "1-5", result: "Dueling Pistol" },
    { roll: "6-15", result: "Hand Cannon" },
    { roll: "16-30", result: "Hand Laser" },
    { roll: "31-45", result: "Beam Pistol" },
    { roll: "46-55", result: "Infantry Laser" },
    { roll: "56-70", result: "Blast Pistol" },
    { roll: "71-80", result: "Blast Rifle" },
    { roll: "81-85", result: "Plasma Rifle" },
    { roll: "86-100", result: "Glare Sword" },
  ],
};

const gearTable: SimpleGenerator = {
  title: "Gear Table",
  dice: 100,
  table: [
    { roll: "1-4", result: "Assault Blade" },
    { roll: "5-10", result: "Beam Light" },
    { roll: "11-15", result: "Bipod" },
    { roll: "16-20", result: "Booster Pills" },
    { roll: "21-24", result: "Camo Cloak" },
    { roll: "25-28", result: "Combat Armor" },
    { roll: "29-33", result: "Communicator" },
    { roll: "34-37", result: "Concealed Blade" },
    { roll: "38-42", result: "Fake ID" },
    { roll: "43-46", result: "Fixer" },
    { roll: "47-52", result: "Frag Vest" },
    { roll: "53-57", result: "Grapple Launcher" },
    { roll: "58-61", result: "Hazard Suit" },
    { roll: "62-65", result: "Laser Sight" },
    { roll: "66-69", result: "Loaded Dice" },
    { roll: "70-75", result: "Med-patch" },
    { roll: "76-81", result: "Nano-doc" },
    { roll: "82-85", result: "Purifier" },
    { roll: "86-89", result: "Scanner bot" },
    { roll: "90-92", result: "Sector Permit" },
    { roll: "93-96", result: "Steel Boots" },
    { roll: "97-100", result: "Tracker Sight" },
  ],
};

const gadgetTable: SimpleGenerator = {
  title: "Gadget Table",
  dice: 100,
  table: [
    { roll: "1-4", result: "AI Companion" },
    { roll: "5-9", result: "Analyzer" },
    { roll: "10-13", result: "Battle Visor" },
    { roll: "14-17", result: "Boosted Arm" },
    { roll: "18-21", result: "Boosted Leg" },
    { roll: "22-24", result: "Cyber Hand" },
    { roll: "25-27", result: "Displacer" },
    { roll: "28-31", result: "Distraction Bot" },
    { roll: "32-36", result: "Duplicator" },
    { roll: "37-41", result: "Insta-Wall" },
    { roll: "42-46", result: "Jump Belt" },
    { roll: "47-50", result: "Nerve Adjuster" },
    { roll: "51-55", result: "Repair Bot" },
    { roll: "56-60", result: "Scanner Bot" },
    { roll: "61-65", result: "Screen Generator" },
    { roll: "66-69", result: "Seeker Sight" },
    { roll: "70-73", result: "Shock Attachment" },
    { roll: "74-79", result: "Snooper Bot" },
    { roll: "80-83", result: "Sonic Emitter" },
    { roll: "84-89", result: "Stabilizer" },
    { roll: "90-93", result: "Stealth Gear" },
    { roll: "94-100", result: "Stim-pack" },
  ],
};
//#endregion

//#region Injuries
const injuryTable: TableGenerator = {
  title: "Injury Table",
  dice: 100,
  table: [
    {
      roll: "1-5",
      columns: [
        { header: "Result", result: "Gruesome fate" },
        { header: "Effects", result: "Dead, and all carried equipment is damaged." },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "6-15",
      columns: [
        { header: "Result", result: "Death or permanent injury" },
        { header: "Effects", result: "Dead, or removed from the campaign." },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "16-16",
      columns: [
        { header: "Result", result: "Miraculous escape" },
        {
          header: "Effects",
          result: "The character survives and receives +1 Luck, but all items carried are permanently lost.",
        },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "17-30",
      columns: [
        { header: "Result", result: "Equipment loss" },
        { header: "Effects", result: "Random carried item is damaged." },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "31-45",
      columns: [
        { header: "Result", result: "Crippling wound" },
        {
          header: "Effects",
          result:
            "Require 1D6 credits of surgery immediately, or suffer -1 permanent reduction to highest of Speed or Toughness.",
        },
        { header: "Campaign Turns in Sick Bay", result: "1D6" },
      ],
    },
    {
      roll: "46-54",
      columns: [
        { header: "Result", result: "Serious injury" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Campaign Turns in Sick Bay", result: "1D3+1" },
      ],
    },
    {
      roll: "55-80",
      columns: [
        { header: "Result", result: "Minor injuries" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Campaign Turns in Sick Bay", result: "1" },
      ],
    },
    {
      roll: "81-95",
      columns: [
        { header: "Result", result: "Knocked out" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "96-100",
      columns: [
        { header: "Result", result: "School of hard knocks" },
        { header: "Effects", result: "Earn 1 XP" },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
  ],
};

const botInjuryTable: TableGenerator = {
  title: "Bot Injury Table",
  dice: 100,
  table: [
    {
      roll: "1-5",
      columns: [
        { header: "Result", result: "Obliterated" },
        { header: "Effects", result: "Destroyed, and all carried equipment is damaged." },
        { header: "Repair Time", result: "-" },
      ],
    },
    {
      roll: "6-15",
      columns: [
        { header: "Result", result: "Destroyed" },
        { header: "Effects", result: "Destroyed" },
        { header: "Repair Time", result: "-" },
      ],
    },
    {
      roll: "16-30",
      columns: [
        { header: "Result", result: "Equipment loss" },
        { header: "Effects", result: "Random carried item is damaged." },
        { header: "Repair Time", result: "0" },
      ],
    },
    {
      roll: "31-45",
      columns: [
        { header: "Result", result: "Severe damage" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Repair Time", result: "1D6" },
      ],
    },
    {
      roll: "46-65",
      columns: [
        { header: "Result", result: "Minor damage" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Repair Time", result: "1" },
      ],
    },
    {
      roll: "66-100",
      columns: [
        { header: "Result", result: "Just a few dents" },
        { header: "Effects", result: "No long-term effect" },
        { header: "Repair Time", result: "-" },
      ],
    },
  ],
};
//#endregion

//#region Loot
const lootTable: SimpleGenerator = {
  title: "Loot Table",
  dice: 100,
  table: [
    { roll: "1-25", result: "Weapon Category Subtable" },
    { roll: "26-35", result: "Roll twice on Weapon Category Subtable. Both items require Repair" },
    { roll: "36-45", result: "Roll twice on Gear Subtable. Both items require Repair" },
    { roll: "46-65", result: "Gear Subtable" },
    { roll: "66-80", result: "Odds and Ends Subtable" },
    { roll: "81-100", result: "Rewards Subtable" },
  ],
};

const weaponCategorySubtable: SimpleGenerator = {
  title: "Weapon Category Subtable",
  dice: 100,
  table: [
    { roll: "1-35", result: "Slug Weapons Subtable" },
    { roll: "36-50", result: "Energy Weapons Subtable" },
    { roll: "51-65", result: "Special Weapons Subtable" },
    { roll: "66-85", result: "Melee Weapons Subtable" },
    { roll: "86-100", result: "Grenades Subtable" },
  ],
};

const energyWeaponsSubtable: SimpleGenerator = {
  title: "Energy Weapons Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Hand Laser" },
    { roll: "21-35", result: "Beam Pistol" },
    { roll: "36-55", result: "Infantry Laser" },
    { roll: "56-70", result: "Blast Pistol" },
    { roll: "71-90", result: "Blast Rifle" },
    { roll: "91-100", result: "Hyper Blaster" },
  ],
};

const slugWeaponsSubtable: SimpleGenerator = {
  title: "Slug Weapons Subtable",
  dice: 100,
  table: [
    { roll: "1-5", result: "Hold Out Pistol" },
    { roll: "6-13", result: "Hand Gun" },
    { roll: "14-18", result: "Scrap Pistol" },
    { roll: "19-26", result: "Machine Pistol" },
    { roll: "27-32", result: "Duelling Pistol" },
    { roll: "33-37", result: "Hand Cannon" },
    { roll: "38-46", result: "Colony Rifle" },
    { roll: "47-56", result: "Military Rifle" },
    { roll: "57-65", result: "Shotgun" },
    { roll: "66-70", result: "Flak Gun" },
    { roll: "71-78", result: "Hunting Rifle" },
    { roll: "79-83", result: "Marksman's Rifle" },
    { roll: "84-92", result: "Auto Rifle" },
    { roll: "93-100", result: "Rattle Gun" },
  ],
};

const specialWeaponsSubtable: SimpleGenerator = {
  title: "Special Weapons Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Needle Rifle" },
    { roll: "21-45", result: "Plasma Rifle" },
    { roll: "46-60", result: "Fury Rifle" },
    { roll: "61-75", result: "Shell Gun" },
    { roll: "76-90", result: "Cling Fire Pistol" },
    { roll: "91-100", result: "Hand Flamer" },
  ],
};

const meleeWeaponsSubtable: SimpleGenerator = {
  title: "Melee Weapons Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Blade" },
    { roll: "21-40", result: "Brutal Melee Weapon" },
    { roll: "41-55", result: "Boarding Saber" },
    { roll: "56-75", result: "Ripper Sword" },
    { roll: "76-85", result: "Shatter Axe" },
    { roll: "86-90", result: "Power Claw" },
    { roll: "91-95", result: "Glare Sword" },
    { roll: "96-100", result: "Suppression Maul" },
  ],
};

const grenadesSubtable: SimpleGenerator = {
  title: "Grenades Subtable",
  dice: 100,
  table: [
    { roll: "1-60", result: "3 Frakk Grenades" },
    { roll: "61-100", result: "3 Dazzle grenades" },
  ],
};

const gearSubtableLoot: SimpleGenerator = {
  title: "Gear Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Gun Mods Subtable" },
    { roll: "21-40", result: "Gun Sights Subtable" },
    { roll: "41-75", result: "Protective Items Subtable" },
    { roll: "76-100", result: "Utility Items Subtable" },
  ],
};

const gunModsSubtable: SimpleGenerator = {
  title: "Gun Mods Subtable",
  dice: 100,
  table: [
    { roll: "1-10", result: "Assault Blade" },
    { roll: "11-20", result: "Beam Light" },
    { roll: "21-35", result: "Bipod" },
    { roll: "36-55", result: "Hot Shot Pack" },
    { roll: "56-65", result: "Cyber-configurable Nano-Sludge" },
    { roll: "66-80", result: "Stabilizer" },
    { roll: "81-90", result: "Shock Attachment" },
    { roll: "91-100", result: "Upgrade Kit" },
  ],
};

const gunSightsSubtable: SimpleGenerator = {
  title: "Gun Sights Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Laser Sight" },
    { roll: "21-45", result: "Quality Sight" },
    { roll: "46-70", result: "Seeker Sight" },
    { roll: "71-85", result: "Tracker Sight" },
    { roll: "86-100", result: "Unity Battle Sight" },
  ],
};

const protectiveItemsSubtable: SimpleGenerator = {
  title: "Protective Items Subtable",
  dice: 100,
  table: [
    { roll: "1-5", result: "Battle Dress" },
    { roll: "6-15", result: "Camo Cloak" },
    { roll: "16-40", result: "Combat Armor" },
    { roll: "41-50", result: "Deflector Field" },
    { roll: "51-65", result: "Flak Screen" },
    { roll: "66-75", result: "Flex-Armor" },
    { roll: "76-90", result: "Frag Vest" },
    { roll: "91-95", result: "Screen Generator" },
    { roll: "96-100", result: "Stealth Gear" },
  ],
};

const utilityItemsSubtable: SimpleGenerator = {
  title: "Utility Items Subtable",
  dice: 100,
  table: [
    { roll: "1-6", result: "Auto Sensor" },
    { roll: "7-11", result: "Battle Visor" },
    { roll: "12-17", result: "Communicator" },
    { roll: "18-23", result: "Concealed Blade" },
    { roll: "24-29", result: "Displacer" },
    { roll: "30-34", result: "Distraction Bot" },
    { roll: "35-38", result: "Grapple Launcher" },
    { roll: "39-43", result: "Grav Dampener" },
    { roll: "44-49", result: "Hazard Suit" },
    { roll: "50-54", result: "Hover Board" },
    { roll: "55-57", result: "Insta-Wall" },
    { roll: "58-63", result: "Jump Belt" },
    { roll: "64-70", result: "Motion Tracker" },
    { roll: "71-75", result: "Multi-Cutter" },
    { roll: "76-79", result: "Robo-Rabbit's Foot" },
    { roll: "80-84", result: "Scanner Bot" },
    { roll: "85-89", result: "Snooper Bot" },
    { roll: "90-93", result: "Sonic Emitter" },
    { roll: "94-96", result: "Steel Boots" },
    { roll: "97-100", result: "Time Distorter" },
  ],
};

const oddsAndEndsTable: SimpleGenerator = {
  title: "Odds and Ends Table",
  dice: 100,
  table: [
    { roll: "1-55", result: "Consumables Subtable" },
    { roll: "56-70", result: "Implants Subtable" },
    { roll: "71-100", result: "Ship Items Subtable" },
  ],
};

const consumablesSubtable: SimpleGenerator = {
  title: "Consumables Subtable",
  dice: 100,
  table: [
    { roll: "1-20", result: "Booster Pills" },
    { roll: "21-30", result: "Combat Serum" },
    { roll: "31-40", result: "Kiranin Crystals" },
    { roll: "41-55", result: "Rage Out" },
    { roll: "56-70", result: "Still" },
    { roll: "71-100", result: "Stim-pack" },
  ],
};

const implantsSubtable: SimpleGenerator = {
  title: "Implants Subtable",
  dice: 100,
  table: [
    { roll: "1-10", result: "AI Companion" },
    { roll: "11-16", result: "Body Wire" },
    { roll: "17-28", result: "Boosted Arm" },
    { roll: "29-40", result: "Boosted Leg" },
    { roll: "41-50", result: "Cyber Hand" },
    { roll: "51-61", result: "Genetic Defenses" },
    { roll: "62-71", result: "Health Boost" },
    { roll: "72-79", result: "Nerve Adjuster" },
    { roll: "80-85", result: "Neural Optimization" },
    { roll: "86-94", result: "Night Sight" },
    { roll: "95-100", result: "Pain Suppressor" },
  ],
};

const shipItemsSubtable: SimpleGenerator = {
  title: "Ship Items Subtable",
  dice: 100,
  table: [
    { roll: "1-4", result: "Analyzer" },
    { roll: "5-11", result: "Colonist Ration Packs" },
    { roll: "12-17", result: "Duplicator" },
    { roll: "18-24", result: "Fake ID" },
    { roll: "25-31", result: "Fixer" },
    { roll: "32-34", result: "Genetic Reconfiguration Kit" },
    { roll: "35-39", result: "Loaded Dice" },
    { roll: "40-44", result: "Lucky Dice" },
    { roll: "45-48", result: "Mk II Translator" },
    { roll: "49-56", result: "Med-patch" },
    { roll: "57-60", result: "Meditation Orb" },
    { roll: "61-67", result: "Nano-doc" },
    { roll: "68-71", result: "Novelty Stuffed Animal" },
    { roll: "72-74", result: "Purifier" },
    { roll: "75-78", result: "Repair Bot" },
    { roll: "79-83", result: "Sector Permit" },
    { roll: "84-91", result: "Spare Parts" },
    { roll: "92-96", result: "Teach-Bot" },
    { roll: "97-100", result: "Transcender" },
  ],
};

const rewardsSubtable: TableGenerator = {
  title: "Rewards Subtable",
  dice: 100,
  table: [
    {
      roll: "1-10",
      columns: [
        { header: "Reward", result: "Documents" },
        { header: "Result", result: "1 Rumor" },
      ],
    },
    {
      roll: "11-20",
      columns: [
        { header: "Reward", result: "Data Files" },
        { header: "Result", result: "2 Rumors" },
      ],
    },
    {
      roll: "21-25",
      columns: [
        { header: "Reward", result: "Scrap" },
        { header: "Result", result: "3 credits" },
      ],
    },
    {
      roll: "26-40",
      columns: [
        { header: "Reward", result: "Cargo Crate" },
        { header: "Result", result: "1D6 credits" },
      ],
    },
    {
      roll: "41-55",
      columns: [
        { header: "Reward", result: "Valuable Materials" },
        { header: "Result", result: "1D6+2 credits" },
      ],
    },
    {
      roll: "56-70",
      columns: [
        { header: "Reward", result: "Rare Substance" },
        { header: "Result", result: "2Dh6 credits" },
      ],
    },
    {
      roll: "71-85",
      columns: [
        { header: "Reward", result: "Ship Parts" },
        { header: "Result", result: "Discount your next ship component purchase by 1D6 credits." },
      ],
    },
    {
      roll: "86-90",
      columns: [
        { header: "Reward", result: "Military Ship Part" },
        {
          header: "Result",
          result: "Discount your next ship component purchase by 1D6+2 credits.",
        },
      ],
    },
    {
      roll: "91-95",
      columns: [
        { header: "Reward", result: "Mysterious Items" },
        { header: "Result", result: "2 story points" },
      ],
    },
    {
      roll: "96-100",
      columns: [
        { header: "Reward", result: "Personal Item" },
        { header: "Result", result: "3 story points" },
      ],
    },
  ],
};
//#endregion

//#region Galactic war
const galacticWarTable: TableGenerator = {
  title: "Galactic War Progress",
  dice: "2D6",
  table: [
    {
      roll: "1-4",
      columns: [
        { header: "Result", result: "Lost to Unity" },
        { header: "Effect", result: "The planet is lost to the invaders and cannot be visited again" },
      ],
    },
    {
      roll: "5-7",
      columns: [
        { header: "Result", result: "Contested" },
        { header: "Effect", result: "No progress" },
      ],
    },
    {
      roll: "8-9",
      columns: [
        { header: "Result", result: "Making Ground" },
        { header: "Effect", result: "Add +1 to all future rolls on this table" },
      ],
    },
    {
      roll: "10-12",
      columns: [
        { header: "Result", result: "Unity Victorious" },
        {
          header: "Effect",
          result:
            "The planet can now be visited again. Due to increased troop presence, all future Invasion Threat rolls on this world are at -2",
        },
      ],
    },
  ],
};
//#endregion

//#region ALL
export const generators = {
  "Crew Type": crewType,
  "Primary Alien": primaryAlien,
  "Strange Character": strangeCharacter,
  "Background Table": backgroundTable,
  "Motivation Table": motivationTable,
  "Class Table": classTable,

  "Low Tech Weapon": lowTechWeapon,
  "Military Weapon": miliaryWeapon,
  "High Tech Weapon": highTechWeapon,
  "Gear Table": gearTable,
  "Gadget Table": gadgetTable,

  "Injury Table": injuryTable,
  "Bot Injury Table": botInjuryTable,

  "Loot Table": lootTable,
  "Weapon Category Subtable": weaponCategorySubtable,
  "Energy Weapons Subtable": energyWeaponsSubtable,
  "Slug Weapons Subtable": slugWeaponsSubtable,
  "Special Weapons Subtable": specialWeaponsSubtable,
  "Melee Weapons Subtable": meleeWeaponsSubtable,
  "Grenades Subtable": grenadesSubtable,
  "Gear Subtable": gearSubtableLoot,
  "Gun Mods Subtable": gunModsSubtable,
  "Gun Sights Subtable": gunSightsSubtable,
  "Protective Items Subtable": protectiveItemsSubtable,
  "Odds and Ends Table": oddsAndEndsTable,
  "Consumables Subtable": consumablesSubtable,
  "Implants Subtable": implantsSubtable,
  "Utility Items Subtable": utilityItemsSubtable,
  "Ship Items Subtable": shipItemsSubtable,
  "Rewards Subtable": rewardsSubtable,

  "Galactic War Progress": galacticWarTable,
} as const satisfies Record<string, SimpleGenerator | TableGenerator>;
//#endregion
