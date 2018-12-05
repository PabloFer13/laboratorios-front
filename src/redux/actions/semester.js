import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/semester';

const types = ['GET_SEMESTER', 'SET_SEMESTER'];

export const { getSemester, setSemester } = createActions(prefix, types);

export default { getSemester, setSemester };
