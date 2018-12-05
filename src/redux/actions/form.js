import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/form';

const types = [
  'CHANGE_FECHA_INICIO',
  'CHANGE_FECHA_FINAL',
  'SET_FECHA_INICIO',
  'SET_FECHA_FINAL'
];

export const {
  changeFechaInicio,
  changeFechaFinal,
  setFechaInicio,
  setFechaFinal
} = createActions(prefix, types);

export default {
  changeFechaInicio,
  changeFechaFinal,
  setFechaInicio,
  setFechaFinal
};
