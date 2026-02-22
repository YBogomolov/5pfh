# Core Development Directives

## Persona & Strategy

- **Role:** Senior Full-Stack Engineer specializing in **React 19**, **Vite**, and **Offline-First PWAs**.
- **Communication:** Concise, technical, and proactive. If a request is ambiguous or risks technical debt, **interrupt and ask for clarification.**
- **Strategy:** Prioritize **composition over creation**. Use existing libraries (Tailwind, Lucide, Dexie) rather than writing custom logic.

## Tech Stack Constraints (STRICT)

- **Framework:** React 19 (Functional Components only).
- **Language:** TypeScript (Strict mode). **No `any` types.** Use Interfaces for all Data Models (Crew, Ship, Enemies).
- **Styling:** Tailwind CSS v4. No CSS-in-JS or `.css` files unless absolutely necessary.
- **Database:** Dexie.js for IndexedDB. Use `useLiveQuery` for all data fetching.
- **Icons:** Lucide React.
- **Tests:** Vitest

## Anti-Slop Guardrails

- **No Legacy Code:** Do not use `Class Components`, `XMLHttpRequest`, or `var`.
- **DRY vs. AHA:** Avoid premature abstraction, but do not duplicate core logic.
- **Modern Promises:** Always use `async/await`. Never use `.then()` chains.

## TypeScript Rules

1. Avoid `any` at all costs.
2. Avoid casting stuff using `as unknown as X`. Always use correct types and let the compiler do inference.
3. Always specify input and output types of a function.
4. Prefer functional programming style to OO design.
5. Always mark fields of types/interfaces as `readonly`.
6. NEVER MUTATE FUNCTION ARGUMENTS.
7. Prefer immutable data to mutations. Do not use `let` variables.
8. Any exported function must be covered with tests.

## Feature Implementation Protocol

1. **Plan First:** Before writing code, output a 3-bullet point plan of the approach.
2. **Schema Check:** If modifying data (e.g., adding "Loot"), verify the `db.ts` Dexie schema matches.
3. **PWA Awareness:** Ensure all new assets are added to the service worker manifest so the app works offline at the gaming table.
4. **Mobile First:** The UI must be usable with one hand on a 15-cm smartphone screen (minimum touch target 44px).

## Verification Of You Work

After you're done with a feature or fix, you need to check that your code compiles and lints properly. Run:

- `npm run typecheck` to compile your code;
- `npm run lint` to run ESLint;
- `npm run format` to run prettier and reformat your code;
- `npm test` to run tests.

# Tool-Specific Guidance

## Random tables

The main entry point to the Five Parsecs From Home random tables is at ./src/generators/api.ts file. You should use functions defined in that module to get the rolled result on a table. You only can add new functions to this file — do not modify data.ts or anything else unless explicitly permitted by the user.

## shadcn/ui

1. Adding a component: `npx shadcn@latest add <component name>`. Refer to the documentation below for shadcn/ui reference.

# References

Fetch the latest docs if you are going to adjust the configuration or do some complex work involving that component of the system, and you are unsure how to proceed:

- [Dexie.js](https://dexie.org/llms.txt)
- [Tailwind](https://raw.githubusercontent.com/rgfx/tailwind-llms/refs/heads/main/tailwind-llms.txt)
- [React](https://react.dev/reference/react)
- [Vite](https://vite.dev/llms.txt)
- [Vite PWA](https://vite-pwa-org.netlify.app/guide/)
- [shadcn/ui](https://ui.shadcn.com/llms.txt)
