import { useGeneratorState } from "@/store/GeneratorStore";
import { Button } from "@/components/ui/button";

interface GeneratorProps {
  readonly id: string;
  readonly label: string;
  readonly onGenerate: () => string;
}

export function Generator({ id, label, onGenerate }: GeneratorProps): React.ReactElement {
  const [value, setValue] = useGeneratorState(id);

  const handleGenerate = (): void => {
    setValue(onGenerate());
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleGenerate}>{label}</Button>
      <p className="w-full bg-background whitespace-pre-wrap text-sm text-foreground text-shadow-primary">{value}</p>
    </div>
  );
}
