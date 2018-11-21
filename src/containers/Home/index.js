import React, { Component } from 'react';
import moment from 'moment';
import { MainRow, FilterWrapper, TableWrapper } from './Home.styled';

const getDateOptions = () => {
  const firstDate = moment().startOf('isoWeek');
  const lastDay = moment()
    .add(1, 'year')
    .startOf('year');
  const it = firstDate;
  const options = [];
  while (it.isBefore(lastDay)) {
    const fechaInicio = moment(it);
    it.add('5', 'days');
    const fechaFinal = moment(it);
    options.push({ fechaInicio, fechaFinal });
    it.add('2', 'days');
  }

  return options;
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOptions: getDateOptions()
    };
  }

  render() {
    const { dayOptions } = this.state;
    return (
      <div>
        <MainRow className="row">
          <FilterWrapper className="col">
            <div className="row">
              <div className="col">
                <form className="form-inline">
                  <select className="form-control mb-2 mr-sm-2">
                    <option selected>Laboratorio...</option>
                    <option>Telematica</option>
                    <option>Multimedia</option>
                    <option>Tecnogolias de la Informacion</option>
                    <option>Mecanica</option>
                    <option>Manufactura</option>
                    <option>Electronica</option>
                    <option>Medicion</option>
                    <option>Logistica</option>
                  </select>
                  <select className="form-control mb-2 mr-sm-2">
                    <option value="">Seleccione Semana a Buscar</option>
                    {dayOptions.map((item, index) => (
                      <option
                        key={item.fechaInicio.format('DD / MMMM / YYYY')}
                        value={index}
                      >
                        {`Del ${item.fechaInicio.format(
                          'DD / MMMM / YYYY'
                        )} al ${item.fechaFinal.format('DD / MMMM / YYYY')}`}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-sm-2"
                  >
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </FilterWrapper>
        </MainRow>
        <MainRow className="row">
          <TableWrapper className="col">
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">Hora</th>
                  <th scope="col">Lunes</th>
                  <th scope="col">Martes</th>
                  <th scope="col">Miercoles</th>
                  <th scope="col">Jueves</th>
                  <th scope="col">Sabado</th>
                  <th scope="col">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7:00 - 8:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>8:00 - 9:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>9:00 - 10:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>11:00 - 12:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>12:00 - 13:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>13:00 - 14:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>14:00 - 15:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>15:00 - 16:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>16:00 - 17:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>17:00 - 18:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>18:00 - 19:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>19:00 - 20:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>20:00 - 21:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
                <tr>
                  <td>21:00 - 22:00</td>
                  <td>Lunes</td>
                  <td>Martes</td>
                  <td>Miercoles</td>
                  <td>Jueves</td>
                  <td>Sabado</td>
                  <td>Domingo</td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </MainRow>
      </div>
    );
  }
}

export default Home;
