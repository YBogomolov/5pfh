import { getValue } from "./utils";
import { rollD100, roll2D6, rollD10 } from "@/lib/random";
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

export const generateGalacticWarProgress = (): string => getValue(roll2D6(), gen.generators["Galactic War Progress"]);

const BHC: Record<string, [benefits: number, hazards: number, conditions: number]> = {
  Corporation: [8, 8, 5],
  "Local Government": [8, 8, 8],
  "Sector Government": [8, 8, 8],
  "Wealthy Individual": [5, 8, 8],
  "Private Organisation": [8, 8, 8],
  "Secretive Group": [8, 5, 8],
};

export const generateJob = (): string => {
  const patron = getValue(rollD10(), gen.generators["Patron Table"]);

  const dangerPayAdd = patron === "Corporation" ? 1 : 0;
  const dangerPay = getValue(rollD10() + dangerPayAdd, gen.generators["Danger Pay Table"]);

  const timeFrameAdd = patron === "Secretive Group" ? 1 : 0;
  const timeFrame = getValue(rollD10() + timeFrameAdd, gen.generators["Time Frame Table"]);

  const [benefitsMin, hazardsMin, conditionsMin] = BHC[patron];
  const hasBenefits = rollD10() >= benefitsMin;
  const hasHazards = rollD10() >= hazardsMin;
  const hasConditions = rollD10() >= conditionsMin;

  const benefits = hasBenefits ? getValue(rollD10(), gen.generators["Benefits Subtable"]) : null;
  const hazards = hasHazards ? getValue(rollD10(), gen.generators["Hazards Subtable"]) : null;
  const conditions = hasConditions ? getValue(rollD10(), gen.generators["Condtions Subtable"]) : null;

  return [`Patron: ${patron}`, `Danger Pay: ${dangerPay}`, `Time Frame: ${timeFrame}`, benefits, hazards, conditions]
    .filter(Boolean)
    .join("\n");
};

export const generateWorldTrait = (): string => getValue(rollD100(), gen.generators["World Traits Table"]);

export const generateStarshipEvent = (): string => getValue(rollD100(), gen.generators["Starship Travel Events Table"]);

export const generateCampaignEvent = (): string => getValue(rollD100(), gen.generators["Campaign Events Table"]);

export const generateCharacterEvent = (): string => getValue(rollD100(), gen.generators["Character Events Table"]);

export const generateBattleEvent = (): string => getValue(rollD100(), gen.generators["Battle Events Table"]);
