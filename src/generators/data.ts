import { rollD10, rollD6, rollDice } from "@/lib/random";
import type { SimpleGenerator, TableGenerator } from "@/lib/types";
import { getValue } from "./utils";

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
  title: "Low Tech Weapon Table",
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
  title: "Military Weapon Table",
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
  title: "High Tech Weapon Table",
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
        { header: "Effects", result: "Dead, and all carried equipment is damaged" },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "6-15",
      columns: [
        { header: "Result", result: "Death or permanent injury" },
        { header: "Effects", result: "Dead, or removed from the campaign" },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "16-16",
      columns: [
        { header: "Result", result: "Miraculous escape" },
        {
          header: "Effects",
          result: "The character survives and receives +1 Luck, but all items carried are permanently lost",
        },
        { header: "Campaign Turns in Sick Bay", result: "-" },
      ],
    },
    {
      roll: "17-30",
      columns: [
        { header: "Result", result: "Equipment loss" },
        { header: "Effects", result: "Random carried item is damaged" },
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
            "Require 1D6 credits of surgery immediately, or suffer -1 permanent reduction to highest of Speed or Toughness",
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
        { header: "Effects", result: "Destroyed, and all carried equipment is damaged" },
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
        { header: "Effects", result: "Random carried item is damaged" },
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
    { roll: "26-35", result: "Roll twice on the Weapon Category Subtable. Both items require Repair" },
    { roll: "36-45", result: "Roll twice on the Gear Subtable. Both items require Repair" },
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
  title: "Odds and Ends Subtable",
  dice: 100,
  table: [
    { roll: "1-55", result: "Roll once on the Consumables Subtable. 2 uses" },
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
        { header: "Result", result: "Discount your next ship component purchase by 1D6 credits" },
      ],
    },
    {
      roll: "86-90",
      columns: [
        { header: "Reward", result: "Military Ship Part" },
        {
          header: "Result",
          result: "Discount your next ship component purchase by 1D6+2 credits",
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

//#region Trade
const tradeTable: TableGenerator = {
  title: "Trade Table",
  dice: 100,
  table: [
    {
      roll: "1-3",
      columns: [
        { header: "Trade Result", result: "A personal weapon" },
        { header: "Effects", result: "Low Tech Weapon Table" },
      ],
    },
    {
      roll: "4-6",
      columns: [
        { header: "Trade Result", result: "Sell some cargo" },
        { header: "Effects", result: "Earn 2 credits" },
      ],
    },
    {
      roll: "7-9",
      columns: [
        { header: "Trade Result", result: "Find something useful" },
        { header: "Effects", result: "Gear Table" },
      ],
    },
    {
      roll: "10-11",
      columns: [
        { header: "Trade Result", result: "Quality food and booze" },
        { header: "Effects", result: "Recruit a new character to your crew. Single-use" },
      ],
    },
    {
      roll: "12-14",
      columns: [
        { header: "Trade Result", result: "Instruction book" },
        { header: "Effects", result: "A crew member of choice can read it and earn +1 XP. Single-use" },
      ],
    },
    {
      roll: "15-18",
      columns: [
        { header: "Trade Result", result: "Bits of scrap" },
        {
          header: "Effects",
          result: "You sell it on to an interested party, earning 1 credit of profit in the process",
        },
      ],
    },
    {
      roll: "19-22",
      columns: [
        { header: "Trade Result", result: "Medical pack" },
        { header: "Effects", result: "Receive your choice of a Stim-pack or Med-patch" },
      ],
    },
    {
      roll: "23-24",
      skipDiceResolution: true,
      columns: [
        { header: "Trade Result", result: "Worthless trinket" },
        { header: "Effects", result: "Worthless? Roll 1D6. On a 6, earn +1 story point" },
      ],
    },
    {
      roll: "25-26",
      columns: [
        { header: "Trade Result", result: "Local maps" },
        {
          header: "Effects",
          result: "If you receive a Quest on this or the following world, you may immediately add 1 Rumor. Single-use",
        },
      ],
    },
    {
      roll: "27-28",
      columns: [
        { header: "Trade Result", result: "Luxury trinket" },
        {
          header: "Effects",
          result:
            "If Recruiting, you may use it as a gift to receive a +2 bonus to the roll. Alternatively, you can sell it: Roll twice on the Trade Table and select the result you prefer. If a Swift character finds this, they will keep it for themselves, earning +2 XP. Single-use",
        },
      ],
    },
    {
      roll: "29-30",
      columns: [
        { header: "Trade Result", result: "Basic supplies" },
        { header: "Effects", result: "Skip Upkeep costs for one campaign turn. Single-use" },
      ],
    },
    {
      roll: "31-34",
      columns: [
        { header: "Trade Result", result: "Contraband" },
        {
          header: "Effects",
          result:
            "You can turn this down, but if you accept it, you earn 1D6 credits from selling it on. If you roll a 4-6, you also receive a Rival",
        },
      ],
    },
    {
      roll: "35-37",
      columns: [
        { header: "Trade Result", result: "Gun Upgrade Kit" },
        { header: "Effects", result: "Receive your choice of a Laser Sight, Bipod or Beam Light" },
      ],
    },
    {
      roll: "38-39",
      skipDiceResolution: true,
      columns: [
        { header: "Trade Result", result: "Useless trinket" },
        { header: "Effects", result: "Useless? Roll 1D6. On a 6, earn +1 story point" },
      ],
    },
    {
      roll: "40-44",
      skipDiceResolution: true,
      columns: [
        { header: "Trade Result", result: "Trade goods" },
        {
          header: "Effects",
          result:
            "Every time you arrive on a new planet, you may roll 1D6 to see how many Credits the goods will sell for here. You can wait as long as you like, but if you roll a 1, they have perished or become damaged, and are now worthless",
        },
      ],
    },
    {
      roll: "45-48",
      columns: [
        { header: "Trade Result", result: "Something interesting" },
        { header: "Effects", result: "Loot Table" },
      ],
    },
    {
      roll: "49-51",
      columns: [
        { header: "Trade Result", result: "Fuel" },
        {
          header: "Effects",
          result: "You have secured 1D6 credits worth of fuel, which can be used to offset travel costs",
        },
      ],
    },
    {
      roll: "52-53",
      columns: [
        { header: "Trade Result", result: "Spare parts" },
        {
          header: "Effects",
          result:
            "Add +1 when making a Repair attempt. If the roll is a natural 1, the Spare Parts are used up and must be erased from your roster",
        },
      ],
    },
    {
      roll: "54-55",
      skipDiceResolution: true,
      columns: [
        { header: "Trade Result", result: "Tourist garbage" },
        {
          header: "Effects",
          result: "Not actually worth anything, but roll 1D6. On a 5-6, you can add 1 story point",
        },
      ],
    },
    {
      roll: "56-56",
      columns: [
        { header: "Trade Result", result: "Don't usually see these for sale" },
        {
          header: "Effects",
          result:
            "You may pay 3 credits. If you do, you can roll on the Loot Table. The item must be used by the crew member who went trading",
        },
      ],
    },
    {
      roll: "57-59",
      columns: [
        { header: "Trade Result", result: "Ordnance" },
        { header: "Effects", result: "You receive 3 grenades (Frakk or Dazzle in any combination you like)" },
      ],
    },
    {
      roll: "60-62",
      columns: [
        { header: "Trade Result", result: "Basic firearms" },
        { header: "Effects", result: "Your choice of a Handgun, Colony Rifle, or Shotgun" },
      ],
    },
    {
      roll: "63-63",
      skipDiceResolution: true,
      columns: [
        { header: "Trade Result", result: "Odd device" },
        {
          header: "Effects",
          result:
            "If you want to buy this, pay 1 credit, then roll 1D6. On a 6, you can roll on the Loot Table. On any other score, it's complete garbage",
        },
      ],
    },
    {
      roll: "64-65",
      columns: [
        { header: "Trade Result", result: "Military fuel cell" },
        { header: "Effects", result: "Zero travel costs when jumping to a new planet. Single-use" },
      ],
    },
    {
      roll: "66-69",
      columns: [
        { header: "Trade Result", result: "Hot tip" },
        { header: "Effects", result: "Gain 1 Quest Rumor" },
      ],
    },
    {
      roll: "70-71",
      columns: [
        { header: "Trade Result", result: "Insider information" },
        {
          header: "Effects",
          result: "Automatically obtain a Patron next campaign turn, if you look for one. Single-use",
        },
      ],
    },
    {
      roll: "72-75",
      columns: [
        { header: "Trade Result", result: "Army surplus" },
        { header: "Effects", result: "Your choice of an Auto Rifle, Blast Pistol or Glare Sword" },
      ],
    },
    {
      roll: "76-78",
      columns: [
        { header: "Trade Result", result: "A chance to unload some stuff" },
        {
          header: "Effects",
          result: "A revolutionary will buy any weapons for 2 credits each, provided they are not damaged",
        },
      ],
    },
    {
      roll: "79-81",
      columns: [
        { header: "Trade Result", result: "A lot of blinking lights" },
        { header: "Effects", result: "Gear Table" },
      ],
    },
    {
      roll: "82-86",
      columns: [
        { header: "Trade Result", result: "Gently used" },
        {
          header: "Effects",
          result: "Roll once on the Gear Table. The item is damaged and needs Repair",
        },
      ],
    },
    {
      roll: "87-91",
      columns: [
        { header: "Trade Result", result: "Pre-owned" },
        { header: "Effects", result: "Roll once on the Loot Table. The item is damaged and needs Repair" },
      ],
    },
    {
      roll: "92-95",
      columns: [
        { header: "Trade Result", result: "Medical reserves" },
        { header: "Effects", result: "Obtain 2 Stim-packs and 2 Med-patches" },
      ],
    },
    {
      roll: "96-100",
      columns: [
        { header: "Trade Result", result: "Starship repair parts" },
        {
          header: "Effects",
          result: "Count as 1D6 credits for the purpose of repairing Hull Point damage. Single-use",
        },
      ],
    },
  ],
};
//#endregion

//#region Exploration
const explorationTable: TableGenerator = {
  title: "Exploration Table",
  dice: 100,
  table: [
    {
      roll: "1-3",
      columns: [
        { header: "Exploration Result", result: "I know a good deal when I see one" },
        { header: "Effects", result: "Trade Table" },
      ],
    },
    {
      roll: "4-6",
      columns: [
        { header: "Exploration Result", result: "Meet a Patron" },
        { header: "Effects", result: "You are offered a Patron job" },
      ],
    },
    {
      roll: "7-8",
      columns: [
        { header: "Exploration Result", result: "Must've been something I ate" },
        {
          header: "Effects",
          result:
            "The character eats bad food, and must spend 1 campaign turn in Sick Bay. Soulless and K’Erin ignore this event",
        },
      ],
    },
    {
      roll: "9-11",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "Meet someone interesting" },
        {
          header: "Effects",
          result: "Gain a Quest Rumor. A Precursor character may roll 1D6, and on a 5+ receives a second Rumor",
        },
      ],
    },
    {
      roll: "12-15",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "Had a nice chat" },
        { header: "Effects", result: "Roll 1D6+Savvy. On a 5+ gain +1 story point" },
      ],
    },
    {
      roll: "16-18",
      columns: [
        { header: "Exploration Result", result: "See the sights, enjoy the view" },
        { header: "Effects", result: "No effects" },
      ],
    },
    {
      roll: "19-21",
      columns: [
        { header: "Exploration Result", result: "Make a new friend" },
        {
          header: "Effects",
          result:
            "Roll up a new character and add them to the crew. If your character is Feral, the new character is also Feral",
        },
      ],
    },
    {
      roll: "22-24",
      columns: [
        { header: "Exploration Result", result: "Time to relax" },
        { header: "Effects", result: "No effects" },
      ],
    },
    {
      roll: "25-28",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "Possible bargain" },
        {
          header: "Effects",
          result:
            "Give up a weapon of choice, then roll 1D6. On a 6, get a roll on the Loot Table. Otherwise get 1 credit",
        },
      ],
    },
    {
      roll: "29-31",
      columns: [
        { header: "Exploration Result", result: "Alien merchant" },
        { header: "Effects", result: "Give him any item, then roll on the Loot Table" },
      ],
    },
    {
      roll: "32-34",
      columns: [
        { header: "Exploration Result", result: "Got yourself noticed" },
        {
          header: "Effects",
          result: "If you have Rivals, select one at random. You will have to fight them this campaign turn",
        },
      ],
    },
    {
      roll: "35-37",
      columns: [
        { header: "Exploration Result", result: "You hear a tip" },
        { header: "Effects", result: "You may opt to automatically track down a Rival to fight this campaign turn" },
      ],
    },
    {
      roll: "38-40",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "Completely lost" },
        {
          header: "Effects",
          result:
            "Roll 1D6+Savvy. On a 4+ the character finds their way back in time, otherwise they will be unable to participate in a battle this campaign turn. Either way, roll again on this table to see what they find while wandering the streets",
        },
      ],
    },
    {
      roll: "41-44",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "Someone wants a package delivered" },
        {
          header: "Effects",
          result:
            "When you travel to a new world, if this crew member is still in the crew, earn 3 credits and roll 1D6. On 1-2, you've acquired a Rival and receive +1 story point",
        },
      ],
    },
    {
      roll: "45-47",
      skipDiceResolution: true,
      columns: [
        { header: "Exploration Result", result: "A tech fanatic offers to help out" },
        {
          header: "Effects",
          result:
            "Pick a damaged item of equipment and roll 1D6. On 5-6 you have it fixed for free. An Engineer instead spends the afternoon talking shop, earning +2 XP",
        },
      ],
    },
    {
      roll: "48-50",
      columns: [
        { header: "Exploration Result", result: "Got a few drinks" },
        { header: "Effects", result: "No effects" },
      ],
    },
    {
      roll: "51-53",
      columns: [
        { header: "Exploration Result", result: "I don’t have a gambling problem!" },
        {
          header: "Effects",
          result: "Discard one item from the character’s equipment or crew Stash. Soulless ignore this event",
        },
      ],
    },
    {
      roll: "54-57",
      columns: [
        { header: "Exploration Result", result: "Overheard some talk" },
        { header: "Effects", result: "Gain a Rumor" },
      ],
    },
    {
      roll: "58-60",
      columns: [
        { header: "Exploration Result", result: "Pick a fight" },
        {
          header: "Effects",
          result:
            "Add a Rival to your list. If a K’Erin gets this event, add the Rival as normal, but the first time you meet them in battle, they have -1 enemy, as you already knocked one out in the initial brawl",
        },
      ],
    },
    {
      roll: "61-64",
      columns: [
        { header: "Exploration Result", result: "Found a trainer" },
        { header: "Effects", result: "Character earns +2 XP" },
      ],
    },
    {
      roll: "65-68",
      columns: [
        { header: "Exploration Result", result: "Information broker" },
        { header: "Effects", result: "Buy up to 3 Rumors for 2 credits each" },
      ],
    },
    {
      roll: "69-71",
      columns: [
        { header: "Exploration Result", result: "Arms dealer" },
        {
          header: "Effects",
          result: "Purchase any number of rolls on the Military Weapons Table for 3 credits each",
        },
      ],
    },
    {
      roll: "72-75",
      columns: [
        { header: "Exploration Result", result: "Promising lead" },
        { header: "Effects", result: "Earn +3 credits if you do an Opportunity mission this campaign turn" },
      ],
    },
    {
      roll: "76-79",
      columns: [
        { header: "Exploration Result", result: "Just needs a little love" },
        {
          header: "Effects",
          result:
            "You found Roll on the Gadget Table, but the item is damaged and needs to be repaired before it can be used. If the character is an Engineer, the item works right away",
        },
      ],
    },
    {
      roll: "80-82",
      columns: [
        { header: "Exploration Result", result: "Get in a bad fight" },
        {
          header: "Effects",
          result:
            "Character must spend 1D3 campaign turns in Sick Bay, and loses one item of carried equipment (player choice)",
        },
      ],
    },
    {
      roll: "83-86",
      columns: [
        { header: "Exploration Result", result: "Offered a small job" },
        {
          header: "Effects",
          result:
            "When fighting this campaign turn, select a random enemy figure. If your crew kills them, earn 2 credits. No reward if they run away",
        },
      ],
    },
    {
      roll: "87-90",
      columns: [
        { header: "Exploration Result", result: "Offered a reward" },
        {
          header: "Effects",
          result:
            "When fighting this campaign turn, select a random terrain feature. If a crew member moves into contact and spends a Combat Action, you can retrieve a package and earn 2 credits",
        },
      ],
    },
    {
      roll: "91-94",
      columns: [
        { header: "Exploration Result", result: "You make a useful contact" },
        {
          header: "Effects",
          result: "Next campaign turn, add +1 to your choice of a roll to Recruit, Find a Patron, or Track a Rival",
        },
      ],
    },
    {
      roll: "95-96",
      columns: [
        { header: "Exploration Result", result: "Who left this lying around?" },
        { header: "Effects", result: "Add your choice of a Handgun, Blade, Colony Rifle, or Shotgun" },
      ],
    },
    {
      roll: "97-100",
      columns: [
        { header: "Exploration Result", result: "This place is rather nice, really" },
        {
          header: "Effects",
          result:
            "When you are ready to leave this world, unless it is being Invaded, you must pay 1 story point or this crew member will decide to stay behind. If they do, you can keep their equipment, though",
        },
      ],
    },
  ],
};
//#endregion

//#region Jobs
const patronTable: SimpleGenerator = {
  title: "Patron Table",
  dice: 10,
  skipDiceResolution: true,
  table: [
    { roll: "1-2", result: "Corporation" },
    { roll: "3-4", result: "Local Government" },
    { roll: "5-5", result: "Sector Government" },
    { roll: "6-7", result: "Wealthy Individual" },
    { roll: "8-9", result: "Private Organisation" },
    { roll: "10-10", result: "Secretive Group" },
  ],
};

const timeFrameTable: SimpleGenerator = {
  title: "Time Frame Table",
  dice: 10,
  skipDiceResolution: true,
  table: [
    { roll: "1-5", result: "This campaign turn" },
    { roll: "6-7", result: "This or the next campaign turn" },
    { roll: "8-9", result: "This or the following 2 campaign turns" },
    { roll: "10-11", result: "Any time" },
  ],
};

const dangerPayTable: SimpleGenerator = {
  title: "Danger Pay Table",
  dice: 10,
  table: [
    { roll: "1-4", result: "+1 credit" },
    { roll: "5-8", result: "+2 credit" },
    { roll: "9-9", result: "+3 credit" },
    {
      roll: "10-11",
      result: "+3 credits and roll twice, picking the higher die when rolling for mission pay after the battle",
    },
  ],
};

const benefitsSubtable: TableGenerator = {
  title: "Benefits Subtable",
  dice: 10,
  table: [
    {
      roll: "1-2",
      columns: [
        { header: "Benefits", result: "Fringe Benefit" },
        { header: "Effects", result: "Loot Table" },
      ],
    },
    {
      roll: "3-4",
      columns: [
        { header: "Benefits", result: "Connections" },
        { header: "Effects", result: "Gain a Rumor" },
      ],
    },
    {
      roll: "5-5",
      columns: [
        { header: "Benefits", result: "Company Store" },
        { header: "Effects", result: "Trade Table" },
      ],
    },
    {
      roll: "6-6",
      columns: [
        { header: "Benefits", result: "Health Insurance" },
        { header: "Effects", result: "Mark down 2 campaign turns of injury recovery, assigned as you see fit" },
      ],
    },
    {
      roll: "7-7",
      columns: [
        { header: "Benefits", result: "Security Team" },
        { header: "Effects", result: "Reduce enemy force numbers by 1" },
      ],
    },
    {
      roll: "8-9",
      columns: [
        { header: "Benefits", result: "Persistent" },
        { header: "Effects", result: "Patron remains available if you travel" },
      ],
    },
    {
      roll: "10-10",
      columns: [
        { header: "Benefits", result: "Negotiable" },
        {
          header: "Effects",
          result: "If you accept this job, you may reroll the Danger Pay roll and pick the better of the two rolls",
        },
      ],
    },
  ],
};

const hazardsSubtable: TableGenerator = {
  title: "Hazards Subtable",
  dice: 10,
  table: [
    {
      roll: "1-2",
      columns: [
        { header: "Hazards", result: "Dangerous Job" },
        { header: "Effects", result: "Increase enemy force numbers by +1" },
      ],
    },
    {
      roll: "3-4",
      columns: [
        { header: "Hazards", result: "Hot Job" },
        {
          header: "Effects",
          result: "After the job, you will earn an enemy on 1-2 instead of the normal roll of a 1",
        },
      ],
    },
    {
      roll: "5-5",
      columns: [
        { header: "Hazards", result: "VIP" },
        {
          header: "Effects",
          result: "A random enemy will have +1 Toughness and a final Combat Skill of +2 (regardless of current value)",
        },
      ],
    },
    {
      roll: "6-6",
      columns: [
        { header: "Hazards", result: "Veteran Opposition" },
        { header: "Effects", result: "Enemy is -1 to panic range" },
      ],
    },
    {
      roll: "7-7",
      columns: [
        { header: "Hazards", result: "Low Priority" },
        { header: "Effects", result: "Reduce enemy force numbers by 1" },
      ],
    },
    {
      roll: "8-10",
      columns: [
        { header: "Hazards", result: "Private Transport" },
        { header: "Effects", result: "If you have Rivals, they cannot track you this campaign turn" },
      ],
    },
  ],
};

const conditionsSubtable: TableGenerator = {
  title: "Conditions Subtable",
  dice: 10,
  table: [
    {
      roll: "1-1",
      columns: [
        { header: "Conditions", result: "Vengeful" },
        { header: "Effects", result: "If the mission fails, the Patron becomes a Rival" },
      ],
    },
    {
      roll: "2-3",
      columns: [
        { header: "Conditions", result: "Demanding" },
        { header: "Effects", result: "Danger Pay is only upon success" },
      ],
    },
    {
      roll: "4-4",
      columns: [
        { header: "Conditions", result: "Small Squad" },
        { header: "Effects", result: "You cannot deploy more than 4 crew" },
      ],
    },
    {
      roll: "5-5",
      columns: [
        { header: "Conditions", result: "Full Squad" },
        { header: "Effects", result: "You must have 6 available crew" },
      ],
    },
    {
      roll: "6-6",
      columns: [
        { header: "Conditions", result: "Clean" },
        { header: "Effects", result: "You cannot ever have made law enforcement Rivals" },
      ],
    },
    {
      roll: "7-8",
      columns: [
        { header: "Conditions", result: "Busy" },
        { header: "Effects", result: "If the mission is a success, the Patron offers a new job next campaign turn" },
      ],
    },
    {
      roll: "9-9",
      columns: [
        { header: "Conditions", result: "One-time Contract" },
        { header: "Effects", result: "This Patron cannot be retained as a contact" },
      ],
    },
    {
      roll: "10-10",
      columns: [
        { header: "Conditions", result: "Reputation Required" },
        { header: "Effects", result: "You must have completed a prior Patron job on this world" },
      ],
    },
  ],
};
//#endregion

//#region World trait
const restrictedSpeciesTable: SimpleGenerator = {
  title: "Restricted Species",
  dice: 10,
  table: [
    { roll: "1-1", result: "Engineer" },
    { roll: "2-4", result: "K'Erin" },
    { roll: "5-5", result: "Soulless" },
    { roll: "6-6", result: "Precursor" },
    { roll: "7-9", result: "Feral" },
    { roll: "10-10", result: "Swift" },
  ],
};

const worldTraitsTable: TableGenerator = {
  title: "World Traits Table",
  dice: 100,
  table: [
    {
      roll: "1-3",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Haze" },
        { header: "Description", result: 'During battle, visibility is reduced to 1D6+8".' },
      ],
    },
    {
      roll: "4-6",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Overgrown" },
        {
          header: "Description",
          result:
            'When setting up the table, you must add 1D6+2 individual plant features or 1D3 areas of vegetation (roughly 3-5" across)',
        },
      ],
    },
    {
      roll: "7-8",
      columns: [
        { header: "Trait", result: "Warzone" },
        {
          header: "Description",
          result: "When setting up the table, you must add 1D3 ruined buildings or craters to the table",
        },
      ],
    },
    {
      roll: "9-10",
      columns: [
        { header: "Trait", result: "Heavily enforced" },
        {
          header: "Description",
          result:
            "When fighting opponents from the Criminal Elements Encounter Table, the number encountered is reduced by 1. When rolling to see if they become Rivals, only roll a single die as normal",
        },
      ],
    },
    {
      roll: "11-12",
      columns: [
        { header: "Trait", result: "Rampant crime" },
        {
          header: "Description",
          result: "When fighting opponents from the Criminal Elements encounter list, add 1 to the number encountered",
        },
      ],
    },
    {
      roll: "13-14",
      columns: [
        { header: "Trait", result: "Invasion risk" },
        { header: "Description", result: "Add +1 to all Invasion rolls" },
      ],
    },
    {
      roll: "15-16",
      columns: [
        { header: "Trait", result: "Imminent invasion" },
        {
          header: "Description",
          result: "Add +2 to all Invasion rolls and if the world is invaded, rolls for war progress are at -1",
        },
      ],
    },
    {
      roll: "17-18",
      columns: [
        { header: "Trait", result: "Lacks starship facilities" },
        {
          header: "Description",
          result: "You cannot spend more than 3 credits per campaign turn on starship Repairs",
        },
      ],
    },
    {
      roll: "19-20",
      columns: [
        { header: "Trait", result: "Easy recruiting" },
        { header: "Description", result: "Add +1 to the roll when Recruiting" },
      ],
    },
    {
      roll: "21-22",
      columns: [
        { header: "Trait", result: "Medical science" },
        { header: "Description", result: "The cost for accelerated medical care is only 3 credits per character" },
      ],
    },
    {
      roll: "23-24",
      columns: [
        { header: "Trait", result: "Technical knowledge" },
        { header: "Description", result: "Add +1 to all Repair attempts" },
      ],
    },
    {
      roll: "25-26",
      columns: [
        { header: "Trait", result: "Opportunities" },
        { header: "Description", result: "Add +1 to the roll when searching for Patrons" },
      ],
    },
    {
      roll: "27-29",
      columns: [
        { header: "Trait", result: "Booming economy" },
        {
          header: "Description",
          result:
            "When rolling for post-battle credit rewards, any 1 on the dice is rerolled until it shows a score other than 1",
        },
      ],
    },
    {
      roll: "30-32",
      columns: [
        { header: "Trait", result: "Busy markets" },
        {
          header: "Description",
          result: "Each campaign turn, you may spend 2 credits once to roll on the Trade Table",
        },
      ],
    },
    {
      roll: "33-34",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Bureaucratic mess" },
        {
          header: "Description",
          result:
            "When attempting to leave, you must roll 2D6. On a 2-4, you are delayed and cannot leave this campaign turn without a bribe equal to the roll in credits. You may try again next campaign turn",
        },
      ],
    },
    {
      roll: "35-36",
      columns: [
        { header: "Trait", result: "Restricted education" },
        { header: "Description", result: "You must roll 6+ to be approved for Advanced Training on this world" },
      ],
    },
    {
      roll: "37-38",
      columns: [
        { header: "Trait", result: "Expensive education" },
        { header: "Description", result: "The fee to enroll in Advanced Training is 3 credits" },
      ],
    },
    {
      roll: "39-41",
      columns: [
        { header: "Trait", result: "Travel restricted" },
        {
          header: "Description",
          result: "No more than one crew member may take the Explore option each campaign turn",
        },
      ],
    },
    {
      roll: "42-43",
      columns: [
        { header: "Trait", result: "Unity safe sector" },
        { header: "Description", result: "The world cannot be Invaded" },
      ],
    },
    {
      roll: "44-46",
      columns: [
        { header: "Trait", result: "Gloom" },
        { header: "Description", result: 'In battle, maximum visibility is restricted to 1D6+6".' },
      ],
    },
    {
      roll: "47-48",
      columns: [
        { header: "Trait", result: "Bot manufacturing" },
        { header: "Description", result: "All Bot upgrades are 1 credit cheaper" },
      ],
    },
    {
      roll: "49-51",
      columns: [
        { header: "Trait", result: "Fuel refinery" },
        { header: "Description", result: "Traveling from this world costs only 3 credits" },
      ],
    },
    {
      roll: "52-53",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Alien species restricted" },
        {
          header: "Description",
          result: () => {
            const species = getValue(rollD10(), restrictedSpeciesTable);

            return `${species} cannot be hired here (count as baseline Humans instead), and cannot undertake any crew jobs. They may participate in combat normally.`;
          },
        },
      ],
    },
    {
      roll: "54-55",
      columns: [
        { header: "Trait", result: "Weapon licensing" },
        {
          header: "Description",
          result: "Any weapon obtained through the Trade Table or purchased outright costs +1 credit",
        },
      ],
    },
    {
      roll: "56-57",
      columns: [
        { header: "Trait", result: "Import restrictions" },
        { header: "Description", result: "You cannot sell any items on this world" },
      ],
    },
    {
      roll: "58-59",
      columns: [
        { header: "Trait", result: "Military outpost" },
        { header: "Description", result: "Add +2 to Invasion rolls. Add +2 when checking for war progress" },
      ],
    },
    {
      roll: "60-62",
      columns: [
        { header: "Trait", result: "Dangerous" },
        {
          header: "Description",
          result: "When rolling on the Roving Threats Encounter Table, increase the number of opponents by +1",
        },
      ],
    },
    {
      roll: "63-64",
      columns: [
        { header: "Trait", result: "Shipyards" },
        { header: "Description", result: "The cost of all Ship Components is reduced by 2 credits" },
      ],
    },
    {
      roll: "65-67",
      columns: [
        { header: "Trait", result: "Barren" },
        { header: "Description", result: "No plant features can be used on the battlefield" },
      ],
    },
    {
      roll: "68-69",
      columns: [
        { header: "Trait", result: "Vendetta system" },
        { header: "Description", result: "Opponents become your Rivals on a roll of 1 or 2" },
      ],
    },
    {
      roll: "70-72",
      columns: [
        { header: "Trait", result: "Free trade zone" },
        {
          header: "Description",
          result:
            "One crew member per campaign turn can roll twice when using the Trade Table, and choose either result",
        },
      ],
    },
    {
      roll: "73-74",
      columns: [
        { header: "Trait", result: "Corporate state" },
        {
          header: "Description",
          result:
            "+2 when rolling to find a Patron. Patrons are always Corporations. Failing a mission means being blacklisted",
        },
      ],
    },
    {
      roll: "75-76",
      columns: [
        { header: "Trait", result: "Adventurous population" },
        {
          header: "Description",
          result: "When successfully Recruiting, you may roll up one additional character and then choose who to hire",
        },
      ],
    },
    {
      roll: "77-79",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Frozen" },
        {
          header: "Description",
          result:
            'Any character making a Dash may opt to slide 1D6" in a straight line. If they collide, they and the target are knocked 1" and Stunned',
        },
      ],
    },
    {
      roll: "80-81",
      columns: [
        { header: "Trait", result: "Flat" },
        { header: "Description", result: "Do not place any hills or raised ground on the battlefield" },
      ],
    },
    {
      roll: "82-84",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Fuel shortage" },
        {
          header: "Description",
          result: "The cost to travel from this world is raised by 1D3 credits. You may roll each campaign turn",
        },
      ],
    },
    {
      roll: "85-86",
      columns: [
        { header: "Trait", result: "Reflective dust" },
        { header: "Description", result: 'All Laser, Beam, or Blast weapons are -1 to Hit at ranges exceeding 9".' },
      ],
    },
    {
      roll: "87-89",
      columns: [
        { header: "Trait", result: "High cost" },
        { header: "Description", result: "Your crew size counts as being 2 higher for the purpose of Upkeep costs" },
      ],
    },
    {
      roll: "90-91",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Interdiction" },
        {
          header: "Description",
          result: () => `You are only approved to stay for ${rollDice(3)} campaign turns. To extend, roll 2D6 for 8+.`,
        },
      ],
    },
    {
      roll: "92-93",
      columns: [
        { header: "Trait", result: "Null zone" },
        { header: "Description", result: "No teleportation device of any type works" },
      ],
    },
    {
      roll: "94-96",
      skipDiceResolution: true,
      columns: [
        { header: "Trait", result: "Crystals" },
        { header: "Description", result: "Place 2D6 crystals on the battlefield. If you don't have any, use rocks" },
      ],
    },
    {
      roll: "97-100",
      columns: [
        { header: "Trait", result: "Fog" },
        { header: "Description", result: 'All shots beyond 8" are -1 to Hit.' },
      ],
    },
  ],
};
//#endregion

//#region Starship travel events
const readABookTable: SimpleGenerator = {
  title: "Read A Book",
  dice: 6,
  table: [
    { roll: "1-2", result: "A random crew member earns +3 XP" },
    { roll: "3-4", result: "A random crew member earns +2 XP and a second random crew member earns +1 XP" },
    { roll: "5-6", result: "Three random crew each earn +1 XP" },
  ],
};

const starshipTravelEventsTable: TableGenerator = {
  title: "Starship Travel Events Table",
  dice: 100,
  table: [
    {
      roll: "1-7",
      skipDiceResolution: true,
      columns: [
        {
          header: "Asteroids",
          result:
            "Rocky debris everywhere, maybe from a recent collision? If you wish to avoid it, roll 1D6, requiring a 5+ to chart a safe path. If successful, roll again on this table.\nTo go through the field, select a crew member and roll 1D6+Savvy three times, requiring a 4+ to succeed each time.\nEach failed roll inflicts 1D6 Hull Point damage to the ship",
        },
      ],
    },
    {
      roll: "8-12",
      columns: [
        {
          header: "Navigation trouble",
          result:
            "Is this place even on the star maps? Lose 1 story point as you drift through empty space, then roll again on this table.\nIf your ship is currently suffering from Hull Point damage, and you roll this event, a random crew member must roll on the Injury Table, as system failures cause life support malfunctions across the vessel",
        },
      ],
    },
    {
      roll: "13-17",
      skipDiceResolution: true,
      columns: [
        {
          header: "Raided",
          result: () => {
            const enemyNumbers = Math.max(rollD6(), rollD6(), rollD6());

            return [
              "Your vessel catches the eye of some pirates. Intimidation might work: Select a crew member and roll 1D6+Savvy. A 6+ is required to avoid conflict",
              `Otherwise, set up a battle in cramped territory, using the Criminal Elements Encounter Table. Enemy numbers: ${enemyNumbers + 1} + the numbers indicated in the enemy table.`,
              "There is no objective. If you drive them off, they flee back to their ship. If you lose, you lose all credits and everything in your Stash, though you can keep the ship",
              "If you win, you get the normal rewards for winning an Opportunity mission, plus a bonus roll on the Loot Table",
              "Note that this battle is an out of sequence encounter, and does not count as the main Battle stage for the campaign turn",
            ].join("\n");
          },
        },
      ],
    },
    {
      roll: "18-25",
      columns: [
        {
          header: "Deep space wreckage",
          result:
            "You find an old wreck drifting through empty space. You get Roll twice on the Gear Subtable. Both items are damaged and need to be Repaired",
        },
      ],
    },
    {
      roll: "26-29",
      skipDiceResolution: true,
      columns: [
        {
          header: "Drive trouble",
          result:
            "Its not supposed to make that sound.\nSelect 3 crew members and have each roll 1D6+Savvy.\nA 6+ is required for success. For each failure, you are grounded on the next world for one campaign turn while the drive is reset. Taking off before the drive is reset inflicts 2D6 Hull Point damage to the ship",
        },
      ],
    },
    {
      roll: "30-38",
      columns: [
        {
          header: "Down-time",
          result:
            "Its a long time to just sit here.\nSelect a crew member of choice and add +1 XP. The crew has time to do maintenance tasks, and can Repair 1 damaged item with no roll required",
        },
      ],
    },
    {
      roll: "39-44",
      skipDiceResolution: true,
      columns: [
        {
          header: "Distress call",
          result:
            "This is Licensed Trader Cyberwolf.\nIf you come to their aid, roll 1D6.\n1: The ships drive must have detonated moments after you received the signal. Your ship is struck by a wave of debris as you approach, suffering 1D6+1 Hull Point damage.\n2: You only find drifting wreckage.\n3-4: You can rescue a crew member. Treat this as the Escape Pod event.\n5-6: You arrive in time to help save the ship from a drive malfunction. Select a crew member and roll 1D6+Savvy. A 7+ is required to succeed, but you may make three attempts. If you succeed, the jubilant crew give you a bunch of stuff. Roll three times on the Gear Loot table. If you fail, the drive detonates, and your ship is damaged as if you had rolled a 1 on this subtable",
        },
      ],
    },
    {
      roll: "45-50",
      skipDiceResolution: true,
      columns: [
        {
          header: "Patrol ship",
          result: () => {
            const roll1 = rollD6() - 3;
            const roll2 = rollD6() - 3;
            const confiscatedItems = [roll1, roll2].filter((a) => a > 0).reduce((a, b) => a + b);

            return [
              "A Unity patrol vessel hails you",
              `${confiscatedItems} items being confiscated as contraband. You can give them any items carried or in your Stash. Due to the military presence, the next world you visit cannot be Invaded.`,
            ].join("\n");
          },
        },
      ],
    },
    {
      roll: "51-53",
      columns: [
        {
          header: "Cosmic phenomenon",
          result:
            "A crew member sees a strange manifestation in space. When they ask around, nobody else saw anything, and the ships computers confirm nothing was there.\nThe crew member adds +1 Luck (if they are able). This event can only ever happen once in a campaign. Treat as nothing happening, if it happens again.\nIf you have a Precursor in the crew, they predict its a good omen. Add +1 story point as well",
        },
      ],
    },
    {
      roll: "54-60",
      skipDiceResolution: true,
      columns: [
        {
          header: "Escape pod",
          result:
            "You find an escape pod drifting through space. If you opt to rescue them, roll 1D6.\n1: Theyre a wanted criminal. If you let them go when you arrive on the next world, they might do you a favor later. The next time you make a new Rival, roll 4+ on 1D6 to immediately remove the Rivals from the campaign. If you turn them in, claim 1D6 credits, but get a Rival from their old gang.\n2-3: They reward you with 1D3 credits and a roll on the Loot Table when you arrive on the nearest world.\n4: They have nothing to pay you with, but do have some interesting information. Add 1 Quest Rumor and 1 story point.\n5: They are willing to join your crew. Roll up a new character, but they come with no equipment at all. If you dont want to hire them, they just leave at the next world.\n6: As entry 5, but the character begins play with 10 XP as yet unspent",
        },
      ],
    },
    {
      roll: "61-66",
      columns: [
        {
          header: "Accident",
          result:
            "A crew member gets Injured while doing a routine maintenance task. They must rest up for one campaign turn to recover from the Injury, and one item they carry is damaged",
        },
      ],
    },
    {
      roll: "67-75",
      columns: [
        {
          header: "Travel-time",
          result:
            "Local conditions force you to jump to the very edge of the system and approach under standard drives. Any Injured crew may rest for one campaign turn",
        },
      ],
    },
    {
      roll: "76-85",
      columns: [
        {
          header: "Uneventful trip",
          result: "A lot of time playing cards and cleaning guns.\nYou can Repair one damaged item",
        },
      ],
    },
    {
      roll: "86-91",
      columns: [
        { header: "Time to reflect", result: "How is the story unfolding? What did it all mean?\nAdd +1 story point" },
      ],
    },
    {
      roll: "92-95",
      skipDiceResolution: true,
      columns: [
        {
          header: "Time to read a book",
          result: () => {
            const result = getValue(rollD6(), readABookTable);
            return ["Theres time to sit, have a read, and maybe even indulge in a bit of education", result].join("\n");
          },
        },
      ],
    },
    {
      roll: "96-100",
      columns: [
        {
          header: "Locked in the library data by night",
          result:
            "Pouring over old records and fragments of data, the captain has unearthed some intriguing information about the sector of space you are heading into.\nYou can roll up the planetary info (problems, conveniences, licensing requirements) for three worlds and select which you wish to visit, but due to fuel limitations, you must visit one of the three generated. All three generated worlds remain in the campaign, and can be visited later",
        },
      ],
    },
  ],
};
//#endregion

//#region Campaign event
const campaignEventsTable: TableGenerator = {
  title: "Campaign Events Table",
  dice: 100,
  table: [
    {
      roll: "1-3",
      columns: [
        {
          header: "You've met a friendly doc who doesn't ask too many questions",
          result:
            "Select up to two crew members in Sick Bay and reduce their Recovery time by one campaign turn each. If they recover, they can act normally next campaign turn",
        },
      ],
    },
    {
      roll: "4-8",
      columns: [
        {
          header: "The life support system on the ship needs upgrading badly",
          result:
            "Upgrading the life support system will cost 1D6 credits. The ship cannot be flown until this is paid. If your crew has an Engineer, have a discount of -1",
        },
      ],
    },
    {
      roll: "9-12",
      columns: [
        {
          header: "A chance meeting turns into a new ally",
          result:
            "Roll up a new character and add them to the crew, OR add +1 story point. You may decide after rolling up the new character",
        },
      ],
    },
    {
      roll: "13-16",
      columns: [{ header: "You've made friends among the locals", result: "+1 story point" }],
    },
    {
      roll: "17-20",
      columns: [{ header: "You managed to mouth off to the wrong people", result: "Add a Rival" }],
    },
    {
      roll: "21-23",
      columns: [
        {
          header: "An old nemesis has tracked you down",
          result:
            "Select a prior Rival, or roll up a new one. They will follow you from planet to planet until resolved and receive +1 when rolling for the number of enemies in a battle",
        },
      ],
    },
    {
      roll: "24-26",
      columns: [
        {
          header: "A shady character offers you a deal",
          result: "Give him any one item of equipment, then roll on the Trade Table",
        },
      ],
    },
    {
      roll: "27-30",
      columns: [{ header: "You sell off some cargo you acquired on the last planet", result: "Earn 1D6 credits" }],
    },
    {
      roll: "31-35",
      columns: [{ header: "One of the crew overheard something interesting", result: "Add 1 Rumor" }],
    },
    {
      roll: "36-38",
      columns: [
        {
          header: 'You\'ve managed to settle some old "business"',
          result:
            "If you have any, you may remove one Rival of your choice. If you have no Rivals, your captain earns +1 XP instead",
        },
      ],
    },
    {
      roll: "39-41",
      columns: [
        {
          header: "An admirer wants to come along",
          result:
            "Gain a new crew member, if desired. They have only the base profile with no extra rolls, and bring no equipment. If your crew has any Feral members, the new member is also Feral",
        },
      ],
    },
    {
      roll: "42-44",
      columns: [
        {
          header: "An alien merchant offers you some strange device",
          result: "If you want to buy it, pay 4 credits and then roll on the Loot Table",
        },
      ],
    },
    {
      roll: "45-48",
      columns: [
        {
          header: "Equipment malfunction",
          result: "If there are any items in your Stash, a random item is damaged and must be Repaired",
        },
      ],
    },
    {
      roll: "49-51",
      columns: [
        {
          header: "You've earned a bit of a bad reputation",
          result:
            "If you know any Patrons on the current world, randomly select one that will no longer work with you. If you have no Patrons, shrug and move on",
        },
      ],
    },
    {
      roll: "52-56",
      columns: [
        {
          header: "The tax man is taking an interest in your business conduct",
          result: "Pay 2Dh6 credits. If you have insufficient credits your ship is impounded until you can pay",
        },
      ],
    },
    {
      roll: "57-59",
      skipDiceResolution: true,
      columns: [
        {
          header: "The crew has decided it's time for a new person to be in charge",
          result: () => {
            const capLeaves =
              rollD6() === 1
                ? "The old captain leaves the campaign permanently, taking any items carried with them. "
                : "";
            return `Select a crew member to be the new captain. They immediately receive 3 XP.${capLeaves} If your crew has any K'Erin, one of them must be selected, or they will leave.`;
          },
        },
      ],
    },
    {
      roll: "60-63",
      columns: [
        { header: "You've made some business contacts", result: "Add a new Patron to the list of those known" },
      ],
    },
    {
      roll: "64-66",
      columns: [
        { header: "Recent events made for a good learning opportunity", result: "Every crew member receives +1 XP" },
      ],
    },
    {
      roll: "67-70",
      columns: [
        {
          header: "During routine maintenance, the gravitational adjuster got knocked out of alignment",
          result: "Your ship suffers 1D6 points of Hull Point damage",
        },
      ],
    },
    {
      roll: "71-74",
      columns: [
        { header: "The crew spends a night drinking, watching movies, and playing cards", result: "+1 story point" },
      ],
    },
    {
      roll: "75-78",
      columns: [
        {
          header: "You meet up with an old arms dealer contact who owes you a deal",
          result:
            "Add your choice of 3 weapons from the following list: Hand Cannons, Military Rifles, Shotguns, or Machine Pistols",
        },
      ],
    },
    {
      roll: "79-81",
      columns: [
        {
          header: "You renegotiate some old debts",
          result:
            "If you currently owe money, reduce your debt by 1D6+1 credits. If you owe nothing, earn 2 credits for being prudent with your money",
        },
      ],
    },
    {
      roll: "82-84",
      columns: [
        {
          header: "The sector news networks are awash with rumors of war",
          result: "While you remain on this planet, any roll for Invasion is at +2",
        },
      ],
    },
    {
      roll: "85-88",
      columns: [
        {
          header: "A bit of time on your hands",
          result:
            "The crew has a few days to do their own thing. Select two crew members at random and have each make a roll on the Exploration Table",
        },
      ],
    },
    {
      roll: "89-91",
      columns: [
        {
          header: "You got noticed by someone you'd rather avoid",
          result:
            "Add a Rival. If you currently are on a Quest, the next campaign turn is automatically a battle against the new Rival, and they will add +1 to the number of enemies",
        },
      ],
    },
    {
      roll: "92-94",
      columns: [
        {
          header: "It's time to go!",
          result: "Whatever you did, every campaign turn you stay on this planet, you must add an additional Rival",
        },
      ],
    },
    {
      roll: "95-97",
      columns: [
        {
          header: "Unity government says no ships are authorized to leave",
          result: "You cannot leave the planet during the next two campaign turns",
        },
      ],
    },
    {
      roll: "98-100",
      columns: [
        {
          header: "In hindsight, it'll make a great story",
          result:
            "Select a crew member who was a casualty last battle. They receive +1 Luck. If nobody got hurt, receive +1 story point instead",
        },
      ],
    },
  ],
};
//#endregion

//#region Character events
const characterEventsTable: TableGenerator = {
  title: "Character Events Table",
  dice: 100,
  table: [
    {
      roll: "1-3",
      columns: [
        {
          header: "All this endless violence is depressing you",
          result:
            "The character refuses to participate in any battle during the next campaign turn (except for an Invasion battle). Get +1 story point, as they get a new perspective on life. K'Erin are unaffected by this",
        },
      ],
    },
    {
      roll: "4-6",
      columns: [
        {
          header: "You have some business to attend to elsewhere",
          result:
            "The character is unavailable for the next two campaign turns. They require no Upkeep during this time, and cannot be the target of any events. When they return, award them 1D6 XP and Roll once on the Loot Table. If the character is Swift, they never return but are replaced with a brand new Swift character rolled up normally",
        },
      ],
    },
    {
      roll: "7-10",
      columns: [{ header: "You make some local friends", result: "The character earns +1 XP" }],
    },
    {
      roll: "11-12",
      skipDiceResolution: true,
      columns: [
        {
          header: "You are starting to wonder if it is time to move on",
          result:
            "If the character is currently in Sick Bay, roll 1D6. If the roll is equal or below the number of campaign turns of recovery left, they will decide to leave the crew",
        },
      ],
    },
    {
      roll: "13-15",
      skipDiceResolution: true,
      columns: [
        {
          header: "You get a letter from home",
          result: () => `The character earns +1 XP.${rollD6() >= 5 ? " You immediately receive a Quest" : ""}`,
        },
      ],
    },
    {
      roll: "16-19",
      columns: [
        {
          header: "You argue with the rest of the crew",
          result:
            "During the next campaign turn, the crew member refuses to do any tasks but will participate in battle normally",
        },
      ],
    },
    {
      roll: "20-23",
      skipDiceResolution: true,
      columns: [
        {
          header: "You get in a scrap with another crew member",
          result:
            "Randomly select another crew member and roll 1D6+Combat Skill for each. The lower score must spend one campaign turn in Sick Bay. On a draw, both go to Sick Bay. If a K'Erin is in the crew, you must fight them",
        },
      ],
    },
    {
      roll: "24-26",
      columns: [
        {
          header: "The local food is sitting well with you",
          result:
            "If in Sick Bay, reduce your recovery time by one campaign turn. If not, earn +1 XP. Engineers receive no benefit from this",
        },
      ],
    },
    {
      roll: "27-29",
      skipDiceResolution: true,
      columns: [
        {
          header: "You are not sure you are really the same person any longer",
          result:
            "Roll on the Motivation Table and change to that motivation. You do not receive any items or resources, but if the new motivation would have any ability score bonuses, earn +1 XP for each +1 ability score you would have received normally. If you roll the current motivation, the character becomes particularly self-assured. Earn +1 story point",
        },
      ],
    },
    {
      roll: "30-33",
      columns: [
        {
          header: "It is time for a make-over!",
          result:
            "The character changes their clothes, hair-style, or something else. This is only cosmetic. If you are able to, reflect this on the miniature",
        },
      ],
    },
    {
      roll: "34-38",
      columns: [{ header: "Overhear something useful", result: "Earn 1 Quest Rumor" }],
    },
    {
      roll: "39-41",
      columns: [{ header: "Earn a little on the side", result: "Receive +2 credits" }],
    },
    {
      roll: "42-45",
      columns: [
        {
          header: "Have a heart to heart talk with a crew member",
          result: "Select a random crew member. Both earn +1 XP",
        },
      ],
    },
    {
      roll: "46-48",
      columns: [{ header: "Time spent exercising is never wasted", result: "Earn +2 XP" }],
    },
    {
      roll: "49-51",
      columns: [
        {
          header: "You pick up an unusual hobby",
          result:
            "Earn +1 story point and the character talks about it constantly. If the character is Swift or Precursor, they also earn +2 XP",
        },
      ],
    },
    {
      roll: "52-55",
      columns: [
        {
          header: "The scars tell the story",
          result: "If the character was injured in any way last or this campaign turn, they earn +2 XP",
        },
      ],
    },
    {
      roll: "56-59",
      columns: [{ header: "You've had time to reflect on your adventures", result: "Earn +1D3 XP" }],
    },
    {
      roll: "60-62",
      columns: [
        {
          header: "You've made a real personal breakthrough",
          result:
            "Select one ability score that has not been increased from its starting value when the character entered the campaign. It increases by +1 immediately",
        },
      ],
    },
    {
      roll: "63-66",
      columns: [
        {
          header: "You get hurt while working on the ship",
          result: "Spend one campaign turn in Sick Bay, and the ship takes 1 Hull Point damage",
        },
      ],
    },
    {
      roll: "67-68",
      columns: [
        {
          header: "You have finally found true love in this bleak universe",
          result:
            "If the characters motivation was True Love, they earn +1D6 XP. Regardless, get +1 story point. And it's a rather nice thought, isn't it?",
        },
      ],
    },
    {
      roll: "69-71",
      columns: [
        {
          header: "A personal enemy has tracked you down",
          result: "Add a Rival. If this character leaves your crew, the Rival also leaves",
        },
      ],
    },
    {
      roll: "72-75",
      columns: [{ header: "Someone has sent you a gift", result: "Loot Table" }],
    },
    {
      roll: "76-78",
      columns: [
        {
          header: "You feel great. Eating well must be paying off",
          result:
            "Put a note on your record sheet: Next time this character would be forced to roll on the Injury Table, the roll is ignored. Engineers cannot benefit from this event",
        },
      ],
    },
    {
      roll: "79-82",
      columns: [{ header: "You know someone who knows someone", result: "Add a Patron" }],
    },
    {
      roll: "83-84",
      columns: [{ header: "Maybe you are leading a charmed existence?", result: "Add +1 Luck" }],
    },
    {
      roll: "85-87",
      columns: [
        {
          header: "You've put in a lot of hard work around here",
          result:
            "Either repair 2 Hull Point damage or Repair one damaged item in the inventory. Engineers may do both",
        },
      ],
    },
    {
      roll: "88-91",
      columns: [
        {
          header: "They don't make them like they used to",
          result:
            "A random item carried by the character is damaged, and must be Repaired before it can be used again. Engineers are not affected by this event",
        },
      ],
    },
    {
      roll: "92-94",
      skipDiceResolution: true,
      columns: [
        {
          header: "Where did it go?",
          result:
            "A random item carried by the character has been lost. When rolling for a Character Event next campaign turn, roll 1D6+Savvy as well. On a 5+, the item turns up again, otherwise it is lost for good",
        },
      ],
    },
    {
      roll: "95-97",
      columns: [
        {
          header: "A deep feeling of melancholy and despair is afflicting you",
          result: "The character will earn no XP next campaign turn. K'Erin are not affected by this event",
        },
      ],
    },
    {
      roll: "98-100",
      columns: [
        {
          header: "You've had a lot of time to burn",
          result: "Next campaign turn, the character may perform an additional action, even if they are in Sick Bay",
        },
      ],
    },
  ],
};
//#endregion

//#region Battle event
const battleEventsTable: TableGenerator = {
  title: "Battle Events Table",
  dice: 100,
  table: [
    {
      roll: "1-5",
      columns: [
        {
          header: "Renewed efforts",
          result:
            "The enemy is making a concerted effort to push you back. For the rest of the battle, after all enemy figures have acted, select a random figure that may immediately take a second Move and second Combat Action",
        },
      ],
    },
    {
      roll: "6-9",
      columns: [
        {
          header: "Enemy reinforcements",
          result:
            "An additional 2 enemy figures arrive at the center of the opposing battlefield edge. One is armed as a Specialist (if applicable to the enemy type)",
        },
      ],
    },
    {
      roll: "10-13",
      columns: [
        {
          header: "Change of plans",
          result:
            "The enemy switches to the Cautious AI type for the rest of the battle. If they were already Cautious, they instead switch to Tactical AI. Enemies with no ranged attacks are unaffected by this event",
        },
      ],
    },
    {
      roll: "14-16",
      columns: [
        {
          header: "Lost heart",
          result: "The enemy has had enough of this fight. At the end of the next round, they will leave the field",
        },
      ],
    },
    {
      roll: "17-20",
      columns: [
        {
          header: "Seized the moment",
          result: "Select a crew member who may move and act in both the Quick and Slow Actions phases next round",
        },
      ],
    },
    {
      roll: "21-26",
      columns: [
        {
          header: "Critters!",
          result:
            'Place 1D3 Vent Crawlers in the center of the table, and move each of them 1D6" in a random direction. At the beginning of the Enemy Actions phase, they will move towards the nearest figure and attack, regardless of which side the figure is on. If you are already fighting Vent Crawlers, this is bad news, as they are of course part of the enemy brood',
        },
      ],
    },
    {
      roll: "27-30",
      columns: [
        {
          header: "Ammo fault",
          result:
            "Select a random figure in your crew. If they fired a weapon last round, it cannot be used for the rest of the battle. If they did not, select a random carried weapon, which can be fired only once this battle",
        },
      ],
    },
    {
      roll: "31-34",
      columns: [
        {
          header: "Visibility change",
          result:
            'If visibility is currently reduced, increase the vision range by +1D6". If visibility is currently unlimited, reduce it to 1D6+6"',
        },
      ],
    },
    {
      roll: "35-38",
      columns: [
        {
          header: "Tougher than expected",
          result:
            "Select a random enemy figure. They receive +1 Toughness (to a maximum of 6) and remove all current stun markers on that figure",
        },
      ],
    },
    {
      roll: "39-42",
      columns: [
        {
          header: "Snap shot",
          result:
            "Select a figure in your crew. They may fire a weapon immediately. If the weapon is a Pistol, it Hits automatically, otherwise roll to Hit normally",
        },
      ],
    },
    {
      roll: "43-46",
      columns: [
        {
          header: "Cunning plan",
          result:
            "In the next round, do not roll for Initiative. Each of your crew acts in the Quick or Slow Actions phase as you prefer",
        },
      ],
    },
    {
      roll: "47-50",
      skipDiceResolution: true,
      columns: [
        {
          header: "Possible reinforcements",
          result:
            'Place 3 markers evenly spaced along the opposing battlefield edge. At the start of the Enemy Actions phase next round, select a random marker, and roll 1D6. On a 5-6, a new basic enemy figure is placed on the marker, otherwise it is removed. Roll for one marker per round until they are all gone. If a crew member moves within 3" of a marker, it is removed instantly',
        },
      ],
    },
    {
      roll: "51-54",
      skipDiceResolution: true,
      columns: [
        {
          header: "Clock is running out",
          result:
            "At the end of the next round and each round thereafter, roll 1D6. On a 6, the game ends immediately, and you are unable to complete any objectives. You will not count as Holding the Field unless you clear the table of enemies before this happens",
        },
      ],
    },
    {
      roll: "55-60",
      skipDiceResolution: true,
      columns: [
        {
          header: "Environmental hazard",
          result:
            'Select a random terrain feature. Any figure currently in, on, or within 1" of the feature must roll 1D6+Savvy and achieve a 5+ (enemies roll 1D6 and must roll a 4+) or take a Damage +1 Hit, ignoring any Armor Saving Throws. The feature is safe afterwards',
        },
      ],
    },
    {
      roll: "61-65",
      columns: [
        {
          header: "A desperate plan",
          result:
            "A random figure in your crew cannot act next round, but instead select another figure of choice that may act in both the Quick and Slow Actions phases",
        },
      ],
    },
    {
      roll: "66-70",
      columns: [
        {
          header: "A moment of hesitation",
          result:
            "Next round, select a single figure that acts in the Quick Actions phase (if any Feral are in the squad, you must select a Feral). All other figures acts in the Slow Actions phase",
        },
      ],
    },
    {
      roll: "71-73",
      columns: [
        {
          header: "Fumbled grenade",
          result:
            'A random enemy fumbles a grenade. The figure in question runs 6" in a random direction and is then Stunned. Every figure, crew and enemy within 4" of the initial position will immediately run 4" directly away. The grenade then goes off harmlessly. If the enemy is one that would not use grenades, nothing happens',
        },
      ],
    },
    {
      roll: "74-77",
      columns: [
        {
          header: "Back up",
          result:
            "If you have spare crew not taking part in the battle, you may have one crew member arrive. Place them on the center of your own battlefield edge",
        },
      ],
    },
    {
      roll: "78-80",
      columns: [
        {
          header: "Enemy VIP",
          result:
            "A Unique Individual immediately joins the enemy force. Place them on the center of their battlefield edge",
        },
      ],
    },
    {
      roll: "81-85",
      columns: [
        {
          header: "Fog cloud",
          result:
            'A dense cloud of fog envelops the center of the table for the rest of the battle. It extends 6" in every direction and blocks all visibility past 2"',
        },
      ],
    },
    {
      roll: "86-89",
      columns: [
        {
          header: "Lost!",
          result:
            "A random crew member loses their way and misses the rest of the battle. Remove the figure from the battlefield. They rejoin you safely afterwards, looking a bit sheepish. Ignore this event if you are currently outnumbered",
        },
      ],
    },
    {
      roll: "90-93",
      columns: [
        {
          header: "I found something!",
          result:
            'Randomly select a crew member, then place a marker 1D6" from them in a random direction. The enemy will ignore it. If any crew member moves into contact and spends a non-Combat Action, roll for a Loot item and claim it for use immediately',
        },
      ],
    },
    {
      roll: "94-97",
      columns: [
        {
          header: "Looks valuable",
          result:
            'Randomly select a crew member, then place a marker 1D6" from them in a random direction. The enemy will ignore it. If any crew member moves into contact and spends a non-Combat Action, obtain 1D3 credits',
        },
      ],
    },
    {
      roll: "98-100",
      columns: [
        {
          header: "You want me to check that out?",
          result:
            "Select a random crew member. They may opt to go check out something they insist they saw. If they do, they are removed from the battle. After the battle ends, they may roll once on the Loot table. If you opt not to go, you cannot send a different character, and the chance is lost",
        },
      ],
    },
  ],
};
//#endregion

//#region Battlefield finds
const battlefieldFindsTable: SimpleGenerator = {
  title: "Battlefield Finds Table",
  dice: 100,
  table: [
    {
      roll: "1-15",
      result:
        "Weapon: Randomly select a slain (but not Bailed) enemy from the battle. You may keep any weapons they were carrying",
    },
    {
      roll: "16-25",
      result: "Usable goods: Roll once on the Consumables Subtable. 1 dosage",
    },
    {
      roll: "26-35",
      result:
        "Curious data stick / Invasion Evidence: You obtain a Quest Rumor. If the enemy is an Invasion Threat, you instead find Invasion Evidence. Earn +1 credit, and add +1 when checking for Invasion in the next step.",
    },
    {
      roll: "36-45",
      result: "Starship part: Redeemable as equivalent to 2 credits only when installing a Starship Component.",
    },
    {
      roll: "46-60",
      skipDiceResolution: true,
      result:
        "Personal trinket: On each planet you visit in the future, roll 2D6. On a 9+ you find the owner and receive a Loot roll as payment.",
    },
    {
      roll: "61-75",
      result: "Debris: 1D3 credits worth on the scrap market.",
    },
    {
      roll: "76-90",
      result:
        "Vital info / Invasion Evidence: Turn in this information to get a Corporate Patron automatically on this world. If the enemy is an Invasion Threat, you instead find Invasion Evidence; if so, earn +1 credit and add +1 when checking for Invasion in the next step.",
    },
    {
      roll: "91-100",
      result: "Nothing of value: ...not one thing!",
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

  "Low Tech Weapon Table": lowTechWeapon,
  "Military Weapon Table": miliaryWeapon,
  "High Tech Weapon Table": highTechWeapon,
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
  "Odds and Ends Subtable": oddsAndEndsTable,
  "Consumables Subtable": consumablesSubtable,
  "Implants Subtable": implantsSubtable,
  "Utility Items Subtable": utilityItemsSubtable,
  "Ship Items Subtable": shipItemsSubtable,
  "Rewards Subtable": rewardsSubtable,

  "Galactic War Progress": galacticWarTable,

  "Trade Table": tradeTable,

  "Exploration Table": explorationTable,

  "Patron Table": patronTable,
  "Danger Pay Table": dangerPayTable,
  "Time Frame Table": timeFrameTable,
  "Benefits Subtable": benefitsSubtable,
  "Hazards Subtable": hazardsSubtable,
  "Condtions Subtable": conditionsSubtable,

  "World Traits Table": worldTraitsTable,

  "Starship Travel Events Table": starshipTravelEventsTable,

  "Campaign Events Table": campaignEventsTable,

  "Character Events Table": characterEventsTable,

  "Battle Events Table": battleEventsTable,
  "Battlefield Finds Table": battlefieldFindsTable,
} as const satisfies Record<string, SimpleGenerator | TableGenerator>;
//#endregion
