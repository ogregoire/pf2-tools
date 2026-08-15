// PF2e Remastered Combat Tracker

const ctConditions = {
  blinded: { valued: false },
  clumsy: { valued: true },
  concealed: { valued: false },
  confused: { valued: false },
  controlled: { valued: false },
  dazzled: { valued: false },
  deafened: { valued: false },
  doomed: { valued: true },
  drained: { valued: true },
  dying: { valued: true },
  enfeebled: { valued: true },
  fascinated: { valued: false },
  fatigued: { valued: false },
  fleeing: { valued: false },
  frightened: { valued: true },
  grabbed: { valued: false },
  hidden: { valued: false },
  immobilized: { valued: false },
  invisible: { valued: false },
  offGuard: { valued: false },
  paralyzed: { valued: false },
  persistentDamage: { valued: true },
  petrified: { valued: false },
  prone: { valued: false },
  quickened: { valued: false },
  restrained: { valued: false },
  sickened: { valued: true },
  slowed: { valued: true },
  stunned: { valued: true },
  stupefied: { valued: true },
  unconscious: { valued: false },
  undetected: { valued: false },
  unnoticed: { valued: false },
  wounded: { valued: true }
};

const ctI18n = {
  en: {
    conditions: {
      blinded: 'Blinded', clumsy: 'Clumsy', concealed: 'Concealed', confused: 'Confused',
      controlled: 'Controlled', dazzled: 'Dazzled', deafened: 'Deafened', doomed: 'Doomed',
      drained: 'Drained', dying: 'Dying', enfeebled: 'Enfeebled', fascinated: 'Fascinated',
      fatigued: 'Fatigued', fleeing: 'Fleeing', frightened: 'Frightened', grabbed: 'Grabbed',
      hidden: 'Hidden', immobilized: 'Immobilized', invisible: 'Invisible', offGuard: 'Off-Guard',
      paralyzed: 'Paralyzed', persistentDamage: 'Persistent Damage', petrified: 'Petrified',
      prone: 'Prone', quickened: 'Quickened', restrained: 'Restrained', sickened: 'Sickened',
      slowed: 'Slowed', stunned: 'Stunned', stupefied: 'Stupefied', unconscious: 'Unconscious',
      undetected: 'Undetected', unnoticed: 'Unnoticed', wounded: 'Wounded'
    },
    name: 'Name',
    initiative: 'Initiative',
    maxHp: 'Max HP',
    ac: 'AC',
    type: 'Type',
    count: 'Count',
    types: { player: 'Player', enemy: 'Enemy', ally: 'Ally', other: 'Other' },
    addParticipant: 'Add combatant',
    round: 'Round',
    nextTurn: 'Next combatant',
    sortByInitiative: 'Sort by initiative',
    resetCombat: 'Reset combat',
    resetConfirm: 'Remove all combatants and reset the tracker?',
    hp: 'HP',
    damage: 'Damage',
    heal: 'Heal',
    addCondition: 'Add condition',
    condition: 'Condition',
    chooseCondition: '— Choose a condition —',
    value: 'Value',
    damageType: 'Damage type (e.g. fire)',
    duration: 'Duration',
    durManual: 'Until removed',
    durStartNext: "Until start of the inflicter's next turn",
    durEndNext: "Until end of the inflicter's next turn",
    durRounds: 'Rounds…',
    rounds: 'Rounds',
    inflicter: 'Inflicted by',
    confirmAdd: 'Add',
    cancel: 'Cancel',
    moveUp: 'Move up (act earlier)',
    moveDown: 'Move down (delay)',
    removeParticipant: 'Remove',
    removeCondition: 'Remove condition',
    increase: 'Increase value',
    decrease: 'Decrease value',
    currentTurn: 'Current turn',
    noParticipants: 'No combatants yet. Add them above, then press "Next combatant" to advance turns.',
    log: 'Combat log',
    by: 'by',
    roundsShort: 'rd',
    untilStartNextShort: 'until start of next turn of',
    untilEndNextShort: 'until end of next turn of',
    // Log messages ({x} placeholders)
    logJoined: '{name} joins the fight (initiative {init}).',
    logRemoved: '{name} leaves the fight.',
    logDamage: '{name} takes {n} damage ({hp} HP left).',
    logHeal: '{name} is healed for {n} ({hp} HP).',
    logDropped: '{name} falls to 0 HP: dying {n}, unconscious!',
    logRecovered: '{name} is no longer dying and gains wounded {n}.',
    logDead: '{name} has reached dying {n} (death at dying {max}) — dead!',
    logConditionAdded: '{name} gains {cond}.',
    logConditionUpgraded: '{name}: {cond} increased to the higher value.',
    logConditionIgnored: '{name} already has {cond} with an equal or higher value.',
    logConditionEnded: '{name}: {cond} ends.',
    logConditionDecreased: '{name}: {cond} decreases to {n}.',
    logFrightenedEnd: '{name}: frightened decreases by 1 at end of turn.',
    logPersistentDamage: '{name} takes {n} persistent damage{type} ({hp} HP left).',
    persistentCheck: '{name}: flat check DC 15 to end persistent damage{type}. Did the check succeed?',
    logPersistentEnded: '{name}: persistent damage{type} ends (flat check success).',
    logPersistentContinues: '{name}: persistent damage{type} continues.',
    logRoundStart: '— Round {n} —',
    logTurnStart: 'Turn: {name}.',
    logSlowed: '{name} is slowed {n}: regains {a} action(s) this turn.',
    logStunned: '{name} is stunned {n}: loses {a} action(s), stunned decreases to {r}.',
    logQuickened: '{name} is quickened: 1 extra action this turn.',
    logDyingReminder: '{name} is dying {n}: recovery check, flat DC {dc}.',
    logNoActions: '{name} regains no actions this turn.'
  },
  fr: {
    conditions: {
      blinded: 'Aveugle', clumsy: 'Maladroit', concealed: 'Masqué', confused: 'Confus',
      controlled: 'Contrôlé', dazzled: 'Ébloui', deafened: 'Sourd', doomed: 'Condamné',
      drained: 'Drainé', dying: 'Mourant', enfeebled: 'Affaibli', fascinated: 'Fasciné',
      fatigued: 'Fatigué', fleeing: 'En fuite', frightened: 'Effrayé', grabbed: 'Empoigné',
      hidden: 'Caché', immobilized: 'Immobilisé', invisible: 'Invisible', offGuard: 'Pris par surprise',
      paralyzed: 'Paralysé', persistentDamage: 'Dégâts persistants', petrified: 'Pétrifié',
      prone: 'À terre', quickened: 'Accéléré', restrained: 'Entravé', sickened: 'Malade',
      slowed: 'Ralenti', stunned: 'Étourdi', stupefied: 'Stupéfié', unconscious: 'Inconscient',
      undetected: 'Indétecté', unnoticed: 'Inaperçu', wounded: 'Blessé'
    },
    name: 'Nom',
    initiative: 'Initiative',
    maxHp: 'PV max',
    ac: 'CA',
    type: 'Type',
    count: 'Nombre',
    types: { player: 'Joueur', enemy: 'Ennemi', ally: 'Allié', other: 'Autre' },
    addParticipant: 'Ajouter un combattant',
    round: 'Round',
    nextTurn: 'Combattant suivant',
    sortByInitiative: "Trier par initiative",
    resetCombat: 'Réinitialiser le combat',
    resetConfirm: 'Retirer tous les combattants et réinitialiser le suivi ?',
    hp: 'PV',
    damage: 'Dégâts',
    heal: 'Soins',
    addCondition: 'Ajouter un état',
    condition: 'État',
    chooseCondition: '— Choisir un état —',
    value: 'Intensité',
    damageType: 'Type de dégâts (ex. feu)',
    duration: 'Durée',
    durManual: "Jusqu'à retrait manuel",
    durStartNext: "Jusqu'au début du prochain tour de la source",
    durEndNext: "Jusqu'à la fin du prochain tour de la source",
    durRounds: 'Rounds…',
    rounds: 'Rounds',
    inflicter: 'Infligé par',
    confirmAdd: 'Ajouter',
    cancel: 'Annuler',
    moveUp: 'Monter (agir plus tôt)',
    moveDown: 'Descendre (retarder)',
    removeParticipant: 'Retirer',
    removeCondition: "Retirer l'état",
    increase: "Augmenter l'intensité",
    decrease: "Diminuer l'intensité",
    currentTurn: 'Tour en cours',
    noParticipants: 'Aucun combattant. Ajoutez-les ci-dessus, puis appuyez sur « Combattant suivant » pour faire avancer les tours.',
    log: 'Journal de combat',
    by: 'par',
    roundsShort: 'rd',
    untilStartNextShort: "jusqu'au début du prochain tour de",
    untilEndNextShort: "jusqu'à la fin du prochain tour de",
    logJoined: '{name} rejoint le combat (initiative {init}).',
    logRemoved: '{name} quitte le combat.',
    logDamage: '{name} subit {n} dégâts ({hp} PV restants).',
    logHeal: '{name} est soigné de {n} ({hp} PV).',
    logDropped: '{name} tombe à 0 PV : mourant {n}, inconscient !',
    logRecovered: "{name} n'est plus mourant et devient blessé {n}.",
    logDead: '{name} atteint mourant {n} (mort à mourant {max}) — mort !',
    logConditionAdded: '{name} devient {cond}.',
    logConditionUpgraded: "{name} : {cond} passe à l'intensité la plus élevée.",
    logConditionIgnored: '{name} a déjà {cond} avec une intensité égale ou supérieure.',
    logConditionEnded: '{name} : {cond} prend fin.',
    logConditionDecreased: '{name} : {cond} diminue à {n}.',
    logFrightenedEnd: '{name} : effrayé diminue de 1 à la fin du tour.',
    logPersistentDamage: '{name} subit {n} dégâts persistants{type} ({hp} PV restants).',
    persistentCheck: '{name} : test nu DD 15 pour mettre fin aux dégâts persistants{type}. Le test est-il réussi ?',
    logPersistentEnded: '{name} : les dégâts persistants{type} prennent fin (test nu réussi).',
    logPersistentContinues: '{name} : les dégâts persistants{type} continuent.',
    logRoundStart: '— Round {n} —',
    logTurnStart: 'Tour : {name}.',
    logSlowed: '{name} est ralenti {n} : ne regagne que {a} action(s) ce tour.',
    logStunned: '{name} est étourdi {n} : perd {a} action(s), étourdi diminue à {r}.',
    logQuickened: '{name} est accéléré : 1 action supplémentaire ce tour.',
    logDyingReminder: '{name} est mourant {n} : jet de récupération, test nu DD {dc}.',
    logNoActions: '{name} ne regagne aucune action ce tour.'
  }
};

const ctStorageKey = 'pf2CombatTracker';

let ctLang = 'en';
let ctState = null;
// Transient UI state (not persisted)
let ctUi = { panelFor: null, cond: '', value: 1, dmgType: '', duration: 'manual', durRounds: 1, source: null };

function ctT(key, params) {
  let s = ctI18n[ctLang][key] || key;
  if (params) {
    for (const k in params) {
      s = s.split('{' + k + '}').join(params[k]);
    }
  }
  return s;
}

function ctCondName(type) {
  return ctI18n[ctLang].conditions[type] || type;
}

function ctEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function ctDefaultState() {
  return { round: 1, currentId: null, participants: [], log: [], nextId: 1 };
}

function ctLoad() {
  try {
    const raw = localStorage.getItem(ctStorageKey);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && Array.isArray(s.participants)) return s;
    }
  } catch (e) { /* corrupted storage: start fresh */ }
  return ctDefaultState();
}

function ctSave() {
  try {
    localStorage.setItem(ctStorageKey, JSON.stringify(ctState));
  } catch (e) { /* storage unavailable: keep working in memory */ }
}

function ctLog(key, params) {
  ctState.log.unshift(ctT(key, params));
  if (ctState.log.length > 40) ctState.log.length = 40;
}

function ctById(id) {
  return ctState.participants.find(p => p.id === id) || null;
}

function ctCurrent() {
  return ctById(ctState.currentId);
}

function ctCurrentIndex() {
  return ctState.participants.findIndex(p => p.id === ctState.currentId);
}

function ctFindCond(p, type) {
  return p.conditions.find(c => c.type === type) || null;
}

// ---- Participants ----

function ctAddParticipant() {
  const nameEl = document.getElementById('ct-add-name');
  const initEl = document.getElementById('ct-add-init');
  const acEl = document.getElementById('ct-add-ac');
  const hpEl = document.getElementById('ct-add-hp');
  const typeEl = document.getElementById('ct-add-type');
  const countEl = document.getElementById('ct-add-count');
  const name = nameEl.value.trim();
  if (!name) { nameEl.focus(); return; }
  const init = parseInt(initEl.value, 10) || 0;
  const ac = Math.max(0, parseInt(acEl.value, 10) || 0);
  const maxHp = Math.max(0, parseInt(hpEl.value, 10) || 0);
  const type = typeEl.value || 'other';
  const count = Math.min(50, Math.max(1, parseInt(countEl.value, 10) || 1));
  for (let k = 0; k < count; k++) {
    const label = count > 1 ? name + ' ' + (k + 1) : name;
    const p = { id: ctState.nextId++, name: label, init: init, ac: ac, maxHp: maxHp, hp: maxHp, type: type, conditions: [] };
    ctState.participants.push(p);
    ctLog('logJoined', { name: p.name, init: p.init });
  }
  if (ctState.round === 1 && (ctState.currentId === null || ctCurrentIndex() === 0)) {
    // Combat not really underway yet: keep list sorted by initiative
    ctState.participants.sort((a, b) => b.init - a.init);
    ctState.currentId = ctState.participants[0].id;
  }
  if (ctState.currentId === null) ctState.currentId = ctState.participants[0].id;
  nameEl.value = '';
  initEl.value = '';
  acEl.value = '';
  hpEl.value = '';
  countEl.value = '1';
  ctSave();
  ctRender();
  nameEl.focus();
}

function ctSortByInitiative() {
  ctState.participants.sort((a, b) => b.init - a.init);
  ctSave();
  ctRender();
}

function ctMove(id, dir) {
  const i = ctState.participants.findIndex(p => p.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= ctState.participants.length) return;
  const tmp = ctState.participants[i];
  ctState.participants[i] = ctState.participants[j];
  ctState.participants[j] = tmp;
  ctSave();
  ctRender();
}

function ctRemove(id) {
  const i = ctState.participants.findIndex(p => p.id === id);
  if (i < 0) return;
  const p = ctState.participants[i];
  if (ctState.currentId === id) {
    const next = ctState.participants[(i + 1) % ctState.participants.length];
    ctState.currentId = next && next.id !== id ? next.id : null;
  }
  ctState.participants.splice(i, 1);
  // Conditions inflicted by the departed lose their turn anchor; make them manual
  ctState.participants.forEach(q => q.conditions.forEach(c => {
    if (c.sourceId === id && c.duration !== 'manual') c.duration = 'manual';
  }));
  if (ctUi.panelFor === id) ctUi.panelFor = null;
  ctLog('logRemoved', { name: p.name });
  ctSave();
  ctRender();
}

function ctReset() {
  if (!window.confirm(ctT('resetConfirm'))) return;
  ctState = ctDefaultState();
  ctUi.panelFor = null;
  ctSave();
  ctRender();
}

// ---- HP / damage ----

function ctApplyHp(id, sign) {
  const p = ctById(id);
  if (!p) return;
  const input = document.getElementById('ct-dmg-' + id);
  const n = Math.max(0, parseInt(input.value, 10) || 0);
  if (n === 0) { input.focus(); return; }
  input.value = '';
  const before = p.hp;
  if (sign < 0) {
    p.hp = Math.max(0, p.hp - n);
    ctLog('logDamage', { name: p.name, n: n, hp: p.hp });
    if (before > 0 && p.hp === 0) {
      const wounded = ctFindCond(p, 'wounded');
      const dyingValue = 1 + (wounded ? wounded.value : 0);
      ctSetCondition(p, 'dying', dyingValue, null, 'manual', 0, '');
      ctSetCondition(p, 'unconscious', null, null, 'manual', 0, '');
      ctLog('logDropped', { name: p.name, n: dyingValue });
      ctCheckDeath(p);
    }
  } else {
    p.hp = p.maxHp > 0 ? Math.min(p.maxHp, p.hp + n) : p.hp + n;
    ctLog('logHeal', { name: p.name, n: n, hp: p.hp });
    if (before === 0 && p.hp > 0 && ctFindCond(p, 'dying')) {
      ctRemoveCondObj(p, ctFindCond(p, 'dying'), false);
      const wounded = ctFindCond(p, 'wounded');
      const newWounded = (wounded ? wounded.value : 0) + 1;
      ctSetCondition(p, 'wounded', newWounded, null, 'manual', 0, '');
      ctLog('logRecovered', { name: p.name, n: newWounded });
    }
  }
  ctSave();
  ctRender();
}

function ctCheckDeath(p) {
  const dying = ctFindCond(p, 'dying');
  if (!dying) return;
  const doomed = ctFindCond(p, 'doomed');
  const max = 4 - (doomed ? doomed.value : 0);
  if (dying.value >= max) {
    ctLog('logDead', { name: p.name, n: dying.value, max: max });
  }
}

// ---- Conditions ----

// Adds or upgrades a condition following the "use the higher value" rule.
function ctSetCondition(p, type, value, sourceId, duration, durRounds, note) {
  const def = ctConditions[type];
  const label = ctCondName(type) + (def.valued ? ' ' + value : '');
  if (type !== 'persistentDamage') {
    const existing = ctFindCond(p, type);
    if (existing) {
      if (def.valued && value > existing.value) {
        existing.value = value;
        existing.sourceId = sourceId;
        existing.duration = duration;
        existing.durRounds = durRounds;
        existing.skipEnd = ctComputeSkip(sourceId, duration);
        ctLog('logConditionUpgraded', { name: p.name, cond: label });
      } else {
        ctLog('logConditionIgnored', { name: p.name, cond: ctCondName(type) });
      }
      return;
    }
  }
  p.conditions.push({
    id: ctState.nextId++,
    type: type,
    value: def.valued ? value : null,
    sourceId: sourceId,
    duration: duration,
    durRounds: durRounds,
    note: note || '',
    skipEnd: ctComputeSkip(sourceId, duration)
  });
  ctLog('logConditionAdded', { name: p.name, cond: label });
  if (type === 'dying' || type === 'doomed') ctCheckDeath(p);
}

// "Until end of your next turn" inflicted during the source's own turn must
// survive the end of the current turn.
function ctComputeSkip(sourceId, duration) {
  if (duration === 'endNext' && sourceId !== null && sourceId === ctState.currentId) return 1;
  return 0;
}

function ctRemoveCondObj(p, cond, log) {
  const i = p.conditions.indexOf(cond);
  if (i < 0) return;
  p.conditions.splice(i, 1);
  if (log) ctLog('logConditionEnded', { name: p.name, cond: ctCondName(cond.type) });
}

function ctRemoveCondition(pid, cid) {
  const p = ctById(pid);
  if (!p) return;
  const c = p.conditions.find(x => x.id === cid);
  if (!c) return;
  ctRemoveCondObj(p, c, true);
  ctSave();
  ctRender();
}

function ctAdjustCondition(pid, cid, delta) {
  const p = ctById(pid);
  if (!p) return;
  const c = p.conditions.find(x => x.id === cid);
  if (!c || c.value === null) return;
  c.value += delta;
  if (c.value <= 0) {
    ctRemoveCondObj(p, c, true);
  } else {
    ctLog(delta > 0 ? 'logConditionAdded' : 'logConditionDecreased',
      delta > 0 ? { name: p.name, cond: ctCondName(c.type) + ' ' + c.value } : { name: p.name, cond: ctCondName(c.type), n: c.value });
    if (c.type === 'dying' || c.type === 'doomed') ctCheckDeath(p);
  }
  ctSave();
  ctRender();
}

// ---- Add-condition panel ----

function ctOpenPanel(pid) {
  if (ctUi.panelFor === pid) {
    ctUi.panelFor = null;
  } else {
    ctUi.panelFor = pid;
    ctUi.cond = '';
    ctUi.value = 1;
    ctUi.dmgType = '';
    ctUi.duration = 'manual';
    ctUi.durRounds = 1;
    ctUi.source = ctState.currentId;
  }
  ctRender();
}

function ctReadPanel() {
  ctUi.cond = document.getElementById('ct-cond-select').value;
  ctUi.value = parseInt(document.getElementById('ct-cond-value').value, 10) || 0;
  ctUi.dmgType = document.getElementById('ct-cond-type') ? document.getElementById('ct-cond-type').value : '';
  ctUi.duration = document.getElementById('ct-cond-duration').value;
  const dr = document.getElementById('ct-cond-rounds');
  ctUi.durRounds = dr ? (parseInt(dr.value, 10) || 0) : 1;
  ctUi.source = parseInt(document.getElementById('ct-cond-source').value, 10) || null;
}

// Selects change the panel's shape: re-render.
function ctPanelChanged() {
  ctReadPanel();
  ctRender();
}

// Text/number inputs: just refresh state and the Add button, keep focus.
function ctPanelInput() {
  ctReadPanel();
  const btn = document.getElementById('ct-cond-add');
  if (btn) btn.disabled = !ctPanelValid();
}

function ctPanelValid() {
  if (!ctUi.cond) return false;
  if (ctConditions[ctUi.cond].valued && ctUi.value < 1) return false;
  if (ctUi.duration === 'rounds' && ctUi.durRounds < 1) return false;
  return true;
}

function ctConfirmAddCondition() {
  if (!ctPanelValid()) return;
  const p = ctById(ctUi.panelFor);
  if (!p) return;
  ctSetCondition(p, ctUi.cond, ctUi.value, ctUi.source, ctUi.duration, ctUi.durRounds, ctUi.dmgType.trim());
  ctUi.panelFor = null;
  ctSave();
  ctRender();
}

// ---- Turn engine ----

function ctNextTurn() {
  if (ctState.participants.length === 0) return;
  const cur = ctCurrent();
  if (cur) ctEndOfTurn(cur);
  const i = ctCurrentIndex();
  const nextIndex = (i + 1) % ctState.participants.length;
  if (nextIndex <= i) {
    ctState.round += 1;
    ctLog('logRoundStart', { n: ctState.round });
  }
  ctState.currentId = ctState.participants[nextIndex].id;
  ctUi.panelFor = null;
  ctStartOfTurn(ctState.participants[nextIndex]);
  ctSave();
  ctRender();
}

function ctEndOfTurn(p) {
  // Persistent damage: apply, then flat check DC 15 to end
  p.conditions.filter(c => c.type === 'persistentDamage').forEach(c => {
    const typeStr = c.note ? ' (' + c.note + ')' : '';
    const before = p.hp;
    p.hp = Math.max(0, p.hp - c.value);
    ctLog('logPersistentDamage', { name: p.name, n: c.value, type: typeStr, hp: p.hp });
    if (before > 0 && p.hp === 0) {
      const wounded = ctFindCond(p, 'wounded');
      const dyingValue = 1 + (wounded ? wounded.value : 0);
      ctSetCondition(p, 'dying', dyingValue, null, 'manual', 0, '');
      ctSetCondition(p, 'unconscious', null, null, 'manual', 0, '');
      ctLog('logDropped', { name: p.name, n: dyingValue });
      ctCheckDeath(p);
    }
    if (window.confirm(ctT('persistentCheck', { name: p.name, type: typeStr }))) {
      ctRemoveCondObj(p, c, false);
      ctLog('logPersistentEnded', { name: p.name, type: typeStr });
    } else {
      ctLog('logPersistentContinues', { name: p.name, type: typeStr });
    }
  });
  // Frightened decreases by 1 at end of the creature's turn
  const frightened = ctFindCond(p, 'frightened');
  if (frightened) {
    frightened.value -= 1;
    if (frightened.value <= 0) {
      ctRemoveCondObj(p, frightened, true);
    } else {
      ctLog('logFrightenedEnd', { name: p.name });
    }
  }
  // Conditions lasting until the end of this inflicter's turn (on anyone)
  ctState.participants.forEach(q => {
    q.conditions.slice().forEach(c => {
      if (c.duration === 'endNext' && c.sourceId === p.id) {
        if (c.skipEnd > 0) {
          c.skipEnd -= 1;
        } else {
          ctRemoveCondObj(q, c, true);
        }
      }
    });
  });
}

function ctStartOfTurn(p) {
  ctLog('logTurnStart', { name: p.name });
  // Conditions anchored to the start of this inflicter's turn (on anyone)
  ctState.participants.forEach(q => {
    q.conditions.slice().forEach(c => {
      if (c.sourceId !== p.id) return;
      if (c.duration === 'startNext') {
        ctRemoveCondObj(q, c, true);
      } else if (c.duration === 'rounds') {
        c.durRounds -= 1;
        if (c.durRounds <= 0) ctRemoveCondObj(q, c, true);
      }
    });
  });
  // Action accounting for the new active creature
  const slowed = ctFindCond(p, 'slowed');
  const stunned = ctFindCond(p, 'stunned');
  const quickened = ctFindCond(p, 'quickened');
  let actions = 3 + (quickened ? 1 : 0) - (slowed ? slowed.value : 0);
  if (actions < 0) actions = 0;
  if (quickened) ctLog('logQuickened', { name: p.name });
  if (slowed) ctLog('logSlowed', { name: p.name, n: slowed.value, a: actions });
  if (stunned) {
    const lost = Math.min(stunned.value, actions);
    actions -= lost;
    const remaining = stunned.value - lost;
    ctLog('logStunned', { name: p.name, n: stunned.value, a: lost, r: remaining });
    stunned.value = remaining;
    if (stunned.value <= 0) ctRemoveCondObj(p, stunned, true);
  }
  if (actions === 0 && (slowed || stunned)) ctLog('logNoActions', { name: p.name });
  // Dying: recovery check reminder
  const dying = ctFindCond(p, 'dying');
  if (dying) {
    ctLog('logDyingReminder', { name: p.name, n: dying.value, dc: 10 + dying.value });
  }
}

// ---- Rendering ----

function ctCondChip(p, c) {
  const parts = [];
  let label = ctCondName(c.type);
  if (c.value !== null) label += ' ' + c.value;
  if (c.note) label += ' (' + c.note + ')';
  parts.push('<span class="ct-chip-label">' + ctEsc(label) + '</span>');
  const src = c.sourceId !== null ? ctById(c.sourceId) : null;
  const meta = [];
  if (src && src.id !== p.id) meta.push(ctT('by') + ' ' + src.name);
  if (c.duration === 'rounds') meta.push(c.durRounds + ' ' + ctT('roundsShort'));
  else if (c.duration === 'startNext' && src) meta.push(ctT('untilStartNextShort') + ' ' + src.name);
  else if (c.duration === 'endNext' && src) meta.push(ctT('untilEndNextShort') + ' ' + src.name);
  if (meta.length) parts.push('<span class="ct-chip-meta">' + ctEsc(meta.join(', ')) + '</span>');
  if (c.value !== null) {
    parts.push('<button class="ct-chip-btn" title="' + ctEsc(ctT('decrease')) + '" onclick="ctAdjustCondition(' + p.id + ',' + c.id + ',-1)">−</button>');
    parts.push('<button class="ct-chip-btn" title="' + ctEsc(ctT('increase')) + '" onclick="ctAdjustCondition(' + p.id + ',' + c.id + ',1)">+</button>');
  }
  parts.push('<button class="ct-chip-btn ct-chip-x" title="' + ctEsc(ctT('removeCondition')) + '" onclick="ctRemoveCondition(' + p.id + ',' + c.id + ')">×</button>');
  return '<span class="ct-chip">' + parts.join('') + '</span>';
}

function ctPanelHtml(p) {
  const condOptions = Object.keys(ctConditions)
    .map(k => ({ key: k, label: ctCondName(k) }))
    .sort((a, b) => a.label.localeCompare(b.label, ctLang))
    .map(o => '<option value="' + o.key + '"' + (ctUi.cond === o.key ? ' selected' : '') + '>' + ctEsc(o.label) + '</option>')
    .join('');
  const valued = ctUi.cond && ctConditions[ctUi.cond].valued;
  const isPersistent = ctUi.cond === 'persistentDamage';
  const sourceOptions = ctState.participants
    .map(q => '<option value="' + q.id + '"' + (ctUi.source === q.id ? ' selected' : '') + '>' + ctEsc(q.name) + '</option>')
    .join('');
  const durations = ['manual', 'startNext', 'endNext', 'rounds'];
  const durLabels = { manual: 'durManual', startNext: 'durStartNext', endNext: 'durEndNext', rounds: 'durRounds' };
  const durOptions = durations
    .map(d => '<option value="' + d + '"' + (ctUi.duration === d ? ' selected' : '') + '>' + ctEsc(ctT(durLabels[d])) + '</option>')
    .join('');
  return '<div class="ct-panel">' +
    '<label>' + ctEsc(ctT('condition')) + ' ' +
      '<select id="ct-cond-select" onchange="ctPanelChanged()">' +
        '<option value=""' + (ctUi.cond === '' ? ' selected' : '') + '>' + ctEsc(ctT('chooseCondition')) + '</option>' +
        condOptions +
      '</select></label> ' +
    '<label>' + ctEsc(ctT('value')) + ' ' +
      '<input type="number" id="ct-cond-value" min="1" value="' + (ctUi.value || 1) + '"' + (valued ? '' : ' disabled') + ' oninput="ctPanelInput()"></label> ' +
    (isPersistent
      ? '<label><input type="text" id="ct-cond-type" placeholder="' + ctEsc(ctT('damageType')) + '" value="' + ctEsc(ctUi.dmgType) + '" oninput="ctPanelInput()"></label> '
      : '') +
    '<label>' + ctEsc(ctT('duration')) + ' ' +
      '<select id="ct-cond-duration" onchange="ctPanelChanged()">' + durOptions + '</select></label> ' +
    (ctUi.duration === 'rounds'
      ? '<label>' + ctEsc(ctT('rounds')) + ' <input type="number" id="ct-cond-rounds" min="1" value="' + (ctUi.durRounds || 1) + '" oninput="ctPanelInput()"></label> '
      : '') +
    '<label>' + ctEsc(ctT('inflicter')) + ' ' +
      '<select id="ct-cond-source" onchange="ctPanelChanged()">' + sourceOptions + '</select></label> ' +
    '<button class="ct-btn ct-btn-primary" id="ct-cond-add" onclick="ctConfirmAddCondition()"' + (ctPanelValid() ? '' : ' disabled') + '>' + ctEsc(ctT('confirmAdd')) + '</button> ' +
    '<button class="ct-btn" onclick="ctOpenPanel(' + p.id + ')">' + ctEsc(ctT('cancel')) + '</button>' +
    '</div>';
}

function ctParticipantHtml(p, index) {
  const isCurrent = p.id === ctState.currentId;
  const hpStr = p.maxHp > 0 ? p.hp + ' / ' + p.maxHp : String(p.hp);
  const chips = p.conditions.map(c => ctCondChip(p, c)).join(' ');
  const type = p.type || 'other';
  return '<div class="ct-row ct-type-' + type + (isCurrent ? ' ct-current' : '') + '">' +
    '<div class="ct-row-main">' +
      '<span class="ct-init">' + ctEsc(p.init) + '</span>' +
      '<span class="ct-name">' + (isCurrent ? '▶ ' : '') + ctEsc(p.name) +
        ' <span class="ct-type-badge ct-badge-' + type + '">' + ctEsc(ctI18n[ctLang].types[type]) + '</span></span>' +
      '<span class="ct-ac">' + ctEsc(ctT('ac')) + ': <strong>' + (p.ac > 0 ? ctEsc(p.ac) : '—') + '</strong></span>' +
      '<span class="ct-hp">' + ctEsc(ctT('hp')) + ': <strong>' + ctEsc(hpStr) + '</strong></span>' +
      '<span class="ct-dmg">' +
        '<input type="number" id="ct-dmg-' + p.id + '" min="1" placeholder="0">' +
        '<button class="ct-btn" onclick="ctApplyHp(' + p.id + ',-1)">' + ctEsc(ctT('damage')) + '</button>' +
        '<button class="ct-btn" onclick="ctApplyHp(' + p.id + ',1)">' + ctEsc(ctT('heal')) + '</button>' +
      '</span>' +
      '<span class="ct-actions">' +
        '<button class="ct-btn" title="' + ctEsc(ctT('moveUp')) + '" onclick="ctMove(' + p.id + ',-1)">↑</button>' +
        '<button class="ct-btn" title="' + ctEsc(ctT('moveDown')) + '" onclick="ctMove(' + p.id + ',1)">↓</button>' +
        '<button class="ct-btn" onclick="ctOpenPanel(' + p.id + ')">' + ctEsc(ctT('addCondition')) + '</button>' +
        '<button class="ct-btn ct-btn-danger" title="' + ctEsc(ctT('removeParticipant')) + '" onclick="ctRemove(' + p.id + ')">✕</button>' +
      '</span>' +
    '</div>' +
    (chips ? '<div class="ct-conditions">' + chips + '</div>' : '') +
    (ctUi.panelFor === p.id ? ctPanelHtml(p) : '') +
    '</div>';
}

function ctRender() {
  const root = document.getElementById('ct-list');
  const roundEl = document.getElementById('ct-round');
  if (!root) return;
  roundEl.textContent = ctT('round') + ' ' + ctState.round;
  if (ctState.participants.length === 0) {
    root.innerHTML = '<p class="ct-empty">' + ctEsc(ctT('noParticipants')) + '</p>';
  } else {
    root.innerHTML = ctState.participants.map((p, i) => ctParticipantHtml(p, i)).join('');
  }
  const logEl = document.getElementById('ct-log');
  logEl.innerHTML = ctState.log.map(l => '<div>' + ctEsc(l) + '</div>').join('');
  document.getElementById('ct-next').disabled = ctState.participants.length === 0;
}

function ctInjectStyles() {
  if (document.getElementById('ct-styles')) return;
  const css = `
.ct-toolbar { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin: 1rem 0; }
.ct-toolbar .ct-round-label { font-weight: bold; font-size: 1.1em; margin-right: .5rem; }
.ct-add-form { display: flex; flex-wrap: wrap; gap: .5rem; align-items: flex-end; margin: 1rem 0; padding: .75rem; border: 1px solid var(--gray-200, #ddd); border-radius: .5rem; }
.ct-add-form label { display: flex; flex-direction: column; font-size: .85em; gap: .15rem; }
.ct-add-form input { padding: .3rem .4rem; }
#ct-add-name { width: 12rem; }
#ct-add-init, #ct-add-hp, #ct-add-ac, #ct-add-count { width: 5rem; }
.ct-add-form select { padding: .3rem .4rem; }
.ct-type-badge { font-size: .7em; font-weight: normal; border-radius: .75rem; padding: .05rem .5rem; vertical-align: middle; color: #fff; }
.ct-badge-player { background: #2563ab; }
.ct-badge-enemy { background: #b03030; }
.ct-badge-ally { background: #2e7d46; }
.ct-badge-other { background: #777; }
.ct-row.ct-type-player { border-left: 4px solid #2563ab; }
.ct-row.ct-type-enemy { border-left: 4px solid #b03030; }
.ct-row.ct-type-ally { border-left: 4px solid #2e7d46; }
.ct-row.ct-type-other { border-left: 4px solid #777; }
.ct-btn { padding: .3rem .6rem; border: 1px solid var(--gray-200, #ccc); border-radius: .35rem; background: var(--body-background, #fff); cursor: pointer; font-size: .9em; }
.ct-btn:hover:not(:disabled) { border-color: var(--color-link, #05b); }
.ct-btn:disabled { opacity: .45; cursor: not-allowed; }
.ct-btn-primary { background: var(--color-link, #05b); color: #fff; border-color: var(--color-link, #05b); }
.ct-btn-danger { color: #b00; }
.ct-row { border: 1px solid var(--gray-200, #ddd); border-radius: .5rem; padding: .5rem .75rem; margin-bottom: .5rem; }
.ct-row.ct-current { border-color: var(--color-link, #05b); border-width: 2px; background: rgba(0, 85, 187, .05); }
.ct-row-main { display: flex; flex-wrap: wrap; gap: .75rem; align-items: center; }
.ct-init { display: inline-block; min-width: 2rem; text-align: center; font-weight: bold; border: 1px solid var(--gray-200, #ccc); border-radius: .35rem; padding: .1rem .3rem; }
.ct-name { font-weight: bold; min-width: 8rem; }
.ct-dmg input { width: 4.5rem; padding: .25rem .4rem; margin-right: .25rem; }
.ct-dmg .ct-btn, .ct-actions .ct-btn { margin-right: .25rem; }
.ct-actions { margin-left: auto; }
.ct-conditions { margin-top: .5rem; display: flex; flex-wrap: wrap; gap: .35rem; }
.ct-chip { display: inline-flex; align-items: center; gap: .25rem; border: 1px solid var(--gray-200, #ccc); border-radius: 1rem; padding: .1rem .5rem; font-size: .85em; background: rgba(128,128,128,.08); }
.ct-chip-meta { opacity: .65; font-size: .9em; }
.ct-chip-btn { border: none; background: none; cursor: pointer; padding: 0 .15rem; font-size: 1em; line-height: 1; }
.ct-chip-btn:hover { color: var(--color-link, #05b); }
.ct-chip-x:hover { color: #b00; }
.ct-panel { margin-top: .5rem; padding: .5rem; border: 1px dashed var(--gray-200, #bbb); border-radius: .35rem; display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; font-size: .9em; }
.ct-panel input[type=number] { width: 4rem; }
.ct-panel input[type=text] { width: 9rem; }
.ct-empty { opacity: .7; font-style: italic; }
#ct-log { max-height: 14rem; overflow-y: auto; border: 1px solid var(--gray-200, #ddd); border-radius: .5rem; padding: .5rem .75rem; font-size: .85em; }
#ct-log div { padding: .1rem 0; border-bottom: 1px dotted var(--gray-100, #eee); }
`;
  const style = document.createElement('style');
  style.id = 'ct-styles';
  style.textContent = css;
  document.head.appendChild(style);
}

function initCombatTracker(lang) {
  ctLang = lang;
  ctState = ctLoad();
  ctInjectStyles();
  const root = document.getElementById('combat-tracker');
  if (!root) return;
  root.innerHTML =
    '<div class="ct-add-form">' +
      '<label>' + ctEsc(ctT('name')) + '<input type="text" id="ct-add-name"></label>' +
      '<label>' + ctEsc(ctT('initiative')) + '<input type="number" id="ct-add-init"></label>' +
      '<label>' + ctEsc(ctT('ac')) + '<input type="number" id="ct-add-ac" min="0"></label>' +
      '<label>' + ctEsc(ctT('maxHp')) + '<input type="number" id="ct-add-hp" min="0"></label>' +
      '<label>' + ctEsc(ctT('type')) + '<select id="ct-add-type">' +
        ['player', 'enemy', 'ally', 'other']
          .map(t => '<option value="' + t + '">' + ctEsc(ctI18n[ctLang].types[t]) + '</option>')
          .join('') +
      '</select></label>' +
      '<label>' + ctEsc(ctT('count')) + '<input type="number" id="ct-add-count" min="1" max="50" value="1"></label>' +
      '<button class="ct-btn ct-btn-primary" onclick="ctAddParticipant()">' + ctEsc(ctT('addParticipant')) + '</button>' +
    '</div>' +
    '<div class="ct-toolbar">' +
      '<span class="ct-round-label" id="ct-round"></span>' +
      '<button class="ct-btn ct-btn-primary" id="ct-next" onclick="ctNextTurn()">' + ctEsc(ctT('nextTurn')) + '</button>' +
      '<button class="ct-btn" onclick="ctSortByInitiative()">' + ctEsc(ctT('sortByInitiative')) + '</button>' +
      '<button class="ct-btn ct-btn-danger" onclick="ctReset()">' + ctEsc(ctT('resetCombat')) + '</button>' +
    '</div>' +
    '<div id="ct-list"></div>' +
    '<h3>' + ctEsc(ctT('log')) + '</h3>' +
    '<div id="ct-log"></div>';
  document.getElementById('ct-add-name').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') ctAddParticipant();
  });
  ctRender();
}
