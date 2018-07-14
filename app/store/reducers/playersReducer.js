import { fromJS } from 'immutable';

const defaultSupplyObject = {
  // stock
  wood: 0,
  clay: 0,
  stone: 0,
  // material
  glass: 0,
  papyrus: 0,
  // science
  sym_garnek: 0,
  sym_kolo: 0,
  sym_pioro: 0,
  sym_trojkat: 0,
  sym_glob: 0,
  sym_zegar: 0,
  // cultural
  cultural: 0,
  // military
  military: 0,
  // merchant discounts
  wood_discount: 0,
  clay_discount: 0,
  stone_discount: 0,
  glass_discount: 0,
  papyrus_discount: 0,
  // merchant partial materials
  partial_wood: 0,
  partial_clay: 0,
  partial_stone: 0,
  partial_glass: 0,
  partial_papyrus: 0,
  // merchant gold from
  gold_from_stock: 0,
  gold_from_material: 0,
  gold_from_merchant: 0,
  gold_from_military: 0,
  gold_from_wonder: 0
};

const initialState = fromJS({
  1: {
    name: 'player_one',
    gold: 7,
    supply: defaultSupplyObject,
    cards: []
  },
  2: {
    name: 'player_two',
    gold: 7,
    supply: defaultSupplyObject,
    cards: []
  }
});

export default function (state = initialState, action) {
  const { payload, type } = action;
  // TODO: avoid using toString method
  const player = payload && payload.player ? payload.player.toString() : null;
  switch (type) {
    case 'UPDATE_GOLD':
      return state.updateIn([player, 'gold'], gold => gold + payload.amount);
    default:
      return state
  }
}
