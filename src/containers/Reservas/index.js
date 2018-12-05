import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import {
  MainRow,
  FilterWrapper,
  TableWrapper,
  FooterWrapper
} from './Reservas.styled';
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
  }

  componentDidMount() {
    const { getUserRequests } = this.props;
    getUserRequests();
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
                  <th scope="col">Dia</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Estado</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={this.toggleModal}
                    >
                      Crear Reserva
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map(item => (
                  <tr key={`solicitud-${item.id}`}>
                    <td>{item.laboratory_id.name}</td>
                    <td>{dias[item.dia]}</td>
                    <td>{`${item.start_date} - ${item.end_date}`}</td>
                    <td>{`${item.start_time} - ${item.end_time}`}</td>
                    <td>{item.status.status}</td>
                    <td>Ver Mas...</td>
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
  const { getUserRequests } = requestsActions;
  return bindActionCreators({ getUserRequests }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservas);
