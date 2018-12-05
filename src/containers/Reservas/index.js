import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import {
  MainRow,
  FilterWrapper,
  TableWrapper,
  FooterWrapper
} from './Reservas.styled';
import CreateRequestModal from '../CreateRequestModal';

const Portal = ({ children }) =>
  createPortal(children, document.getElementById('root'));

class Reservas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.seeReservationDetails = this.seeReservationDetails.bind(this);
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
                <tr>
                  <td>Telematica</td>
                  <td>Lunes</td>
                  <td>15/Agosto/2018 - 01/Diciembre/2018</td>
                  <td>13:00 - 14:00</td>
                  <td>Aceptada</td>
                  <td>Ver Mas</td>
                </tr>
                <tr>
                  <td>Telematica</td>
                  <td>Miercoles</td>
                  <td>15/Agosto/2018 - 01/Diciembre/2018</td>
                  <td>13:00 - 15:00</td>
                  <td>Rechazada</td>
                  <td>Ver Mas</td>
                </tr>
                <tr>
                  <td>Multimedia</td>
                  <td>Martes</td>
                  <td>15/Agosto/2018 - 01/Diciembre/2018</td>
                  <td>20:00 - 22:00</td>
                  <td>Aceptada</td>
                  <td>Ver Mas</td>
                </tr>
                <tr>
                  <td>Multimedia</td>
                  <td>Viernes</td>
                  <td>15/Agosto/2018 - 01/Diciembre/2018</td>
                  <td>10:00 - 12:00</td>
                  <td>Pendiente</td>
                  <td>Ver Mas</td>
                </tr>
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

export default Reservas;
