import actions from '../actions/semester';

const initialState = {
  startDate: '',
  endDate: ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setSemester.type:
      return { startDate: payload.startDate, endDate: payload.endDate };
    default:
      return state;
  }
}
