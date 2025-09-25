---
title: "Boucliers"
weight: 1
---

# Boucliers

Outil de référence pour les boucliers de Pathfinder 2e Remastered.

## Utilisation des boucliers

Un bouclier doit être attaché à votre bras et tenu dans une main. Pour obtenir le bonus de CA du bouclier, vous devez utiliser l'action **Lever un bouclier** ◆, qui accorde le bonus de circonstance à la CA du bouclier jusqu'au début de votre prochain tour. Les targes sont une exception — elles n'occupent pas votre main, vous pouvez donc Lever un bouclier avec une targe si votre main est libre.

Les pavois offrent une protection supplémentaire : lorsque vous utilisez **Se mettre à couvert** ◆ avec un pavois levé, ils accordent +4 CA au lieu des +2 CA normaux.

### Blocage au bouclier

Avec la réaction **Blocage au bouclier** ↺ (nécessite le don Blocage au bouclier), vous pouvez utiliser votre bouclier pour réduire les dégâts. Le bouclier prévient des dégâts égaux à sa Solidité. Tous les dégâts restants sont infligés tant sur vous que sur le bouclier. Cela peut endommager ou détruire votre bouclier.

### Dégâts et réparation des boucliers

Les boucliers ont une **Solidité** (réduction de dégâts), des **Points de vie** (PV) et un **Seuil de rupture** (SR). Lorsqu'un bouclier subit des dégâts :
- la Solidité du bouclier réduit les dégâts ;
- si les PV tombent à ou sous le SR, le bouclier devient **endommagé** et ne peut pas être utilisé sans être réparé avant ;
- si les PV tombent à 0, le bouclier est **détruit** et ne peut pas être réparé.

**Réparer un bouclier** nécessite l'activité Réparation (10 minutes, test d'Artisanat). Le DD est basé sur le niveau et la rareté du bouclier (voir DD de réparation dans l'assembleur ci-dessous). En cas de succès, restaurez 5 PV par rang de maîtrise ; en cas de succès critique, restaurez 10 PV par rang de maîtrise. Les boucliers détruits ne peuvent pas être réparés.

**Source :** Livre des joueurs, p. 274, 233

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
