import { Generator } from "@/components/Generator";
import { Section } from "@/components/Section";
import { generateWorldTrait } from "@/generators/api";

export function TravelTab(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 p-4 pb-20">
      <Section title="Starship Events">
        <Generator id="starship-event" label="Starship travel event" onGenerate={() => "Not implemented yet"} />
      </Section>

      <Section title="World Traits">
        <Generator id="world-trait" label="Generate world trait" onGenerate={generateWorldTrait} />
      </Section>
    </div>
  );
}
