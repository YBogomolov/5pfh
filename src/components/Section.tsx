import type { ReactNode } from "react";

interface SectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

export function Section({ title, children }: SectionProps): React.ReactElement {
  return (
    <fieldset className="rounded-lg border border-border p-4">
      <legend className="px-2 text-sm font-medium text-muted-foreground">{title}</legend>
      <div className="flex flex-col gap-3">{children}</div>
    </fieldset>
  );
}
