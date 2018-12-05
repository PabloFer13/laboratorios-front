import actions from '../actions/reservation';

const initialState = {
  profesor: {},
  materia: {},
  laboratorio: {},
  tipo: {},
  dia: '',
  fechaInicio: '',
  horaInicio: '',
  fechaFinal: '',
  horaFinal: ''
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setReservation.type:
      return { ...state, ...payload };
    default:
      return state;
  }
}
