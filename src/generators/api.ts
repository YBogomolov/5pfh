import { rollD100 } from "@/lib/random";

import * as gen from "./data";
import { getValue } from "./utils";

export const generateCrewType = (): string => getValue(rollD100(), gen.generators["Crew Type"]);

export const generateCrewBackground = (): string => getValue(rollD100(), gen.generators["Background Table"]);

export const generateCrewMotivation = (): string => getValue(rollD100(), gen.generators["Motivation Table"]);

export const generateCrewClass = (): string => getValue(rollD100(), gen.generators["Class Table"]);

export const generateCrewEquipment = (): string =>
  [
    // 3 rolls on military weapon table
    getValue(rollD100(), gen.generators["Military Weapon"]),
    getValue(rollD100(), gen.generators["Military Weapon"]),
    getValue(rollD100(), gen.generators["Military Weapon"]),
    // 3 rolls on low tech weapon table
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    // 1 roll on gear table
    getValue(rollD100(), gen.generators["Gear Table"]),
    // 1 roll on gadget table
    getValue(rollD100(), gen.generators["Gadget Table"]),
  ].join(", ");

export const generateOrganicCrewInjury = (): string => getValue(rollD100(), gen.generators["Injury Table"]);

export const generateBotCrewInjury = (): string => getValue(rollD100(), gen.generators["Bot Injury Table"]);

export const generateLoot = (): string => getValue(rollD100(), gen.generators["Loot Table"]);
