import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import {
  MainRow,
  FilterWrapper,
  TableWrapper,
  FooterWrapper
} from './Solicitudes.styled';
import CreateRequestModal from '../CreateRequestModal';
import { requestsActions } from '../../redux/actions';

const Portal = ({ children }) =>
  createPortal(children, document.getElementById('root'));

const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
];

class Reservas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.seeReservationDetails = this.seeReservationDetails.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    const { getManagerRequests } = this.props;
    getManagerRequests();
  }

  toggleModal() {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalVersion: 'create'
    }));
  }

  seeReservationDetails(id) {
    this.setState(() => ({ modalVersion: 'see' }));
    const { fetchReservation } = this.props;
    fetchReservation(id);
  }

  renderButtons(requestId) {
    return [
      <button key={`accept-${requestId}`} className="btn btn-success">
        Aceptar
      </button>,
      <button key={`reject-${requestId}`} className="btn btn-danger">
        Rechazar
      </button>
    ];
  }

  render() {
    const { showModal } = this.state;
    const { requests } = this.props;
    return (
      <Fragment>
        <MainRow className="row">
          <TableWrapper className="col">
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">Laboratorio</th>
                  <th scope="col">Materia</th>
                  <th scope="col">Dia</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Estado</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {requests.map(item => (
                  <tr key={`solicitud-${item.id}`}>
                    <td>{item.laboratory_id.name}</td>
                    <td>
                      <p>{item.subjectSemester_id.subject.name}</p>
                      <p>{`${item.subjectSemester_id.teacher.first_name} ${
                        item.subjectSemester_id.teacher.last_name
                      }`}</p>
                    </td>
                    <td>
                      <p>{dias[item.dia]}</p>
                      <p>{`De: ${item.start_date}`}</p>
                      <p>{`Al: ${item.end_date}`}</p>
                    </td>
                    <td>
                      <p>{`De: ${item.start_time}`}</p>
                      <p>{`A: ${item.end_time}`}</p>
                    </td>
                    <td>{item.status.status}</td>
                    <td>
                      {item.status.status === 'Pendiente'
                        ? this.renderButtons(item.id)
                        : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </MainRow>
        <Portal>
          <CreateRequestModal
            show={showModal}
            closeFunction={this.toggleModal}
          />
        </Portal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { requests } = state;
  return { requests };
};

const mapDispatchToProps = dispatch => {
  const { getManagerRequests } = requestsActions;
  return bindActionCreators({ getManagerRequests }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservas);
