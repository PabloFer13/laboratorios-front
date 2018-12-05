import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { semesterActions, formActions } from '../../redux/actions';

class CreateRequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profesor: 0,
      materia: 0,
      laboratorio: 0,
      tipo: 0,
      dia: '',
      horaInicio: '',
      horaFinal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'tipo' && value !== '3') {
      const { getSemester } = this.props;
      getSemester();
    }
  }

  render() {
    const {
      show,
      closeFunction,
      profesores,
      laboratorios,
      materias,
      fechaInicio,
      fechaFinal,
      tipoUsuario
    } = this.props;
    const {
      profesor,
      materia,
      laboratorio,
      tipo,
      dia,
      horaInicio,
      horaFinal
    } = this.state;
    return (
      <div className="modal" style={{ display: show ? 'block' : 'none' }}>
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
                      <label>Materia</label>
                      <select
                        className="form-control"
                        value={materia}
                        name="materia"
                        onChange={this.handleInput}
                      >
                        {materias.map(item => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Profesor</label>
                      <select
                        className="form-control"
                        value={profesor}
                        name="profesor"
                        onChange={this.handleInput}
                      >
                        {profesores.map(item => (
                          <option key={item.id} value={item.id}>
                            {`${item.first_name} ${item.last_name}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label>Laboratorio</label>
                      <select
                        className="form-control"
                        value={laboratorio}
                        name="laboratorio"
                        onChange={this.handleInput}
                      >
                        {laboratorios.map(item => (
                          <option key={item.id} value={item.id}>
                            {`${item.short_name} - ${item.name}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Tipo de Reserva</label>
                          <select
                            className="form-control"
                            value={tipo}
                            name="tipo"
                            onChange={this.handleInput}
                          >
                            <option value="0">Seleccione...</option>
                            {tipoUsuario <= 3 && (
                              <option value="1">SIGMAA</option>
                            )}
                            <option value="2">Semestral</option>
                            <option value="3">Temporal</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Dia de la Semana</label>
                          <select
                            className="form-control"
                            value={dia}
                            name="dia"
                            onChange={this.handleInput}
                          >
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sabado">Sabado</option>
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
                        <input
                          type="date"
                          className="form-control"
                          value={fechaInicio}
                          name="fechaInicio"
                          disabled={tipo !== '3'}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="col-6">
                        <label>Hora de Inicio</label>
                        <select
                          className="form-control"
                          value={horaInicio}
                          name="horaInicio"
                          onChange={this.handleInput}
                        >
                          <option value="7:00">7:00</option>
                          <option value="8:00">8:00</option>
                          <option value="9:00">9:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-6">
                        <label>Fecha Final</label>
                        <input
                          type="date"
                          className="form-control"
                          value={fechaFinal}
                          name="fechaFinal"
                          disabled={tipo !== '3'}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="col-6">
                        <label>Hora Final</label>
                        <select
                          className="form-control"
                          value={horaFinal}
                          name="horaFinal"
                          onChange={this.handleInput}
                        >
                          <option value="7:00">7:00</option>
                          <option value="8:00">8:00</option>
                          <option value="9:00">9:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeFunction}
                >
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

const mapStateToProps = state => {
  const { maestros: profesores, materias, labs: laboratorios } = state.lists;
  const { fechaInicio, fechaFinal } = state.form;
  const {
    userType: { id: tipoUsuario }
  } = state.user;
  return {
    profesores,
    materias,
    laboratorios,
    fechaInicio,
    fechaFinal,
    tipoUsuario
  };
};

const mapDispatchToProps = dispatch => {
  const { getSemester } = semesterActions;
  const { changeFechaFinal, changeFechaInicio } = formActions;
  return bindActionCreators(
    { getSemester, changeFechaFinal, changeFechaInicio },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRequestModal);
