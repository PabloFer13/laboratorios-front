import { requestsActions } from '../actions';

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case requestsActions.setRequests.type:
      return payload;
    default:
      return state;
  }
}
