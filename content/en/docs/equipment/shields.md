---
title: "Shields"
weight: 1
---

# Shields

Shield reference.

## Using Shields

A shield must be strapped to your arm and held in one hand. To gain the shield's AC bonus, you must use the **Raise a Shield** ◆ action, which grants the shield's circumstance bonus to AC until the start of your next turn. Bucklers are an exception—they don't take up your hand, so you can Raise a Shield with a buckler if your hand is free or holding a simple, lightweight object (so no weapons).

**Tower shields** provide additional protection: when you **Take Cover** ◆ while raised, they grant +4 AC instead of the normal +2 AC.

### Shield Block

With the **Shield Block** ↺ reaction (requires the Shield Block feat), you can use your shield to reduce damage. The shield prevents damage equal to its Hardness. Any remaining damage is split between you and the shield. This can damage or destroy your shield.

### Shield Damage and Repair

Shields have **Hardness** (damage reduction), **Hit Points** (HP), and a **Broken Threshold** (BT). When a shield takes damage:
- The shield's Hardness reduces the damage
- When HP drops to or below BT, the shield becomes **broken** and can't be used
- When HP drops to 0, the shield is **destroyed** and can't be repaired

**Repairing a shield** requires the Repair activity (10 minutes, Crafting check). The DC is based on the shield's level and rarity (see Repair DC in the assembler below).
- **Critical Success:** Restore 10 HP per proficiency rank
- **Success:** Restore 5 HP per proficiency rank
- **Critical Failure:** Deal 2d6 damage to the item (minus Hardness)

Destroyed shields cannot be repaired.

**Source:** Player Core pg. 277, 236

## Base Shields

**Source:** Player Core pg. 277

| Shield | Price | AC Bonus | Speed Penalty | Bulk | Hardness | HP (BT) |
|--------|-------|----------|---------------|------|----------|---------|
| Buckler | 1 gp | +1 | — | L | 3 | 6 (3) |
| Wooden Shield | 1 gp | +2 | — | 1 | 3 | 12 (6) |
| Steel Shield | 2 gp | +2 | — | 1 | 5 | 20 (10) |
| Tower Shield | 10 gp | +2/+4* | -5 ft. | 4 | 5 | 20 (10) |

*Tower Shield grants +2 AC normally, or +4 AC when using the Take Cover action.

## Reinforcing Runes

**Source:** GM Core pg. 232

| Rune | Level | Price | Hardness Bonus | HP Bonus | BT Bonus | Maximum |
|------|-------|-------|----------------|----------|----------|---------|
| Minor | 4 | 75 gp | +3 | +44 | +22 | 8 Hardness, 64 HP, 32 BT |
| Lesser | 7 | 300 gp | +3 | +52 | +26 | 10 Hardness, 80 HP, 40 BT |
| Moderate | 10 | 900 gp | +3 | +64 | +32 | 13 Hardness, 104 HP, 52 BT |
| Greater | 13 | 2,500 gp | +5 | +80 | +40 | 15 Hardness, 120 HP, 60 BT |
| Major | 16 | 8,000 gp | +5 | +84 | +42 | 17 Hardness, 136 HP, 68 BT |
| Supreme | 19 | 32,000 gp | +7 | +108 | +54 | 20 Hardness, 160 HP, 80 BT |

## Shield Assembler

<div class="shield-calculator">
  <div>
    <label for="shield-select-en">Base Shield:</label>
    <select id="shield-select-en" onchange="calculateShield('en')">
      <option value="buckler">Buckler</option>
      <option value="wooden">Wooden Shield</option>
      <option value="steel" selected>Steel Shield</option>
      <option value="tower">Tower Shield</option>
    </select>
  </div>

  <div>
    <label for="rune-select-en">Reinforcing Rune:</label>
    <select id="rune-select-en" onchange="calculateShield('en')">
      <option value="none" selected>None</option>
      <option value="minor">Minor</option>
      <option value="lesser">Lesser</option>
      <option value="moderate">Moderate</option>
      <option value="greater">Greater</option>
      <option value="major">Major</option>
      <option value="supreme">Supreme</option>
    </select>
  </div>

  <div id="shield-result-en"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  calculateShield('en');
});
</script>
