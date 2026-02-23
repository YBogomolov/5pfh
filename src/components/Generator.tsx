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
      <Button onClick={handleGenerate} className="min-h-11">
        {label}
      </Button>
      <textarea
        readOnly
        value={value}
        className="min-h-24 w-full resize-y rounded-md border border-input bg-background p-3 text-sm text-foreground"
      />
    </div>
  );
}
