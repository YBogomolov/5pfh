import { Users, Plane, Globe, Package } from "lucide-react";

import { cn } from "@/lib/utils";

export type TabId = "crew" | "travel" | "world" | "loot";

interface TabConfig {
  readonly id: TabId;
  readonly label: string;
  readonly icon: typeof Users;
}

const tabs: readonly TabConfig[] = [
  { id: "crew", label: "Crew", icon: Users },
  { id: "travel", label: "Travel", icon: Plane },
  { id: "world", label: "World", icon: Globe },
  { id: "loot", label: "Loot", icon: Package },
];

interface TabNavigationProps {
  readonly activeTab: TabId;
  readonly onTabChange: (tab: TabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps): React.ReactElement {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-accent bg-background">
      <div className="flex h-16 items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex min-h-11 min-w-16 flex-col items-center justify-center gap-1 rounded-lg px-3 transition-colors",
                isActive ? "text-accent" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="size-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
