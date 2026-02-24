import type { ReactNode } from "react";

interface SectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

export function Section({ title, children }: SectionProps): React.ReactElement {
  return (
    <div
      className="relative border border-accent p-6 mt-3"
      role="group"
      aria-labelledby={`section-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <span
        id={`section-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="absolute -top-3 left-3 bg-background px-2 text-sm font-medium text-accent"
      >
        {title}
      </span>

      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
