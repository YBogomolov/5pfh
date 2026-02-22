# ‘Five Parsecs From Home’ Companion App

# Overview

This project is a companion app for the “Five Parsecs From Home” tabletop miniature wargame.

This is a mobile-first PWA that holds a number of random tables and reference information to help the user (the player) with the game flow.

# UI and UX

The app consists of several tabs:

1. **Crew** — a place to generate crew members, crew equipment, as well as generators for injuries;
2. **Travel** — generators for sharship events and world traits;
3. **World** — generators for crew tasks (trade, exploration), jobs, battle setup & battle events, galactic war progress and campaing & character events;
4. **Loot** — a dedicated space for loot & battlefield finds generators.

The tabs are located at the bottom of the screen and are fixed in position: they do not scroll with content.

Each tab contains a set of _sections_ positioned vertically. Each section is enclosed in a rectangular border, has title written at the top border line, and contains a set of _generators_.

A generator is a button named after generator type (e.g.: "New crew member", "Starship travel event", "Loot item", etc.), and a read-only text area below that holds the generated text.

Generators persist their state between tab switches, but are not persisted between page reloads — which means each generator should keep its state in the app store, but the app store is not persisted to the browser's persistent storage of any kind.
