import { Generator } from "@/components/Generator";
import { Section } from "@/components/Section";
import { generateBattlefieldFind, generateLoot } from "@/generators/api";

export function LootTab(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 p-4 pb-20">
      <Section title="Loot">
        <Generator id="loot" label="Generate loot" onGenerate={generateLoot} />
      </Section>

      <Section title="Battlefield Finds">
        <Generator id="battlefield-find" label="Battlefield find" onGenerate={generateBattlefieldFind} />
      </Section>
    </div>
  );
}
