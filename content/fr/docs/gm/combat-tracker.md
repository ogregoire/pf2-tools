---
title: "Suivi de combat"
weight: 4
---

# Suivi de combat

Suivez l'ordre d'initiative, les points de vie et les états pendant une rencontre, selon les règles de Pathfinder 2e Remastered.

<div id="combat-tracker"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  initCombatTracker('fr');
});
</script>

## Mode d'emploi

- **Ajoutez les combattants** avec leur nom, leur initiative et leurs PV maximum. La liste est triée par initiative au début du combat ; utilisez les flèches ↑/↓ pour réordonner à tout moment (par exemple quand quelqu'un Retarde).
- **Dégâts / Soins** : saisissez un montant et appuyez sur le bouton correspondant. Un combattant réduit à 0 PV devient automatiquement **mourant** (1 + intensité de blessé) et **inconscient** ; le soigner retire l'état mourant et augmente **blessé** de 1.
- **Ajouter un état** : appuyez sur le bouton d'un combattant, choisissez l'état (et son intensité si l'état en a une, par ex. Effrayé 1), une durée facultative et la source — par défaut la créature dont c'est le tour. Le bouton **Ajouter** s'active quand la sélection est valide.
- **Combattant suivant** fait avancer le tour et applique les effets automatiques :
  - Les **dégâts persistants** sont appliqués à la fin du tour de la créature affectée, suivis du test nu DD 15 pour y mettre fin.
  - **Effrayé** diminue de 1 à la fin du tour de la créature affectée.
  - Les états qui durent **jusqu'au début ou la fin du prochain tour de la source**, ou un nombre de **rounds**, prennent fin automatiquement au bon moment.
  - Les changements d'actions dus à **ralenti**, **étourdi** et **accéléré** sont calculés au début du tour (étourdi diminue à mesure que des actions sont perdues).
  - Les créatures **mourantes** reçoivent un rappel de jet de récupération (test nu DD 10 + intensité de mourant) au début de leur tour.
- Tout est enregistré dans votre navigateur : recharger la page ne perd pas le combat.

**Source :** Livre des joueurs, p. 443–447, Livre du maître de jeu
