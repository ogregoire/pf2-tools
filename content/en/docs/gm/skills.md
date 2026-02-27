---
title: "Skills"
weight: 3
---

# Skills

GM reference for adjudicating skill checks in Pathfinder 2e Remastered.

## Skill Checks

**Source:** Player Core pg. 227

A skill check is a d20 roll + the skill modifier against a DC. The result determines the degree of success.

| Degree of Success | Condition |
|-------------------|-----------|
| Critical Success | Result is DC + 10 or more |
| Success | Result meets or exceeds the DC |
| Failure | Result is below the DC |
| Critical Failure | Result is DC - 10 or less |

A natural 20 improves the degree of success by one step. A natural 1 worsens it by one step.

## Stealth

**Source:** Player Core pg. 253

Stealth governs how creatures avoid detection. The GM must track the **detection state** of creatures relative to each observer.

### Detection States

| State | Observer Knows Location? | Observer Can See? | Targeting |
|-------|--------------------------|-------------------|-----------|
| Observed | Yes | Yes | Normal |
| Hidden | Yes | No | DC 11 flat check to target |
| Undetected | No | No | Must guess square; DC 11 flat check to target |
| Unnoticed | No | No | Can't target; doesn't know creature is there |

### Hide (single action)

**Requirements:** You must have cover or concealment from the creature you're hiding from.

1. The creature attempting to Hide makes a **Stealth check** against the **Perception DC** of each creature it's hiding from.
2. **Success:** The creature becomes **hidden** from that observer (was observed, now hidden).
3. **Critical Success:** The creature becomes hidden and can **Sneak** as a free action immediately.
4. **Failure:** The creature remains **observed**.

**GM Notes:**
- A creature must have cover or concealment to attempt Hide. Without it, the action automatically fails.
- A hidden creature that stops having cover or concealment becomes observed again at the end of its turn, unless it successfully Sneaks before then.
- The observer doesn't need to actively look; the Perception DC represents passive awareness.

### Sneak (single action)

**Requirements:** The creature must be **hidden** or **undetected** (not observed).

1. The creature moves up to **half its Speed**.
2. It makes a **Stealth check** against the **Perception DC** of each creature it's hiding from.
3. **Success:** The creature remains **hidden** or **undetected**.
4. **Failure:** The creature becomes **observed** just before leaving its original space, potentially triggering reactions.
5. At the end of its movement, if the creature has cover or concealment from an observer, it stays **hidden**. If it has neither, it becomes **observed**.

**GM Notes:**
- If a creature Sneaks past a doorway, window, or other opening with no cover, it typically becomes observed by creatures on the other side.
- Creatures can Sneak to go from hidden to undetected if they move somewhere the observer can't pinpoint them.
- A creature that is undetected doesn't need to Sneak to move; however, moving noisily (running, opening doors) may allow the GM to call for a Stealth check or automatically make the creature hidden or observed.

### Avoid Notice (exploration activity)

When a creature uses Avoid Notice during exploration mode, it uses its **Stealth modifier for initiative** instead of Perception. If the creature succeeds, it starts combat **hidden** or **undetected** from creatures that didn't beat its Stealth result.

**GM Notes:**
- Creatures using Avoid Notice travel at full speed (unlike in PF1e). There is no speed penalty.
- If there's no reasonable way to hide (an open field with no cover), Avoid Notice has little effect.
- Creatures that rolled Stealth for initiative and beat an enemy's Perception DC start combat undetected or hidden from that enemy.

### Conceal an Object (single action)

The creature hides a small object on its person. The DC to find it with a cursory search is usually **20**, or against the creature's **Stealth DC** if someone thoroughly searches them.

## Athletics

**Source:** Player Core pg. 233

### Grapple (single action, attack)

1. The creature makes an **Athletics check** against the target's **Fortitude DC**.
2. **Critical Success:** The target is **grabbed** until the end of the grappler's next turn, and the target is also **off-guard** until the end of the grappler's next turn.
3. **Success:** The target is **grabbed** until the end of the grappler's next turn.
4. **Failure:** The grappler fails and releases the target if it was grabbed.
5. **Critical Failure:** The target can grab the grappler, or force the grappler to fall **prone**.

**GM Notes:**
- Grapple has the **attack** trait, so it counts toward the multiple attack penalty.
- The grappler must have at least one free hand.
- A grabbed creature is **off-guard** and **immobilized** (can't move, -2 circumstance to AC).

### Trip (single action, attack)

1. The creature makes an **Athletics check** against the target's **Reflex DC**.
2. **Critical Success:** The target falls **prone** and takes 1d6 bludgeoning damage.
3. **Success:** The target falls **prone**.
4. **Failure:** No effect.
5. **Critical Failure:** The creature falls **prone** itself.

### Disarm (single action, attack)

1. The creature makes an **Athletics check** against the target's **Reflex DC**.
2. **Critical Success:** The creature knocks the item to the ground in the target's space.
3. **Success:** The target takes a -2 circumstance penalty to attacks and other checks using the item until the start of the target's turn.
4. **Failure:** No effect.
5. **Critical Failure:** The creature becomes **off-guard** until the start of its next turn.

**GM Notes:**
- Disarm is very difficult to fully succeed at; the -2 penalty on a regular success is the most common outcome.
- The target can simply pick up a dropped item (an Interact action) on their turn.

### Shove (single action, attack)

1. The creature makes an **Athletics check** against the target's **Fortitude DC**.
2. **Critical Success:** The creature pushes the target up to 10 feet away, and can Stride to follow.
3. **Success:** The creature pushes the target 5 feet away, and can Stride to follow.
4. **Failure:** No effect.
5. **Critical Failure:** The creature falls **prone**.

## Medicine

**Source:** Player Core pg. 248

### Treat Wounds (exploration activity)

**Requirements:** Healer's toolkit (or worn healer's tools).

The creature spends **10 minutes** treating a living target.

1. The creature makes a **Medicine check** against **DC 15** (or a higher DC for greater healing).
2. **Critical Success:** The target regains **4d8 Hit Points**.
3. **Success:** The target regains **2d8 Hit Points**.
4. **Critical Failure:** The target takes **1d8 damage**.

| DC | Success | Critical Success |
|----|---------|------------------|
| 15 | 2d8 | 4d8 |
| 20 (trained) | 2d8+10 | 4d8+10 |
| 30 (master) | 2d8+30 | 4d8+30 |
| 40 (legendary) | 2d8+50 | 4d8+50 |

**GM Notes:**
- A creature can't attempt Treat Wounds on the same target again for **1 hour** after a success or critical success, or **10 minutes** after a failure or critical failure.
- The higher-DC options require the corresponding proficiency rank in Medicine.
- Treat Wounds is the primary way parties heal between encounters without magic.

### Battle Medicine (single action, feat)

**Requirements:** Trained in Medicine, Battle Medicine feat, healer's toolkit.

Works like Treat Wounds but takes a **single action** in combat. Can only be used on a given creature **once per day** (unless the creature has Medic Dedication or similar).

## Recall Knowledge (single action)

**Source:** Player Core pg. 230

A creature attempts to remember information about a topic using an appropriate skill.

| Skill | Topics |
|-------|--------|
| Arcana | Arcane theories, magical traditions, arcane creatures |
| Crafting | Alchemical items, constructs, unusual materials |
| Lore | Matches the Lore subcategory (e.g. Undead Lore for undead) |
| Medicine | Diseases, poisons, wounds, forensics |
| Nature | Natural environment, primal creatures, plants |
| Occultism | Ancient mysteries, occult creatures, curses |
| Religion | Divine agents, undead, religious history |
| Society | Local history, cultures, important figures |

**GM Notes:**
- The DC is usually a level-based DC using the creature's level or the topic's level.
- On a **critical failure**, the creature receives **incorrect information** that it believes to be true. The GM should provide false but plausible information.
- A creature can only attempt to Recall Knowledge about the same topic **once**; further attempts give no new information unless circumstances meaningfully change.
- Identifying a creature typically reveals one useful fact about it (a resistance, a special ability, a weakness). Critical success reveals additional information.
