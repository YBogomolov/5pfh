import { Generator } from "@/components/Generator";
import { Section } from "@/components/Section";
import {
  generateExplorationResult,
  generateGalacticWarProgress,
  generateJob,
  generateTradeResult,
} from "@/generators/api";

export function WorldTab(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 p-4 pb-20">
      <Section title="Crew Tasks">
        <Generator id="trade" label="Trade" onGenerate={generateTradeResult} />
        <Generator id="exploration" label="Exploration" onGenerate={generateExplorationResult} />
      </Section>

      <Section title="Jobs">
        <Generator id="job" label="Generate job" onGenerate={generateJob} />
      </Section>

      <Section title="Battle">
        <Generator id="battle-setup" label="Battle setup" onGenerate={() => "Not implemented yet"} />
        <Generator id="battle-event" label="Battle event" onGenerate={() => "Not implemented yet"} />
      </Section>

      <Section title="Galactic War">
        <Generator id="galactic-war" label="War progress" onGenerate={generateGalacticWarProgress} />
      </Section>

      <Section title="Events">
        <Generator id="campaign-event" label="Campaign event" onGenerate={() => "Not implemented yet"} />
        <Generator id="character-event" label="Character event" onGenerate={() => "Not implemented yet"} />
      </Section>
    </div>
  );
}
