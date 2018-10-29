import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/lists';

const types = [
  'GET_USERS',
  'GET_LABS',
  'GET_MATERIAS',
  'GET_CATEGORIAS',
  'GET_NOTIFICACIONES',
  'GET_RESERVAS',
  'GET_SOLICITUDES',
  'GET_HORARIOS',
  'SET_USERS',
  'SET_LABS',
  'SET_MATERIAS',
  'SET_CATEGORIAS',
  'SET_NOTIFICACIONES',
  'SET_RESERVAS',
  'SET_SOLICITUDES',
  'SET_HORARIOS'
];

export const {
  getUsers,
  getLabs,
  getMaterias,
  getCategorias,
  getNotificaciones,
  getReservas,
  getSolicitudes,
  getHorarios,
  setUsers,
  setLabs,
  setMaterias,
  setCategorias,
  setNotificaciones,
  setReservas,
  setSolicitudes,
  setHorarios
} = createActions(prefix, types);

export default {
  getUsers,
  getLabs,
  getMaterias,
  getCategorias,
  getNotificaciones,
  getReservas,
  getSolicitudes,
  getHorarios,
  setUsers,
  setLabs,
  setMaterias,
  setCategorias,
  setNotificaciones,
  setReservas,
  setSolicitudes,
  setHorarios
};
