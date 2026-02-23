import { useState } from "react";

import { GeneratorStoreProvider } from "@/store/GeneratorStore";
import { TabNavigation, type TabId } from "@/components/TabNavigation";
import { CrewTab } from "@/tabs/CrewTab";
import { TravelTab } from "@/tabs/TravelTab";
import { WorldTab } from "@/tabs/WorldTab";
import { LootTab } from "@/tabs/LootTab";

const tabContent: Record<TabId, React.ReactElement> = {
  crew: <CrewTab />,
  travel: <TravelTab />,
  world: <WorldTab />,
  loot: <LootTab />,
};

function App(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabId>("crew");

  return (
    <GeneratorStoreProvider>
      <div className="min-h-screen bg-background">
        <main className="mx-auto max-w-3xl">{tabContent[activeTab]}</main>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </GeneratorStoreProvider>
  );
}

export default App;
