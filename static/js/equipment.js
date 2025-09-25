const shieldData = {
  buckler: { level: 0, price: 1, acBonus: 1, speedPenalty: 0, bulk: 'L', hardness: 3, hp: 6, bt: 3, rarity: 'common' },
  wooden: { level: 0, price: 1, acBonus: 2, speedPenalty: 0, bulk: 1, hardness: 3, hp: 12, bt: 6, rarity: 'common' },
  steel: { level: 0, price: 2, acBonus: 2, speedPenalty: 0, bulk: 1, hardness: 5, hp: 20, bt: 10, rarity: 'common' },
  tower: { level: 0, price: 10, acBonus: '2/4*', speedPenalty: -5, bulk: 4, hardness: 5, hp: 20, bt: 10, rarity: 'common' }
};

const shieldNames = {
  en: {
    buckler: 'Buckler',
    wooden: 'Wooden Shield',
    steel: 'Steel Shield',
    tower: 'Tower Shield'
  },
  fr: {
    buckler: 'Targe',
    wooden: 'Bouclier en bois',
    steel: 'Bouclier en acier',
    tower: 'Pavois'
  }
};

const shieldRuneData = {
  none: { level: 0, price: 0, hardnessBonus: 0, hpBonus: 0, btBonus: 0, maxHardness: 999, maxHP: 999, maxBT: 999 },
  minor: { level: 4, price: 75, hardnessBonus: 3, hpBonus: 44, btBonus: 22, maxHardness: 8, maxHP: 64, maxBT: 32 },
  lesser: { level: 7, price: 300, hardnessBonus: 3, hpBonus: 52, btBonus: 26, maxHardness: 10, maxHP: 80, maxBT: 40 },
  moderate: { level: 10, price: 900, hardnessBonus: 3, hpBonus: 64, btBonus: 32, maxHardness: 13, maxHP: 104, maxBT: 52 },
  greater: { level: 13, price: 2500, hardnessBonus: 5, hpBonus: 80, btBonus: 40, maxHardness: 15, maxHP: 120, maxBT: 60 },
  major: { level: 16, price: 8000, hardnessBonus: 5, hpBonus: 84, btBonus: 42, maxHardness: 17, maxHP: 136, maxBT: 68 },
  supreme: { level: 19, price: 32000, hardnessBonus: 7, hpBonus: 108, btBonus: 54, maxHardness: 20, maxHP: 160, maxBT: 80 }
};

const shieldRuneNames = {
  en: {
    none: 'None',
    minor: 'Minor',
    lesser: 'Lesser',
    moderate: 'Moderate',
    greater: 'Greater',
    major: 'Major',
    supreme: 'Supreme'
  },
  fr: {
    none: 'Aucune',
    minor: 'Mineure',
    lesser: 'Inférieure',
    moderate: 'Moyenne',
    greater: 'Supérieure',
    major: 'Majeure',
    supreme: 'Ultime'
  }
};

function calculateShield(lang = 'en') {
  const shieldSelect = document.getElementById(`shield-select-${lang}`);
  const runeSelect = document.getElementById(`rune-select-${lang}`);
  const result = document.getElementById(`shield-result-${lang}`);

  const shield = shieldData[shieldSelect.value];
  const rune = shieldRuneData[runeSelect.value];
  const shieldName = shieldNames[lang][shieldSelect.value];
  const runeName = shieldRuneNames[lang][runeSelect.value];

  const finalLevel = Math.max(shield.level, rune.level);
  const finalHardness = Math.min(shield.hardness + rune.hardnessBonus, rune.maxHardness);
  const finalHP = Math.min(shield.hp + rune.hpBonus, rune.maxHP);
  const finalBT = Math.min(shield.bt + rune.btBonus, rune.maxBT);
  const totalPrice = shield.price + rune.price;
  const repairDC = getRepairDC(finalLevel, shield.rarity);

  const labels = lang === 'fr' ? {
    price: 'Prix total',
    acBonus: 'Bonus CA',
    speedPenalty: 'Malus à la vitesse',
    bulk: 'Encombrement',
    hardness: 'Solidité',
    hp: 'PV',
    bt: 'SR',
    repairDC: 'DD de réparation',
    gp: 'po',
    ft: 'pi',
    m: 'm',
    none: 'Aucune'
  } : {
    price: 'Total Price',
    acBonus: 'AC Bonus',
    speedPenalty: 'Speed Penalty',
    bulk: 'Bulk',
    hardness: 'Hardness',
    hp: 'HP',
    bt: 'BT',
    repairDC: 'Repair DC',
    gp: 'gp',
    ft: 'ft.',
    m: 'ft.',
    none: 'None'
  };

  const speedPenaltyText = shield.speedPenalty === 0
    ? '—'
    : `${shield.speedPenalty} ${labels.ft}`;

  result.innerHTML = `
    <h4>${shieldName}${runeName !== labels.none ? ' + ' + runeName : ''}</h4>
    <ul>
      <li><strong>${labels.price}:</strong> ${totalPrice} ${labels.gp}</li>
      <li><strong>${labels.acBonus}:</strong> +${shield.acBonus}</li>
      <li><strong>${labels.speedPenalty}:</strong> ${speedPenaltyText}</li>
      <li><strong>${labels.bulk}:</strong> ${shield.bulk}</li>
      <li><strong>${labels.hardness}:</strong> ${finalHardness}</li>
      <li><strong>${labels.hp}:</strong> ${finalHP} (${labels.bt}${finalBT})</li>
      <li><strong>${labels.repairDC}:</strong> ${repairDC}</li>
    </ul>
  `;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateShield, shieldData, shieldNames, shieldRuneData, shieldRuneNames };
}