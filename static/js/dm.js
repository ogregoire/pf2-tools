const simpleDCs = {
  untrained: 10,
  trained: 15,
  expert: 20,
  master: 30,
  legendary: 40
};

const levelBasedDCs = {
  0: 14, 1: 15, 2: 16, 3: 18, 4: 19, 5: 20,
  6: 22, 7: 23, 8: 24, 9: 26, 10: 27, 11: 28,
  12: 30, 13: 31, 14: 32, 15: 34, 16: 35, 17: 36,
  18: 38, 19: 39, 20: 40, 21: 42, 22: 44, 23: 46,
  24: 48, 25: 50
};

const dcAdjustments = {
  incrediblyEasy: -10,
  veryEasy: -5,
  easy: -2,
  hard: 2,
  veryHard: 5,
  incrediblyHard: 10
};

const rarityAdjustments = {
  common: 0,
  uncommon: 2,
  rare: 5,
  unique: 10
};

const simpleDCNames = {
  en: {
    untrained: 'Untrained',
    trained: 'Trained',
    expert: 'Expert',
    master: 'Master',
    legendary: 'Legendary'
  },
  fr: {
    untrained: 'Inexpérimenté',
    trained: 'Qualifié',
    expert: 'Expert',
    master: 'Maître',
    legendary: 'Légendaire'
  }
};

const dcAdjustmentNames = {
  en: {
    incrediblyEasy: 'Incredibly easy',
    veryEasy: 'Very easy',
    easy: 'Easy',
    hard: 'Hard',
    veryHard: 'Very hard',
    incrediblyHard: 'Incredibly hard'
  },
  fr: {
    incrediblyEasy: 'Incroyablement facile',
    veryEasy: 'Très facile',
    easy: 'Facile',
    hard: 'Difficile',
    veryHard: 'Très difficile',
    incrediblyHard: 'Incroyablement difficile'
  }
};

function getRepairDC(level, rarity) {
  const baseDC = levelBasedDCs[level] || 14;
  const rarityAdjustment = rarityAdjustments[rarity] || 0;
  return baseDC + rarityAdjustment;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { simpleDCs, levelBasedDCs, dcAdjustments, rarityAdjustments, simpleDCNames, dcAdjustmentNames, getRepairDC };
}