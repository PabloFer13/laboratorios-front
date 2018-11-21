import React, { Component } from 'react';

class ModalReserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: 0
    };
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reserva</h5>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label>Profesor</label>
                      <select className="form-control">
                        <option value="">Seleccione...</option>
                        <option value="">David Flores Granados</option>
                        <option value="">Fernando Gomez</option>
                        <option value="">Yarely Baez</option>
                        <option value="">Jose Enrique Alvarez Estrada</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Materia</label>
                      <select className="form-control">
                        <option value="">Metodos Numericos</option>
                        <option value="">Inteligencia Artificial</option>
                        <option value="">
                          Algoritmos y Estructura de Datos
                        </option>
                        <option value="">Tecnicas Algoritmicas</option>
                        <option value="">Sistemas Operativos POSIX</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label>Laboratorio</label>
                      <select className="form-control">
                        <option>Telematica</option>
                        <option>Multimedia</option>
                        <option>Tecnologias de la informacion</option>
                        <option>Electronica</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Tipo de Reserva</label>
                          <select className="form-control">
                            <option value="">SIGMAA</option>
                            <option value="">Semestral</option>
                            <option value="">Temporal</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Dia de la Semana</label>
                          <select className="form-control">
                            <option value="">Lunes</option>
                            <option value="">Martes</option>
                            <option value="">Miercoles</option>
                            <option value="">Jueves</option>
                            <option value="">Viernes</option>
                            <option value="">Sabado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="row">
                      <div className="col-6">
                        <label>Fecha de Inicio</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-6">
                        <label>Hora de Inicio</label>
                        <select className="form-control">
                          <option>7:00</option>
                          <option>8:00</option>
                          <option>9:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
                          <option>15:00</option>
                          <option>16:00</option>
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-6">
                        <label>Fecha Final</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-6">
                        <label>Hora Final</label>
                        <select className="form-control">
                          <option>7:00</option>
                          <option>8:00</option>
                          <option>9:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
                          <option>15:00</option>
                          <option>16:00</option>
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Solicitar
                </button>
                <button type="button" className="btn btn-secondary">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalReserva;
