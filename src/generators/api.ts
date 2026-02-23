import { getValue } from "./utils";
import { rollD100, rollDice } from "@/lib/random";
import * as gen from "./data";

export const generateCrewType = (): string => getValue(rollD100(), gen.generators["Crew Type"]);

export const generateCrewBackground = (): string => getValue(rollD100(), gen.generators["Background Table"]);

export const generateCrewMotivation = (): string => getValue(rollD100(), gen.generators["Motivation Table"]);

export const generateCrewClass = (): string => getValue(rollD100(), gen.generators["Class Table"]);

export const generateCrewEquipment = (): string =>
  [
    getValue(rollD100(), gen.generators["Military Weapon Table"]),
    getValue(rollD100(), gen.generators["Military Weapon Table"]),
    getValue(rollD100(), gen.generators["Military Weapon Table"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon Table"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon Table"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon Table"]),
    getValue(rollD100(), gen.generators["Gear Table"]),
    getValue(rollD100(), gen.generators["Gadget Table"]),
  ].join(", ");

export const generateOrganicCrewInjury = (): string => getValue(rollD100(), gen.generators["Injury Table"]);

export const generateBotCrewInjury = (): string => getValue(rollD100(), gen.generators["Bot Injury Table"]);

export const generateLoot = (): string => getValue(rollD100(), gen.generators["Loot Table"]);

export const generateTradeResult = (): string => getValue(rollD100(), gen.generators["Trade Table"]);

export const generateExplorationResult = (): string => getValue(rollD100(), gen.generators["Exploration Table"]);

export const generateGalacticWarProgress = (): string =>
  getValue(rollDice("2D6"), gen.generators["Galactic War Progress"]);
