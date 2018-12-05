import actions from '../actions/reservations';

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setReservations.type:
      return payload;
    case actions.addReservations.type:
      return [...state, ...payload];
    default:
      return state;
  }
}
