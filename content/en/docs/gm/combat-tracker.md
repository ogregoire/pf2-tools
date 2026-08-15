---
title: "Combat Tracker"
weight: 4
---

# Combat Tracker

Track initiative order, hit points, and conditions during an encounter, following the Pathfinder 2e Remastered rules.

<div id="combat-tracker"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  initCombatTracker('en');
});
</script>

## How to use

- **Add combatants** with their name, initiative, and maximum HP. The list is sorted by initiative when combat starts; use the ↑/↓ arrows to reorder at any time (for example when someone Delays).
- **Damage / Heal**: enter an amount and press the matching button. A combatant reduced to 0 HP automatically becomes **dying** (1 + wounded value) and **unconscious**; healing them removes dying and increases **wounded** by 1.
- **Add condition**: press the button on a combatant, choose the condition (and its value when the condition has one, e.g. Frightened 1), an optional duration, and the inflicter — by default the creature whose turn it is. The **Add** button enables once the selection is valid.
- **Next combatant** advances the turn and applies automatic effects:
  - **Persistent damage** is applied at the end of the affected creature's turn, followed by the DC 15 flat check to end it.
  - **Frightened** decreases by 1 at the end of the affected creature's turn.
  - Conditions lasting **until the start or end of the inflicter's next turn**, or a number of **rounds**, end automatically at the right moment.
  - **Slowed**, **stunned**, and **quickened** action changes are computed at the start of the turn (stunned loses its value as actions are lost).
  - **Dying** creatures get a recovery check reminder (flat DC 10 + dying value) at the start of their turn.
- Everything is saved in your browser, so a page reload keeps the combat going.

**Source:** Player Core pg. 443–447, GM Core
