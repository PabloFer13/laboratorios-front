import { setFechaInicio, setFechaFinal } from '../actions/form';

const initialState = {
  fechaInicio: '',
  fechaFinal: ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case setFechaInicio.type:
      return { ...state, fechaInicio: payload };
    case setFechaFinal.type:
      return { ...state, fechaFinal: payload };
    default:
      return state;
  }
}
