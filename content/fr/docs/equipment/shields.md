---
title: "Boucliers"
weight: 1
---

# Boucliers

Outil de référence pour les boucliers de Pathfinder 2e Remastered.

## Boucliers de base

**Source:** Livre des joueurs, p. 274

| Bouclier | Prix | Bonus CA | Malus à la vitesse | Encombrement | Solidité | PV (SR) |
|----------|------|----------|---------------------|--------------|----------|---------|
| Targe | 1 po | +1 | — | L | 3 | 6 (3) |
| Bouclier en bois | 1 po | +2 | — | 1 | 3 | 12 (6) |
| Bouclier en acier | 2 po | +2 | — | 1 | 5 | 20 (10) |
| Pavois | 10 po | +2/+4* | -1,5 m | 4 | 5 | 20 (10) |

*Le pavois accorde +2 CA normalement, ou +4 CA lors de l'utilisation de l'action Se mettre à couvert.

## Runes de renforcement

**Source:** Livre du MJ, p. 232

| Rune | Niveau | Prix | Bonus de solidité | Bonus PV | Bonus SR | Maximum |
|------|--------|------|-------------------|----------|----------|---------|
| Mineure | 4 | 75 po | +3 | +44 | +22 | Solidité 8, 64 PV et SR 32 |
| Inférieure | 7 | 300 po | +3 | +52 | +26 | Solidité 10, 80 PV et SR 40 |
| Moyenne | 10 | 900 po | +3 | +64 | +32 | Solidité 13, 104 PV et SR 52 |
| Supérieure | 13 | 2 500 po | +5 | +80 | +40 | Solidité 15, 120 PV et SR 60 |
| Majeure | 16 | 8 000 po | +5 | +84 | +42 | Solidité 17, 136 PV et SR 68 |
| Ultime | 19 | 32 000 po | +7 | +108 | +54 | Solidité 20, 160 PV et SR 80 |

## Assembleur de bouclier

<div class="shield-calculator">
  <div>
    <label for="shield-select-fr">Bouclier de base :</label>
    <select id="shield-select-fr" onchange="calculateShield('fr')">
      <option value="buckler">Targe</option>
      <option value="wooden">Bouclier en bois</option>
      <option value="steel" selected>Bouclier en acier</option>
      <option value="tower">Pavois</option>
    </select>
  </div>

  <div>
    <label for="rune-select-fr">Rune de renforcement :</label>
    <select id="rune-select-fr" onchange="calculateShield('fr')">
      <option value="none" selected>Aucune</option>
      <option value="minor">Mineure</option>
      <option value="lesser">Inférieure</option>
      <option value="moderate">Moyenne</option>
      <option value="greater">Supérieure</option>
      <option value="major">Majeure</option>
      <option value="supreme">Ultime</option>
    </select>
  </div>

  <div id="shield-result-fr"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  calculateShield('fr');
});
</script>
