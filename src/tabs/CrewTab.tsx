import { Generator } from "@/components/Generator";
import { Section } from "@/components/Section";
import {
  generateCrewBackground,
  generateCrewClass,
  generateCrewEquipment,
  generateCrewMotivation,
  generateCrewType,
  generateBotCrewInjury,
  generateOrganicCrewInjury,
} from "@/generators/api";

export function CrewTab(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 p-4 pb-20">
      <Section title="Crew Member">
        <Generator id="crew-type" label="New crew type" onGenerate={generateCrewType} />
        <Generator id="crew-background" label="New background" onGenerate={generateCrewBackground} />
        <Generator id="crew-motivation" label="New motivation" onGenerate={generateCrewMotivation} />
        <Generator id="crew-class" label="New class" onGenerate={generateCrewClass} />
      </Section>

      <Section title="Equipment">
        <Generator id="crew-equipment" label="Generate equipment" onGenerate={generateCrewEquipment} />
      </Section>

      <Section title="Injuries">
        <Generator id="injury-organic" label="Organic crew injury" onGenerate={generateOrganicCrewInjury} />
        <Generator id="injury-bot" label="Bot crew injury" onGenerate={generateBotCrewInjury} />
      </Section>
    </div>
  );
}
