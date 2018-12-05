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
  'GET_MAESTROS',
  'SET_USERS',
  'SET_LABS',
  'SET_MATERIAS',
  'SET_CATEGORIAS',
  'SET_NOTIFICACIONES',
  'SET_RESERVAS',
  'SET_SOLICITUDES',
  'SET_HORARIOS',
  'SET_MAESTROS'
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
  getMaestros,
  setUsers,
  setLabs,
  setMaterias,
  setCategorias,
  setNotificaciones,
  setReservas,
  setSolicitudes,
  setHorarios,
  setMaestros
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
  getMaestros,
  setUsers,
  setLabs,
  setMaterias,
  setCategorias,
  setNotificaciones,
  setReservas,
  setSolicitudes,
  setHorarios,
  setMaestros
};
