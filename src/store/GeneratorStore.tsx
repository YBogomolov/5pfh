import { createContext, useCallback, useContext, useState } from "react";

export type GeneratorId = string;

interface GeneratorState {
  readonly value: string;
}

interface GeneratorStore {
  readonly getState: (id: GeneratorId) => GeneratorState;
  readonly setState: (id: GeneratorId, value: string) => void;
}

const STORAGE_KEY = "5pfh-generators";

export function loadFromStorage(): ReadonlyMap<GeneratorId, GeneratorState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Map();
    const parsed = JSON.parse(raw) as Record<string, string>;
    return new Map(Object.entries(parsed).map(([k, v]) => [k, { value: v }]));
  } catch {
    return new Map();
  }
}

export function saveToStorage(store: ReadonlyMap<GeneratorId, GeneratorState>): void {
  const obj: Record<string, string> = {};
  store.forEach((state, id) => {
    obj[id] = state.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const GeneratorStoreContext = createContext<GeneratorStore | null>(null);

export function GeneratorStoreProvider({ children }: { readonly children: React.ReactNode }): React.ReactElement {
  const [store, setStore] = useState<ReadonlyMap<GeneratorId, GeneratorState>>(new Map());

  // useEffect(() => {
  //   saveToStorage(store);
  // }, [store]);

  const getState = useCallback(
    (id: GeneratorId): GeneratorState => {
      return store.get(id) ?? { value: "" };
    },
    [store],
  );

  const setState = useCallback((id: GeneratorId, value: string): void => {
    setStore((prev) => {
      const next = new Map(prev);
      next.set(id, { value });
      return next;
    });
  }, []);

  return <GeneratorStoreContext.Provider value={{ getState, setState }}>{children}</GeneratorStoreContext.Provider>;
}

export function useGeneratorStore(): GeneratorStore {
  const store = useContext(GeneratorStoreContext);
  if (!store) {
    throw new Error("useGeneratorStore must be used within GeneratorStoreProvider");
  }
  return store;
}

export function useGeneratorState(id: GeneratorId): readonly [string, (value: string) => void] {
  const store = useGeneratorStore();
  return [store.getState(id).value, store.setState.bind(null, id)] as const;
}
